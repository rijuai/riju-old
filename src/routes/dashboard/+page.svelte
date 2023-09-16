<script lang="ts">
	import { getPresentations } from '$lib/db/presentation'
	import { onMount } from 'svelte'

	let presentations: {
		preview_img_url: string
		title: string
		presentation_id: string
	}[] = []

	onMount(async () => {
		let data = await getPresentations()

		// console.log('Presentations List', data)

		if (data) {
			data.forEach((presentation) => {
				presentations.push({
					preview_img_url: presentation.preview_img_url,
					title: presentation.title,
					presentation_id: presentation.presentation_id,
				})
			})

			presentations = presentations
		}
	})
</script>

<svelte:head>
	<title>Riju | Dashboard</title>
	<meta name="description" content="Your presentations" />
</svelte:head>

<section class="grid grid-cols-5 gap-8">
	{#if presentations.length}
		{#each presentations as presentation}
			<a
				class="contrast no-underline"
				href="/dashboard/editor?presentation_id={presentation.presentation_id}"
			>
				<img
					class="w-full h-24 max-h-24 bg-slate-300 rounded mb-4"
					src="https://source.unsplash.com/random/800x600"
					alt={presentation.title}
				/>
				<div class="text-base">{presentation.title}</div>
			</a>
		{/each}
	{/if}
</section>
