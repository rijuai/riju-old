<script lang="ts">
	import { currentPresentationId, showDeleteModal } from '$lib/stores/editor'
	import type { Editor } from '@tiptap/core'
	import {
		Heading1,
		Heading2,
		Image,
		List,
		ListOrdered,
		Trash2,
	} from 'lucide-svelte'
	import Button from './ui/button/button.svelte'
	import * as AlertDialog from '$lib/components/ui/alert-dialog'
	import { deletePresentation } from '$lib/db/presentation'
	import { goto } from '$app/navigation'

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
	class="menu z-50 flex flex-col gap-3 p-3 min-w-fit rounded fixed left-0 top-1/2 transform -translate-y-1/2 bg-primary-foreground"
>
	<Button
		variant="outline"
		data-tooltip="Heading 1"
		data-placement="right"
		on:click={() => {
			editor.chain().focus().toggleHeading({ level: 1 }).run()
		}}><Heading1 /></Button
	>
	<Button
		variant="outline"
		data-tooltip="Heading 2"
		data-placement="right"
		on:click={() => {
			editor.chain().focus().toggleHeading({ level: 2 }).run()
		}}><Heading2 /></Button
	>
	<Button
		variant="outline"
		data-tooltip="Paragraph"
		data-placement="right"
		on:click={() => {
			editor.chain().focus().setParagraph().run()
		}}>P</Button
	>
	<Button
		variant="outline"
		data-tooltip="Bullet List"
		data-placement="right"
		on:click={() => {
			editor.chain().focus().toggleBulletList().run()
		}}><List /></Button
	>
	<Button
		variant="outline"
		data-tooltip="Ordered List"
		data-placement="right"
		on:click={() => {
			editor.chain().focus().toggleOrderedList().run()
		}}><ListOrdered /></Button
	>
	<input
		type="file"
		id="imageInput"
		style="display: none;"
		bind:this={fileInput}
		on:change={handleImage}
	/>
	<Button
		variant="outline"
		data-tooltip="Image"
		data-placement="right"
		on:click={() => fileInput.click()}><Image /></Button
	>
	<AlertDialog.Root>
		<AlertDialog.Trigger asChild let:builder>
			<Button
				builders={[builder]}
				variant="outline"
				on:click={() => {
					$showDeleteModal = true
				}}><Trash2 /></Button
			>
		</AlertDialog.Trigger>
		<AlertDialog.Content>
			<AlertDialog.Header>
				<AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
				<AlertDialog.Description>
					This action cannot be undone. This will permanently delete your
					account and remove your data from our servers.
				</AlertDialog.Description>
			</AlertDialog.Header>
			<AlertDialog.Footer>
				<AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
				<AlertDialog.Action
					on:click={async () => {
						let result = await deletePresentation($currentPresentationId)

						if (result) {
							console.log('Successfully deleted presentation')
							$showDeleteModal = false
							goto('/dashboard')
						}
					}}>Continue</AlertDialog.Action
				>
			</AlertDialog.Footer>
		</AlertDialog.Content>
	</AlertDialog.Root>
</div>
