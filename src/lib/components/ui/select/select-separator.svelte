<script lang="ts">
import { cn } from '$lib/utils.js'
import type { Select as SelectPrimitive } from 'bits-ui'

type $$Props = SelectPrimitive.SeparatorProps

interface Props {
	class?: $$Props['class']
	[key: string]: any
}

let { class: className = undefined, ...rest }: Props = $props()
</script>

<SelectPrimitive.Separator class={cn("bg-muted -mx-1 my-1 h-px", className)} {...rest} />
