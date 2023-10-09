<script lang="ts">
	import { goto } from '$app/navigation'
	import { page } from '$app/stores'
	import { createPresentation } from '$lib/db/presentation'
	import { userId } from '$lib/stores/user'
	import { PencilLine, Play, Settings } from 'lucide-svelte'
</script>

<nav class="container-fluid">
	<ul>
		<li><a class="text-xl" href="/dashboard">Riju</a></li>
		<li>
			<a class="secondary" href="/dashboard/settings"><Settings /></a>
		</li>
	</ul>
	<ul>
		{#if $page.url.pathname === '/dashboard/editor'}
			<li>
				<a class="secondary" href="/present" title="Present">
					<Play />
				</a>
			</li>
		{/if}
		{#if $page.url.pathname === '/dashboard'}
			<li>
				<!-- svelte-ignore a11y-missing-attribute -->
				<!-- svelte-ignore a11y-interactive-supports-focus -->
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<a
					class="primary"
					role="button"
					on:click={async () => {
						const presentationId = await createPresentation(
							$userId,
							'Untitled Presentation',
						)

						goto(`/dashboard/editor?id=${presentationId}`)
					}}
				>
					<PencilLine />
					Create</a
				>
			</li>
		{/if}
	</ul>
</nav>
