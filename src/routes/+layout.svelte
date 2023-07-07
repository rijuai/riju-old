<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/Navbar.svelte';
</script>

<Navbar />

<main class="p-6 max-w-7xl mx-auto">
	<slot />
</main>
