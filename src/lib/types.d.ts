type Item = {
	type: string
	content: any[]
	attrs: {
		start: number
		src: string
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
