<script lang="ts">
import { cn } from '$lib/utils.js'
import type { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui'

type $$Props = DropdownMenuPrimitive.SeparatorProps

interface Props {
	class?: $$Props['class']
	[key: string]: any
}

let { class: className = undefined, ...rest }: Props = $props()
</script>

<DropdownMenuPrimitive.Separator
	class={cn("bg-muted -mx-1 my-1 h-px", className)}
	{...rest}
/>
