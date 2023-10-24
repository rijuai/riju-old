<script lang="ts">
	import { Button } from '$lib/components/ui/button'
	import { changeTheme } from '$lib/stores/presenter'
	import { Expand, Sparkles, X } from 'lucide-svelte'

	const showFullScreen = (element: Element) => {
		const requestFullScreen =
			element.requestFullscreen ||
			(element as any).mozRequestFullScreen ||
			(element as any).webkitRequestFullScreen ||
			(element as any).msRequestFullscreen

		requestFullScreen.call(element)
	}
</script>

<nav class="flex items-center justify-between px-2.5 py-2">
	<ul>
		<li>
			<Button variant="link" class="text-2xl" href="/">Riju</Button>
		</li>
	</ul>
	<ul class="flex gap-2">
		<li>
			<Button variant="ghost" on:click={changeTheme}
				><Sparkles /> Change Theme</Button
			>
		</li>
		<li>
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
		</li>
		<li>
			<Button
				variant="ghost"
				size="icon"
				on:click={() => {
					history.back()
				}}><X /></Button
			>
		</li>
	</ul>
</nav>
