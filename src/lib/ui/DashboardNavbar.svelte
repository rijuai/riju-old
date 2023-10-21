<script lang="ts">
	import { goto } from '$app/navigation'
	import { page } from '$app/stores'
	import Button from '$lib/components/ui/button/button.svelte'
	import { createPresentation } from '$lib/db/presentation'
	import { userId } from '$lib/stores/user'
	import { PencilLine, Play, Settings } from 'lucide-svelte'

	const getPresentationId = (): string => {
		let presentationId = $page.url.searchParams.get('id') ?? ''
		return presentationId
	}
</script>

<nav class="flex justify-between items-center px-4 py-3 gap-4">
	<ul class="flex items-center gap-4">
		<li><a class="text-2xl" href="/dashboard">Riju</a></li>
		<li>
			<a class="secondary" href="/dashboard/settings"><Settings /></a>
		</li>
	</ul>
	<ul class="flex gap-4">
		{#if $page.url.pathname === '/dashboard/editor'}
			<li>
				<Button
					variant="ghost"
					title="Present"
					on:click={() => {
						let presentationId = getPresentationId()
						goto(`/present?id=${presentationId}`)
					}}
				>
					<Play /> Present
				</Button>
			</li>
		{/if}
		{#if $page.url.pathname === '/dashboard'}
			<li>
				<Button
					on:click={async () => {
						const presentationId = await createPresentation(
							$userId,
							'Untitled Presentation',
						)

						goto(`/dashboard/editor?id=${presentationId}`)
					}}
				>
					<PencilLine class="mr-2 h-5 w-5" />
					Create</Button
				>
			</li>
		{/if}
	</ul>
</nav>
