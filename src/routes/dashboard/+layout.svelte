<script>
	import AnimatedRoute from '$lib/components/AnimatedRoute.svelte'
	import AuthCheck from '$lib/components/AuthCheck.svelte'
	import DashboardNavbar from '$lib/ui/DashboardNavbar.svelte'
</script>

<DashboardNavbar />

<AnimatedRoute>
	<AuthCheck>
		<main class="px-6 py-4">
			<slot />
		</main>
	</AuthCheck>
</AnimatedRoute>
