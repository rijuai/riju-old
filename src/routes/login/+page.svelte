<script lang="ts">
	import MetaData from '$lib/components/MetaData.svelte'
	import * as Alert from '$lib/components/ui/alert'
	import Button from '$lib/components/ui/button/button.svelte'
	import * as Card from '$lib/components/ui/card'
	import Input from '$lib/components/ui/input/input.svelte'
	import { signInWithGooogle, signInWithMagicLink } from '$lib/db/auth'
	import HomePageNavbar from '$lib/ui/HomePageNavbar.svelte'

	let email: string,
		isEmailSent = false
</script>

<MetaData title="Riju | Sign In" description="Sign In" />

<HomePageNavbar />

<section class="max-w-md mx-auto mt-8">
	{#if isEmailSent}
		<Alert.Root class="mt-6">
			<Alert.Title>Success!</Alert.Title>
			<Alert.Description>
				An email has been sent for verification. Please click on that email link
				to acccess dashboard.
			</Alert.Description>
		</Alert.Root>
	{:else}
		<Card.Root>
			<Card.Header>
				<Card.Title>Sign In</Card.Title>
				<Card.Description
					>You can login and signup from this same page.</Card.Description
				>
			</Card.Header>
			<Card.Content>
				<Input
					type="email"
					placeholder="Email"
					disabled={isEmailSent}
					bind:value={email}
				/>
				<p class="text-sm text-muted-foreground">
					By clicking below, you agree to the Riju <a
						class="underline"
						href="/docs/terms">Terms of Service</a
					>
					and <a class="underline" href="/docs/privacy">Privacy Policy</a>.
				</p>
			</Card.Content>
			<Card.Footer class="grid grid-cols-1 gap-4">
				<Button
					disabled={isEmailSent}
					on:click={async () => {
						isEmailSent = true
						isEmailSent = await signInWithMagicLink(email)
					}}
					>{isEmailSent ? 'Loading...' : 'Continue'}
				</Button>
				<p class="text-center">OR</p>
				<Button
					variant="destructive"
					on:click={async () => {
						signInWithGooogle()
					}}>Sign in with Google</Button
				>
			</Card.Footer>
		</Card.Root>
	{/if}
</section>
