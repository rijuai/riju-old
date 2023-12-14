<script>
	import { Button } from '$lib/components/ui/button'
	import { ChevronRight } from 'lucide-svelte'
</script>

<section class="max-w-l mx-auto text-center py-24 border-t">
	<div class="max-w-lg mx-auto">
		<h1 class="text-destructive mb-2">Hate Building Presentations?</h1>
		<!-- <h3 class="mb-8">Then switch to Riju</h3> -->
		<h4 class="mb-4">Then use Riju to build presentations in seconds.</h4>
		<div class="flex flex-col md:flex-row justify-center gap-4 mb-4">
			<Button size="lg" class="text-lg py-6" href="/signin"
				>Get Started<ChevronRight class="ml-2" /></Button
			>
		</div>
		<p class="text-muted-foreground">Saves 90% of your time</p>
	</div>
</section>
