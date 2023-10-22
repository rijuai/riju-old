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

<nav class="flex justify-between p-2">
	<ul>
		<li><Button variant="link" class="text-2xl" href="/">Riju.ai</Button></li>
	</ul>
	<ul class="flex gap-1 items-center">
		<li><Button variant="link" href="/docs/contact">Contact</Button></li>
		<li>
			<Button variant="outline" href="/dashboard" role="button"
				>Dashboard</Button
			>
		</li>
	</ul>
</nav>
