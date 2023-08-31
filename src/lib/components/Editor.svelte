<script lang="ts">
	import { editorOutput } from '$lib/stores/editor';
	import { Editor } from '@tiptap/core';
	import { Image } from '@tiptap/extension-image';
	import { StarterKit } from '@tiptap/starter-kit';
	import {
		Heading1,
		Heading2,
		ImageIcon,
		List,
		ListOrdered,
	} from 'lucide-svelte';
	import { onDestroy, onMount } from 'svelte';

	let element: HTMLDivElement;
	let editor: Editor;

	onMount(() => {
		editor = new Editor({
			element: element,
			extensions: [StarterKit, Image],

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

				$editorOutput = editor.getJSON().content!;
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
	<div class="menu z-50 flex flex-col gap-2 p-2 rounded-md">
		<button
			class="secondary"
			on:click={() => {
				editor.chain().focus().toggleHeading({ level: 1 }).run();
			}}><Heading1 /></button
		>
		<button
			class="secondary"
			on:click={() => {
				editor.chain().focus().toggleHeading({ level: 2 }).run();
			}}><Heading2 /></button
		>
		<button
			class="secondary"
			on:click={() => {
				editor.chain().focus().toggleBulletList().run();
			}}><List /></button
		>
		<button
			class="secondary"
			on:click={() => {
				editor.chain().focus().toggleOrderedList().run();
			}}><ListOrdered /></button
		>
		<input
			type="file"
			id="imageInput"
			style="display: none;"
			bind:this={fileInput}
			on:change={handleFileInput}
		/>
		<button class="secondary" on:click={() => fileInput.click()}
			><ImageIcon /></button
		>
	</div>
{/if}

<div
	class="editor p-8 bg-slate-800 rounded-lg w-full mb-8"
	bind:this={element}
/>

<style lang="postcss">
	.editor {
		background-color: var(--pico-card-background-color);
	}

	.menu {
		background-color: var(--pico-card-background-color);
		position: fixed;
		top: 50%;
		transform: translateY(-50%);
		@apply left-6;
	}

	.menu button {
		background-color: var(--pico-card-background-color);
		@apply hover:bg-slate-700 border-0;
	}
</style>
