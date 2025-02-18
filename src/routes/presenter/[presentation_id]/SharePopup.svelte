<script lang="ts">
import { run } from 'svelte/legacy'

import { page } from '$app/stores'
import { Button } from '$lib/components/ui/button'
import { Label } from '$lib/components/ui/label'
import * as Popover from '$lib/components/ui/popover'
import { Switch } from '$lib/components/ui/switch'
import pb from '$lib/pocketbase'
import { isPresentationPublic } from './store'

interface Props {
	presentationId: string
}

let { presentationId }: Props = $props()

const updatePresentationVisibility = async (
	presentationId: string,
	isPublic: boolean
) => {
	const data = {
		is_public: isPublic
	}

	const record = await pb
		.collection('presentations')
		.update(presentationId, data)
}

run(() => {
	updatePresentationVisibility(presentationId, $isPresentationPublic)
})
</script>

<Popover.Root>
    <Popover.Trigger class="text-sm">Share</Popover.Trigger>
    <Popover.Content class="w-fi">
        <div class="flex flex-col gap-6">
            <div class="grid grid-cols-2 items-center gap-2">
                <Label>Make public</Label>
                <div class="flex items-center gap-2">
                    <Switch bind:checked={$isPresentationPublic} />
                    {#if $isPresentationPublic}
                        <Button
                            variant="outline"
                            size="sm"
                            class="h-full px-1.5 py-0.5 text-xs"
                            on:click={() => {
                                let url = $page.url;

                                /* Copy URL to clipboard */
                                navigator.clipboard.writeText(String(url));
                            }}>Copy URL</Button
                        >
                    {/if}
                </div>
            </div>
        </div>
    </Popover.Content>
</Popover.Root>
