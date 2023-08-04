<script lang="ts">
	import Navbar from '$lib/ui/Navbar.svelte';
</script>

<Navbar />

<section class="text-center py-8">
	<hgroup class="mb-10">
		<h1>Create Presentation In Seconds!</h1>
		<p class="mb-6">
			Riju is the super-fast way to create presentations without the hassle of
			drag-and-drop, alignment, etc.
		</p>
		<a href="/" role="button">Sign Up (waiting list)</a>
		<a class="secondar outline" href="/dashboard" role="button">Dashboard</a>
	</hgroup>

	<iframe
		class="h-80 aspect-video"
		title="as"
		src="https://customer-m033z5x00ks6nunl.cloudflarestream.com/b236bde30eb07b9d01318940e5fc3eda/iframe?poster=https%3A%2F%2Fcustomer-m033z5x00ks6nunl.cloudflarestream.com%2Fb236bde30eb07b9d01318940e5fc3eda%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600"
		style="border: none;"
		allow="autoplay; encrypted-media;"
	/>
</section>

<style>
	@import 'https://cdn.jsdelivr.net/npm/@picocss/pico@2.0.0-alpha1/css/pico.min.css';
</style>
