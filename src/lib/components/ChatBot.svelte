<script lang="ts">
	import { Button } from '$lib/components/ui/button'
	import * as Card from '$lib/components/ui/card'
	import * as Sheet from '$lib/components/ui/sheet'
	import { Textarea } from '$lib/components/ui/textarea'
	import { Bot, SendHorizonal } from 'lucide-svelte'

	let prompt = '',
		chatGptResponse = ''
</script>

<Sheet.Root>
	<Sheet.Trigger
		><Button variant="outline">
			<Bot class="h-6 w-6 mr-2" />ChatGPT
		</Button></Sheet.Trigger
	>
	<Sheet.Content>
		<Sheet.Header>
			<Sheet.Title>ChatGPT</Sheet.Title>
			<Sheet.Description>
				Just enter your prompt and you can chat with ChatGPT.
			</Sheet.Description>
		</Sheet.Header>
		<Textarea
			class="flex justify-end mt-4 mb-3"
			placeholder="Enter your prompt..."
			bind:value={prompt}
		/>
		<div class="flex justify-end">
			<Button
				size="icon"
				on:click={async () => {
					let response = await fetch('/api/chatgpt', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify({
							prompt: prompt,
						}),
					})

					let res = await response.json()
					chatGptResponse = res.message
				}}><SendHorizonal /></Button
			>
		</div>
		{#if chatGptResponse}
			<Card.Root class="mt-3">
				<Card.Header>
					<Card.Description>{chatGptResponse}</Card.Description>
				</Card.Header>
			</Card.Root>
		{/if}
	</Sheet.Content>
</Sheet.Root>
