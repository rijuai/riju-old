<script lang="ts">
	let presentations = [
		{
			title: 'Riju - Create presentations in 100 seconds',
			img_src:
				'https://pub-4b7e6ea7988748b6a1371a8dac387999.r2.dev/‎presentation-1.‎001.jpeg',
		},
		{
			title: 'Riju- Sales Pitch',
			img_src:
				'https://pub-4b7e6ea7988748b6a1371a8dac387999.r2.dev/‎presentation-2.‎001.jpeg',
		},
	];
</script>

<svelte:head>
	<title>Riju | Dashboard</title>
	<meta name="description" content="Your presentations" />
</svelte:head>

<section>
	<div class="grid grid-cols-5 gap-6">
		{#each presentations as presentation}
			<a class="rounded-md no-underline" href="/dashboard/presentation">
				<img class="w-full rounded-md" src={presentation.img_src} alt="" />
				<p class="text-xs font-semibold truncate text-zinc-400 pt-4">
					{presentation.title}
				</p>
			</a>
		{/each}
	</div>
</section>
