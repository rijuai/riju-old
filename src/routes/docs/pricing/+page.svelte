<script lang="ts">
	import { Button } from '$lib/components/ui/button'
	import * as Card from '$lib/components/ui/card'
	import { Check } from 'lucide-svelte'

	let plans = [
		{
			name: 'Basic',
			price: 0,
			features: [
				'Unlimited presentations',
				'Unlimited slides',
				'Basic themes',
				'Share publicly',
			],
			button_text: 'Get started',
			button_href: '/signup',
		},
		{
			name: 'Pro',

			price: 5,
			features: [
				'All in Basic plan',
				'Unlimited themes',
				'AI generated themes',
				"No 'Made with Riju' branding",
				'Unlimited collaborators',
				'Workspaces',
				'Unlimited uploads',
			],
		},
	]
</script>

<section class="py-14">
	<div class="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
		<div class="relative max-w-xl mx-auto sm:text-center">
			<h3 class="text-gray-800 text-3xl font-semibold sm:text-4xl">
				Pricing Plans
			</h3>
			<div class="mt-3 max-w-xl">
				<p>Get 2 months for free by subscribing yearly!</p>
			</div>
		</div>
		<div
			class="mt-16 space-y-6 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-2 max-w-4xl mx-auto"
		>
			{#each plans as { name, price, features }, index (name)}
				<Card.Root>
					<Card.Header>
						<Card.Title>{name}</Card.Title>
						<h4>${price}</h4>
						<Card.Description>Monthly per user</Card.Description>
					</Card.Header>
					<Card.Content>
						<div class="flex flex-col justify-end">
							<ul class="space-y-3">
								{#each features as feature, fIndex}
									<li class="flex items-center gap-4">
										<Check class="size-4" />
										{feature}
									</li>
								{/each}
							</ul>
						</div>
					</Card.Content>
					<Card.Footer>
						<Button
							class="w-full"
							href={name === 'Pro'
								? '/signin?utm_source=pricing&is_pro=true'
								: '/signin?utm_source=pricing'}>Get started</Button
						>
					</Card.Footer>
				</Card.Root>
			{/each}
		</div>
	</div>
</section>
