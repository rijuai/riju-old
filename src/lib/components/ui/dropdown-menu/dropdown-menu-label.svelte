<script lang="ts">
import { cn } from '$lib/utils.js'
// biome-ignore lint/style/useImportType: <explanation>
import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui'

type $$Props = DropdownMenuPrimitive.LabelProps & {
	inset?: boolean
}

interface Props {
	class?: $$Props['class']
	inset?: $$Props['inset']
	children?: import('svelte').Snippet
	[key: string]: any
}

let {
	class: className = undefined,
	inset = undefined,
	children,
	...rest
}: Props = $props()
</script>

<DropdownMenuPrimitive.Label
	class={cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className)}
	{...rest}
>
	{@render children?.()}
</DropdownMenuPrimitive.Label>
