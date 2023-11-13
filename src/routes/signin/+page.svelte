<script lang="ts">
	import { goto } from '$app/navigation'
	import HomePageNavbar from '$lib/components/HomePageNavbar.svelte'
	import MetaData from '$lib/components/MetaData.svelte'
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

<MetaData
	title="Riju | Create account or Sign in"
	description="Create a new account or Sign in if you are a existing user."
/>

<HomePageNavbar />

<section class="max-w-md mx-auto mt-16">
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
				providers={['google', 'azure']}
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
			<p class="text-sm text-muted-foreground">
				By clicking, you agree to the Riju <a
					class="underline"
					href="/docs/terms">Terms of Service</a
				>
				and <a class="underline" href="/docs/privacy">Privacy Policy</a>.
			</p>
		</Card.Footer>
	</Card.Root>
</section>
