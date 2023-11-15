<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte'
	import Label from '$lib/components/ui/label/label.svelte'
	import * as Popover from '$lib/components/ui/popover'
	import { changeTheme } from '$lib/stores/presentation'
	import { Sparkles } from 'lucide-svelte'
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
					on:click={() => {
						changeTheme()
					}}>Generate Random</Button
				>
			</div>

			<!-- <div class="grid grid-cols-2 items-center gap-3">
				<Label>Tranisition Type</Label>
				<Select.Root
					selected={$transitionType}
					onSelectedChange={(value) => {
						$transitionType = value?.value
					}}
				>
					<Select.Trigger>
						<Select.Value placeholder="Select" />
					</Select.Trigger>
					<Select.Content>
						<Select.Item value="none">None</Select.Item>
						<Select.Item value="slide">Slide</Select.Item>
						<Select.Item value="fade">Fade</Select.Item>
						<Select.Item value="zoom">Zoom</Select.Item>
						<Select.Item value="concave">Concave</Select.Item>
						<Select.Item value="convex">Convex</Select.Item>
					</Select.Content>
				</Select.Root>
			</div> -->

			<!-- use this for new rows -->
			<!-- <div class="grid grid-cols-2 items-center gap-3" /> -->
		</div>
	</Popover.Content>
</Popover.Root>
