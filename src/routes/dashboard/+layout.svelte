<script lang="ts">
	import AnimatedRoute from '$lib/components/AnimatedRoute.svelte';
	import DashboardNavbar from '$lib/ui/DashboardNavbar.svelte';
</script>

<DashboardNavbar />

<AnimatedRoute>
	<main class="container-fluid">
		<slot />
	</main>
</AnimatedRoute>
