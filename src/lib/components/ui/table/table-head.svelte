<script lang="ts">
import { cn } from '$lib/utils.js'
import type { HTMLThAttributes } from 'svelte/elements'

type $$Props = HTMLThAttributes

interface Props {
	class?: $$Props['class']
	children?: import('svelte').Snippet
	[key: string]: any
}

let { class: className = undefined, children, ...rest }: Props = $props()
</script>

<th
	class={cn(
		"text-muted-foreground h-12 px-4 text-left align-middle font-medium [&:has([role=checkbox])]:pr-0",
		className
	)}
	{...rest}
>
	{@render children?.()}
</th>
