<script lang="ts">
import { goto } from '$app/navigation'
import { page } from '$app/state'
import { Button } from '$lib/components/ui/button'
import Play from 'lucide-svelte/icons/play'
</script>

<!-- Tally forms script -->
<svelte:head>
	<script defer async src="https://tally.so/widgets/embed.js"></script>
</svelte:head>

<nav
	class="sticky top-0 z-10 flex items-center justify-between gap-1 bg-white"
>
	<a class="text-xl" href="/dashboard">Riju</a>
	<div class="flex gap-2">
		<Button variant="link" href="/support">Support</Button>
		<Button variant="link" href="/docs">Docs</Button>
		<!-- Feedback button -->
		<Button
			variant="outline"
			data-tally-open="wAvyoN"
			data-tally-layout="modal"
			data-tally-emoji-text="👋"
			data-tally-emoji-animation="wave">Feedback</Button
		>
		{#key page.url.pathname}
			{#if page.url.pathname.includes('/editor')}
				<Button
					variant="secondary"
					on:click={() => {
						const presentationId = page.params.presentation_id

						goto(`/presenter/${presentationId}`)
					}}
				>
					<Play class="mr-1 size-4" />Present
				</Button>
			{/if}
			<!-- {#if page.url.pathname === '/dashboard'}
				<Button
					on:click={async () => {
						const data = {
							title: 'Untitled Presentation',
							creator: $userId,
						}

						const { id } = await pb.collection('presentations').create(data)

						goto(`/dashboard/editor/${id}`)
					}}
				>
					<PencilLine class="mr-2 size-4" />
					Create</Button
				>
			{/if} -->
		{/key}
	</div>
</nav>
