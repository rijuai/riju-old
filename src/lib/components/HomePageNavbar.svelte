<script lang="ts">
import { Button } from '$lib/components/ui/button'
</script>

<nav
	class="bg-background/95 supports-[backdrop-filter]:bg-background/70 sticky top-0 z-50 mx-auto px-4 py-2 backdrop-blur"
>
	<div class="flex justify-between">
		<a class="text-xl font-semibold" href="/"> Riju</a>
		<div class="flex items-center gap-2">
			<Button variant="ghost" href="/docs/roadmap" class="hidden md:block"
				>Roadmap</Button
			>
			<Button variant="ghost" href="/contact" class="hidden md:block"
				>Contact</Button
			>
			<Button variant="ghost" href="/login">Log in</Button>
			<Button href="/signup">Sign up</Button>
		</div>
	</div>
</nav>
