<script lang="ts">
	import { Button } from '$lib/components/ui/button'
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu'
	import { MoreVertical } from 'lucide-svelte'

	const isViewportMobile = () => {
		return window.innerWidth <= 768
	}
</script>

<nav
	class="sticky top-0 z-10 w-full py-2.5 px-2 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b"
>
	<div class="max-w-6xl mx-auto flex justify-between">
		<Button variant="link" class="text-3xl font-semibold" href="/">Riju</Button>
		<div class="flex gap-2.5 items-center">
			{#if isViewportMobile()}
				<Button variant="ghost" size="icon">
					<DropdownMenu.Root>
						<DropdownMenu.Trigger
							><MoreVertical></MoreVertical></DropdownMenu.Trigger
						>
						<DropdownMenu.Content>
							<DropdownMenu.Group>
								<DropdownMenu.Item>
									<a href="/signin">Get Started</a>
								</DropdownMenu.Item>
								<DropdownMenu.Item>
									<a href="/signin">Sign In</a>
								</DropdownMenu.Item>
								<DropdownMenu.Item>
									<a href="/docs/contact">Contact</a>
								</DropdownMenu.Item>
								<DropdownMenu.Item>
									<a
										href="https://giant-anise-fba.notion.site/Riju-Change-log-327736186a0c4a4b92621a104569917f"
										>Change Log</a
									>
								</DropdownMenu.Item>
							</DropdownMenu.Group>
						</DropdownMenu.Content>
					</DropdownMenu.Root>
				</Button>
			{:else}
				<Button
					variant="ghost"
					href="https://giant-anise-fba.notion.site/Riju-Change-log-327736186a0c4a4b92621a104569917f"
					>Change Log</Button
				>
				<Button variant="ghost" href="/docs/contact">Contact</Button>
				<Button variant="ghost" href="/signin">Sign In</Button>
				<Button href="/signin">Get Started</Button>
			{/if}
		</div>
	</div>
</nav>
