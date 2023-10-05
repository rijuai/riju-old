<script lang="ts">
	import { showDeleteModal } from '$lib/stores/editor'
	import type { Editor } from '@tiptap/core'
	import { Heading1, Heading2, List, ListOrdered, Trash2 } from 'lucide-svelte'

	export let editor: Editor
</script>

<div
	class="menu z-50 flex flex-col gap-2 p-1 rounded-md fixed left-4 top-1/2 transform -translate-y-1/2 bg-zinc-100"
>
	<button
		class="fill-red-500 text-red-500 bg-red-600"
		on:click={() => {
			editor.chain().focus().toggleHeading({ level: 1 }).run()
		}}><Heading1 /></button
	>
	<button
		on:click={() => {
			editor.chain().focus().toggleHeading({ level: 2 }).run()
		}}><Heading2 /></button
	>
	<button
		on:click={() => {
			editor.chain().focus().setParagraph().run()
		}}>P</button
	>
	<button
		on:click={() => {
			editor.chain().focus().toggleBulletList().run()
		}}><List /></button
	>
	<button
		on:click={() => {
			editor.chain().focus().toggleOrderedList().run()
		}}><ListOrdered /></button
	>
	<button
		on:click={() => {
			$showDeleteModal = true
		}}><Trash2 /></button
	>
</div>

<style lang="postcss">
	.menu button {
		@apply bg-zinc-100 border-8 border-zinc-600;
		border-width: 0;
		color: #373c44;
	}

	.menu button:hover,
	.menu button:active {
		background-color: var(--pico-card-background-color);
	}
</style>
