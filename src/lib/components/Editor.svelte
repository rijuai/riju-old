<script lang="ts">
	import { page } from '$app/stores'
	import {
		getPresentationContent,
		updatePresentation,
	} from '$lib/db/presentation'
	import { editorOutput } from '$lib/stores/editor'
	import { Editor } from '@tiptap/core'
	import { Image } from '@tiptap/extension-image'
	import { Placeholder } from '@tiptap/extension-placeholder'
	import { StarterKit } from '@tiptap/starter-kit'
	import { onDestroy, onMount } from 'svelte'
	import EditorMenu from './EditorMenu.svelte'

	let element: HTMLDivElement
	let editor: Editor
	let presentationId: string
	let presentationContent: string

	onMount(async () => {
		initializeEditor(element)

		// if (localStorage.getItem('editorContent')) {
		// 	editor.commands.setContent(
		// 		JSON.parse(localStorage.getItem('editorContent') || ''),
		// 	)
		// }

		// Initialize the FileReader once the component is mounted
		// if (fileInput) {
		// 	fileInput.addEventListener('change', handleFileInput)
		// }
	})

	// let imageUrl: string, fileInput: HTMLInputElement

	// function handleFileInput(event: Event) {
	// 	const target = event.target as HTMLInputElement
	// 	if (!target.files || target.files.length === 0) return

	// 	const file = target.files[0]
	// 	const reader = new FileReader()

	// 	reader.onloadend = () => {
	// 		imageUrl = reader.result as string
	// 		const transaction = editor
	// 			.chain()
	// 			.focus()
	// 			.setImage({ src: imageUrl })
	// 			.run()
	// 		fileInput.value = ''
	// 	}

	// 	reader.readAsDataURL(file)
	// }

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
			},

			onUpdate: () => {
				editor = editor

				localStorage.setItem(
					'editorContent',
					JSON.stringify(editor.getJSON().content),
				)

				console.log('editor', editor.getJSON().content)

				$editorOutput = editor.getJSON().content!
				let title = getTitle()

				updatePresentation(presentationId!, title, $editorOutput)
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

	onDestroy(() => {
		if (editor) {
			editor.destroy()
		}

		$editorOutput = {}
		localStorage.setItem('editorContent', '')
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
