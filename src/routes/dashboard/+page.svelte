<script lang="ts">
	import MetaData from '$lib/components/MetaData.svelte'
	import { getPresentations } from '$lib/db/presentation'
	import { Loader } from 'lucide-svelte'
</script>

<MetaData title="Riju | Dashboard" description="Your presentations" />

{#await getPresentations()}
	<Loader class="mx-auto animate-spin mt-8" />
{:then presentations}
	{#if presentations !== undefined && presentations.length > 0}
		<div class="grid grid-cols-5 gap-8">
			{#each presentations as { presentation_id, title }}
				<a href="/dashboard/editor?id={presentation_id}">
					<div class="w-full h-32 bg-zinc-200 rounded mb-2.5" />
					<p class="truncate text-[14px]">{title}</p>
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
