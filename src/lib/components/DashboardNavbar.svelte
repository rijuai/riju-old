<script lang="ts">
	import { goto } from '$app/navigation'
	import { page } from '$app/stores'
	import FeedbackDialog from '$lib/components/FeedbackDialog.svelte'
	import { Button } from '$lib/components/ui/button'
	import { createPresentation } from '$lib/db/presentation'
	import { PencilLine, Play, Settings } from 'lucide-svelte'
</script>

<nav
	class="sticky top-0 z-10 w-full flex gap-1 justify-between items-center p-2 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b"
>
	<Button variant="link" class="text-2xl" href="/dashboard">Riju</Button>
	<div class="flex gap-3">
		<FeedbackDialog />
		{#if $page.url.pathname.includes('/editor')}
			<Button
				variant="secondary"
				on:click={() => {
					const presentationId = $page.params.presentation_id

					goto(`/presenter/${presentationId}`)
				}}
			>
				<Play class="h-5 w-5 mr-1" />Present
			</Button>
		{/if}
		{#if $page.url.pathname === '/dashboard'}
			<Button variant="ghost" size="icon" href="/dashboard/settings"
				><Settings class="h-5 w-5" /></Button
			>
			<Button
				on:click={async () => {
					const presentationId = await createPresentation(
						'Untitled Presentation',
					)
					goto(`/dashboard/editor/${presentationId}`)
				}}
			>
				<PencilLine class="h-5 w-5 mr-2" />
				Create</Button
			>
		{/if}
	</div>
</nav>
