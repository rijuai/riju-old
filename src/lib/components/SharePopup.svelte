<script lang="ts">
	import { page } from '$app/stores'
	import { Button } from '$lib/components/ui/button'
	import Label from '$lib/components/ui/label/label.svelte'
	import * as Popover from '$lib/components/ui/popover'
	import { Switch } from '$lib/components/ui/switch'
	import { updatePresentationPublicStatus } from '$lib/db/presentation'
	import { isPresentationPublic } from '$lib/stores/presentation'

	export let presentationId: string

	$: {
		updatePresentationPublicStatus(presentationId, $isPresentationPublic)
	}

	const getPageUrl = () => {
		return String($page.url)
	}

	const copyUrlToClipboard = () => {
		let url = getPageUrl()
		navigator.clipboard.writeText(url)
	}
</script>

<Popover.Root>
	<Popover.Trigger>Share</Popover.Trigger>
	<Popover.Content class="w-fi">
		<div class="flex flex-col gap-6">
			<div class="grid grid-cols-2 gap-2 items-center">
				<Label>Make public</Label>
				<div class="flex items-center gap-2">
					<Switch bind:checked={$isPresentationPublic} />
					{#if $isPresentationPublic}
						<Button
							variant="outline"
							size="sm"
							class="text-xs h-full px-1.5 py-0.5"
							on:click={() => {
								copyUrlToClipboard()
							}}>Copy URL</Button
						>
					{/if}
				</div>
			</div>
		</div>
	</Popover.Content>
</Popover.Root>
