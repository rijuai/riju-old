<script lang="ts">
import { cn } from '$lib/utils.js'
import type { Command as CommandPrimitive } from 'cmdk-sv'

type $$Props = CommandPrimitive.ItemProps

interface Props {
	asChild?: boolean
	class?: string | undefined | null
	children?: import('svelte').Snippet<[any]>
	[key: string]: any
}

let {
	asChild = false,
	class: className = undefined,
	children,
	...rest
}: Props = $props()

const children_render = $derived(children)
</script>

<CommandPrimitive.Item
	{asChild}
	class={cn(
		"aria-selected:bg-accent aria-selected:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
		className
	)}
	{...rest}
	
	
>
	{#snippet children({ action, attrs })}
		{@render children_render?.({ action, attrs, })}
	{/snippet}
</CommandPrimitive.Item>
