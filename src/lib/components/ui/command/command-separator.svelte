<script lang="ts">
import { cn } from '$lib/utils.js'
import { Command as CommandPrimitive } from 'cmdk-sv'

type $$Props = CommandPrimitive.SeparatorProps
	interface Props {
		class?: string | undefined | null;
		[key: string]: any
	}

	let { class: className = undefined, ...rest }: Props = $props();

</script>

<CommandPrimitive.Separator class={cn("bg-border -mx-1 h-px", className)} {...rest} />
