<script>
	import { Button } from '$lib/components/ui/button'
	import { ChevronRight } from 'lucide-svelte'
</script>

<section class="max-w-l mx-auto text-center py-32">
	<div class="max-w-2xl mx-auto">
		<h1 class="text-5xl font-bold mb-4">Presentations reimagined!</h1>
		<p class="text-2xl text-muted-foreground mb-12">
			Building presentations with Riju is as simple as one-two-three.
		</p>
		<div class="flex flex-col md:flex-row justify-center gap-4 mb-3">
			<Button size="lg" class="text-lg py-6" href="/signin"
				>Get Started<ChevronRight class="ml-2" /></Button
			>
		</div>
		<p class="text-sm text-muted-foreground">No credit card required</p>
	</div>
</section>
