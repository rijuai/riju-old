<script lang="ts">
import { goto, invalidateAll } from '$app/navigation'
import MetaTags from '$lib/components/MetaTags.svelte'
import Button from '$lib/components/ui/button/button.svelte'
import * as DropdownMenu from '$lib/components/ui/dropdown-menu'
import * as Table from '$lib/components/ui/table'
import { Textarea } from '$lib/components/ui/textarea'
import pb from '$lib/pocketbase'
import type { OutputData } from '@editorjs/editorjs'
import Ellipsis from 'lucide-svelte/icons/ellipsis'
import ExternalLink from 'lucide-svelte/icons/external-link'
import FileIcon from 'lucide-svelte/icons/file'
import Trash2 from 'lucide-svelte/icons/trash-2'
import { onDestroy } from 'svelte'

let { data } = $props()
let { presentations } = $derived(data)
let files = $state<File[]>([])
let fileInput: HTMLInputElement | null = null

const deletePresentation = async (id: string) => {
	await pb.collection('presentations').delete(id)
	invalidateAll()
}

const deleteImagesInR2 = async (objectKeys: string[]) => {
	const result = await fetch('/api/r2', {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ objectKeys })
	})
}

const deleteImages = async (editorOutput: OutputData) => {
	const imagesToDelete: string[] = []
	const blocks = editorOutput.blocks

	if (!editorOutput) return

	for (const item of blocks) {
		if (item.type === 'image') {
			const url = item.data.file.url
			const path = url.split('/').pop() ?? ''

			imagesToDelete.push(path)
		}
	}

	await deleteImagesInR2(imagesToDelete)
}

const handleFiles = (event: Event) => {
	const target = event.target as HTMLInputElement
	const newFiles = Array.from(target.files || [])
	files = [...files, ...newFiles]
}

const removeFile = (index: number) => {
	files = files.filter((_, i) => i !== index)
}

const triggerFileInput = () => {
	fileInput?.click()
}

const isImage = (file: File) => {
	return file.type.startsWith('image/')
}

const getPreviewUrl = (file: File) => {
	return URL.createObjectURL(file)
}

onDestroy(() => {
	for (const file of files) {
		if (isImage(file)) {
			URL.revokeObjectURL(getPreviewUrl(file))
		}
	}
})
</script>

<MetaTags title="Riju | Dashboard" description="Your presentations" />

<section>
	<h3 class="mt-4 mb-4 text-muted-foreground">Generate</h3>
	<!-- Preview section -->
	{#if files.length > 0}
    <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-2.5">
      {#each files as file, index}
        <div class="relative border border-gray-200 p-2 rounded">
          {#if isImage(file)}
            <img 
              src={getPreviewUrl(file)} 
              alt={file.name} 
              class="h-14 w-auto object-cover"
            />
          {:else if file.type === 'application/pdf'}
            <div class="flex items-center justify-center h-24 bg-gray-100 break-all p-2 text-center">
              <span>📄 {file.name}</span>
            </div>
          {/if}
          <Button 
            variant="secondary"
			size="sm"
            onclick={() => removeFile(index)}
            class="absolute top-0 right-0 flex items-center justify-center"
          >
            ×
          </Button>
        </div>
      {/each}
    </div>
  {/if}

<Textarea class="mb-2.5" placeholder="Enter your prompt here" rows={8} />
<div class="flex justify-between gap-2 mb-12">
	<input
    type="file"
    bind:this={fileInput}
    onchange={handleFiles}
    multiple
    accept="image/*,application/pdf"
    style="display: none"
  />

  <!-- Upload button -->
	<Button variant="outline" class="self-center" onclick={triggerFileInput}><FileIcon class="size-4 mr-2" />Files</Button>

	<Button class="self-center">Generate</Button>
</div>
</section>

<div class="mx-auto w-full max-w-3xl space-y-8">
	<!-- Presentations -->
	{#if presentations && presentations.length > 0}
		<h3 class="text-muted-foreground">Your presentations</h3>
		<Table.Root>
			<Table.Body>
				{#each presentations as { id, title } (id)}
					<Table.Row
						class="cursor-pointer"
						onclick={() => goto(`/dashboard/editor/${id}`)}
					>
						<Table.Cell class="text-ellipsis">{title}</Table.Cell>
						<Table.Cell
							class="py-3 text-right"
							onclick={(e: Event) => {
								e.stopPropagation()
							}}
						>
							<DropdownMenu.Root>
								<DropdownMenu.Trigger>
									<Ellipsis class="size-4" />
								</DropdownMenu.Trigger>
								<DropdownMenu.Content>
									<DropdownMenu.Group>
										<DropdownMenu.Item
											onclick={(e: Event) => {
												e.stopPropagation()
												window.open(`/dashboard/editor/${id}`, '_blank')
											}}
											><ExternalLink class="mr-4 size-4" />Open in new tab</DropdownMenu.Item
										>
										<DropdownMenu.Separator />
										<DropdownMenu.Item
											class="text-destructive"
											onclick={async () => {
												let editorOutput = await deletePresentation(id)
												location.reload()
											}}><Trash2 class="mr-4 size-4" />Delete</DropdownMenu.Item
										>
									</DropdownMenu.Group>
								</DropdownMenu.Content>
							</DropdownMenu.Root>
						</Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	{:else}
		<p class="text-center">No presentations to show</p>
	{/if}
</div>
