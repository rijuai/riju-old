<script lang="ts">
import { cn } from '$lib/utils.js'
import type { Command as CommandPrimitive } from 'cmdk-sv'

type $$Props = CommandPrimitive.EmptyProps
interface Props {
	class?: string | undefined | null
	children?: import('svelte').Snippet
	[key: string]: any
}

let { class: className = undefined, children, ...rest }: Props = $props()
</script>

<CommandPrimitive.Empty class={cn("py-6 text-center text-sm", className)} {...rest}>
	{@render children?.()}
</CommandPrimitive.Empty>
