<script lang="ts">
	import { outputJsonStore } from '$lib/stores/outputJson';
	import { Editor } from '@tiptap/core';
	import { Image } from '@tiptap/extension-image';
	import { StarterKit } from '@tiptap/starter-kit';
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
			<!-- heading 1 -->
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="icon icon-tabler icon-tabler-h-1"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				stroke-width="2"
				stroke="currentColor"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path d="M19 18v-8l-2 2" />
				<path d="M4 6v12" />
				<path d="M12 6v12" />
				<path d="M11 18h2" />
				<path d="M3 18h2" />
				<path d="M4 12h8" />
				<path d="M3 6h2" />
				<path d="M11 6h2" />
			</svg>
		</button>
		<button
			class="secondary outline"
			class:active={editor.isActive('heading', { level: 2 })}
			on:click={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
		>
			<!-- heading 2 -->
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="icon icon-tabler icon-tabler-h-2"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				stroke-width="2"
				stroke="currentColor"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path
					d="M17 12a2 2 0 1 1 4 0c0 .591 -.417 1.318 -.816 1.858l-3.184 4.143l4 0"
				/>
				<path d="M4 6v12" />
				<path d="M12 6v12" />
				<path d="M11 18h2" />
				<path d="M3 18h2" />
				<path d="M4 12h8" />
				<path d="M3 6h2" />
				<path d="M11 6h2" />
			</svg>
		</button>
		<button
			class="secondary outline"
			class:active={editor.isActive('paragraph')}
			on:click={() => editor.chain().focus().setParagraph().run()}
		>
			P
		</button>
		<button
			class="secondary outline"
			class:active={editor.isActive('bulletList')}
			on:click={() => editor.chain().focus().toggleBulletList().run()}
		>
			<!-- Bullet List -->
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="icon icon-tabler icon-tabler-list"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				stroke-width="2"
				stroke="currentColor"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path d="M9 6l11 0" />
				<path d="M9 12l11 0" />
				<path d="M9 18l11 0" />
				<path d="M5 6l0 .01" />
				<path d="M5 12l0 .01" />
				<path d="M5 18l0 .01" />
			</svg>
		</button>
		<button
			class="secondary outline"
			class:active={editor.isActive('orderedList')}
			on:click={() => editor.chain().focus().toggleOrderedList().run()}
		>
			<!-- Numbers List Icon -->
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="icon icon-tabler icon-tabler-list-numbers"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				stroke-width="2"
				stroke="currentColor"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path d="M11 6h9" />
				<path d="M11 12h9" />
				<path d="M12 18h8" />
				<path d="M4 16a2 2 0 1 1 4 0c0 .591 -.5 1 -1 1.5l-3 2.5h4" />
				<path d="M6 10v-6l-2 2" />
			</svg>
		</button>
		<input
			type="file"
			id="imageInput"
			style="display: none;"
			bind:this={fileInput}
			on:change={handleFileInput}
		/>
		<button class="secondary outline" on:click={() => fileInput.click()}>
			<!-- image -->
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="icon icon-tabler icon-tabler-photo"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				stroke-width="2"
				stroke="currentColor"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path d="M15 8h.01" />
				<path
					d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z"
				/>
				<path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5" />
				<path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3" />
			</svg>
		</button>
	</div>
{/if}

<div class="editor p-6 rounded-lg" bind:this={element} />

<style lang="postcss">
	.editor {
		background-color: var(--pico-card-background-color);
	}

	button.active {
		background-color: var(--pico-card-background-color);
	}
</style>
