<script lang="ts">
	import { Button } from '$lib/components/ui/button'
	import { Input } from '$lib/components/ui/input'
	import * as Popover from '$lib/components/ui/popover'
	import type { Editor } from '@tiptap/core'
	import { Image, Search } from 'lucide-svelte'
	import { onDestroy } from 'svelte'

	export let editor: Editor

	let fileInput: HTMLInputElement

	let showSearchView = false
	let showGenerateButton = false

	let query = ''
	let images: any = []

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
		const getPresignedUrlResponse = await fetch('/api/r2', {
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

	const getImagesFromPexels = async (query: string) => {
		const result = await fetch(`/api/pexels?query=${query}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})

		if (!result.ok) console.log('Failed to get images from Pexels')

		const { photos } = await result.json()
		console.log(photos.photos)
		images = photos.photos
	}

	onDestroy(() => {
		showSearchView = false
		showGenerateButton = false
	})
</script>

<Popover.Root>
	<Popover.Trigger>
		<Button variant="ghost" size="icon">
			<Image class="h-5 w-5" />
		</Button>
	</Popover.Trigger>
	<Popover.Content class="max-h-96">
		<div class="flex flex-col gap-4">
			{#if !showSearchView}
				<input
					type="file"
					id="imageInput"
					style="display: none;"
					bind:this={fileInput}
					on:change={handleImage}
				/>
				<Button variant="outline" on:click={() => fileInput.click()}
					>Upload</Button
				>
				<Button
					variant="outline"
					on:click={() => {
						showSearchView = true
					}}>Search</Button
				>
			{/if}

			{#if showSearchView}
				<Button
					variant="outline"
					on:click={() => {
						showSearchView = false
					}}>Back</Button
				>
				<div class="flex gap-2">
					<Input placeholder="Search for images" bind:value={query} />
					<Button
						variant="outline"
						on:click={async () => {
							await getImagesFromPexels(query)
						}}><Search class="size-5" /></Button
					>
				</div>
				<div class="grid grid-cols-2 gap-2 h-64 overflow-y-auto">
					{#each images as image}
						<button
							on:click={() => {
								editor
									.chain()
									.focus()
									.setImage({ src: image.src.original })
									.createParagraphNear()
									.run()
							}}
							><img src={image.src.tiny} alt={image.src.photoGrapher} /></button
						>
					{/each}
				</div>
			{/if}
		</div>
	</Popover.Content>
</Popover.Root>
