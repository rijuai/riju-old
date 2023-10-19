<script>
	import Auth from '$lib/components/Auth.svelte'
	import Banner from '$lib/ui/Banner.svelte'
	import DashboardNavbar from '$lib/ui/DashboardNavbar.svelte'
</script>

<DashboardNavbar />

<Auth>
	<main class="container-fluid">
		<slot />
	</main>
</Auth>
