<script lang="ts">
	import { goto } from '$app/navigation'
	import MetaData from '$lib/components/MetaData.svelte'
	import { Button } from '$lib/components/ui/button'
	import * as Card from '$lib/components/ui/card'
	import { Input } from '$lib/components/ui/input'
	import { Label } from '$lib/components/ui/label'
	import { getUserEmail, signOut } from '$lib/db/auth'
	import { onMount } from 'svelte'

	let userEmail: string

	onMount(async () => {
		userEmail = (await getUserEmail()) ?? ''
	})
</script>

<MetaData title="Riju | Settings" description="Settings" />

<Card.Root class="max-w-md mx-auto">
	<Card.Header>
		<Card.Title>Settings</Card.Title>
	</Card.Header>
	<Card.Content>
		<Label>Email Address</Label>
		<Input type="email" disabled bind:value={userEmail} />
	</Card.Content>
	<Card.Footer class="flex justify-end">
		<Button
			on:click={async () => {
				await signOut()
				goto('/')
			}}>Sign Out</Button
		>
	</Card.Footer>
</Card.Root>
