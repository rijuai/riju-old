<script lang="ts">
	import { Button } from '$lib/components/ui/button'
</script>

<nav
	class="sticky top-0 z-50 w-full py-2.5 px-2 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b"
>
	<div class="max-w-6xl mx-auto flex justify-between">
		<Button variant="link" class="text-2xl font-semibold" href="/">Riju</Button>
		<div class="flex gap-2.5 items-center">
			<Button
				variant="ghost"
				href="https://giant-anise-fba.notion.site/Riju-Change-log-327736186a0c4a4b92621a104569917f"
				class="hidden md:block">Change Log</Button
			>
			<Button variant="ghost" href="/docs/contact" class="hidden md:block"
				>Contact</Button
			>
			<Button variant="ghost" href="/signin" class="hidden md:block"
				>Sign In</Button
			>
			<Button href="/signin" class="gap-2">Get Started</Button>
		</div>
	</div>
</nav>
