<script lang="ts">
	import AnimatedRoute from '$lib/components/AnimatedRoute.svelte';
	import Navbar from '$lib/ui/dashboard/Navbar.svelte';
</script>

<Navbar />

<AnimatedRoute>
	<div class="px-8 py-2">
		<slot />
	</div>
</AnimatedRoute>
