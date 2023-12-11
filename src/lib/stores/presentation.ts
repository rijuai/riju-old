import type { JSONContent } from '@tiptap/core'
import { readable, writable, type Writable } from 'svelte/store'

export const editorOutput = writable({} as JSONContent),
	presentationId = writable(''),
	presentationContent = writable({} as JSONContent),
	presentationTheme = writable({}),
	isPresentationPublic = writable(false)

export const currentTheme = writable('background-color: #FFF6E0;')

enum TransitionType {
	None = 'none',
	Slide = 'slide',
	Fade = 'fade',
	Zoom = 'zoom',
	Concave = 'concave',
	Convex = 'convex',
}

// biome-ignore lint/style/useConst: <explanation>
export let transitionType: Writable<TransitionType> = writable(
	TransitionType.Zoom,
)

export const themes = readable([
	'background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);',
	'background: linear-gradient(90deg, rgba(135,206,235,1) 0%, rgba(240,248,255,1) 100%);',
	'background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);',
	'background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);',
	'background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);',
	'background-image: linear-gradient(to top, #fddb92 0%, #d1fdff 100%);',
	'background-image: linear-gradient(to top, #ebc0fd 0%, #d9ded8 100%);',
	'background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);',
	'background-image: linear-gradient(to top, #accbee 0%, #e7f0fd 100%);',
	'background-image: linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%);',
	'background-image: linear-gradient(to top, #c1dfc4 0%, #deecdd 100%);',
])

export const getRandomNumber = (length: number): number => {
	const previousNumbers = new Set<number>()
	const maxNumber = length

	let randomNumber: number
	do {
		randomNumber = Math.floor(Math.random() * maxNumber)
	} while (previousNumbers.has(randomNumber))
	previousNumbers.add(randomNumber)
	if (previousNumbers.size > 3) {
		previousNumbers.delete(Array.from(previousNumbers)[1])
	}
	return randomNumber
}

export const changeTheme = () => {
	themes.subscribe((value) => {
		currentTheme.set(value[getRandomNumber(value.length)])
	})
}
