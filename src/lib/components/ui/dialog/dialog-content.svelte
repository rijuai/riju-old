<script lang="ts">
import { cn, flyAndScale } from '$lib/utils.js'
import type { Dialog as DialogPrimitive } from 'bits-ui'
import X from 'lucide-svelte/icons/x'
import * as Dialog from './index.js'

type $$Props = DialogPrimitive.ContentProps

interface Props {
	class?: $$Props['class']
	transition?: $$Props['transition']
	transitionConfig?: $$Props['transitionConfig']
	children?: import('svelte').Snippet
	[key: string]: any
}

let {
	class: className = undefined,
	transition = flyAndScale,
	transitionConfig = {
		duration: 200
	},
	children,
	...rest
}: Props = $props()
</script>

<Dialog.Portal>
	<Dialog.Overlay />
	<DialogPrimitive.Content
		{transition}
		{transitionConfig}
		class={cn(
			"bg-background fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border p-6 shadow-lg sm:rounded-lg md:w-full",
			className
		)}
		{...rest}
	>
		{@render children?.()}
		<DialogPrimitive.Close
			class="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none"
		>
			<X class="h-4 w-4" />
			<span class="sr-only">Close</span>
		</DialogPrimitive.Close>
	</DialogPrimitive.Content>
</Dialog.Portal>
