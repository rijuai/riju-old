<script lang="ts">
	import MetaTags from '$lib/components/MetaTags.svelte'
	import { Button } from '$lib/components/ui/button'
	import { supabase } from '$lib/config/supabase'
	import { ThemeSupa } from '@supabase/auth-ui-shared'
	import { Auth } from '@supabase/auth-ui-svelte'
</script>

<MetaTags
	title="Riju | Create account or Sign in"
	description="Create a new account or Sign in if you are a existing user."
/>

<!-- ** Navbar ** -->
<nav class="fixed top-0 z-50 w-full p-2 left-1/2 transform -translate-x-1/2">
	<div class="max-w-7xl mx-auto flex justify-between">
		<Button variant="link" class="text-2xl font-semibold" href="/">Riju</Button>
		<Button
			variant="link"
			class="text-base font-semibold text-muted-foreground"
			href="/docs/contact">Contact</Button
		>
	</div>
</nav>

<section
	class="max-w-md mx-auto h-screen flex justify-center items-center px-4"
>
	<div class="w-full">
		<h1 class="text-xl font-semibold">Create account / Sign in</h1>
		<p class="text-muted-foreground mb-8">
			Tip: You can also sign in from this same page.
		</p>
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
		<p class="text-xs text-muted-foreground">
			By clicking, you agree to the Riju <a class="underline" href="/docs/terms"
				>Terms of Service</a
			>
			and <a class="underline" href="/docs/privacy">Privacy Policy</a>.
		</p>
	</div>
</section>
