<script lang="ts">
import { cn, flyAndScale } from '$lib/utils.js'
import type { Popover as PopoverPrimitive } from 'bits-ui'

type $$Props = PopoverPrimitive.ContentProps
interface Props {
	class?: $$Props['class']
	transition?: $$Props['transition']
	transitionConfig?: $$Props['transitionConfig']
	children?: import('svelte').Snippet
	[key: string]: any
}

let {
	class: className = undefined,
	transition = flyAndScale,
	transitionConfig = undefined,
	children,
	...rest
}: Props = $props()
</script>

<PopoverPrimitive.Content
	{transition}
	{transitionConfig}
	class={cn(
		"bg-popover text-popover-foreground z-50 w-72 rounded-md border p-4 shadow-md outline-none",
		className
	)}
	{...rest}
>
	{@render children?.()}
</PopoverPrimitive.Content>
