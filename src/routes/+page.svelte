<script lang="ts">
import DailyCompanyNewsLogo from '$lib/assets/images/featured/dailycompanynews-logo.png'
import OpenFutureLogo from '$lib/assets/images/featured/openfuture-logo.png'
import ProductHunterLogo from '$lib/assets/images/featured/product-hunt-logo.png'
import SubscribedFyiLogo from '$lib/assets/images/featured/subscribedfyi-inverted-logo.png'
import SuperbCrewLogo from '$lib/assets/images/featured/superbcrew-logo.png'
import DemoVideo from '$lib/assets/videos/riju-demo.mp4'
import CTA from '../lib/components/CTA.svelte'
import Footer from '$lib/components/Footer.svelte'
import HomePageNavbar from './HomePageNavbar.svelte'
import MetaTags from '$lib/components/MetaTags.svelte'
import { Button } from '$lib/components/ui/button'
import * as Card from '$lib/components/ui/card'
import ArrowRight from 'lucide-svelte/icons/arrow-right'
import IndianRupee from 'lucide-svelte/icons/indian-rupee'
import Layout from 'lucide-svelte/icons/layout-grid'
import Sparkles from 'lucide-svelte/icons/sparkles'
import Text from 'lucide-svelte/icons/text'

const featuredCompaniesLogo = [
	ProductHunterLogo,
	OpenFutureLogo,
	DailyCompanyNewsLogo,
	SubscribedFyiLogo,
	SuperbCrewLogo
]

const cards = [
	{
		icon: Text,
		title: 'Just start typing...',
		content:
			'Riju is a new type of online presentation maker that works like a text document. Just start typing on the page and insert blocks as needed.'
	},
	{
		icon: Sparkles,
		title: 'Effortless theme customization',
		content:
			'With Riju, you can switch themes with a single click, ensuring that your presentation aligns perfectly with your message and audience.'
	},
	{
		icon: Layout,
		title: 'Super simple UI',
		content:
			'Our intuitive interface ensures that anyone, regardless of their technical skills, can create captivating presentations effortlessly.'
	},
	{
		icon: IndianRupee,
		title: 'Fully free',
		content:
			'Riju is completely free to use. You can create unlimited presentations without any restrictions.'
	}
]
</script>

<MetaTags
	title="Riju | Presentation Builder"
	description="Create presentations in seconds. Riju turns your words into stunning presentations. Our smart tech blends beauty and impact, perfect for impressing clients or inspiring students."
/>

<main class="mx-auto max-w-4xl px-4">
	<HomePageNavbar />

	<!-- Hero -->
	<div class="pt-16 text-center">
		<h1 class="mb-6">Presentations in Seconds</h1>
		<p class="text-muted-foreground mx-auto mb-16 max-w-2xl text-xl">
			Say goodbye to boring presentations. Meet Riju — the intuitive
			presentation builder you've been looking for.
		</p>
		<div class="mb-20 space-y-2">
			<Button size="lg" class="font-semibold" href="/signup"
				>Get Started<ArrowRight class="ml-2 size-5" /></Button
			>
		</div>

		<!-- Demo Video -->
		<video
			class="mx-auto rounded-lg border shadow-xl"
			src={DemoVideo}
			muted
			loop
			autoplay
		></video>
	</div>

	<!-- Featured -->
	<section>
		<h4 class="mb-12 text-center">Featured on major websites</h4>
		<div class="flex flex-col items-center justify-center gap-12 lg:flex-row">
			{#each featuredCompaniesLogo as logos}
				<img class="h-12 w-auto" src={logos} alt="Featured companies" />
			{/each}
		</div>
	</section>

	<!-- Cards -->
	<section>
		<h2 class="mb-12">Simple but powerful</h2>
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
			{#each cards as card}
				<Card.Root>
					<Card.Header>
						<svelte:component this={card.icon} class="mb-2" />
						<Card.Title tag="h4">{card.title}</Card.Title>
					</Card.Header>
					<Card.Content>
						<p>{card.content}</p>
					</Card.Content>
				</Card.Root>
			{/each}
		</div>
	</section>

	<CTA />

	<Footer />
</main>

<style lang="postcss">
section {
	@apply my-16 px-4 lg:my-44 lg:px-8;
}
</style>
