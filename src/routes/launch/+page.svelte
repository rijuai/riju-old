<script lang="ts">
import * as Card from '$lib/components/ui/card'
import Footer from '$lib/components/Footer.svelte'
import MetaTags from '$lib/components/MetaTags.svelte'
import Sparkles from 'lucide-svelte/icons/sparkles'
import FileText from 'lucide-svelte/icons/file-text'
import Image from 'lucide-svelte/icons/image'
import { Badge } from '$lib/components/ui/badge'

const features = [
	{
		icon: FileText,
		title: 'Just Type Your Prompt',
		content:
			'Simply describe what you want in your presentation. No need to worry about design or formatting.'
	},
	{
		icon: Image,
		title: 'Upload Your Files',
		content:
			'Add your images, documents, or data. Our AI will intelligently incorporate them into your slides.'
	},
	{
		icon: Sparkles,
		title: 'AI-Powered Generation',
		content:
			'Watch as our AI instantly creates professional slides with perfect layouts and stunning visuals.'
	}
]
</script>

<MetaTags
    title="Join Riju Waitlist | AI-Powered Presentation Builder"
    description="Create stunning presentations in minutes, not hours. Join our waitlist and get 25% off at launch!"
/>

<main class="min-h-screen bg-background">
    <div class="mx-auto max-w-6xl px-4 py-8">
        <!-- Hero Section -->
        <div class="text-center">
            <Badge variant="secondary" class="mb-4">Early Access - 25% Off</Badge>
            <h1 class="mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl">
                Create Presentations<br />in Minutes, Not Hours
            </h1>
            <p class="mx-auto mb-8 max-w-2xl text-xl text-muted-foreground">
                Save 5+ hours per presentation. Join our waitlist and get 25% off when we launch.
            </p>

            <!-- Waitlist Form -->
            <div class="mx-auto mb-4 max-w-md">
                <iframe data-tally-src="https://tally.so/embed/nPPeyB?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="276" frameborder="0" marginheight="0" marginwidth="0" title="Waitlist"></iframe>
                <script>var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}</script>
            </div>
        </div>

        <!-- Features Grid -->
        <section class="py-20">
            <h2 class="mb-12 text-center text-3xl font-bold">How It Works</h2>
            <div class="grid gap-8 md:grid-cols-3">
                {#each features as feature}
                    <Card.Root>
                        <Card.Header>
                            <svelte:component class="size-10 text-muted-foreground mb-4"  this={feature.icon} />
                            <Card.Title class="text-xl">{feature.title}</Card.Title>
                        </Card.Header>
                        <Card.Content>
                           {feature.content}
                        </Card.Content>
                    </Card.Root>
                {/each}
            </div>
        </section>

        <!-- Final CTA -->
        <section class="mx-auto max-w-2xl py-20 text-center">
            <h2 class="mb-6 text-3xl font-bold">Save Hours on Every Presentation</h2>
            <p class="mb-8 text-muted-foreground">
                Join our waitlist today and get 25% off when we launch. Create presentations 10x faster than PowerPoint or Google Slides.
            </p>
            <div class="mx-auto max-w-md">
                <iframe data-tally-src="https://tally.so/embed/nPPeyB?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="276" frameborder="0" marginheight="0" marginwidth="0" title="Waitlist"></iframe>
                <script>var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}</script>
            </div>
        </section>
    </div>

    <Footer />
</main>

<style lang="postcss">
    :global(h1) {
        line-height: 1.1 !important;
    }
</style>
