<script lang="ts">
	import MetaData from '$lib/components/MetaData.svelte'
	import { getPresentations } from '$lib/db/presentation'
	import { onMount } from 'svelte'

	let presentations: Presentations = []

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

<MetaData title="Riju | Dashboard" description="Your presentations" />

{#await getPresentations()}
	<p class="text-center mt-4" aria-busy="true">Loading...</p>
{:then presentations}
	{#if presentations !== undefined && presentations.length > 0}
		<div class="grid grid-cols-5 gap-8">
			{#each presentations as presentation}
				<a href="/dashboard/editor?id={presentation.presentation_id}">
					<div class="w-full h-32 bg-zinc-200 rounded mb-2.5" />
					<p class="block truncate text-[14px]">{presentation.title}</p>
				</a>
			{/each}
		</div>
	{:else}
		<p class="max-w-md mx-auto text-center text-sm">
			No presentations found. Click on the "Create" button to create a new
			presentation.
		</p>
	{/if}
{:catch error}
	<p>Error: {error.message}</p>
{/await}
