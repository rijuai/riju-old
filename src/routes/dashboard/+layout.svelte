<script lang="ts">
	import AnimatedRoute from '$lib/components/AnimatedRoute.svelte';
	import DashboardNavbar from '$lib/ui/DashboardNavbar.svelte';
</script>

<DashboardNavbar />

<AnimatedRoute>
	<div class="px-4 lg:px-8 py-2">
		<slot />
	</div>
</AnimatedRoute>
