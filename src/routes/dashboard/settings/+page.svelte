<script lang="ts">
	import { goto } from '$app/navigation'
	import MetaData from '$lib/components/MetaData.svelte'
	import { getUserEmail, signOut } from '$lib/db/auth'
	import Card from '$lib/ui/Card.svelte'
	import { onMount } from 'svelte'

	let userEmail: string

	onMount(async () => {
		userEmail = await getUserEmail()
	})
</script>

<MetaData title="Riju | Settings" description="Settings" />

<main class="mx-auto max-w-md">
	<Card title="Settings">
		<label>
			Email
			<input
				type="email"
				autocomplete="email"
				aria-label="Email"
				disabled
				bind:value={userEmail}
			/>
		</label>
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
</main>
