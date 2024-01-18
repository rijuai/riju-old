<script lang="ts">
	import { Button } from '$lib/components/ui/button'
</script>

<nav
	class="sticky top-0 z-50 px-2 py-3 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/70"
>
	<div class="flex justify-between">
		<Button variant="link" class="text-2xl font-semibold" href="/">Riju</Button>
		<div class="flex gap-2 items-center">
			<Button variant="ghost" href="/docs/pricing" class="hidden md:block"
				>Pricing</Button
			>
			<Button variant="ghost" href="/docs/contact" class="hidden md:block"
				>Contact</Button
			>
			<Button variant="ghost" href="/signin" class="hidden md:block"
				>Log in</Button
			>
			<Button href="/signin" class="gap-2">Sign up</Button>
		</div>
	</div>
</nav>
