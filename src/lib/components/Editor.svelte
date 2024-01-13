<script lang="ts">
	import '$lib/assets/css/editor.css'
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

	let element: HTMLDivElement
	let contextMenu: HTMLElement
	let editor: Editor
	let showLoader = true
	let debounceTimer: NodeJS.Timeout

	onMount(async () => {
		initializeEditor(element)
	})

	const CustomDocument = Document.extend({
		content: 'heading block*',
	})

	const initializeEditor = (element: HTMLDivElement) => {
		editor = new Editor({
			element: element,
			extensions: [
				CustomDocument,
				StarterKit.configure({
					document: false,
				}),
				Placeholder.configure({
					placeholder: ({ node }) => {
						if (node.type.name === 'heading') {
							return 'What is the title?'
						}
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
				editor.commands.setContent(content as Json[])

				$editorOutput = editor.getJSON().content!
				$editorOutput = $editorOutput

				showLoader = false
			},

			onTransaction: () => {
				editor = editor
			},

			onUpdate: () => {
				$editorOutput = editor.getJSON().content!

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
		const title = editor.getJSON().content![0].content![0].text ?? ''

		return title
	}

	onDestroy(() => {
		if (editor) editor.destroy()
	})
</script>

{#if editor}
	<EditorMenu {editor} />
{/if}

<!-- ** CONTEXT MENU ** -->
<div
	class="context-menu flex gap-1 p-1 bg-white border rounded shadow-md shadow-slate-400"
	bind:this={contextMenu}
>
	{#if editor}
		<ContextMenu {editor} />
	{/if}
</div>

{#if showLoader}
	<Loader class="fixed left-1/2 top-1/2 animate-spin" />
{/if}

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	id="editor"
	class="p-2 min-h-screen mb-8 max-w-3xl mx-auto prose prose-sm prose-h1:font-medium prose-h2:font-medium prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-p:text-lg"
	class:hidden={showLoader}
	bind:this={element}
	on:click={() => {
		editor?.commands.focus()
	}}
/>

<style lang="postcss">
	:global(.tiptap .is-empty::before) {
		@apply float-left pointer-events-none h-0 text-slate-400;
		content: attr(data-placeholder);
	}

	:global(.context-menu svg) {
		@apply h-4 w-4;
	}
</style>
