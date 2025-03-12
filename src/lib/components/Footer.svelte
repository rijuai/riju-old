<script lang="ts">
// Footer component with links to legal pages
</script>

<footer class="bg-background border-t py-8 mt-auto">
	<div class="container mx-auto">
		<div class="flex flex-col md:flex-row justify-between items-center">
			<div class="mb-4 md:mb-0">
				<a href="/" class="text-xl font-semibold">Riju</a>
				<p class="text-muted-foreground text-sm mt-1">
					© {new Date().getFullYear()} Riju. All rights reserved.
				</p>
			</div>

			<div class="flex gap-6">
				<a
					href="/terms.txt"
					class="text-sm text-muted-foreground hover:text-foreground transition-colors"
				>
					Terms of Service
				</a>
				<a
					href="/privacy.txt"
					class="text-sm text-muted-foreground hover:text-foreground transition-colors"
				>
					Privacy Policy
				</a>
			</div>
		</div>
	</div>
</footer>
