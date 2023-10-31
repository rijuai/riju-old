import { readable, writable, type Writable } from 'svelte/store'

export const currentTheme = writable(
	'background-image: radial-gradient(circle at center right, rgb(0,233,236),rgb(130,183,255));',
)

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
	'background-image: linear-gradient(45deg, rgb(177,140,255) 0%,rgb(200, 215, 253) 75%,rgb(143, 230, 243) 100%);',
	'background-image: linear-gradient(157.5deg, rgb(95, 97, 179) 0%, rgb(95, 97, 179) 16%,rgb(115, 120, 184) 16%, rgb(115, 120, 184) 20%,rgb(135, 142, 188) 20%, rgb(135, 142, 188) 32%,rgb(155, 165, 193) 32%, rgb(155, 165, 193) 38%,rgb(175, 187, 198) 38%, rgb(175, 187, 198) 48%,rgb(195, 210, 203) 48%, rgb(195, 210, 203) 51%,rgb(215, 232, 207) 51%, rgb(215, 232, 207) 59%,rgb(235, 255, 212) 59%, rgb(235, 255, 212) 100%),linear-gradient(135deg, rgb(95, 97, 179) 0%, rgb(95, 97, 179) 16%,rgb(115, 120, 184) 16%, rgb(115, 120, 184) 20%,rgb(135, 142, 188) 20%, rgb(135, 142, 188) 32%,rgb(155, 165, 193) 32%, rgb(155, 165, 193) 38%,rgb(175, 187, 198) 38%, rgb(175, 187, 198) 48%,rgb(195, 210, 203) 48%, rgb(195, 210, 203) 51%,rgb(215, 232, 207) 51%, rgb(215, 232, 207) 59%,rgb(235, 255, 212) 59%, rgb(235, 255, 212) 100%),linear-gradient(112.5deg, rgb(95, 97, 179) 0%, rgb(95, 97, 179) 16%,rgb(115, 120, 184) 16%, rgb(115, 120, 184) 20%,rgb(135, 142, 188) 20%, rgb(135, 142, 188) 32%,rgb(155, 165, 193) 32%, rgb(155, 165, 193) 38%,rgb(175, 187, 198) 38%, rgb(175, 187, 198) 48%,rgb(195, 210, 203) 48%, rgb(195, 210, 203) 51%,rgb(215, 232, 207) 51%, rgb(215, 232, 207) 59%,rgb(235, 255, 212) 59%, rgb(235, 255, 212) 100%),linear-gradient(90deg, rgb(236, 151, 145),rgb(201, 243, 43)); background-blend-mode:overlay,overlay,overlay,normal;',
	'background-image: linear-gradient(90deg, rgba(243,114,209, 0.16) 0%,rgba(44,19,241, 0.11) 100%);',
	'background-image: linear-gradient(90deg, rgba(225,17,255, 0.58),rgba(255,94,214, 0.56));',
	'background-image: linear-gradient(338deg, rgb(68, 202, 201) 0%,rgb(252, 255, 114) 100%);',
	'background-image: radial-gradient(circle at top right, rgb(47, 245, 202),rgb(94,172,255));',
	'background-image: linear-gradient(45deg, rgb(254, 236, 230),rgba(33,185,232, 0.48),rgb(180, 219, 231),rgb(107, 202, 231));',
	'background-image: linear-gradient(90deg, rgb(209, 209, 209),rgb(207, 207, 207)),linear-gradient(45deg, rgb(177, 223, 206) 0%, rgb(177, 223, 206) 46%,rgb(147, 192, 214) 46%, rgb(147, 192, 214) 56%,rgb(117, 162, 222) 56%, rgb(117, 162, 222) 61%,rgb(86, 131, 229) 61%, rgb(86, 131, 229) 64%,rgb(56, 101, 237) 64%, rgb(56, 101, 237) 82%,rgb(26, 70, 245) 82%, rgb(26, 70, 245) 100%),linear-gradient(135deg, rgb(177, 223, 206) 0%, rgb(177, 223, 206) 46%,rgb(147, 192, 214) 46%, rgb(147, 192, 214) 56%,rgb(117, 162, 222) 56%, rgb(117, 162, 222) 61%,rgb(86, 131, 229) 61%, rgb(86, 131, 229) 64%,rgb(56, 101, 237) 64%, rgb(56, 101, 237) 82%,rgb(26, 70, 245) 82%, rgb(26, 70, 245) 100%); background-blend-mode:overlay,overlay,normal;',
	'background-image: repeating-linear-gradient(45deg, rgba(0,0,0,0.04),rgba(0,0,0,0.08),rgba(0,0,0,0.05),rgba(0,0,0,0.04),rgba(0,0,0,0.01),rgba(0,0,0,0.1),rgba(0,0,0,0.09),rgba(0,0,0,0.1),rgba(0,0,0,0.03),transparent,rgba(0,0,0,0.07),rgba(0,0,0,0.03),rgba(0,0,0,0.06) 4px),linear-gradient(90deg, rgb(193, 255, 253),rgba(59,104,247, 0.46));',
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
