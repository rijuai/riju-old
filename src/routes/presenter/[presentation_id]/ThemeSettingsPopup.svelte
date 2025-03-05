<script lang="ts">
import { Button } from '$lib/components/ui/button'
import * as Command from '$lib/components/ui/command'
import { Label } from '$lib/components/ui/label'
import * as Popover from '$lib/components/ui/popover'
import * as Select from '$lib/components/ui/select'
import supabase from '$lib/supabase'
import { cn } from '$lib/utils'
import Check from 'lucide-svelte/icons/check'
import ChevronsUpDown from 'lucide-svelte/icons/chevrons-up-down'
import Sparkles from 'lucide-svelte/icons/sparkles'
import { tick } from 'svelte'
import { changeTheme, currentTheme, transitionType } from './store'

interface Props {
	presentationId: string
}

let { presentationId }: Props = $props()

const transitionTypes = [
	{
		label: 'None',
		value: 'none'
	},
	{
		label: 'Slide',
		value: 'slide'
	},
	{
		label: 'Fade',
		value: 'fade'
	},
	{
		label: 'Zoom',
		value: 'zoom'
	},
	{
		label: 'Concave',
		value: 'concave'
	},
	{
		label: 'Convex',
		value: 'convex'
	}
]

const fonts = [
	'Open Sans',
	'Roboto',
	'Raleway',
	'Source Sans Pro',
	'Lato',
	'Kode Mono',
	'Merriweather',
	'Ubuntu',
	'Noto Sans',
	'Poppins',
	'Inter'
]
let open = $state(false)
let value = $state('')

let selectedFont = $derived(fonts.find((f) => f === value) ?? 'Select a font')

// We want to refocus the trigger button when the user selects
// an item from the list so users can continue navigating the
// rest of the form with the keyboard.
const closeAndFocusTrigger = (triggerId: string) => {
	open = false
	tick().then(() => {
		document.getElementById(triggerId)?.focus()
	})
}

/** Dynamic Font */
function getFontUrl(fontName: string) {
	return `https://fonts.googleapis.com/css2?family=${fontName.replace(/ /g, '+')}:wght@400&display=swap`
}

let selectedFontUrl = $derived(getFontUrl(selectedFont))
$effect.pre(() => {
	const element = document.querySelector('.reveal') as HTMLElement
	if (element) {
		element.style.fontFamily = selectedFont
	}
})
</script>

<svelte:head>
	<link rel="stylesheet" href={selectedFontUrl} />
</svelte:head>

<Popover.Root>
	<Popover.Trigger class="flex items-center gap-1.5 text-sm"
		><Sparkles class="size-4" />Theme</Popover.Trigger
	>
	<Popover.Content class="flex w-96 flex-col gap-8">
		<div class="grid grid-cols-2 items-center gap-3">
			<Label>Theme</Label>
			<Button
				variant="outline"
				size="sm"
				onclick={async () => {
					changeTheme()

					const data = {
						theme: {
							backgroundCss: $currentTheme,
							transitionType: $transitionType,
						},
					}

					const record = await supabase
						.from('presentations')
						.update(data)
						.eq('id', presentationId)
				}}
				>Change
			</Button>
		</div>

		<!-- Transition Type Selector -->
		<div class="grid grid-cols-2 items-center gap-3">
			<Label>Tranisition Type</Label>
			<Select.Root
				selected={$transitionType}
				onSelectedChange={async (value) => {
					$transitionType = value?.value

					const data = {
						theme: {
							backgroundCss: $currentTheme,
							transitionType: $transitionType,
						},
					}

					const record = await supabase
						.from('presentations')
						.update(data)
						.eq('id', presentationId)
				}}
			>
				<Select.Trigger>
					<Select.Value placeholder="Select" />
				</Select.Trigger>
				<Select.Content>
					{#each transitionTypes as { label, value }}
						<Select.Item {value}>{label}</Select.Item>
					{/each}
				</Select.Content>
			</Select.Root>
		</div>

		<!-- Font style combobox -->
		<div class="grid grid-cols-2 items-center gap-3">
			<Label>Font Style</Label>
			<Popover.Root bind:open >
				{#snippet children({ ids })}
								<Popover.Trigger asChild >
						{#snippet children({ builder })}
										<Button
								builders={[builder]}
								variant="outline"
								role="combobox"
								aria-expanded={open}
								class="justify-between"
							>
								{selectedFont}
								<ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
							</Button>
															{/snippet}
								</Popover.Trigger>
					<Popover.Content class="w-48 p-0">
						<Command.Root>
							<Command.Input placeholder="Search framework..." />
							<Command.Empty>No framework found.</Command.Empty>
							<Command.Group>
								{#each fonts as font}
									<Command.Item
										value={font}
										onSelect={(currentValue) => {
											value = currentValue
											closeAndFocusTrigger(ids.trigger)
										}}
									>
										<Check
											class={cn(
												'mr-2 h-4 w-4',
												value !== font && 'text-transparent',
											)}
										/>
										{font}
									</Command.Item>
								{/each}
							</Command.Group>
						</Command.Root>
					</Popover.Content>
											{/snippet}
						</Popover.Root>

			<!-- use this for new rows -->
			<!-- <div class="grid grid-cols-2 items-center gap-3" /> -->
		</div>
	</Popover.Content>
</Popover.Root>
