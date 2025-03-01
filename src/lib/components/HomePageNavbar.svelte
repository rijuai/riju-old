<script lang="ts">
import { Button } from '$lib/components/ui/button'
</script>

<nav
	class="bg-background/95 supports-[backdrop-filter]:bg-background/70 sticky top-0 z-50 mx-auto py-2 backdrop-blur"
>
	<div class="flex justify-between">
		<a class="text-2xl font-semibold" href="/">Riju</a>
		<div class="flex items-center gap-4">
			<Button variant="ghost" href="/login">Log in</Button>
			<Button href="/signup">Sign up</Button>
		</div>
	</div>
</nav>
