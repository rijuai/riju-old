import { readable, writable, type Writable } from 'svelte/store'

export const currentTheme = writable('background-color: #DBD5B5;')

enum TransitionType {
	None = 'none',
	Slide = 'slide',
	Fade = 'fade',
	Zoom = 'zoom',
	Concave = 'concave',
	Convex = 'convex',
}

export let transitionType: Writable<TransitionType> = writable(
	TransitionType.Zoom,
)

export const themes = readable([
	'background-color: #43BCCD;', // blue
	'background-color: #E0E0E0;', // light blue
	'background-color: #CAB7A2;',
	'background-color: #BEB7DF;', // light purple
	'background-color: #D4F2D2;', // light green
	'background-color: #91F9E5;',
])

export const getRandomNumber = (length: number): number => {
	const previousNumbers = new Set<number>(),
		maxNumber = length

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
