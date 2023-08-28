<script lang="ts">
	import { currentTheme, themes } from '$lib/stores/presenter';

	function changeThemeColor() {
		const bgCssList = $themes;

		$currentTheme = bgCssList[Math.floor(Math.random() * bgCssList.length)];

		console.log('Current background color:', $currentTheme);
	}
</script>

<nav class="container-fluid fixed z-50 w-full">
	<ul>
		<li class="text-xl">
			<a class="text-xl" href="/">Riju</a>
		</li>
	</ul>
	<ul>
		<li>
			<a class="secondary" href="#change-theme" on:click={changeThemeColor}
				><svg
					xmlns="http://www.w3.org/2000/svg"
					class="icon icon-tabler icon-tabler-sparkles"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke="currentColor"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path
						d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6z"
					/>
				</svg>Theme</a
			>
		</li>
		<li>
			<a class="secondary" href="/dashboard/presentation"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					class="icon icon-tabler icon-tabler-x"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke="currentColor"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M18 6l-12 12" />
					<path d="M6 6l12 12" />
				</svg></a
			>
		</li>
	</ul>
</nav>
