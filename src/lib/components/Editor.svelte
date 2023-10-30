<script lang="ts">
	import { page } from '$app/stores'
	import '$lib/assets/css/editor.css'
	import {
		getPresentationContent,
		updatePresentation,
	} from '$lib/db/presentation'
	import {
		currentPresentationId,
		currentPresentationTitle,
		editorOutput,
	} from '$lib/stores/editor'
	import { getCurrentTime } from '$lib/utils/time'
	import { Editor } from '@tiptap/core'
	import BubbleMenu from '@tiptap/extension-bubble-menu'
	import { Document } from '@tiptap/extension-document'
	import { Image } from '@tiptap/extension-image'
	import { Placeholder } from '@tiptap/extension-placeholder'

	import Underline from '@tiptap/extension-underline'
	import { StarterKit } from '@tiptap/starter-kit'
	import { Loader } from 'lucide-svelte'
	import { onDestroy, onMount } from 'svelte'
	import EditorMenu from './EditorMenu.svelte'

	let element: HTMLDivElement,
		bubbleMenu: HTMLElement,
		editor: Editor,
		presentationId: string,
		presentationContent: string,
		showLoader = true

	onMount(async () => {
		presentationId = getPresentationId()
		presentationContent = await getPresentationContent(presentationId!)
		if (presentationContent) {
			showLoader = false
			initializeEditor(element)
			editor.commands.setContent(presentationContent)
		}
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
				BubbleMenu.configure({
					element: bubbleMenu,
				}),
			],

			onCreate: async () => {
				$editorOutput = editor.getJSON().content!

				$currentPresentationId = presentationId!
				$currentPresentationTitle = getTitle()
			},

			onUpdate: () => {
				editor = editor
				$editorOutput = editor.getJSON().content!

				let title = getTitle()
				$currentPresentationTitle = title
				let currentTime = getCurrentTime()
				updatePresentation(presentationId!, currentTime, title, $editorOutput)
				console.log($editorOutput)
			},
		})
	}

	const getPresentationId = () => {
		const presentationId = $page.url.searchParams.get('id') ?? ''
		return presentationId
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

{#if showLoader}
	<Loader class="mx-auto mt-4 animate-spin" />
{/if}

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="editor p-2 min-h-screen mb-8 max-w-2xl mx-auto prose prose-sm prose-h1:font-medium prose-h2:font-medium {showLoader
		? 'none'
		: 'block'}"
	bind:this={element}
	on:click={() => {
		editor?.commands.focus()
	}}
/>

<style lang="postcss">
	:global(.tiptap .is-empty::before) {
		@apply float-left pointer-events-none h-0 text-gray-400;
		content: attr(data-placeholder);
	}
</style>
