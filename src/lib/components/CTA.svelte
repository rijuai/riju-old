<script lang="ts">
import { Button } from '$lib/components/ui/button'
import ChevronRight from 'lucide-svelte/icons/chevron-right'
</script>

<section class="px-4 py-24 text-center">
	<div class="mx-auto max-w-2xl">
		<h2>Presentations reimagined!</h2>
		<p class="text-muted-foreground mb-16 text-xl">
			Building presentations with Riju is as simple as one-two-three.
		</p>
		<div class="space-y-4">
			<Button href="/signup" size="lg"
				>Get Started<ChevronRight class="ml-2 size-4" /></Button
			>
			<p class="text-muted-foreground">
				No credit card required. Fully free.
			</p>
		</div>
	</div>
</section>
