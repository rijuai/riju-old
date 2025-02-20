<script lang="ts">
import { goto, invalidateAll } from '$app/navigation'
import MetaTags from '$lib/components/MetaTags.svelte'
import * as DropdownMenu from '$lib/components/ui/dropdown-menu'
import * as Table from '$lib/components/ui/table'
import Textarea from '$lib/components/ui/textarea/textarea.svelte'
import pb from '$lib/pocketbase'
import type { OutputData } from '@editorjs/editorjs'
import Ellipsis from 'lucide-svelte/icons/ellipsis'
import ExternalLink from 'lucide-svelte/icons/external-link'
import Trash2 from 'lucide-svelte/icons/trash-2'

let { data } = $props()
let { presentations } = $derived(data)

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
</script>

<MetaTags title="Riju | Dashboard" description="Your presentations" />

<h4 class="text-lg mb-4 font-medium text-muted-foreground mt-12	">Generate</h4>
<Textarea class="mt-4 mb-4" placeholder="Enter the presentations content..." rows={6}>A</Textarea>

<div class="mx-auto w-full max-w-3xl space-y-8">
	<!-- Templates -->
	<!-- <div>
		<h4 class="mb-4 font-medium text-muted-foreground">Templates</h4>
		<div class="grid grid-cols-2 gap-4 md:grid-cols-4">
			{#each templates as { title, theme, content }}
				<Button
					variant="outline"
					class="p-12"
					on:click={async () => {
						const data = {
							content: content,
							creator: $userId,
							theme: theme,
							title: title,
						}

						const { id } = await pb.collection('presentations').create(data)
						goto(`/dashboard/editor/${id}`)
					}}>{title}</Button
				>
			{/each}
		</div>
	</div> -->

	<!-- Presentations -->
	{#if presentations && presentations.length > 0}
		<h4 class="text-lg font-medium text-muted-foreground">Your presentations</h4>
		<Table.Root>
			<Table.Body>
				{#each presentations as { id, title } (id)}
					<Table.Row
						class="cursor-pointer"
						on:click={() => goto(`/dashboard/editor/${id}`)}
					>
						<Table.Cell class="text-ellipsis">{title}</Table.Cell>
						<Table.Cell
							class="py-3 text-right"
							on:click={(e) => {
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
											on:click={() => {
												window.open(`/dashboard/editor/${id}`, '_blank')
											}}
											><ExternalLink class="mr-3 size-4" />Open in new tab</DropdownMenu.Item
										>
										<DropdownMenu.Separator />
										<DropdownMenu.Item
											class="text-destructive"
											on:click={async () => {
												let editorOutput = deletePresentation(id)

												await deleteImages(editorOutput?.content)

												location.reload()
											}}><Trash2 class="mr-3 size-4" />Delete</DropdownMenu.Item
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
		<p class="text-center">No presentations to show.</p>
	{/if}
</div>
