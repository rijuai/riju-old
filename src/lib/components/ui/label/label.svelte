<script lang="ts">
import { cn } from '$lib/utils.js'
import { Label as LabelPrimitive } from 'bits-ui'

type $$Props = LabelPrimitive.Props
type $$Events = LabelPrimitive.Events

interface Props {
	class?: $$Props['class']
	children?: import('svelte').Snippet
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	[key: string]: any
}

let { class: className = undefined, children, ...rest }: Props = $props()
</script>

<LabelPrimitive.Root
	class={cn(
		"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
		className
	)}
	{...rest}
	on:mousedown
>
	{@render children?.()}
</LabelPrimitive.Root>
