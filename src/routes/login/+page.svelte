<script lang="ts">
	import MetaData from '$lib/components/MetaData.svelte'
	import * as Alert from '$lib/components/ui/alert'
	import Button from '$lib/components/ui/button/button.svelte'
	import * as Card from '$lib/components/ui/card'
	import Input from '$lib/components/ui/input/input.svelte'
	import { signInWithMagicLink } from '$lib/db/auth'
	import HomePageNavbar from '$lib/ui/HomePageNavbar.svelte'

	let email: string,
		isEmailSent = false,
		showLoader = false
</script>

<MetaData title="Riju | Sign In" description="Sign In" />

<HomePageNavbar />

<section class="max-w-md mx-auto mt-8">
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
		</Card.Content>
		<Card.Footer>
			<Button
				size="lg"
				class="w-full"
				disabled={isEmailSent}
				on:click={async () => {
					isEmailSent = await signInWithMagicLink(email)
				}}
				>Continue
			</Button>
		</Card.Footer>
	</Card.Root>

	{#if isEmailSent}
		<Alert.Root class="mt-4">
			<Alert.Title>Success!</Alert.Title>
			<Alert.Description>
				An email has been sent for verification. Please click on that email link
				to acccess dashboard.
			</Alert.Description>
		</Alert.Root>
	{/if}
</section>
