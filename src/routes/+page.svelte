<script lang="ts">
	import DemoVideo from '$lib/assets/videos/riju-demo-muted.mp4'
	import CallToAction from '$lib/components/CallToAction.svelte'
	import Footer from '$lib/components/Footer.svelte'
	import HomePageNavbar from '$lib/components/HomePageNavbar.svelte'
	import MetaTags from '$lib/components/MetaTags.svelte'
	import { Button } from '$lib/components/ui/button'
	import * as Card from '$lib/components/ui/card'
	import { ArrowRight, Layout, Pointer, Rocket } from 'lucide-svelte'

	const steps = [
		{
			title: 'Step 1',
			description:
				'Write your content in the editor. Riju will automatically convert it into a well-structured and visually appealing presentation.',
		},
		{
			title: 'Step 2',
			description:
				'Choose from over 100+ stunning themes. With a single click, you can switch themes, ensuring that your presentation aligns perfectly with your message and audience.',
		},
		{
			title: 'Step 3',
			description:
				'Export your presentation as a PDF or share it with others via a link. You can also embed your presentation on your website or blog.',
		},
	]
</script>

<MetaTags
	title="Super fast and easy-to-use alternative to Microsoft PowerPoint"
	description="Create presentations in seconds. Riju turns your words into stunning presentations. Our smart tech blends beauty and impact, perfect for impressing clients or inspiring students."
/>

<HomePageNavbar />

<main class="mx-auto max-w-6xl px-4">
	<!-- ** HERO SECTION ** -->
	<section class="text-center max-w-3xl mx-auto">
		<h1 class="text-5xl leading-tight font-bold mb-4">
			Create presentations in seconds
		</h1>
		<p
			class="lg:px-12 font-normal text-muted-foreground text-xl leading-normal mb-8"
		>
			Riju is a lightning-fast, user-friendly presentation builder which does
			all the formatting, styling for you.
		</p>
		<div class="flex flex-col md:flex-row justify-center gap-4 mb-2">
			<Button size="lg" class="text-lg py-6" href="/signin"
				>Get Started<ArrowRight class="ml-2" /></Button
			>
		</div>
		<p class="text-sm text-muted-foreground">No credit card required</p>
	</section>

	<!-- ** DEMO VIDEO ** -->
	<section class="max-w-4xl mx-auto">
		<video class="rounded-lg shadow-xl" src={DemoVideo} muted loop autoplay />
	</section>

	<!-- ** Cards ** -->
	<section class="max-w-5xl mx-auto">
		<h2 class="text-cente">Why Use Riju?</h2>
		<p class="text-cente max-w-xl mx-aut text-muted-foreground mb-12">
			Creating presentations can be a pain and takes a lot of time, thats why
			Riju is designed to be super-fast and easy-to-use, so you can create
			presentations in seconds.
		</p>

		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
			<Card.Root>
				<Card.Header>
					<Rocket class="size-8 mb-2" />
					<Card.Title class="tracking-tight font-medium"
						>Rapid presentation creation</Card.Title
					>
					<Card.Description class="text-base">
						Riju allows users to create presentations in a matter of seconds.
						Simply write your content, and Riju will automatically convert it
						into a well-structured and visually appealing presentation.
					</Card.Description>
				</Card.Header>
			</Card.Root>
			<Card.Root>
				<Card.Header>
					<Pointer class="size-8 mb-2" />
					<Card.Title class="tracking-tight font-medium"
						>Effortless theme customization</Card.Title
					>
					<Card.Description class="text-base">
						Changing presentation themes has never been easier. With Riju, you
						can switch themes with a single click, ensuring that your
						presentation aligns perfectly with your message and audience.
					</Card.Description>
				</Card.Header>
			</Card.Root>
			<Card.Root>
				<Card.Header>
					<Layout class="size-8 mb-2" />
					<Card.Title class="tracking-tight font-medium"
						>User-friendly interface</Card.Title
					>
					<Card.Description class="text-base">
						Our intuitive interface ensures that anyone, regardless of their
						technical skills, can create captivating presentations effortlessly.
					</Card.Description>
				</Card.Header>
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

	<!-- ** FEATURED ** -->
	<!-- <section>
		<h3 class="text-center text-muted-foreground mb-8">Featured On</h3>
		<div class="flex flex-co justify-center items-center gap-8 max-h">
			<img
				class="h-14 w-auto"
				src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=427150&theme=light"
				alt="Riju - Super&#0032;fast&#0032;&#0038;&#0032;easy&#0045;to&#0045;use&#0032;alternative&#0032;to&#0032;Microsoft&#0032;PowerPoint | Product Hunt"
			/>
			<img class="h-24" src={PaddleLaunchPadImage} alt="" />
		</div>
	</section> -->

	<CallToAction />

	<Footer />
</main>

<style lang="postcss">
	section {
		@apply my-16 lg:my-44;
	}

	h2 {
		@apply text-4xl font-bold mb-6;
	}
</style>
