<script lang="ts">
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

<nav class="container-fluid w-full">
	<ul>
		<li class="text-xl">
			<a class="text-xl" href="/">Riju</a>
		</li>
	</ul>
	<ul>
		<li>
			<a
				class="secondary"
				data-tooltip="Change Theme"
				data-placement="bottom"
				href="#change_theme=true"
				on:click={changeTheme}><Sparkles /> Theme</a
			>
		</li>
		<li>
			<a
				class="secondary"
				data-tooltip="View Fullscreen"
				data-placement="bottom"
				href="#full_screen=true"
				on:click={() => {
					let element = document.querySelector('.reveal')

					if (element !== null) {
						showFullScreen(element)
					}
				}}><Expand /></a
			>
		</li>
		<li>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<!-- svelte-ignore a11y-missing-attribute -->
			<a
				class="secondary cursor-pointer"
				data-tooltip="Exit"
				data-placement="bottom"
				on:click={() => {
					history.back()
				}}><X /></a
			>
		</li>
	</ul>
</nav>
