<script lang="ts">
import Footer from '$lib/components/Footer.svelte'
import MetaTags from '$lib/components/MetaTags.svelte'
import { Badge } from '$lib/components/ui/badge'
import { Button } from '$lib/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '$lib/components/ui/card'
import { Check } from 'lucide-svelte'
import HomePageNavbar from '../HomePageNavbar.svelte'
</script>

<MetaTags
	title="Pricing - Unlimited Presentations"
	description="Simple and transparent pricing for all your presentation needs"
/>

<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
	<HomePageNavbar />
	
	<div class="py-16 text-center">
		<h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl">
			Simple, Transparent Pricing
		</h1>
		<p class="mt-4 mx-auto max-w-2xl text-xl text-muted-foreground">
			Everything you need to create stunning presentations at an affordable price.
		</p>
	</div>

	<div class="flex justify-center">
		<Card class="w-full max-w-md border-2 border-primary">
			<CardHeader class="text-center pb-8 bg-primary/5">
				<CardTitle class="text-3xl font-bold">Pro Plan</CardTitle>
				<div class="mt-4">
					<span class="text-5xl font-bold">$25</span>
					<span class="text-muted-foreground ml-2">/month</span>
				</div>
				<CardDescription class="mt-4 text-base">
					Perfect for professionals and teams
				</CardDescription>
			</CardHeader>
			<CardContent class="pt-6">
				<ul class="space-y-4">
					<li class="flex">
						<Check class="h-6 w-6 flex-shrink-0 text-primary mt-0.5" />
						<span class="ml-3 text-base">
							<span class="font-medium">Unlimited</span> presentation creation
						</span>
					</li>
					<li class="flex">
						<Check class="h-6 w-6 flex-shrink-0 text-primary mt-0.5" />
						<span class="ml-3 text-base">
							<span class="font-medium">Unlimited</span> image generation
						</span>
					</li>
					<li class="flex">
						<Check class="h-6 w-6 flex-shrink-0 text-primary mt-0.5" />
						<span class="ml-3 text-base">
							<span class="font-medium">Sharing</span> with teammates and clients
						</span>
					</li>
					<li class="flex">
						<Check class="h-6 w-6 flex-shrink-0 text-primary mt-0.5" />
						<span class="ml-3 text-base">
							<span class="font-medium">Voice narration</span>
							<Badge variant="outline" class="ml-2">Coming soon</Badge>
						</span>
					</li>
					<li class="flex">
						<Check class="h-6 w-6 flex-shrink-0 text-primary mt-0.5" />
						<span class="ml-3 text-base">
							<span class="font-medium">Integrations</span> with popular tools
							<Badge variant="outline" class="ml-2">Coming soon</Badge>
						</span>
					</li>
				</ul>
			</CardContent>
			<CardFooter class="flex flex-col space-y-4 px-6 pb-8 pt-6">
				<Button size="lg" class="w-full" disabled>Get Started</Button>
				<p class="text-center text-sm text-muted-foreground">
					No credit card required to start. Cancel anytime.
				</p>
			</CardFooter>
		</Card>
	</div>

	<div class="mt-16 mb-16 text-center">
		<h2 class="text-2xl font-bold tracking-tight">Need a custom plan?</h2>
		<p class="mt-4 mx-auto max-w-2xl text-lg text-muted-foreground">
			Contact our sales team for custom pricing options and enterprise features.
		</p>
		<div class="mt-6">
			<Button variant="outline" size="lg" disabled>Contact Sales</Button>
		</div>
	</div>

	<Footer />
</div> 