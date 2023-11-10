<script>
	import AuthCheck from '$lib/components/AuthCheck.svelte'
	import DashboardNavbar from '$lib/components/DashboardNavbar.svelte'
</script>

<DashboardNavbar />

<AuthCheck>
	<main class="px-6 py-4">
		<slot />
	</main>
</AuthCheck>
