<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte'
	import Label from '$lib/components/ui/label/label.svelte'
	import * as Popover from '$lib/components/ui/popover'
	import * as Select from '$lib/components/ui/select'
	import { savePresentationTheme } from '$lib/db/presentation'
	import {
		changeTheme,
		currentTheme,
		transitionType,
	} from '$lib/stores/presentation'
	import { Sparkles } from 'lucide-svelte'

	export let presentationId: string

	let transitionTypes = [
		{
			label: 'None',
			value: 'none',
		},
		{
			label: 'Slide',
			value: 'slide',
		},
		{
			label: 'Fade',
			value: 'fade',
		},
		{
			label: 'Zoom',
			value: 'zoom',
		},
		{
			label: 'Concave',
			value: 'concave',
		},
		{
			label: 'Convex',
			value: 'convex',
		},
	]
</script>

<Popover.Root>
	<Popover.Trigger class="flex items-center gap-1.5"
		><Sparkles />Theme</Popover.Trigger
	>
	<Popover.Content>
		<div class="flex flex-col gap-6">
			<div class="grid grid-cols-2 items-center gap-3">
				<Label>Theme</Label>
				<Button
					variant="outline"
					size="sm"
					class="text-xs"
					on:click={async () => {
						changeTheme()
						const response = await savePresentationTheme(presentationId, {
							backgroundCss: $currentTheme,
							transitionType: $transitionType,
						})
						console.log(response)
						console.log($currentTheme)
					}}>Generate Random</Button
				>
			</div>

			<div class="grid grid-cols-2 items-center gap-3">
				<Label>Tranisition Type</Label>
				<Select.Root
					selected={$transitionType}
					onSelectedChange={async (value) => {
						$transitionType = value?.value
						await savePresentationTheme(presentationId, {
							backgroundCss: $currentTheme,
							transitionType: $transitionType,
						})
					}}
				>
					<Select.Trigger>
						<Select.Value placeholder="Select" />
					</Select.Trigger>
					<Select.Content>
						{#each transitionTypes as { label, value }}
							<Select.Item {value}>{label}</Select.Item>
						{/each}
					</Select.Content>
				</Select.Root>
			</div>

			<!-- use this for new rows -->
			<!-- <div class="grid grid-cols-2 items-center gap-3" /> -->
		</div>
	</Popover.Content>
</Popover.Root>
