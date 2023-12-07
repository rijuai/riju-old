<script lang="ts">
	import { Button } from '$lib/components/ui/button'
	import * as Tooltip from '$lib/components/ui/tooltip'
	import type { Editor } from '@tiptap/core'
	import {
		CaseSensitive,
		Heading1,
		Heading2,
		Image,
		List,
		ListOrdered,
		MoveHorizontal,
		Plus,
	} from 'lucide-svelte'

	export let editor: Editor
	let fileInput: HTMLInputElement

	const handleImage = async (event: Event) => {
		const target = event.target as HTMLInputElement
		if (!target.files || target.files.length === 0) return
		const file = target.files[0]

		const imageUrl = await uploadImageToR2(file)

		editor
			.chain()
			.focus()
			.setImage({ src: imageUrl })
			.createParagraphNear()
			.run()
		fileInput.value = ''
	}

	const uploadImageToR2 = async (file: File): Promise<string> => {
		const getPresignedUrlResponse = await fetch('/api/image', {
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

		await fetch(presignedUrl, {
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
	class="menu z-50 flex flex-col gap-4 p-1 min-w-fit rounded fixed left-0 top-1/2 transform -translate-y-1/2 bg-primary-foreground border"
>
	<Tooltip.Root openDelay={150}>
		<Tooltip.Trigger>
			<Button
				variant="ghost"
				on:click={async () => {
					editor.chain().focus().enter().setHorizontalRule().run()
				}}
			>
				<Plus class="h-5 w-5" />
			</Button>
		</Tooltip.Trigger>
		<Tooltip.Content>
			<p>New slide</p>
		</Tooltip.Content>
	</Tooltip.Root>
	<Tooltip.Root openDelay={150}>
		<Tooltip.Trigger>
			<Button
				variant="ghost"
				on:click={async () => {
					editor.chain().focus().enter().setSubSection().run()
				}}
			>
				<MoveHorizontal class="h-5 w-5" />
			</Button>
		</Tooltip.Trigger>
		<Tooltip.Content>
			<p>Split Slide</p>
		</Tooltip.Content>
	</Tooltip.Root>
	<Button
		variant="ghost"
		on:click={() => {
			editor.chain().focus().toggleHeading({ level: 1 }).run()
		}}><Heading1 class="h-5 w-5" /></Button
	>
	<Button
		variant="ghost"
		on:click={() => {
			editor.chain().focus().toggleHeading({ level: 2 }).run()
		}}><Heading2 class="h-5 w-5" /></Button
	>
	<Button
		variant="ghost"
		on:click={() => {
			editor.chain().focus().setParagraph().run()
		}}><CaseSensitive class="h-5 w-5" /></Button
	>
	<Button
		variant="ghost"
		on:click={() => {
			editor.chain().focus().toggleBulletList().run()
		}}><List class="h-5 w-5" /></Button
	>
	<Button
		variant="ghost"
		on:click={() => {
			editor.chain().focus().toggleOrderedList().run()
		}}><ListOrdered class="h-5 w-5" /></Button
	>
	<input
		type="file"
		id="imageInput"
		style="display: none;"
		bind:this={fileInput}
		on:change={handleImage}
	/>
	<Button variant="ghost" on:click={() => fileInput.click()}
		><Image class="h-5 w-5" /></Button
	>
</div>
