<script lang="ts">
import { goto } from '$app/navigation'
import MetaTags from '$lib/components/MetaTags.svelte'
import Button from '$lib/components/ui/button/button.svelte'
import Input from '$lib/components/ui/input/input.svelte'
import supabase from '$lib/supabase'

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

<nav
	class="fixed left-1/2 top-0 z-10 w-full -translate-x-1/2 transform px-4 py-2"
>
	<div class="flex justify-between">
		<Button variant="link" class="text-xl" href="/">Riju</Button>
		<Button variant="link" href="/contact">Contact</Button>
	</div>
</nav>

<section
	class="mx-auto flex h-screen max-w-md items-center justify-center px-4"
>
	<div class="space-y-6">
		<h2>Login</h2>
		<form onsubmit={signInUsingEmailAndPassword} class="space-y-6">
			<Input type="email" placeholder="Email" bind:value={email} />
			<Input
				type="password"
				placeholder="Password"
				bind:value={password}
			/>

			{#if errorMessage}
				<p class="text-red-500 text-sm">{errorMessage}</p>
			{/if}

			<Button type="submit" class="w-full" disabled={isLoading}>
				{isLoading ? "Signing in..." : "Continue"}
			</Button>
		</form>
	</div>
</section>
