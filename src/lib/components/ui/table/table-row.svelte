<script lang="ts">
import { createBubbler } from 'svelte/legacy'

const bubble = createBubbler()
import { cn } from '$lib/utils.js'
import type { HTMLAttributes } from 'svelte/elements'

type $$Props = HTMLAttributes<HTMLTableRowElement> & {
	'data-state'?: unknown
}

interface Props {
	class?: $$Props['class']
	children?: import('svelte').Snippet
	[key: string]: any
}

let { class: className = undefined, children, ...rest }: Props = $props()
</script>

<tr
	class={cn(
		"hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
		className
	)}
	{...rest}
	onclick={bubble('click')}
	onkeydown={bubble('keydown')}
>
	{@render children?.()}
</tr>
