<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { Editor } from '@tiptap/core';
	import StarterKit from '@tiptap/starter-kit';
	import Image from '@tiptap/extension-image';
	import HardBreak from '@tiptap/extension-hard-break';
	import { outputJsonStore } from '$lib/stores/output_json';

	let element: HTMLDivElement;

	let editor: Editor;

	onMount(() => {
		editor = new Editor({
			element: element,
			extensions: [
				StarterKit.configure({
					hardBreak: false,
				}),
				Image.configure(),
				HardBreak,
			],
			autofocus: true,
			content: `
			<h1>Title!</h1>
			<p>This is a description text.</p>
			`,
			onTransaction: () => {
				// force re-render so `editor.isActive` works as expected
				outputJsonStore.set(editor.getJSON().content);
			},
		});

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

	let outputJson: string;

	outputJsonStore.subscribe((value: any) => {
		outputJson = value;
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

<div class="editor p-5 rounded-md bg-zinc-800" bind:this={element} />

<style lang="postcss">
	button.active {
		@apply bg-zinc-600;
		background: black;
		color: white;
	}
</style>
