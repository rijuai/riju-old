import { readable, writable } from 'svelte/store';

export let currentTheme = writable('background: #5900FF;');

export let themes = readable([
	'background: linear-gradient(to bottom right, #FF08A1, #FF3852)',
	'background: #5900FF;',
	'background: linear-gradient(to bottom right, #00A8FF, #2E3BFF);',
	'background: linear-gradient(to bottom right, #8300FF, #E600DE);',
	'background: linear-gradient(to top right, #E600DE, #FF08A1);',
	'background: linear-gradient(to bottom right, #BC00FF, #E600DE);',
]);
