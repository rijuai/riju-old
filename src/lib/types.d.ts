type Item = {
	[x: string]: undefined
	type: string
	content: Content[]
	attrs: {
		start: number
		src: string
		alt: string
		level: number
	}
	text: string
}

type ListItem = {
	type: string
	content: Content
}

type Content = {
	type: string
	marks: Marks[]
	text: string
	content: {
		text: string
		marks: Marks[]
	}[]
}

type Marks = {
	type: string
}

type Presentations = {
	id: string
	title: string
}[]

enum TransitionType {
	None = 'none',
	Slide = 'slide',
	Fade = 'fade',
	Zoom = 'zoom',
	Concave = 'concave',
	Convex = 'convex',
}
