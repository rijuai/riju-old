<script lang="ts">
const links = [
	{ label: 'Blog', href: '/blog' },
	{ label: 'Terms of Service', href: '/terms.txt' },
	{ label: 'Privacy Policy', href: '/privacy.txt' },
	{ label: 'Contact', href: '/contact' }
]
</script>

<footer class="mt-auto border-t bg-background py-8">
	<div class="container mx-auto flex justify-center">
		<div class="flex gap-12">
			{#each links as {href, label}}
				<a {href} class="text-sm text-muted-foreground transition-colors hover:text-foreground">
					{label}
				</a>
			{/each}
		</div>
	</div>
</footer>
