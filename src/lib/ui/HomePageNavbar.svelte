<script lang="ts">
	import { Button } from '$lib/components/ui/button'
</script>

<nav class="flex justify-between p-2.5">
	<ul>
		<li><Button variant="link" class="text-2xl" href="/">Riju.ai</Button></li>
	</ul>
	<ul class="flex gap-1 items-center">
		<li><Button variant="link" href="/docs/contact">Contact</Button></li>
		<li>
			<Button variant="secondary" href="/dashboard" role="button"
				>Dashboard</Button
			>
		</li>
	</ul>
</nav>
