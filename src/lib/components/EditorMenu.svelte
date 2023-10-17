<script lang="ts">
	import { showDeleteModal } from '$lib/stores/editor'
	import type { Editor } from '@tiptap/core'
	import {
		Heading1,
		Heading2,
		Image,
		List,
		ListOrdered,
		Trash2,
	} from 'lucide-svelte'

	export let editor: Editor
	let fileInput: HTMLInputElement

	const handleImage = async (event: Event) => {
		const target = event.target as HTMLInputElement
		if (!target.files || target.files.length === 0) return
		const file = target.files[0]

		const imageUrl = await uploadImageToR2(file)

		editor.chain().focus().setImage({ src: imageUrl }).run()
		fileInput.value = ''
	}

	const uploadImageToR2 = async (file: File): Promise<string> => {
		const getPresignedUrlResponse = await fetch('/api/upload-image', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				fileName: file.name,
				fileType: file.type,
			}),
		})

		if (!getPresignedUrlResponse.ok) console.log('Failed to get presigned URL')

		const { presignedUrl, objectKey } = await getPresignedUrlResponse.json()

		const uploadToR2Response = await fetch(presignedUrl, {
			method: 'PUT',
			headers: {
				'Content-Type': file.type,
			},
			body: file,
		})

		return `https://assets.riju.ai/${objectKey}`
	}
</script>

<div
	class="menu z-50 flex flex-col gap-2 p-1 rounded-md fixed left-4 top-1/2 transform -translate-y-1/2 bg-zinc-100"
>
	<button
		data-tooltip="Heading 1"
		data-placement="right"
		on:click={() => {
			editor.chain().focus().toggleHeading({ level: 1 }).run()
		}}><Heading1 /></button
	>
	<button
		data-tooltip="Heading 2"
		data-placement="right"
		on:click={() => {
			editor.chain().focus().toggleHeading({ level: 2 }).run()
		}}><Heading2 /></button
	>
	<button
		data-tooltip="Paragraph"
		data-placement="right"
		on:click={() => {
			editor.chain().focus().setParagraph().run()
		}}>P</button
	>
	<button
		data-tooltip="Bullet List"
		data-placement="right"
		on:click={() => {
			editor.chain().focus().toggleBulletList().run()
		}}><List /></button
	>
	<button
		data-tooltip="Ordered List"
		data-placement="right"
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
	<button
		data-tooltip="Image"
		data-placement="right"
		on:click={() => fileInput.click()}><Image /></button
	>
	<button
		data-tooltip="Delete Presentation"
		data-placement="right"
		on:click={() => {
			$showDeleteModal = true
		}}><Trash2 /></button
	>
</div>

<style lang="postcss">
	.menu button {
		@apply bg-zinc-100 text-zinc-800 border-0;
	}

	.menu button:hover,
	.menu button:active {
		background-color: var(--pico-card-background-color);
	}
</style>
