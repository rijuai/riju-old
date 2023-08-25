<script lang="ts">
	import { backgroundCssListStore } from '$lib/stores/backgroundCssList';
	import { currentBackgroundCssStore } from '$lib/stores/currentBackgroundCss';

	function changeThemeColor() {
		const bgCssList = $backgroundCssListStore;

		$currentBackgroundCssStore =
			bgCssList[Math.floor(Math.random() * bgCssList.length)];

		console.log('Current background color:', $currentBackgroundCssStore);
	}

	let showFullScreen = false;
</script>

<nav class="container-fluid fixed z-50 w-full">
	<ul>
		<li class="text-xl">
			<a href="/">Riju</a>
		</li>
	</ul>
	<ul>
		<li>
			<details class="dropdown">
				<summary
					><svg
						xmlns="http://www.w3.org/2000/svg"
						class="icon icon-tabler icon-tabler-dots-vertical"
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
						<path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
						<path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
						<path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
					</svg></summary
				>
				<ul dir="rtl">
					<li>
						<a href="#full-screen">Full Screen</a>
					</li>
					<li><a href="?print-pdf">PDF</a></li>
				</ul>
			</details>
		</li>
		<li>
			<button class="secondary" on:click={changeThemeColor}
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
				</svg>Theme</button
			>
		</li>
	</ul>
</nav>
