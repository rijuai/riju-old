<script lang="ts">
	import { Button } from '$lib/components/ui/button'
</script>

<nav
	class="sticky top-0 z-10 w-full py-2.5 px-2 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
	<div class="max-w-6xl mx-auto flex justify-between">
		<Button variant="link" class="text-3xl font-semibold" href="/">Riju</Button>
		<div class="flex gap-2.5 items-center">
			<Button variant="ghost" href="/docs/contact">Contact</Button>
			<Button variant="ghost" href="/signin">Sign In</Button>
			<Button href="/signin">Get started</Button>
		</div>
	</div>
</nav>
