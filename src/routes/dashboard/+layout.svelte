<script lang="ts">
	import AnimatedRoute from '$lib/components/AnimatedRoute.svelte';
</script>

<AnimatedRoute>
	<div class="px-4 lg:px-8 py-2">
		<slot />
	</div>
</AnimatedRoute>
