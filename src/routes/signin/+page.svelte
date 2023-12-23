<script lang="ts">
	import { goto } from '$app/navigation'
	import MetaTags from '$lib/components/MetaTags.svelte'
	import { Button } from '$lib/components/ui/button'
	import * as Card from '$lib/components/ui/card'
	import { supabase } from '$lib/config/supabase'
	import { isUserAuthenticated } from '$lib/db/auth'
	import { ThemeSupa } from '@supabase/auth-ui-shared'
	import { Auth } from '@supabase/auth-ui-svelte'
	import { onMount } from 'svelte'

	onMount(async () => {
		if (await isUserAuthenticated()) goto('/dashboard')
	})
</script>

<MetaTags
	title="Riju | Create account or Sign in"
	description="Create a new account or Sign in if you are a existing user."
/>

<!-- ** Navbar ** -->
<nav class="fixed top-0 z-50 w-full p-2">
	<div class="max-w-6xl mx-auto flex justify-between">
		<Button variant="link" class="text-2xl font-semibold" href="/">Riju</Button>
		<Button
			variant="link"
			class="text-base font-semibold text-muted-foreground"
			href="/docs/contact">Contact</Button
		>
	</div>
</nav>

<section class="max-w-md mx-auto h-screen flex justify-center items-center">
	<Card.Root>
		<Card.Header>
			<Card.Title class="text-2xl">Create account / Sign in</Card.Title>
			<Card.Description
				>Tip: You can also sign in from this same page.</Card.Description
			>
		</Card.Header>
		<Card.Content>
			<Auth
				supabaseClient={supabase}
				view="magic_link"
				providers={['google']}
				redirectTo="https://riju.ai/dashboard"
				showLinks={false}
				appearance={{
					theme: ThemeSupa,
					variables: {
						default: {
							colors: {
								brand: 'hsl(222.2 47.4% 11.2%)',
								brandAccent: 'hsl(222.2 84% 4.9%)',
							},
						},
					},
				}}
			/>
		</Card.Content>
		<Card.Footer>
			<p class="text-xs text-muted-foreground">
				By clicking, you agree to the Riju <a
					class="underline"
					href="/docs/terms">Terms of Service</a
				>
				and <a class="underline" href="/docs/privacy">Privacy Policy</a>.
			</p>
		</Card.Footer>
	</Card.Root>
</section>
