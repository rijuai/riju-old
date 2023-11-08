<script lang="ts">
	import { Button } from '$lib/components/ui/button'
	import * as Dialog from '$lib/components/ui/dialog'
	import { Label } from '$lib/components/ui/label'
	import * as Select from '$lib/components/ui/select'
	import { transitionType } from '$lib/stores/presenter'
	import { MoreVertical } from 'lucide-svelte'
</script>

<Dialog.Root>
	<Dialog.Trigger
		><Button variant="ghost" size="icon">
			<MoreVertical />
		</Button></Dialog.Trigger
	>
	<Dialog.Content class="max-w-sm">
		<Dialog.Header>
			<Dialog.Title>Settings</Dialog.Title>
		</Dialog.Header>
		<div class="grid gap-4 py-4">
			<div class="grid grid-cols-2 items-center gap-4">
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
	</Dialog.Content>
</Dialog.Root>
