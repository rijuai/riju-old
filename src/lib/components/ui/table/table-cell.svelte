<script lang="ts">
import { createBubbler } from 'svelte/legacy'

const bubble = createBubbler()
import { cn } from '$lib/utils.js'
import type { HTMLTdAttributes } from 'svelte/elements'

type $$Props = HTMLTdAttributes

interface Props {
	class?: $$Props['class']
	children?: import('svelte').Snippet
	[key: string]: any
}

let { class: className = undefined, children, ...rest }: Props = $props()
</script>

<td
	class={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}
	{...rest}
	onclick={bubble('click')}
	onkeydown={bubble('keydown')}
>
	{@render children?.()}
</td>
