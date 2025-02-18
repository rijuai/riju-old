<script lang="ts">
import { goto } from '$app/navigation'
import { page } from '$app/state'
import MetaTags from '$lib/components/MetaTags.svelte'
import { Button } from '$lib/components/ui/button'
import Input from '$lib/components/ui/input/input.svelte'
import pb from '$lib/pocketbase'

let fullName = $state('')
let email = $state('')
let password = $state('')

const signUpUsingEmailAndPassword = async () => {
	const data = {
		name: fullName,
		email,
		password,
		passwordConfirm: password
	}

	await pb.collection('users').create(data)
	await pb.collection('users').authWithPassword(email, password)
	await pb.collection('users').requestVerification(email)

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

<section class="mx-auto flex h-screen max-w-md items-center justify-center px-4">
	<div class="space-y-6">
		<h2 class="mb-4">Create an account</h2>
		<Input type="text" placeholder="Full name" bind:value={fullName} />
		<Input type="email" placeholder="Email" bind:value={email} />
		<Input type="password" placeholder="Password" bind:value={password} />
		<Button class="w-full" on:click={signUpUsingEmailAndPassword}>Continue</Button>
		<p class="text-muted-foreground mb-12 text-xs">
			By clicking, you agree to Riju <a class="underline" href="/docs/terms">Terms of Service</a>
			and <a class="underline" href="/docs/privacy">Privacy Policy</a>.
		</p>
		<p class="text-center text-sm">
			Already have an account <a class="underline" href="/login">Login</a>
		</p>
	</div>
</section>
