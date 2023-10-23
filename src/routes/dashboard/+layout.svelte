<script>
	import AnimatedRoute from '$lib/components/AnimatedRoute.svelte'
	import Auth from '$lib/components/Auth.svelte'
	import Banner from '$lib/ui/Banner.svelte'
	import DashboardNavbar from '$lib/ui/DashboardNavbar.svelte'
</script>

<Banner
	message="Riju is still in alpha so, you may experience bugs. Lot more AI themes, more
		features coming soon."
/> -->

<DashboardNavbar />

<AnimatedRoute>
	<Auth>
		<main class="px-6 py-4">
			<slot />
		</main>
	</Auth>
</AnimatedRoute>
