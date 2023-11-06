<script lang="ts">
	import { Button } from '$lib/components/ui/button'
</script>

<nav
	class="sticky top-0 z-10 w-full flex justify-between py-2.5 px-2 max-w-6xl mx-auto bg-background/60 backdrop-blur"
>
	<Button variant="link" class="text-3xl font-semibold" href="/">Riju</Button>
	<div class="flex gap-2.5 items-center">
		<Button variant="link" href="/docs/contact">Contact</Button>
		<Button variant="link" href="/login">Sign In</Button>
		<Button href="/login">Get started</Button>
	</div>
</nav>
