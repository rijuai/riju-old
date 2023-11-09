<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte'
	import Label from '$lib/components/ui/label/label.svelte'
	import * as Popover from '$lib/components/ui/popover'
	import * as Select from '$lib/components/ui/select'
	import { changeTheme, transitionType } from '$lib/stores/presenter'
	import { Sparkles } from 'lucide-svelte'
</script>

<Popover.Root>
	<Popover.Trigger class="flex items-center gap-1.5"
		><Sparkles />Theme</Popover.Trigger
	>
	<Popover.Content>
		<div class="flex flex-col gap-2">
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

				<div class="col-span-2 flex gap-2">
					<button class="h-5 w-5 bg-red-400 rounded-full" />
					<button class="h-5 w-5 bg-purple-300 rounded-full" />
					<button class="h-5 w-5 bg-red-500 rounded-full" />
					<button class="h-5 w-5 bg-red-500 rounded-full" />
					<button class="h-5 w-5 bg-red-500 rounded-full" />
					<button class="h-5 w-5 bg-red-500 rounded-full" />
					<button class="h-5 w-5 bg-red-500 rounded-full" />
					<button class="h-5 w-5 bg-red-500 rounded-full" />
					<button class="h-5 w-5 bg-red-500 rounded-full" />
				</div>

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
			</div>
		</div>
	</Popover.Content>
</Popover.Root>

<style lang="postcss">
</style>
