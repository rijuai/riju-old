<script lang="ts">
	import GoogleLogo from '$lib/assets/images/google-logo.svg'
	import MicrosoftLogo from '$lib/assets/images/microsoft-logo.svg'
	import MetaData from '$lib/components/MetaData.svelte'
	import * as Alert from '$lib/components/ui/alert'
	import Button from '$lib/components/ui/button/button.svelte'
	import * as Card from '$lib/components/ui/card'
	import Input from '$lib/components/ui/input/input.svelte'
	import { Label } from '$lib/components/ui/label'
	import {
		signInWithGooogle,
		signInWithMagicLink,
		signInWithMicrosoft,
	} from '$lib/db/auth'
	import HomePageNavbar from '$lib/ui/HomePageNavbar.svelte'

	let email: string,
		isEmailSent = false
</script>

<MetaData title="Riju | Sign In" description="Sign In" />

<HomePageNavbar />

<section class="max-w-md mx-auto mt-8">
	{#if isEmailSent}
		<Alert.Root class="mt-6">
			<Alert.Title class="text-xl">Success!</Alert.Title>
			<Alert.Description>
				An email has been sent for verification. Please click on that email link
				to acccess dashboard.
			</Alert.Description>
		</Alert.Root>
	{:else}
		<Card.Root>
			<Card.Header class="space-y-1">
				<Card.Title class="text-2xl">Create an account</Card.Title>
				<Card.Description>
					You can also sign in from this same page.
				</Card.Description>
			</Card.Header>
			<Card.Content class="grid gap-4">
				<div class="flex flex-col gap-6">
					<Button
						variant="outline"
						on:click={async () => {
							signInWithGooogle()
						}}
						><img class="h-5 w-5 mr-2" src={GoogleLogo} alt="Google logo" />Sign
						in with Google</Button
					>
					<Button
						variant="outline"
						on:click={async () => {
							signInWithMicrosoft()
						}}
						><img
							class="h-5 w-5 mr-2"
							src={MicrosoftLogo}
							alt="Google logo"
						/>Sign in with Microsoft</Button
					>
				</div>
				<div class="relative">
					<div class="absolute inset-0 flex items-center">
						<span class="w-full border-t" />
					</div>
					<div class="relative flex justify-center text-xs uppercase">
						<span class="bg-card px-2 text-muted-foreground">
							Or continue with
						</span>
					</div>
				</div>
				<div class="grid gap-2">
					<Label for="email">Email</Label>
					<Input
						id="email"
						type="email"
						placeholder="me@example.com"
						disabled={isEmailSent}
						bind:value={email}
					/>
				</div>
				<p class="text-sm text-muted-foreground">
					By clicking, you agree to the Riju <a
						class="underline"
						href="/docs/terms">Terms of Service</a
					>
					and <a class="underline" href="/docs/privacy">Privacy Policy</a>.
				</p>
			</Card.Content>
			<Card.Footer>
				<Button
					class="w-full"
					disabled={isEmailSent}
					on:click={async () => {
						isEmailSent = true
						isEmailSent = await signInWithMagicLink(email)
					}}>{isEmailSent ? 'Loading...' : 'Create account'}</Button
				>
			</Card.Footer>
		</Card.Root>
	{/if}
</section>
