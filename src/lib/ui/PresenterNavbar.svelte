<script lang="ts">
	import { goto } from '$app/navigation'
	import FeedbackDialog from '$lib/components/FeedbackDialog.svelte'
	import ThemeSettingsPopup from '$lib/components/ThemeSettingsPopup.svelte'
	import { Button } from '$lib/components/ui/button'
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
	class="fixed top-0 w-full z-10 flex place-items-cente items-center justify-between px-2.5 py-2 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
	<Button variant="link" class="text-2xl" href="/">Riju</Button>
	<div class="flex gap-3">
		<FeedbackDialog />
		<ThemeSettingsPopup />
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
