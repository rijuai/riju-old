import { readable, writable } from 'svelte/store'

export const currentTheme = writable('background: #5900FF;')

export const themes = readable([
	'background: linear-gradient(to bottom right, #FF08A1, #FF3852)',
	'background: #5900FF;',
	'background: linear-gradient(to bottom right, #00A8FF, #2E3BFF);',
	'background: linear-gradient(to bottom right, #8300FF, #E600DE);',
	'background: linear-gradient(to top right, #E600DE, #FF08A1);',
	'background: linear-gradient(to bottom right, #BC00FF, #E600DE);',
	'background: linear-gradient(to right, rgb(134, 239, 172), rgb(59, 130, 246), rgb(147, 51, 234));',
	'background: linear-gradient(to right, rgb(29, 78, 216), rgb(30, 64, 175), rgb(17, 24, 39));',
	'background: inear-gradient(rgb(17, 24, 39), rgb(88, 28, 135), rgb(124, 58, 237));',
	'background: linear-gradient(rgb(234, 179, 8), rgb(168, 85, 247), rgb(59, 130, 246));',
	'background: conic-gradient(at left center, rgb(14, 165, 233), rgb(254, 215, 170), rgb(202, 138, 4));',
	'background: conic-gradient(at center top, rgb(17, 24, 39), rgb(243, 244, 246), rgb(17, 24, 39));',
	'background: linear-gradient(to left bottom, rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0));',
])

export const changeTheme = () => {
	themes.subscribe((value) => {
		currentTheme.set(value[Math.floor(Math.random() * value.length)])
	})
}
