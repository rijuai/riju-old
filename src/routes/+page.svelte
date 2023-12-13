<script lang="ts">
	import DemoVideo from '$lib/assets/videos/riju-demo-muted.mp4'
	import CallToAction from '$lib/components/CallToAction.svelte'
	import Footer from '$lib/components/Footer.svelte'
	import HomePageNavbar from '$lib/components/HomePageNavbar.svelte'
	import MetaTags from '$lib/components/MetaTags.svelte'
	import { Button } from '$lib/components/ui/button'
	import { ChevronRight } from 'lucide-svelte'
</script>

<MetaTags
	title="Super fast and easy-to-use alternative to Microsoft PowerPoint"
	description="Create presentations in seconds. Riju turns your words into stunning presentations. Our smart tech blends beauty and impact, perfect for impressing clients or inspiring students."
/>

<main class="mx-auto max-w-6xl">
	<HomePageNavbar />

	<!-- ** HERO SECTION ** -->
	<section class="text-center max-w-4xl mx-auto">
		<div class="flex justify-center mb-6">
			<img
				src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=427150&theme=light"
				alt="Riju - Super&#0032;fast&#0032;&#0038;&#0032;easy&#0045;to&#0045;use&#0032;alternative&#0032;to&#0032;Microsoft&#0032;PowerPoint | Product Hunt"
				style="width: 250px; height: 54px;"
				width="250"
				height="54"
			/>
		</div>
		<h1 class="text-5xl leading-tight font-extrabold mb-6">
			Super Fast & Super Simple <span class="text-destructive"
				>Presentation Creator</span
			>
		</h1>
		<p class="lg:px-12 text-muted-foreground text-xl leading-normal mb-12">
			Riju is a super-fast presentation builder that lets you create stunning
			presentations in seconds. Say goodbye to boring drag-and-drop and choose
			from over 100+ stunning themes.
		</p>

		<div class="flex flex-col md:flex-row justify-center gap-4 mb-2">
			<Button size="lg" class="text-lg py-6" href="/signin"
				>Get Started<ChevronRight class="ml-2" /></Button
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

	<!-- letter -->
	<section
		class="prose lg:prose-lg prose-p:text-lg prose-p:text-muted-foreground prose-p:leading-relaxed mx-auto"
	>
		<h2>It's time to ditch Microsoft PowerPoint</h2>

		<p>
			Microsoft PowerPoint, often time-consuming and overkill for most users,
			can be a real productivity drain with its excessive features and limited
			themes, often overwhelming users and making the simplest of tasks
			unnecessarily complicated.
		</p>

		<p>
			Hey there! I'm super excited to tell you about Riju, a product that I
			created after spending countless hours at hackathons. I needed a way to
			build presentations quickly and efficiently, and Riju was born. Winning
			six out of thirteen hackathons showed me just how important impactful
			presentations are for innovative ideas.
		</p>

		<p>
			<strong>Riju</strong> is more than just a presentation builder; it's a game-changer.
			Here are some of its key features:
		</p>

		<h3>Rapid Presentation Creation</h3>
		<p>
			Riju allows users to create presentations in a matter of seconds. Simply
			write your content, and Riju will automatically convert it into a
			well-structured and visually appealing presentation.
		</p>

		<h3>Effortless Theme Customization</h3>
		<p>
			Changing presentation themes has never been easier. With Riju, you can
			switch themes with a single click, ensuring that your presentation aligns
			perfectly with your message and audience.
		</p>

		<h3>Hyper Speed</h3>
		<p>
			Riju is designed for efficiency. You'll be amazed at how quickly you can
			produce high-quality presentations, saving you valuable time.
		</p>

		<h3>User-Friendly Interface</h3>
		<p>
			Our intuitive interface ensures that anyone, regardless of their technical
			skills, can create captivating presentations effortlessly.
		</p>

		<h3>Cost-Effective Alternative</h3>
		<p>
			Riju provides a cost-effective and user-friendly alternative to
			traditional presentation software like Microsoft PowerPoint, making it
			accessible to individuals and businesses alike.
		</p>

		<p>I hope you enjoy Riju.</p>

		<p>Sincerely,</p>

		<p>Vignesh Aithal</p>

		<p>
			P.S. As an indie-hacker, I am passionate about delivering a product that
			simplifies the presentation creation process, helping individuals and
			teams make their ideas shine. Riju is not just a tool; it's a solution to
			the challenges that arise when presenting ideas in a competitive
			landscape.
		</p>
	</section>

	<CallToAction />

	<Footer />
</main>

<style lang="postcss">
	section {
		@apply my-16 lg:my-24;
	}
</style>
