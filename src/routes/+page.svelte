<script>
	import demo from '$lib/assets/videos/demo.mp4'
	import Footer from '$lib/ui/Footer.svelte'
	import HomePageNavbar from '$lib/ui/HomePageNavbar.svelte'
</script>

<svelte:head>
	<title>Riju | Create presentations super fast</title>
	<meta
		name="description"
		content="Create presentations in seconds. Riju turns your words into stunning presentations. Our smart tech blends beauty and impact, perfect for impressing clients or inspiring students."
	/>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
	/>
</svelte:head>

<HomePageNavbar />

<main class="mx-auto max-w-2xl">
	<section
		class="text-center max-w-2xl mx-auto space-y-14 mt-24 mb-28 animate__animated animate__fadeInDown"
	>
		<h1>Create presentations in seconds</h1>

		<div
			class="flex justify-center gap-3
	"
		>
			<a href="/login" role="button">Create Account</a>
			<a class="secondary outline" href="/dashboard" role="button">Dashboard</a>
		</div>
	</section>

	<!-- Cards -->
	<section class="animate__animated animate__fadeIn">
		<article>
			<video class="w-full" src={demo} muted autoplay loop />
			<footer>
				<h2>Riju: the next-gen presentation builder.</h2>
				<p>
					You write content; thats all! Riju turns it all into stunning
					presentation(PPT). Our smart tech blends beauty and impact, perfect
					for impressing clients or inspiring students.
				</p>
			</footer>
		</article>
	</section>
	<section>
		<article>
			<header>
				<h2>Features</h2>
				<ul>
					<li>
						Super fast: create presentation in seconds (not hours😀). Just write
						your content.
					</li>
					<li>Beautiful: Riju turns your words into stunning presentations.</li>
					<li>Super affordable: at just $19/year its the first of its kind.</li>
				</ul>
			</header>
			<video
				class="w-full"
				src="https://www.screen.studio/videos/features/background-and-spacing.mp4"
				muted
				autoplay
				loop
			/>
		</article>
	</section>

	<Footer />
</main>
