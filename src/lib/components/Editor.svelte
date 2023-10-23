<script lang="ts">
	import { page } from '$app/stores'
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
	import '$lib/assets/css/editor.css'

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
	class="editor p-2 min-h-screen mb-8 max-w-2xl mx-auto prose prose-sm prose-h1:font-medium prose-h2:font-medium"
	bind:this={element}
	on:click={() => {
		editor?.commands.focus()
	}}
/>

<style lang="postcss">
	:global(.tiptap p.is-empty::before) {
		@apply text-slate-400 h-0 float-left pointer-events-none;
		content: attr(data-placeholder);
	}
</style>
