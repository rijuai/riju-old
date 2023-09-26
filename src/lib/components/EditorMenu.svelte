<script lang="ts">
	import { showDeleteModal } from '$lib/stores/editor'
	import type { Editor } from '@tiptap/core'
	import {
		Heading1,
		Heading2,
		ImageIcon,
		List,
		ListOrdered,
		Trash2,
	} from 'lucide-svelte'
	import { onMount } from 'svelte'

	export let editor: Editor
	let fileInput: HTMLInputElement
	let imageUrl: string

	function handleImage(event: Event) {
		const target = event.target as HTMLInputElement
		if (!target.files || target.files.length === 0) return

		const file = target.files[0]
		const reader = new FileReader()

		reader.onloadend = () => {
			imageUrl = reader.result as string
			const transaction = editor
				.chain()
				.focus()
				.setImage({ src: imageUrl })
				.createParagraphNear()
				.run()
			fileInput.value = ''
		}

		reader.readAsDataURL(file)
	}

	onMount(() => {
		// Initialize the FileReader once the component is mounted
		if (fileInput) {
			fileInput.addEventListener('change', handleImage)
		}
	})
</script>

<div
	class="menu z-50 flex flex-col gap-2 p-1 rounded-md fixed left-4 top-1/2 transform -translate-y-1/2"
>
	<button
		class="secondary"
		on:click={() => {
			editor.chain().focus().toggleHeading({ level: 1 }).run()
		}}><Heading1 /></button
	>
	<button
		class="secondary"
		on:click={() => {
			editor.chain().focus().toggleHeading({ level: 2 }).run()
		}}><Heading2 /></button
	>
	<button
		class="secondary"
		on:click={() => {
			editor.chain().focus().setParagraph().run()
		}}>P</button
	>
	<button
		class="secondary"
		on:click={() => {
			editor.chain().focus().toggleBulletList().run()
		}}><List /></button
	>
	<button
		class="secondary"
		on:click={() => {
			editor.chain().focus().toggleOrderedList().run()
		}}><ListOrdered /></button
	>
	<input
		type="file"
		id="imageInput"
		style="display: none;"
		bind:this={fileInput}
		on:change={handleImage}
	/>
	<button class="secondary" on:click={() => fileInput.click()}
		><ImageIcon /></button
	>
	<button
		class="secondary"
		on:click={() => {
			$showDeleteModal = true
		}}><Trash2 /></button
	>
</div>

<style lang="postcss">
	.menu {
		background-color: var(--pico-card-sectioning-background-color);
	}

	.menu button {
		background-color: var(--pico-card-sectioning-background-color);
		border-width: 0;
	}

	.menu button:hover,
	.menu button:active {
		background-color: var(--pico-card-background-color);
	}
</style>
