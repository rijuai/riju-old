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

<section>
	<h1>Dashboard</h1>
	<div class="grid gap-4">
		{#each presentations as presentation}
			<a class="rounded-md no-underline" href="/dashboard/presentation">
				<img class="h-32 rounded-md" src={presentation.img_src} alt="" />
				<p class="text-xs font-semibold text-ellipsis text-zinc-300 pt-4">
					{presentation.title}
				</p>
			</a>
		{/each}
	</div>
</section>
