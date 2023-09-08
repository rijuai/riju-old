<script>
	import { changeTheme } from '$lib/stores/presenter'
	import { Expand, Sparkles, X } from 'lucide-svelte'

	const showFullScreen = () => {
		const element = document.querySelector('.reveal')

		const requestFullScreen =
			element.requestFullscreen ||
			element.mozRequestFullScreen ||
			element.webkitRequestFullScreen ||
			element.msRequestFullscreen

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
			<a class="secondary" href="#full_screen=true" on:click={showFullScreen}
				><Expand /></a
			>
		</li>
		<li>
			<a class="secondary" href="#change_theme=true" on:click={changeTheme}
				><Sparkles /> Theme</a
			>
		</li>
		<li>
			<a class="secondary" href="/dashboard/editor"><X /></a>
		</li>
	</ul>
</nav>
