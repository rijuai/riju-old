<script lang="ts">
import * as Dialog from '$lib/components/ui/dialog/index.js'
import type { Dialog as DialogPrimitive } from 'bits-ui'
import type { Command as CommandPrimitive } from 'cmdk-sv'
import Command from './command.svelte'

type $$Props = DialogPrimitive.Props & CommandPrimitive.CommandProps

interface Props {
	open?: $$Props['open']
	value?: $$Props['value']
	children?: import('svelte').Snippet
	[key: string]: any
}

let {
	open = $bindable(false),
	value = $bindable(undefined),
	children,
	...rest
}: Props = $props()
</script>

<Dialog.Root bind:open {...rest}>
	<Dialog.Content class="overflow-hidden p-0 shadow-lg">
		<Command
			class="[&_[data-cmdk-group-heading]]:text-muted-foreground [&_[data-cmdk-group-heading]]:px-2 [&_[data-cmdk-group-heading]]:font-medium [&_[data-cmdk-group]:not([hidden])_~[data-cmdk-group]]:pt-0 [&_[data-cmdk-group]]:px-2 [&_[data-cmdk-input-wrapper]_svg]:h-5 [&_[data-cmdk-input-wrapper]_svg]:w-5 [&_[data-cmdk-input]]:h-12 [&_[data-cmdk-item]]:px-2 [&_[data-cmdk-item]]:py-3 [&_[data-cmdk-item]_svg]:h-5 [&_[data-cmdk-item]_svg]:w-5"
			{...rest}
			bind:value
		>
			{@render children?.()}
		</Command>
	</Dialog.Content>
</Dialog.Root>
