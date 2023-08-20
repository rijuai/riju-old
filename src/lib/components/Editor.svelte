<script lang="ts">
	import { outputJsonStore } from '$lib/stores/outputJson';
	import { Editor } from '@tiptap/core';
	import { HardBreak } from '@tiptap/extension-hard-break';
	import { Image } from '@tiptap/extension-image';
	import { StarterKit } from '@tiptap/starter-kit';
	import { onDestroy, onMount } from 'svelte';

	let element: HTMLDivElement;
	let editor: Editor;

	onMount(() => {
		editor = new Editor({
			element: element,
			extensions: [
				StarterKit.configure({
					hardBreak: false,
				}),
				Image,
				HardBreak,
			],

			content: `
			<h1>Title!</h1>
			<p>This is a description text.</p>
			`,

			onTransaction: () => {
				// force re-render so `editor.isActive` works as expected
				editor = editor;

				// Store the editor content in local storage
				localStorage.setItem(
					'editorContent',
					JSON.stringify(editor.getJSON().content),
				);

				console.log('editor', editor.getJSON().content);

				$outputJsonStore = editor.getJSON().content;
			},
		});

		if (localStorage.getItem('editorContent')) {
			editor.commands.setContent(
				JSON.parse(localStorage.getItem('editorContent') as string),
			);
		}

		// Initialize the FileReader once the component is mounted
		if (fileInput) {
			fileInput.addEventListener('change', handleFileInput);
		}
	});

	let imageUrl: string, fileInput: HTMLInputElement;

	function handleFileInput(event: Event) {
		const target = event.target as HTMLInputElement;
		if (!target.files || target.files.length === 0) return;

		const file = target.files[0];
		const reader = new FileReader();

		reader.onloadend = () => {
			imageUrl = reader.result as string;
			const transaction = editor
				.chain()
				.focus()
				.setImage({ src: imageUrl })
				.run();
			fileInput.value = '';
		};

		reader.readAsDataURL(file);
	}

	onDestroy(() => {
		if (editor) {
			editor.destroy();
		}
	});
</script>

{#if editor}
	<div role="group">
		<button
			class="secondary outline"
			class:active={editor.isActive('heading', { level: 1 })}
			on:click={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
		>
			H1
		</button>
		<button
			class="secondary outline"
			class:active={editor.isActive('heading', { level: 2 })}
			on:click={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
		>
			H2
		</button>
		<button
			class="secondary outline"
			class:active={editor.isActive('paragraph')}
			on:click={() => editor.chain().focus().setParagraph().run()}
		>
			P
		</button>
		<input
			type="file"
			id="imageInput"
			style="display: none;"
			bind:this={fileInput}
			on:change={handleFileInput}
		/>
		<button class="secondary outline" on:click={() => fileInput.click()}
			>Image</button
		>
	</div>
{/if}

<div class="editor p-5 rounded-md" bind:this={element} />

<style lang="postcss">
	.editor {
		background-color: #202632;
	}

	button.active {
		background: #202632;
	}
</style>
