<script>
	import AnimatedRoute from '$lib/components/AnimatedRoute.svelte'
	import Auth from '$lib/components/Auth.svelte'
	import DashboardNavbar from '$lib/ui/DashboardNavbar.svelte'
</script>

<DashboardNavbar />

<Auth>
	<AnimatedRoute>
		<main class="container-fluid">
			<slot />
		</main>
	</AnimatedRoute>
</Auth>
