<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte'
	import { Input } from '$lib/components/ui/input'
	import Label from '$lib/components/ui/label/label.svelte'
	import * as Popover from '$lib/components/ui/popover'
	import * as Select from '$lib/components/ui/select'
	import { transitionType } from '$lib/stores/presentation'
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

				<div class="col-span-2 flex items-center gap-3">
					<button class="colours-btn bg-blue-200" />
					<button class="colours-btn bg-violet-300" />
					<button class="colours-btn bg-orange-200" />
					<button class="colours-btn bg-slate-300" />
					<button class="colours-btn bg-lime-200" />
					<Input class="px-1 py-1 w-8 h-8 rounded-full" type="color" />
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
	.colours-btn {
		@apply h-7 w-7 hover:ring rounded-full;
	}
</style>
