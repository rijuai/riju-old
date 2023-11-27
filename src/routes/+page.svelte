<script>
	import DemoVideo from '$lib/assets/videos/riju-demo-muted.mp4'
	import Footer from '$lib/components/Footer.svelte'
	import HomePageNavbar from '$lib/components/HomePageNavbar.svelte'
	import MetaData from '$lib/components/MetaData.svelte'
	import { Button } from '$lib/components/ui/button'
</script>

<MetaData
	title="Super fast and easy-to-use alternative to Microsoft PowerPoint"
	description="Create presentations in seconds. Riju turns your words into stunning presentations. Our smart tech blends beauty and impact, perfect for impressing clients or inspiring students."
/>

<HomePageNavbar />

<main class="p-8 mx-auto max-w-4xl">
	<!-- hero -->
	<section class="text-center">
		<h1 class="text-5xl mb-6">
			Super fast & easy-to-use alternative to <span class="text-destructive"
				>Microsoft PowerPoint</span
			>
		</h1>
		<p class="lg:px-12 text-muted-foreground text-xl leading-normal mb-12">
			Riju is a hyper-fast presentation builder that lets you create stunning
			presentations in seconds. Say goodbye to boring drag-and-drop and choose
			from over 100 stunning themes.
		</p>

		<div class="flex flex-col md:flex-row justify-center gap-4 mb-2">
			<Button size="lg" class="text-lg py-6" href="/signin">
				Get started (its free)</Button
			>
		</div>
		<p class="text-muted-foreground">
			No credit card required. Saves 90% of your time.
		</p>
		<a
			class="flex justify-center mt-12"
			href="https://www.producthunt.com/posts/riju?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-riju"
			target="_blank"
			><img
				src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=427150&theme=light"
				alt="Riju - Super&#0032;fast&#0032;&#0038;&#0032;easy&#0045;to&#0045;use&#0032;alternative&#0032;to&#0032;Microsoft&#0032;PowerPoint | Product Hunt"
				style="width: 250px; height: 54px;"
				width="250"
				height="54"
			/></a
		>
	</section>

	<!-- demo -->
	<section>
		<video
			class="w-full rounded-lg shadow-lg"
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

	<!-- cta -->
	<section class="max-w-lg mx-auto text-center">
		<h2 class="text-destructive">Ready to ditch PowerPoint?</h2>
		<h2 class="mb-6">Try it now!</h2>
		<Button size="lg" class="text-lg py-6" href="/signin">
			Get started (its free)</Button
		>
	</section>

	<Footer />
</main>

<style lang="postcss">
	section {
		@apply my-16 lg:my-24;
	}
</style>
