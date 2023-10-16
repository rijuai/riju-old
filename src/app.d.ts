// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}

	type Item = {
		type: string
		content: any[]
		attrs: {
			start: number
			src: string
			alt: string
			level: number
		}
		text: string
	}

	type ListItem = {
		content: {
			content: {
				text: string
			}[]
		}[]
	}

	type Presentations = {
		presentation_id: string
		title: string
		preview_img_url: string
	}[]
}

export {}
