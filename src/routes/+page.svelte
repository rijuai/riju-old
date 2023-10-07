<script>
	import demo from '$lib/assets/videos/riju-demo-05-10-2023.mp4'
	import MetaData from '$lib/components/MetaData.svelte'
	import Footer from '$lib/ui/Footer.svelte'
	import HomePageNavbar from '$lib/ui/HomePageNavbar.svelte'
</script>

<MetaData
	title="Riju | Create presentations super fast"
	description="Create presentations in seconds. Riju turns your words into stunning presentations. Our smart tech blends beauty and impact, perfect for impressing clients or inspiring students."
/>

<HomePageNavbar />

<main class="mx-auto max-w-2xl">
	<!-- hero -->
	<section class="text-center max-w-2xl mx-auto space-y-14 mt-24 mb-28">
		<hgroup>
			<h1>Create Presentation in Seconds</h1>
			<p>
				Just write content, Riju will convert it into beautiful presentation.
			</p>
		</hgroup>

		<div
			class="flex justify-center gap-3
	"
		>
			<a href="/login" role="button">Create Account (Its Free)</a>
		</div>
	</section>

	<!-- demo -->
	<section>
		<article>
			<video class="w-full" src={demo} muted autoplay loop />
		</article>
	</section>

	<!-- cards -->
	<section>
		<div class="grid grid-cols-1">
			<article>
				<header>
					<h3>🚀 Super Fast</h3>
					<p>
						You just write your content. Thats all! Riju will turn it into a
						beautiful masterpiece in no time. Our smart tech blends beauty and
						impact, perfect for impressing clients or inspiring students.
					</p>
				</header>
				<main>
					<h3>👌 Beautiful Themes</h3>
					<p>
						Unique AI generated beautiful themes. Now no more same old themes
						for all your presentations.
					</p>
				</main>
			</article>
		</div>
	</section>

	<!-- cta -->
	<section>
		<hgroup>
			<h2 class="text-center">Don't think. Just do It!</h2>
			<h3 class="text-center">(you won't regret it)</h3>
		</hgroup>
		<div class="flex justify-center gap-3">
			<a href="/login" role="button">Create Account (It's Free)</a>
		</div>
	</section>

	<Footer />
</main>
