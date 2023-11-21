<script lang="ts">
	import { goto } from '$app/navigation'
	import MetaData from '$lib/components/MetaData.svelte'
	import Button from '$lib/components/ui/button/button.svelte'
	import * as Table from '$lib/components/ui/table'
	import {
		createPresentationUsingTemplate,
		getPresentations,
	} from '$lib/db/presentation'
	import { templates } from '$lib/utils/template'
	import { Loader } from 'lucide-svelte'
</script>

<MetaData title="Riju | Dashboard" description="Your presentations" />

<div class="w-full max-w-4xl mx-auto">
	<h5 class="mb-4 font-semibold text-muted-foreground">Templates</h5>
	<div class="grid grid-cols-4 gap-4 mb-8">
		{#each templates as { title, content }}
			<Button
				variant="outline"
				class="h-24"
				on:click={async () => {
					const presentationId = await createPresentationUsingTemplate(
						title,
						content,
					)

					goto(`/dashboard/editor/${presentationId}`)
				}}
			>
				{title}
			</Button>
		{/each}
	</div>
	{#await getPresentations()}
		<Loader class="fixed left-1/2 top-1/2 animate-spin" />
	{:then presentations}
		{#if presentations}
			<h5 class="mb-4 font-semibold text-muted-foreground">
				Your presentations
			</h5>
			<div class="max-w-4xl mx-auto">
				<Table.Root>
					<Table.Caption>A list of your recent presentations.</Table.Caption>
					<Table.Header>
						<Table.Row>
							<Table.Head class="w-[100px]">Sl. no.</Table.Head>
							<Table.Head>Title</Table.Head>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{#each presentations as { presentation_id, title }, index}
							<Table.Row
								class="cursor-pointer"
								on:click={() => goto(`/dashboard/editor/${[presentation_id]}`)}
							>
								<Table.Cell class="font-medium">{++index}</Table.Cell>
								<Table.Cell>{title}</Table.Cell>
							</Table.Row>
						{/each}
					</Table.Body>
				</Table.Root>
			</div>
		{/if}
	{:catch error}
		<p>Error: {error.message}</p>
	{/await}
</div>
