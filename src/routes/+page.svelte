<script lang="ts">
	import Navbar from '$lib/ui/Navbar.svelte';
</script>

<Navbar />

<section class="text-center py-8">
	<hgroup>
		<h1>Create Presentation In Seconds!</h1>
		<p class="mb-6">
			Riju is the super-fast way to create presentations without the hassle of
			drag-and-drop, alignment, etc.
		</p>
		<a href="/" role="button">Sign Up (waiting list)</a>
		<a class="secondar outline" href="/dashboard" role="button">Dashboard</a>
	</hgroup>

	<iframe
		class="w-full max-w-2xl h-80 mx-auto mt-8"
		src="https://www.youtube-nocookie.com/embed/H5Gj1W32Qao"
		title="YouTube video player"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		allowfullscreen
	/>
</section>
