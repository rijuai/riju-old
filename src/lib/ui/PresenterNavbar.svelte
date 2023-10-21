<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte'
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

<nav class="flex items-center justify-between px-3 py-2">
	<ul>
		<li>
			<a href="/">Riju</a>
		</li>
	</ul>
	<ul class="flex gap-2">
		<li>
			<Button
				variant="ghost"
				data-tooltip="Change Theme"
				data-placement="bottom"
				href="#change_theme=true"
				on:click={changeTheme}><Sparkles /> Change Theme</Button
			>
		</li>
		<li>
			<Button
				variant="ghost"
				data-tooltip="View Fullscreen"
				data-placement="bottom"
				href="#full_screen=true"
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
				data-tooltip="Exit"
				data-placement="bottom"
				on:click={() => {
					history.back()
				}}><X /></Button
			>
		</li>
	</ul>
</nav>
