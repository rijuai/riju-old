<script>
	import Footer from '$lib/ui/Footer.svelte';
	import HomePageNavbar from '$lib/ui/HomePageNavbar.svelte';
</script>

<svelte:head>
	<title>Riju | Create presentations super fast</title>
	<meta
		name="description"
		content="Create presentations in seconds. Riju turns your words into stunning presentations. Our smart tech blends beauty and impact, perfect for impressing clients or inspiring students."
	/>
</svelte:head>

<main class="container-fluid">
	<HomePageNavbar />

	<section class="text-center max-w-2xl mx-auto space-y-14 mt-24 mb-28">
		<hgroup class="mb-14">
			<h1>Create Presentations in Seconds</h1>
			<p>
				You write thats all! Riju turns it all into stunning presentation. Our
				smart tech blends beauty and impact, perfect for impressing clients or
				inspiring students.
			</p>
		</hgroup>

		<div
			class="flex justify-center gap-3
	"
		>
			<a href="/login" role="button">Create Account</a>
			<a class="secondary outline" href="/dashboard" role="button">Dashboard</a>
		</div>
	</section>

	<!-- Video -->
	<section class="flex mb-20 lg:mb-32">
		<video
			class="w-full max-w-2xl mx-auto"
			src="https://www.screen.studio/videos/hero/hero-demo.mp4"
			controls
			autoplay
			muted
			loop
		>
			<track kind="captions" src="path/to/captions.vtt" label="English" />
		</video>
		<track kind="captions" src="path/to/captions.vtt" label="English" />
	</section>

	<!-- a -->
	<section class="max-w-4xl mx-auto">
		<article>
			<header>
				<h2>Lorem ipsum dolor sit amet.</h2>
			</header>
			<video
				class="w-full"
				src="https://www.screen.studio/videos/features/recording-widget.mp4"
			/>
		</article>
	</section>

	<!-- Cards -->
	<section class="flex max-w-4xl mx-auto">
		<article>
			<video
				class="w-full"
				src="https://www.screen.studio/videos/features/background-and-spacing.mp4"
				muted
				autoplay
				loop
			/>
		</article>
		<article class="bg-sky-600">
			<h2 class="text-center mb-14">Features</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure fuga,
				eum. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
			</p>
		</article>
	</section>
	<section class="flex max-w-4xl mx-auto">
		<article class="bg-sky-600">
			<h2 class="text-center mb-14">Features</h2>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis non
				nam impedit rem exercitationem. Lorem ipsum, dolor sit amet consectetur
				adipisicing elit.
			</p>
		</article>
		<article>
			<video
				class="w-full"
				src="https://www.screen.studio/videos/features/auto-zoom-on-clicks.mp4"
				muted
				autoplay
				loop
			/>
		</article>
	</section>

	<Footer />
</main>
