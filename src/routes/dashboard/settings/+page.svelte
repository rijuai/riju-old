<script lang="ts">
	import { goto } from '$app/navigation'
	import MetaTags from '$lib/components/MetaTags.svelte'
	import { Button } from '$lib/components/ui/button'
	import * as Card from '$lib/components/ui/card'
	import { Input } from '$lib/components/ui/input'
	import { Label } from '$lib/components/ui/label'
	import { supabase } from '$lib/config/supabase'
	import { onMount } from 'svelte'

	let email: string

	const getUserEmail = async (): Promise<string | null> => {
		const { data } = await supabase.auth.getSession()
		const userEmail = data.session?.user.email

		return userEmail ? userEmail : null
	}

	const signOut = async (): Promise<boolean> => {
		const { error } = await supabase.auth.signOut()

		return error ? false : true
	}

	onMount(async () => {
		email = (await getUserEmail()) ?? ''
	})
</script>

<MetaTags title="Riju | Settings" description="Settings" />

<Card.Root class="max-w-md mx-auto">
	<Card.Header>
		<Card.Title>Settings</Card.Title>
	</Card.Header>
	<Card.Content class="space-y-4">
		<div>
			<Label class="block mb-2">Email Address</Label>
			<Input type="email" disabled bind:value={email} />
			<p class="text-sm text-muted-foreground mt-1">
				To change email address contact us.
			</p>
		</div>
		<div class="flex text-sm">
			Do you want to sign out? Then <a
				class="ml-1 underline text-blue-500"
				href="/"
				on:click={async () => {
					await signOut()
					goto('/')
				}}>click here</a
			>.
		</div>
	</Card.Content>
	<Card.Footer class="flex justify-end gap-3">
		<Button
			variant="outline"
			on:click={() => {
				goto('/dashboard')
			}}>Cancel</Button
		>
		<Button>Save Changes</Button>
	</Card.Footer>
</Card.Root>
