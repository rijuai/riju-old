<script lang="ts">
import { cn } from '$lib/utils.js'
import type { Switch as SwitchPrimitive } from 'bits-ui'

type $$Props = SwitchPrimitive.Props
type $$Events = SwitchPrimitive.Events

interface Props {
	class?: $$Props['class']
	checked?: $$Props['checked']
	[key: string]: any
}

let {
	class: className = undefined,
	checked = $bindable(undefined),
	...rest
}: Props = $props()
</script>

<SwitchPrimitive.Root
	bind:checked
	class={cn(
		"focus-visible:ring-ring focus-visible:ring-offset-background data-[state=checked]:bg-primary data-[state=unchecked]:bg-input peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
		className
	)}
	{...rest}
	on:click
	on:keydown
>
	<SwitchPrimitive.Thumb
		class={cn(
			"bg-background pointer-events-none block h-5 w-5 rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
		)}
	/>
</SwitchPrimitive.Root>
