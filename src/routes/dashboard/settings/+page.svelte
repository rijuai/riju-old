<script lang="ts">
	import { goto } from '$app/navigation'
	import MetaData from '$lib/components/MetaData.svelte'
	import { signOut } from '$lib/db/auth'
	import Card from '$lib/ui/Card.svelte'
</script>

<MetaData title="Riju | Settings" description="Settings" />

<section class="mx-auto max-w-sm">
	<Card title="Settings">
		<div class="flex justify-end">
			<button
				class="secondary"
				on:click={async () => {
					await signOut()
					goto('/')
				}}>Sign Out</button
			>
		</div>
	</Card>
</section>
