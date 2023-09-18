<script lang="ts">
	import { getPresentations } from '$lib/db/presentation'
	import { onMount } from 'svelte'

	let presentations: {
		presentation_id: string
		title: string
		preview_img_url: string
	}[] = []

	onMount(async () => {
		let data = await getPresentations()

		if (data) {
			data.forEach((presentation) => {
				presentations.push({
					presentation_id: presentation.presentation_id,
					title: presentation.title,
					preview_img_url: presentation.preview_img_url,
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

<section class="h-full">
	{#if presentations.length > 0}
		<div class="grid grid-cols-5 gap-8">
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
					<small class="block truncate">{presentation.title}</small>
				</a>
			{/each}
		</div>
	{:else}
		<p class="max-w-sm mx-auto text-center">
			No presentations found. Click on the "Create" button to create a new
			presentation.
		</p>
	{/if}
</section>
