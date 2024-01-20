<script lang="ts">
	import ContextMenu from '$lib/components/ContextMenu.svelte'
	import EditorMenu from '$lib/components/EditorMenu.svelte'
	import { updatePresentation } from '$lib/db/presentation'
	import { SubSection } from '$lib/engines/subSection'
	import { editorOutput } from '$lib/stores/presentation'
	import { getCurrentTime } from '$lib/utils/time'
	import { Editor } from '@tiptap/core'
	import { BubbleMenu } from '@tiptap/extension-bubble-menu'
	import { Document } from '@tiptap/extension-document'
	import { Gapcursor } from '@tiptap/extension-gapcursor'
	import { Image } from '@tiptap/extension-image'
	import { Placeholder } from '@tiptap/extension-placeholder'
	import { Underline } from '@tiptap/extension-underline'
	import { StarterKit } from '@tiptap/starter-kit'
	import { Loader } from 'lucide-svelte'
	import { onDestroy, onMount } from 'svelte'
	import type { Json } from '../../schema'

	export let presentationId: string
	export let content: Json

	let contentElement: HTMLDivElement
	let contextMenu: HTMLElement
	let contentEditor: Editor
	let showLoader = true
	let debounceTimer: NodeJS.Timeout

	onMount(async () => {
		initializeEditor(contentElement)
	})

	const CustomDocument = Document.extend({
		content: 'heading block*',
	})

	const initializeEditor = (element: HTMLDivElement) => {
		contentEditor = new Editor({
			element: element,
			extensions: [
				CustomDocument,
				StarterKit.configure({
					document: false,
				}),
				Placeholder.configure({
					placeholder: ({ node }) => {
						if (node.type.name === 'heading') return 'What is the title?'
						return 'Write your content here...'
					},
				}),
				Image,
				Underline,
				SubSection.configure({
					HTMLAttributes: {
						class: 'border-b border-dashed w-1/4',
					},
				}),
				Gapcursor,
				BubbleMenu.configure({
					element: contextMenu,
					tippyOptions: {
						offset: [0, 16],
					},
				}),
			],

			onCreate: async () => {
				contentEditor.commands.setContent(content as Json[])

				$editorOutput = contentEditor.getJSON().content!
				$editorOutput = $editorOutput

				showLoader = false
			},

			onTransaction: () => {
				contentEditor = contentEditor
			},

			onUpdate: () => {
				$editorOutput = contentEditor.getJSON().content!

				let title = getTitle()
				let currentTime = getCurrentTime()

				// debounce the update - saves the presentation after user stops typing for 1 second
				clearTimeout(debounceTimer)
				debounceTimer = setTimeout(() => {
					console.log(`Saving presentation...`)
					updatePresentation(presentationId, currentTime, title, $editorOutput)
				}, 1000)
			},
		})
	}

	const getTitle = () => {
		const title = contentEditor.getJSON().content![0].content![0].text ?? ''

		return title
	}

	onDestroy(() => {
		if (contentEditor) contentEditor.destroy()
	})
</script>

<!-- ** CONTEXT MENU ** -->
<div
	class="context-menu flex gap-1 bg-white border border-slate-300 rounded-md shadow-lg shadow-slate-200"
	bind:this={contextMenu}
>
	{#if contentEditor}
		<ContextMenu editor={contentEditor} />
	{/if}
</div>

{#if showLoader}
	<Loader class="fixed left-1/2 top-1/2 animate-spin" />
{/if}

<div class="max-w-4xl mx-auto border rounded-lg shadow relative mb-8">
	<EditorMenu editor={contentEditor} />
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		id="editor"
		class="Prosemirror p-12 min-h-screen min-w-full prose prose-sm prose-h1:font-medium prose-h2:font-medium prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-p:text-lg"
		class:hidden={showLoader}
		bind:this={contentElement}
		on:click={() => {
			contentEditor?.commands.focus()
		}}
	></div>
</div>

<style lang="postcss">
	:global(.tiptap .is-empty::before) {
		@apply float-left pointer-events-none h-0 text-slate-400;
		content: attr(data-placeholder);
	}

	:global(.context-menu svg) {
		@apply h-4 w-4;
	}

	:global(#editor img) {
		@apply max-h-96 mx-auto rounded;
	}
</style>
