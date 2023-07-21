<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { Editor } from '@tiptap/core';
	import StarterKit from '@tiptap/starter-kit';

	let element: HTMLDivElement;

	let editor: Editor;

	$: editor = editor;

	let reveal;

	onMount(() => {
		editor = new Editor({
			element: element,
			extensions: [StarterKit],
			content: '<h1>Hi Company!</h1>',
			onTransaction: () => {
				// force re-render so `editor.isActive` works as expected
				editor = editor;
			},
		});
	});

	onDestroy(() => {
		if (editor) {
			editor.destroy();
		}
	});
</script>

{#if editor}
	<div class="flex justify-between">
		<div class="join mb-2">
			<button
				class="btn join-item"
				on:click={() =>
					editor.chain().focus().toggleHeading({ level: 1 }).run()}
				class:active={editor.isActive('heading', { level: 1 })}
			>
				H1
			</button>
			<button
				class="btn join-item"
				on:click={() =>
					editor.chain().focus().toggleHeading({ level: 2 }).run()}
				class:active={editor.isActive('heading', { level: 2 })}
			>
				H2
			</button>
			<button
				class="btn join-item"
				on:click={() => editor.chain().focus().setParagraph().run()}
				class:active={editor.isActive('paragraph')}
			>
				P
			</button>
		</div>
	</div>
{/if}

<div contenteditable="true" class="h-screen">
	<div class="p-6 bg-base-200 rounded-md" bind:this={element} />
</div>
