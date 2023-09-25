<script lang="ts">
	import { Menu } from 'lucide-svelte'
	import { onMount } from 'svelte'
	import Banner from './Banner.svelte'

	let isMobile: boolean
	let deviceWidth = window.innerWidth

	onMount(() => {
		window.addEventListener('resize', () => {
			deviceWidth = window.innerWidth
			isMobile = deviceWidth < 768
		})
	})
</script>

<Banner />
<nav class="container-fluid">
	<ul>
		<li><a class="text-xl" href="/">Riju</a></li>
	</ul>
	<ul>
		{#if isMobile}
			<li class="lg:hidden">
				<details class="dropdown block md::hidden">
					<summary><Menu /></summary>
					<ul dir="rtl">
						<li><a href="/dashboard">Dashboard</a></li>
						<li><a href="/docs/contact">Contact</a></li>
					</ul>
				</details>
			</li>
		{:else}
			<li><a href="/docs/pricing">Pricing</a></li>
			<li><a href="/docs/contact">Contact</a></li>
			<li>
				<a class="secondary" href="/dashboard" role="button">Dashboard</a>
			</li>
		{/if}
	</ul>
</nav>
