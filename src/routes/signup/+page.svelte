<script lang="ts">
import { goto } from '$app/navigation'
import MetaTags from '$lib/components/MetaTags.svelte'
import { Button } from '$lib/components/ui/button'
import Input from '$lib/components/ui/input/input.svelte'
import supabase from '$lib/supabase'

let fullName = $state('')
let email = $state('')
let password = $state('')

const signUpUsingEmailAndPassword = async () => {
	// Create a new user with Supabase
	const { data, error } = await supabase.auth.signUp({
		email,
		password,
		options: {
			data: {
				name: fullName
			}
		}
	})

	if (error) {
		console.error('Error during signup:', error.message)
		return
	}

	// After successful signup, redirect to dashboard
	goto('/dashboard')
}
</script>

<MetaTags title="Riju | Sign up" description="Create a new account." />

<nav class="fixed left-1/2 top-0 z-10 w-full -translate-x-1/2 transform px-3 py-2">
	<div class="flex justify-between">
		<Button variant="link" class="text-xl" href="/">Riju</Button>
		<Button variant="link" href="/contact">Contact</Button>
	</div>
</nav>

<section class="mx-auto max-w-x flex h-screen  items-center justify-center px-4">
	<div class="space-y-6">
		<h2 class="mb-4">Create an account</h2>
		<Input type="text" placeholder="Full name" bind:value={fullName} />
		<Input type="email" placeholder="Email" bind:value={email} />
		<Input type="password" placeholder="Password" bind:value={password} />
		<Button class="w-full" onclick={signUpUsingEmailAndPassword}>Continue</Button>
	</div>
</section>
