<script lang="ts">
import { cn } from '$lib/utils.js'
import type { HTMLAttributes } from 'svelte/elements'

type $$Props = HTMLAttributes<HTMLDivElement>

interface Props {
	class?: $$Props['class']
	children?: import('svelte').Snippet
	[key: string]: any
}

let { class: className = undefined, children, ...rest }: Props = $props()
</script>

<div
	class={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}
	{...rest}
>
	{@render children?.()}
</div>
