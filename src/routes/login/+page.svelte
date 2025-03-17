<script lang="ts">
import { goto } from '$app/navigation'
import MetaTags from '$lib/components/MetaTags.svelte'
import Button from '$lib/components/ui/button/button.svelte'
import Input from '$lib/components/ui/input/input.svelte'
import { Label } from '$lib/components/ui/label/index.js'
import supabase from '$lib/supabase'
import Loader from 'lucide-svelte/icons/loader'
import Navbar from './Navbar.svelte'

let email = $state('')
let password = $state('')
let errorMessage = $state('')
let isLoading = $state(false)

const signInUsingEmailAndPassword = async (event: SubmitEvent) => {
	event.preventDefault()
	try {
		isLoading = true
		errorMessage = ''

		if (!email || !password) {
			errorMessage = 'Please fill in all fields'
			isLoading = false
			return
		}

		const { data, error } = await supabase.auth.signInWithPassword({
			email,
			password
		})

		if (error) {
			console.error('Error during login:', error.message)
			errorMessage = error.message || 'Failed to sign in'
			isLoading = false
			return
		}

		// After successful login, redirect to dashboard
		goto('/dashboard')
	} catch (err) {
		console.error('Unexpected error during login:', err)
		errorMessage = 'An unexpected error occurred'
		isLoading = false
	}
}
</script>

<MetaTags
	title="Riju | Login"
	description="Sign in if you are a existing user."
/>

<Navbar />

<section
	class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm"
>
	<form class="p-6 space-y-6" onsubmit={signInUsingEmailAndPassword}>
		<h2>Create / Login</h2>
		
		<div class="space-y-4">
			<Label for="email">Email</Label>
			<Input type="email" required bind:value={email} />

			<Label for="password">Password</Label>
			<Input type="password" required bind:value={password} />

			{#if errorMessage}
				<p class="text-red-500 text-sm">{errorMessage}</p>
			{/if}
		</div>

		<Button class="w-full" type="submit" disabled={isLoading}>
			{#if isLoading}
				<Loader class="h-4 w-4 animate-spin mr-2" />
			{:else}
				Continue
			{/if}
		</Button>
	</form>
</section>
