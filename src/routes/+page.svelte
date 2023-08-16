<script>
	import Footer from '$lib/ui/Footer.svelte';
</script>

<section class="text-center max-w-2xl mx-auto space-y-14 mt-24 mb-44">
	<hgroup class="mb-14">
		<h1>Create Presentations in Seconds</h1>
		<p>
			You write thats all! Riju turns it all into stunning presentation. Our
			smart tech blends beauty and impact, perfect for impressing clients or
			inspiring students.
		</p>
	</hgroup>

	<div
		class="max-w-xs mx-auto flex gap-3
	"
	>
		<a href="/login" role="button">Create Account</a>
		<a class="secondary outline" href="/dashboard" role="button">Dashboard</a>
	</div>
</section>

<!-- Video -->
<section class="flex mb-32">
	<video
		class="max-w-2xl mx-auto"
		src="https://www.screen.studio/videos/hero/hero-demo.mp4"
		controls
		autoplay
	>
		<track kind="captions" src="path/to/captions.vtt" label="English" />
	</video>
	<track kind="captions" src="path/to/captions.vtt" label="English" />
</section>

<Footer />
