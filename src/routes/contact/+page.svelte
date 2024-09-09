<script>
import LayoutWrapper from '$lib/components/LayoutWrapper.svelte'
import MetaTags from '$lib/components/MetaTags.svelte'
import * as Card from '$lib/components/ui/card'
</script>

<MetaTags
	title="Riju | Contact"
	description="To contact us send us an email here"
/>

<LayoutWrapper>
	<Card.Root class="mx-auto max-w-xl">
		<Card.Header>
			<Card.Title>Contact</Card.Title>
		</Card.Header>
		<Card.Content>
			<p>
				If you have any queries or want to contact us just send us an email at
				namaste@riju.ai
			</p>
		</Card.Content>
	</Card.Root>
</LayoutWrapper>
