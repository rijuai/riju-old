<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/ui/Navbar.svelte';
</script>

<Navbar />

<main class="py-6 px-8 mx-auto">
	<slot />
</main>
