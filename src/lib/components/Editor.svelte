<script lang="ts">
	import { page } from '$app/stores'
	import {
		getPresentationContent,
		updatePresentation,
	} from '$lib/db/presentation'
	import {
		currentPresentationId,
		currentPresentationTitle,
		editorOutput,
	} from '$lib/stores/editor'
	import { Editor } from '@tiptap/core'
	import { Image } from '@tiptap/extension-image'
	import { Placeholder } from '@tiptap/extension-placeholder'
	import { StarterKit } from '@tiptap/starter-kit'
	import dayjs from 'dayjs'
	import { onDestroy, onMount } from 'svelte'
	import EditorMenu from './EditorMenu.svelte'

	let element: HTMLDivElement
	let editor: Editor
	let presentationId: string
	let presentationContent: string

	onMount(async () => {
		initializeEditor(element)
	})

	const initializeEditor = (element: HTMLDivElement) => {
		editor = new Editor({
			element: element,
			extensions: [
				StarterKit,
				Image,
				Placeholder.configure({
					emptyEditorClass: 'is-editor-empty',
					placeholder: 'Start typing...',
				}),
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

				localStorage.setItem(
					'editorContent',
					JSON.stringify(editor.getJSON().content),
				)

				$editorOutput = editor.getJSON().content!

				let title = getTitle()
				let currentTime = getCurrentTime()
				updatePresentation(presentationId!, currentTime, title, $editorOutput)
			},
		})
	}

	const getPresentationId = () => {
		const presentationId = $page.url.searchParams.get('presentation_id') ?? ''
		return presentationId
	}

	const getTitle = () => {
		const title = editor.getJSON().content![0].content![0].text ?? ''
		return title
	}

	const getCurrentTime = () => {
		return dayjs().format()
	}

	onDestroy(() => {
		if (editor) {
			editor.destroy()
		}
	})
</script>

{#if editor}
	<EditorMenu {editor} />
{/if}

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="editor p-8 rounded-lg w-full min-h-screen mb-8"
	bind:this={element}
	on:click={() => editor?.commands.focus()}
/>

<style lang="postcss">
	.editor {
		background-color: var(--pico-card-sectioning-background-color);
	}

	/* Placeholder (at the top) */
	:global(.tiptap .is-editor-empty:first-child::before) {
		color: #adb5bd;
		content: attr(data-placeholder);
		float: left;
		height: 0;
		pointer-events: none;
	}
</style>
