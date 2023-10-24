<script>
	import DemoVideo from '$lib/assets/videos/riju-demo-05-10-2023.mp4'
	import MetaData from '$lib/components/MetaData.svelte'
	import Footer from '$lib/ui/Footer.svelte'
	import HomePageNavbar from '$lib/ui/HomePageNavbar.svelte'
	import * as Card from '$lib/components/ui/card'
	import { Button } from '$lib/components/ui/button'
</script>

<MetaData
	title="Riju | Create presentations super fast"
	description="Create presentations in seconds. Riju turns your words into stunning presentations. Our smart tech blends beauty and impact, perfect for impressing clients or inspiring students."
/>

<HomePageNavbar />

<main class="mx-auto max-w-4xl p-4">
	<!-- hero -->
	<section class="text-center max-w-4xl mx-auto">
		<h1 class="text-5xl mb-4">Create presentation in seconds</h1>
		<p class="mb-12 text-muted-foreground text-lg tracking-wide">
			Just write content, Riju will convert it into beautiful presentation. Just
			like magic!
		</p>

		<div
			class="flex justify-center gap-3
	"
		>
			<Button size="lg" href="/login" data-sveltekit-preload-data
				>Create Account (Its Free)</Button
			>
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

	<Footer />
</main>

<style lang="postcss">
	section {
		@apply my-40;
	}
</style>
