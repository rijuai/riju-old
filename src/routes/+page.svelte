<script lang="ts">
	import PaddleLaunchPadImage from '$lib/assets/images/paddle-launchpad-finalist-sm.webp'
	import DemoVideo from '$lib/assets/videos/riju-demo-muted.mp4'
	import CallToAction from '$lib/components/CallToAction.svelte'
	import Footer from '$lib/components/Footer.svelte'
	import HomePageNavbar from '$lib/components/HomePageNavbar.svelte'
	import MetaTags from '$lib/components/MetaTags.svelte'
	import { Button } from '$lib/components/ui/button'
	import * as Card from '$lib/components/ui/card'
	import { ChevronRight, PlusCircle } from 'lucide-svelte'

	const cards = [
		{
			title: 'Rapid Presentation Creation',
			description:
				'Riju allows users to create presentations in a matter of seconds. Simply write your content, and Riju will automatically convert it into a well-structured and visually appealing presentation.',
		},
		{
			title: 'Effortless Theme Customization',
			description:
				'Changing presentation themes has never been easier. With Riju, you can switch themes with a single click, ensuring that your presentation aligns perfectly with your message and audience.',
		},
		{
			title: 'Hyper Speed',
			description:
				"Riju is designed for efficiency. You'll be amazed at how quickly you can produce high-quality presentations, saving you valuable time.",
		},
		{
			title: 'User-Friendly Interface',
			description:
				'Our intuitive interface ensures that anyone, regardless of their technical skills, can create captivating presentations effortlessly.',
		},
	]

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

<main class="mx-auto max-w-5xl px-4">
	<HomePageNavbar />

	<!-- ** HERO SECTION ** -->
	<section class="text-center max-w-3xl mx-auto">
		<h1 class="text-5xl leading-tight font-semibold mb-6">
			Super Fast
			<span class="text-destructive">Presentation Creator</span>
		</h1>
		<p class="lg:px-12 text-muted-foreground text-xl leading-normal mb-12">
			Riju is a super-simple & super-fast presentation builder that lets you
			create stunning presentations in seconds. Say goodbye to boring
			drag-and-drop and choose from over 100+ stunning themes.
		</p>

		<div class="flex flex-col md:flex-row justify-center gap-4 mb-2">
			<Button
				size="lg"
				class="text-lg py-6 bg-gradient-to-br from-purple-600 to-blue-600"
				href="/signin">Get Started<ChevronRight class="ml-2" /></Button
			>
		</div>
		<p class="text-muted-foreground">Saves 90% of your time</p>
	</section>

	<!-- ** DEMO VIDEO ** -->
	<section class="max-w-4xl mx-auto">
		<video
			id="demo-video"
			class="rounded-lg shadow-xl"
			src={DemoVideo}
			muted
			loop
			autoplay
		/>
	</section>

	<!-- ** CARDS ** -->
	<section>
		<h2 class="text-center">Why Use Riju?</h2>
		<p class="text-center max-w-2xl mx-auto text-muted-foreground mb-12">
			Creating presentations can be a pain and takes a lot of time, thats why
			Riju is designed to be super-fast and easy-to-use, so you can create
			presentations in seconds.
		</p>

		<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
			{#each cards as { title, description }}
				<Card.Root>
					<Card.Header>
						<PlusCircle class="h-8 w-8 text-muted-foreground" />
						<Card.Title class="text-2xl tracking-tight">{title}</Card.Title>
						<Card.Description class="text-base">{description}</Card.Description>
					</Card.Header>
				</Card.Root>
			{/each}
		</div>
	</section>

	<section>
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
	</section>

	<!-- ** FEATURED ** -->
	<section>
		<h3 class="text-center text-muted-foreground mb-8">Featured On</h3>
		<div class="flex flex-co justify-center items-center gap-8 max-h">
			<img
				class="h-14 w-auto"
				src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=427150&theme=light"
				alt="Riju - Super&#0032;fast&#0032;&#0038;&#0032;easy&#0045;to&#0045;use&#0032;alternative&#0032;to&#0032;Microsoft&#0032;PowerPoint | Product Hunt"
			/>
			<img class="h-24" src={PaddleLaunchPadImage} alt="" />
		</div>
	</section>

	<CallToAction />

	<Footer />
</main>

<style lang="postcss">
	section {
		@apply my-16 lg:my-28;
	}

	h2 {
		@apply text-4xl font-bold mb-6;
	}
</style>
