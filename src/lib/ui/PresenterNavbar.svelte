<script lang="ts">
	import { goto } from '$app/navigation'
	import { Button } from '$lib/components/ui/button'
	import * as Dialog from '$lib/components/ui/dialog'
	import { Label } from '$lib/components/ui/label'
	import * as Select from '$lib/components/ui/select'
	import { changeTheme, transitionType } from '$lib/stores/presenter'
	import { Expand, MoreVertical, Sparkles, X } from 'lucide-svelte'

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
	class="fixed w-full z-50 flex items-center justify-between px-2.5 py-2 bg-transparent bg-opacity-90 backdrop-blur-lg"
>
	<Button variant="link" class="text-2xl" href="/">Riju</Button>
	<div class="flex gap-1.5">
		<Dialog.Root>
			<Dialog.Trigger type="button"><MoreVertical /></Dialog.Trigger>
			<Dialog.Content>
				<Dialog.Header>
					<Dialog.Title>Theme Settings</Dialog.Title>
				</Dialog.Header>
				<div class="grid gap-4 py-4">
					<div class="grid grid-cols-4 items-center gap-4">
						<Label>Tranisition</Label>
						<Select.Root
							selected={$transitionType}
							onSelectedChange={(value) => {
								$transitionType = value?.value ?? 'slide'
							}}
						>
							<Select.Trigger class="">
								<Select.Value placeholder="Slide" />
							</Select.Trigger>
							<Select.Content>
								<Select.Item value="none">None</Select.Item>
								<Select.Item value="slide">Slide</Select.Item>
								<Select.Item value="zoom">Zoom</Select.Item>
								<Select.Item value="concave">Concave</Select.Item>
								<Select.Item value="convex">Convex</Select.Item>
							</Select.Content>
						</Select.Root>
					</div>
				</div>
			</Dialog.Content>
		</Dialog.Root>
		<Button variant="ghost" on:click={changeTheme}
			><Sparkles class="mr-2" />Change Theme</Button
		>
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
