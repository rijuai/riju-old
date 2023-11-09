<script lang="ts">
	import MetaData from '$lib/components/MetaData.svelte'
	import { getPresentations } from '$lib/db/presentation'
	import { Loader } from 'lucide-svelte'
</script>

<MetaData title="Riju | Dashboard" description="Your presentations" />

{#await getPresentations()}
	<Loader class="fixed left-1/2 top-1/2 animate-spin" />
{:then presentations}
	{#if presentations !== undefined}
		<div class="grid grid-cols-5 gap-8">
			{#each presentations as { presentation_id, title }}
				<a href="/dashboard/editor?id={presentation_id}">
					<div class="w-full h-32 bg-zinc-200 rounded mb-2.5" />
					<p class="truncate text-[14px]">{title}</p>
				</a>
			{:else}
				<div
					class="fixed top-1/2 left-1/2 transform -translate-x-1/2 text-sm text-muted-foreground"
				>
					No presentations found. Click on the "Create" button to create a new
					presentation.
				</div>
			{/each}
		</div>
	{/if}
{:catch error}
	<p>Error: {error.message}</p>
{/await}
