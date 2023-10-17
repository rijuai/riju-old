<script lang="ts">
	import { page } from '$app/stores'
	import {
		getPresentationContent,
		updatePresentation,
	} from '$lib/db/presentation'
	import { Image } from '@tiptap/extension-image'
	import {
		currentPresentationId,
		currentPresentationTitle,
		editorOutput,
	} from '$lib/stores/editor'
	import { getCurrentTime } from '$lib/utils/time'
	import { Editor } from '@tiptap/core'
	import { Placeholder } from '@tiptap/extension-placeholder'
	import { StarterKit } from '@tiptap/starter-kit'
	import { onDestroy, onMount } from 'svelte'
	import EditorMenu from './EditorMenu.svelte'

	let element: HTMLDivElement,
		editor: Editor,
		presentationId: string,
		presentationContent: string

	onMount(async () => {
		initializeEditor(element)
	})

	const initializeEditor = (element: HTMLDivElement) => {
		editor = new Editor({
			element: element,
			extensions: [
				StarterKit,
				Placeholder.configure({
					emptyEditorClass: 'is-editor-empty',
					placeholder: 'Start typing...',
				}),
				Image,
			],

			onCreate: async () => {
				presentationId = getPresentationId()
				presentationContent = await getPresentationContent(presentationId!)
				editor.commands.setContent(presentationContent)
				$editorOutput = editor.getJSON().content!

				$currentPresentationId = presentationId!
				$currentPresentationTitle = getTitle()
			},

			onUpdate: () => {
				editor = editor
				$editorOutput = editor.getJSON().content!

				let title = getTitle()
				let currentTime = getCurrentTime()
				updatePresentation(presentationId!, currentTime, title, $editorOutput)
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

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="editor p-8 rounded-md w-full min-h-screen mb-8 bg-zinc-100"
	bind:this={element}
	on:click={() => editor?.commands.focus()}
/>

<style lang="postcss">
	/* Placeholder (at the top) */
	:global(.tiptap .is-editor-empty:first-child::before) {
		color: #adb5bd;
		content: attr(data-placeholder);
		float: left;
		height: 0;
		pointer-events: none;
	}
</style>
