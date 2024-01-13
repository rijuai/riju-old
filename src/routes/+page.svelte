<script lang="ts">
	import DemoVideo from '$lib/assets/videos/riju-demo-muted.mp4'
	import CallToAction from '$lib/components/CallToAction.svelte'
	import Footer from '$lib/components/Footer.svelte'
	import HomePageNavbar from '$lib/components/HomePageNavbar.svelte'
	import MetaTags from '$lib/components/MetaTags.svelte'
	import { Button } from '$lib/components/ui/button'
	import * as Card from '$lib/components/ui/card'
	import { ArrowRight, Layout, Pointer, Rocket } from 'lucide-svelte'
</script>

<MetaTags
	title="Super fast and easy-to-use alternative to Microsoft PowerPoint"
	description="Create presentations in seconds. Riju turns your words into stunning presentations. Our smart tech blends beauty and impact, perfect for impressing clients or inspiring students."
/>
<HomePageNavbar />

<main class="mx-auto max-w-7xl">
	<!-- ** Hero ** -->
	<section class="text-center max-w-4xl mx-auto">
		<h1 class="mb-6 text-black">The simplest way to create presentations</h1>
		<p
			class="font-normal text-muted-foreground text-2xl leading-normal mb-12 mx-auto max-w-2xl"
		>
			Say goodbye to boring presentations. Meet Riju — the free, intuitive
			presentation builder you’ve been looking for.
		</p>
		<div class="flex flex-col md:flex-row justify-center gap-4 mb-2.5">
			<Button size="lg" class="text-lg py-6" href="/signin"
				>Get Started<ArrowRight class="ml-2" /></Button
			>
		</div>
		<p class="text-sm text-muted-foreground">No credit card required</p>
	</section>

	<!-- ** Demo Video ** -->
	<section class="max-w-5xl mx-auto">
		<video class="rounded-lg shadow-xl" src={DemoVideo} muted loop autoplay />
	</section>

	<!-- ** Cards ** -->
	<section class="max-w-5xl mx-auto">
		<h2 class="mb-12">
			Focus on the content, <br /> not on the formatting
		</h2>

		<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
			<Card.Root>
				<Card.Header>
					<Rocket class="size-8 mb-2" />
					<Card.Title>Rapid presentation creation</Card.Title>
				</Card.Header>
				<Card.Content>
					Simply write your content, and Riju will automatically convert it into
					a well-structured and visually appealing presentation.
				</Card.Content>
			</Card.Root>
			<Card.Root>
				<Card.Header>
					<Pointer class="size-8 mb-2" />
					<Card.Title>Effortless theme customization</Card.Title>
				</Card.Header>
				<Card.Content>
					<p>
						With Riju, you can switch themes with a single click, ensuring that
						your presentation aligns perfectly with your message and audience.
					</p>
				</Card.Content>
			</Card.Root>
			<Card.Root>
				<Card.Header>
					<Layout class="size-8 mb-2" />
					<Card.Title>User-friendly interface</Card.Title>
				</Card.Header>
				<Card.Content>
					<p>
						Our intuitive interface ensures that anyone, regardless of their
						technical skills, can create captivating presentations effortlessly.
					</p>
				</Card.Content>
			</Card.Root>
		</div>
	</section>

	<!-- ** How it works ** -->
	<!-- <section>
		<h2 class="text-center">How It Works?</h2>
		<p class="text-center text-muted-foreground max-w-lg mx-auto mb-8">
			Creating presentations in Riju is as easy as 1-2-3.
		</p>
		<div class="grid grid-cols-1 lg:grid-cols-1 gap-8 max-w-lg mx-auto">
			{#each steps as { title, description }}
				<Card.Root>
					<Card.Header>
						<Card.Title class="text-xl tracking-tight">{title}</Card.Title>
						<Card.Description class="text-base">{description}</Card.Description>
					</Card.Header>
				</Card.Root>
			{/each}
		</div>
	</section> -->

	<CallToAction />
	<Footer />
</main>

<style lang="postcss">
	section {
		@apply px-4 my-16 lg:my-44;
	}
</style>
