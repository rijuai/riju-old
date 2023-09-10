<script>
	let presentations = [
		{
			title: 'My first presentation',
			updatedAt: '2021-08-01',
			preview_img_url: 'https://picsum.photos/200/300',
		},
		{
			title: 'My second presentation',
			updatedAt: '2021-08-01',
			preview_img_url: 'https://picsum.photos/200/300',
		},
		{
			title: 'My third presentation',
			updatedAt: '2021-08-01',
			preview_img_url: 'https://picsum.photos/200/300',
		},
		{
			title: 'My first presentation',
			updatedAt: '2021-08-01',
			preview_img_url: 'https://picsum.photos/200/300',
		},
		{
			title: 'My second presentation',
			updatedAt: '2021-08-01',
			preview_img_url: 'https://picsum.photos/200/300',
		},
		{
			title: 'My third presentation',
			updatedAt: '2021-08-01',
			preview_img_url: 'https://picsum.photos/200/300',
		},
	]
</script>

<svelte:head>
	<title>Riju | Dashboard</title>
	<meta name="description" content="Your presentations" />
</svelte:head>

<section class="grid grid-cols-5 gap-6">
	{#each presentations as presentation}
		<a class="" href="#a">
			<img
				class="w-full max-h-24 rounded-sm mb-4"
				src={presentation.preview_img_url}
				alt={presentation.title}
			/>
			<div class="text-base">{presentation.title}</div>
		</a>
	{/each}
</section>
