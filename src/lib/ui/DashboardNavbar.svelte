<script lang="ts">
	import { page } from '$app/stores';
</script>

<nav class="container-fluid">
	<ul>
		<li><a class="text-xl" href="/">Riju</a></li>
	</ul>
	<ul>
		{#if $page.url.pathname === '/dashboard/editor'}
			<li>
				<a class="secondary" href="/present" title="Present">
					<!-- Present Icon -->
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="icon icon-tabler icon-tabler-player-play-filled"
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
							d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z"
							stroke-width="0"
							fill="currentColor"
						/>
					</svg>
				</a>
			</li>
		{/if}
		{#if $page.url.pathname === '/editor'}
			<li>
				<a
					class="primary"
					href="/dashboard/editor"
					role="button"
					title="Create Presentation"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="icon icon-tabler icon-tabler-pencil-plus"
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
						<path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
						<path d="M13.5 6.5l4 4" />
						<path d="M16 19h6" />
						<path d="M19 16v6" />
					</svg>
					Create</a
				>
			</li>
		{/if}
	</ul>
</nav>
