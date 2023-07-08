<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/Navbar.svelte';
</script>

<Navbar />

<main class="py-2 max-w-7xl mx-auto">
	<slot />
</main>
