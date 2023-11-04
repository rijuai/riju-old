<script lang="ts">
	import { Button } from '$lib/components/ui/button'
</script>

<nav class="flex justify-between p-2.5">
	<Button variant="link" class="text-2xl" href="/">Riju</Button>
	<div class="flex gap-1.5 items-center">
		<Button variant="link" href="/docs/contact">Contact</Button>
		<Button variant="secondary" href="/login">Sign In</Button>
		<Button href="/login">Get started</Button>
	</div>
</nav>
