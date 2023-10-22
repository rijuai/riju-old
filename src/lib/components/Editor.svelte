<script lang="ts">
	import { page } from '$app/stores'
	import '$lib/assets/editor.css'
	import {
		getPresentationContent,
		updatePresentation,
	} from '$lib/db/presentation'
	import { Image } from '@tiptap/extension-image'
	import { HorizontalRule } from '@tiptap/extension-horizontal-rule'
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
				HorizontalRule,
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

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="editor p-6 rounded-md min-h-screen mb-8 max-w-4xl mx-auto prose"
	bind:this={element}
	on:click={() => {
		editor?.commands.focus()
	}}
/>

<style lang="postcss">
	:global(.tiptap p.is-empty::before) {
		color: #adb5bd;
		content: attr(data-placeholder);
		float: left;
		height: 0;
		pointer-events: none;
	}
</style>
