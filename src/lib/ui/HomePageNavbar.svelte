<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte'
	import { Menu } from 'lucide-svelte'
	import { onMount } from 'svelte'

	let isMobile: boolean
	let deviceWidth = window.innerWidth

	onMount(() => {
		window.addEventListener('resize', () => {
			deviceWidth = window.innerWidth
			isMobile = deviceWidth < 768
		})
	})
</script>

<nav class="flex justify-between px-3 py-2.5">
	<ul>
		<li><a class="text-2xl" href="/">Riju</a></li>
	</ul>
	<ul class="flex gap-4 items-center">
		<li><a class="secondary" href="/docs/pricing">Pricing</a></li>
		<li><a class="secondary" href="/docs/contact">Contact</a></li>
		<li>
			<Button variant="outline" href="/dashboard" role="button">Dashboard</Button>
		</li>
	</ul>
</nav>
