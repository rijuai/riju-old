<script lang="ts">
import { cn } from '$lib/utils.js'
// biome-ignore lint/style/useImportType: <explanation>
import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui'
import Check from 'lucide-svelte/icons/check'

type $$Props = DropdownMenuPrimitive.CheckboxItemProps
type $$Events = DropdownMenuPrimitive.CheckboxItemEvents

interface Props {
	class?: $$Props['class']
	checked?: $$Props['checked']
	children?: import('svelte').Snippet
	[key: string]: any
}

let {
	class: className = undefined,
	checked = $bindable(undefined),
	children,
	...rest
}: Props = $props()
</script>

<DropdownMenuPrimitive.CheckboxItem
	bind:checked
	class={cn(
		"data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
		className
	)}
	{...rest}
	on:click
	on:keydown
	on:focusin
	on:focusout
	on:pointerdown
	on:pointerleave
	on:pointermove
>
	<span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
		<DropdownMenuPrimitive.CheckboxIndicator>
			<Check class="h-4 w-4" />
		</DropdownMenuPrimitive.CheckboxIndicator>
	</span>
	{@render children?.()}
</DropdownMenuPrimitive.CheckboxItem>
