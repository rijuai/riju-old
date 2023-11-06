<script lang="ts">
	import { goto } from '$app/navigation'
	import { page } from '$app/stores'
	import ChatBot from '$lib/components/ChatBot.svelte'
	import FeedbackDialog from '$lib/components/FeedbackDialog.svelte'
	import { Button } from '$lib/components/ui/button'
	import { createPresentation } from '$lib/db/presentation'
	import { userId } from '$lib/stores/user'
	import { PencilLine, Play, Settings } from 'lucide-svelte'

	const getPresentationId = (): string => {
		let presentationId = $page.url.searchParams.get('id') ?? ''
		return presentationId
	}
</script>

<nav
	class="sticky top-0 z-50 w-full flex gap-1 justify-between items-center p-2 bg-background/60 backdrop-blur"
>
	<Button variant="link" class="text-2xl" href="/dashboard">Riju</Button>
	<div class="flex gap-3">
		<FeedbackDialog />
		{#if $page.url.pathname === '/dashboard/editor'}
			<ChatBot />
			<Button
				variant="ghost"
				on:click={() => {
					let presentationId = getPresentationId()
					goto(`/present?id=${presentationId}`)
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
						$userId,
						'Untitled Presentation',
					)
					goto(`/dashboard/editor?id=${presentationId}`)
				}}
			>
				<PencilLine class="h-5 w-5 mr-2" />
				Create</Button
			>
		{/if}
	</div>
</nav>
