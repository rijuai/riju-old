<script lang="ts">
import { goto, invalidateAll } from '$app/navigation'
import MetaTags from '$lib/components/MetaTags.svelte'
import Button from '$lib/components/ui/button/button.svelte'
import * as DropdownMenu from '$lib/components/ui/dropdown-menu'
import * as Table from '$lib/components/ui/table'
import { Textarea } from '$lib/components/ui/textarea'
import supabase from '$lib/supabase.js'
import EllipsisIcon from 'lucide-svelte/icons/ellipsis'
import ExternalLinkIcon from 'lucide-svelte/icons/external-link'
import FileIcon from 'lucide-svelte/icons/file'
import Trash2Icon from 'lucide-svelte/icons/trash-2'
import XIcon from 'lucide-svelte/icons/x'
import { onDestroy } from 'svelte'

let { data } = $props()
let { presentations } = $derived(data)

let prompt = $state('')
let files = $state<File[]>([])
let fileInput: HTMLInputElement | null = null

const deletePresentation = async (id: string) => {
	await supabase.from('presentations').delete().eq('id', id)
	invalidateAll()
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

const generatePresentation = async () => {
	console.log(prompt)
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
    <h4 class="mt-4 mb-4 text-muted-foreground">Generate</h4>

    <Textarea
        class="mb-2.5 text-base"
        placeholder="Enter your prompt here"
        rows={8}
        bind:value={prompt}
    />
    <div class="flex justify-between gap-2 mb-4">
        <input
            class="hidden"
            type="file"
            bind:this={fileInput}
            onchange={handleFiles}
            multiple
            accept="image/*,application/pdf"
        />

        <!-- Upload button -->
        <Button variant="outline" class="self-center" onclick={triggerFileInput}
            ><FileIcon class="size-4 mr-2" />Files</Button
        >

        <Button onclick={generatePresentation}>Generate</Button>
    </div>

    <!-- Preview section -->
    {#if files.length > 0}
        <div class="mt-4 grid grid-cols-1 md:grid-cols-6 gap-4 mb-2.5">
            {#each files as file, index}
                <div
                    class="relative border aspect-squar h-16 w-auto p-2 rounded-md"
                >
                    {#if isImage(file)}
                        <img
                            src={getPreviewUrl(file)}
                            alt={file.name}
                            class="w-full h-full object-cover absolute inset-0 rounded-md"
                        />
                    {:else if file.type === "application/pdf"}
                        <div
                            class="flex items-center justify-center text-xs text-ellipsis"
                        >
                            {file.name.length > 25
                                ? file.name.substring(0, 25) + "..."
                                : file.name}
                        </div>
                    {/if}
                    <Button
                        variant="outline"
                        size="icon"
                        onclick={() => removeFile(index)}
                        class="absolute top-0 right-0 z-10"
                    >
                        <XIcon class="size-4" />
                    </Button>
                </div>
            {/each}
        </div>
    {/if}
</section>

<div class="mx-auto w-full max-w-3xl space-y-8 mt-12">
    <!-- Presentations -->
    {#if presentations && presentations.length > 0}
        <h4 class="text-muted-foreground">Your presentations</h4>
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
                                e.stopPropagation();
                            }}
                        >
                            <DropdownMenu.Root>
                                <DropdownMenu.Trigger>
                                    <EllipsisIcon class="size-4" />
                                </DropdownMenu.Trigger>
                                <DropdownMenu.Content>
                                    <DropdownMenu.Group>
                                        <DropdownMenu.Item
                                            onclick={(e: Event) => {
                                                e.stopPropagation();
                                                window.open(
                                                    `/dashboard/editor/${id}`,
                                                    "_blank",
                                                );
                                            }}
                                            ><ExternalLinkIcon
                                                class="mr-4 size-4"
                                            />Open in new tab</DropdownMenu.Item
                                        >
                                        <DropdownMenu.Separator />
                                        <DropdownMenu.Item
                                            class="text-destructive"
                                            onclick={async () => {
                                                let editorOutput =
                                                    await deletePresentation(
                                                        id,
                                                    );
                                                location.reload();
                                            }}
                                            ><Trash2Icon
                                                class="mr-4 size-4"
                                            />Delete</DropdownMenu.Item
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
