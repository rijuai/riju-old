<script>
	import DemoVideo from '$lib/assets/videos/riju-demo-05-10-2023.mp4'
	import MetaData from '$lib/components/MetaData.svelte'
	import Banner from '$lib/ui/Banner.svelte'
	import Footer from '$lib/ui/Footer.svelte'
	import BeautifulThemesVideo from '$lib/assets/videos/beautiful-themes.mp4'
	import HomePageNavbar from '$lib/ui/HomePageNavbar.svelte'
	import Button from '$lib/components/ui/button/button.svelte'
	import * as Card from '$lib/components/ui/card'
</script>

<MetaData
	title="Riju | Create presentations super fast"
	description="Create presentations in seconds. Riju turns your words into stunning presentations. Our smart tech blends beauty and impact, perfect for impressing clients or inspiring students."
/>

<HomePageNavbar />

<main class="mx-auto max-w-3xl">
	<!-- hero -->
	<section class="text-center max-w-2xl mx-auto mt-24 mb-28">
		<hgroup class="mb-14 space-y-4">
			<h1 class="text-4xl font-semibold">Create presentations in seconds</h1>
			<p class="text-lg">
				Just write content, Riju will convert it into beautiful presentation.
				Just like magic!
			</p>
		</hgroup>

		<div
			class="flex justify-center gap-3
	"
		>
			<Button href="/login">Create Account (Its Free)</Button>
		</div>
	</section>

	<!-- demo -->
	<section>
		<Card.Root>
			<Card.Header>
				<video class="w-full rounded" src={DemoVideo} muted loop autoplay />
			</Card.Header>
		</Card.Root>
	</section>

	<!-- cta -->
	<!-- <section class="my-24">
		<hgroup class="mb-8">
			<h2 class="text-center">Don't think. Just do It!</h2>
			<p class="text-center">(you won't regret it)</p>
		</hgroup>
		<div class="flex justify-center gap-3">
			<Button href="/login">Create Account (It's Free)</Button>
		</div>
	</section> -->

	<Footer />
</main>
