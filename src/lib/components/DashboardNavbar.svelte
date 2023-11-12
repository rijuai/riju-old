<script lang="ts">
	import { goto } from '$app/navigation'
	import { page } from '$app/stores'
	import ChatBot from '$lib/components/ChatBot.svelte'
	import FeedbackDialog from '$lib/components/FeedbackDialog.svelte'
	import { Button } from '$lib/components/ui/button'
	import { createPresentation } from '$lib/db/presentation'
	import { userId } from '$lib/stores/user'
	import { PencilLine, Play, Settings } from 'lucide-svelte'
</script>

<nav
	class="sticky top-0 z-10 w-full flex gap-1 justify-between items-center p-2 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
	<Button variant="link" class="text-2xl" href="/dashboard">Riju</Button>
	<div class="flex gap-3">
		<FeedbackDialog />
		{#if $page.url.pathname.includes('/editor')}
			<ChatBot />
			<Button
				variant="ghost"
				on:click={() => {
					let presentationId = $page.params.presentation_id
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
					console.log(`$userId: ${$userId}`)
					const createdPresentationId = await createPresentation(
						'Untitled Presentation',
					)
					goto(`/dashboard/editor/${createdPresentationId}`)
				}}
			>
				<PencilLine class="h-5 w-5 mr-2" />
				Create</Button
			>
		{/if}
	</div>
</nav>
