<script lang="ts">
	import { goto } from '$app/navigation'
	import { Button } from '$lib/components/ui/button'
	import * as Dialog from '$lib/components/ui/dialog'
	import { Input } from '$lib/components/ui/input'
	import { Label } from '$lib/components/ui/label'
	import * as Select from '$lib/components/ui/select'
	import { Expand, X } from 'lucide-svelte'

	export let presentationId: string

	const showFullScreen = (element: Element) => {
		const requestFullScreen =
			element.requestFullscreen ||
			(element as any).mozRequestFullScreen ||
			(element as any).webkitRequestFullScreen ||
			(element as any).msRequestFullscreen

		requestFullScreen.call(element)
	}
</script>

<nav
	class="fixed w-full z-50 flex items-center justify-between px-2.5 py-2 bg-opacity-90 backdrop-blur-lg"
>
	<Button variant="link" class="text-2xl" href="/">Riju</Button>
	<div class="flex gap-3">
		<Dialog.Root>
			<Dialog.Trigger type="button">Change Theme</Dialog.Trigger>
			<Dialog.Content>
				<Dialog.Header>
					<Dialog.Title>Theme Settings</Dialog.Title>
				</Dialog.Header>
				<div class="grid gap-4 py-4">
					<div class="grid grid-cols-4 items-center gap-4">
						<Label class="text-right">Tranisition</Label>
						<Select.Root>
							<Select.Trigger class="w-[180px]">
								<Select.Value placeholder="Type" />
							</Select.Trigger>
							<Select.Content>
								<Select.Item value="light">None</Select.Item>
								<Select.Item value="dark">Slide</Select.Item>
								<Select.Item value="system">Zoom</Select.Item>
							</Select.Content>
						</Select.Root>
					</div>
					<div class="grid grid-cols-4 items-center gap-4">
						<Label class="text-right">Username</Label>
						<Input id="username" value="@peduarte" class="col-span-3" />
					</div>
				</div>
				<Dialog.Footer>
					<Button variant="outline">Reset</Button>
					<Button>Save Changes</Button>
				</Dialog.Footer>
			</Dialog.Content>
		</Dialog.Root>
		<Button
			variant="ghost"
			size="icon"
			on:click={() => {
				let element = document.querySelector('.reveal')

				if (element !== null) {
					showFullScreen(element)
				}
			}}><Expand /></Button
		>
		<Button
			variant="ghost"
			size="icon"
			on:click={() => {
				goto(`/dashboard/editor?id=${presentationId}`)
			}}><X /></Button
		>
	</div>
</nav>
