<script>
	import DemoVideo from '$lib/assets/videos/riju-demo-05-10-2023.mp4'
	import MetaData from '$lib/components/MetaData.svelte'
	import Banner from '$lib/ui/Banner.svelte'
	import Footer from '$lib/ui/Footer.svelte'
	import BeautifulThemesVideo from '$lib/assets/videos/beautiful-themes.mp4'
	import HomePageNavbar from '$lib/ui/HomePageNavbar.svelte'
</script>

<MetaData
	title="Riju | Create presentations super fast"
	description="Create presentations in seconds. Riju turns your words into stunning presentations. Our smart tech blends beauty and impact, perfect for impressing clients or inspiring students."
/>

<HomePageNavbar />

<main class="mx-auto max-w-3xl">
	<!-- hero -->
	<section class="text-center max-w-2xl mx-auto mt-24 mb-28">
		<hgroup class="mb-8">
			<h1>Create presentations in seconds</h1>
			<p>
				Just write content, Riju will convert it into beautiful presentation.
				Just like magic!
			</p>
		</hgroup>

		<div
			class="flex justify-center gap-3
	"
		>
			<a role="button" href="/login">Create Account (Its Free)</a>
			<a class="secondary" role="button" href="/live-demo">Live Demo</a>
		</div>
	</section>

	<!-- demo -->
	<section>
		<article>
			<video class="w-full rounded" src={DemoVideo} muted loop autoplay />
		</article>
	</section>

	<!-- cards -->
	<section>
		<div class="grid grid-cols-3">
			<article>
				<!-- <header> -->
				<h3>🚀 Super Fast</h3>
				<p>
					You just write your content. Thats all! Riju will turn it into a
					beautiful masterpiece in no time. Our smart tech blends beauty and
					impact, perfect for impressing clients or inspiring students.
				</p>
				<!-- </header> -->
			</article>
			<article class="col-span-2">
				<video
					class="w-full rounded mb-6"
					src={BeautifulThemesVideo}
					muted
					loop
					autoplay
				/>
				<!-- <h3>👌 Beautiful Themes</h3>
				<p>
					Unique AI generated beautiful themes. Now no more same old themes for
					all your presentations.
				</p> -->
			</article>
		</div>

		<div class="grid grid-cols-10">
			<article class="col-span-6">
				<video
					class="w-full rounded mb-6"
					src={BeautifulThemesVideo}
					muted
					loop
					autoplay
				/>
			</article>
			<article class="col-span-4">
				<h3>👌 Beautiful Themes</h3>
				<p>
					Unique AI generated beautiful themes. Now no more same old themes for
					all your presentations.
				</p>
			</article>
		</div>
	</section>

	<!-- cta -->
	<section class="my-24">
		<hgroup class="mb-8">
			<h2 class="text-center">Don't think. Just do It!</h2>
			<p class="text-center">(you won't regret it)</p>
		</hgroup>
		<div class="flex justify-center gap-3">
			<a class="contras" role="button" href="/login"
				>Create Account (It's Free)</a
			>
			<a class="secondary" role="button" href="/live-demo">Live Demo</a>
		</div>
	</section>

	<Footer />
</main>

<style>
	/* :global(:root) {
		background-image: linear-gradient(
			45deg,
			rgb(140, 85, 250) 0%,
			rgb(200, 215, 253) 75%,
			rgb(143, 230, 243) 100%
		);
		@apply scroll-smooth;
	} */

	article {
		/* @apply bg-transparent blur-sm; */
	}
</style>
