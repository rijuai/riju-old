<script lang="ts">
	import AnimatedRoute from '$lib/components/AnimatedRoute.svelte';
	import DashboardNavbar from '$lib/ui/DashboardNavbar.svelte';
</script>

<svelte:head>
	<meta name="theme-color" content="#1B1B1B" />

	<!-- Pico CSS -->
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/@picocss/pico@next/css/pico.min.css"
	/>
</svelte:head>

<DashboardNavbar />

<AnimatedRoute>
	<main class="container-fluid">
		<slot />
	</main>
</AnimatedRoute>
