<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { Editor } from '@tiptap/core';
	import StarterKit from '@tiptap/starter-kit';
	import Image from '@tiptap/extension-image';

	let element: HTMLDivElement;

	let editor: Editor;

	$: () => {
		editor = editor;
		save();
	};

	onMount(() => {
		editor = new Editor({
			element: element,
			extensions: [StarterKit, Image.configure({ inline: true })],
			content: `<h1>Hi Company!</h1>
			</br>
			</br>
			</br>
			</br>
			</br>
			</br>
			<p>This is a <a href="https://www.tiptap.dev" target="_blank" rel="noopener noreferrer">tiptap</a> editor.</p>
			`,
			onTransaction: () => {
				// force re-render so `editor.isActive` works as expected
				editor = editor;
			},
		});

		// Initialize the FileReader once the component is mounted
		if (fileInput) {
			fileInput.addEventListener('change', handleFileInput);
		}
	});

	function save() {
		console.log(editor.getJSON());
	}

	let imageUrl: string, fileInput: HTMLInputElement;

	function handleFileInput(event: Event) {
		const target = event.target as HTMLInputElement;
		if (!target.files || target.files.length === 0) return;

		const file = target.files[0];
		const reader = new FileReader();

		reader.onloadend = () => {
			imageUrl = reader.result as string; // This is the data URL of the selected image
			const transaction = editor
				.chain()
				.focus()
				.setImage({ src: imageUrl })
				.run();
			fileInput.value = ''; // Reset the file input value after handling the image
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
			on:click={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
			class:active={editor.isActive('heading', { level: 1 })}
		>
			H1
		</button>
		<button
			class="secondary outline"
			on:click={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
			class:active={editor.isActive('heading', { level: 2 })}
		>
			H2
		</button>
		<button
			class="secondary outline"
			on:click={() => editor.chain().focus().setParagraph().run()}
			class:active={editor.isActive('paragraph')}
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
			>Upload Image</button
		>
	</div>
{/if}

<div class="editor p-5 rounded-md bg-gray-800" bind:this={element} />

<style>
	button.active {
		background: black;
		color: white;
	}
</style>
