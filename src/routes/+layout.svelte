<script lang="ts">
	import { page } from '$app/stores';
	import DashboardNavbar from '$lib/ui/DashboardNavbar.svelte';
	import HomePageNavbar from '$lib/ui/HomePageNavbar.svelte';
	import PresentViewNavbar from '$lib/ui/PresentViewNavbar.svelte';
	import '../app.css';
</script>

{#if $page.url.pathname.startsWith('/dashboard')}
	<DashboardNavbar />
{:else if $page.url.pathname.startsWith('/present')}
	<PresentViewNavbar />
{:else}
	<HomePageNavbar />
{/if}

<main class="p-4">
	<slot />
</main>
