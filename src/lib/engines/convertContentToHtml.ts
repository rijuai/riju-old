import type { HTMLContent, JSONContent } from '@tiptap/core'

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

export const convertContentToHtml = (content: JSONContent): HTMLContent => {
	let htmlOutput = `<section>`

	content.forEach((item: Item) => {
		if (item.type === 'paragraph' && item.content === undefined) {
			return (htmlOutput += `</section><section>`)
		}

		if (item.type === 'heading') {
			return (htmlOutput += getHeading(item))
		}

		if (item.type === 'paragraph') {
			return (htmlOutput += getParagraph(item))
		}

		if (item.type === 'orderedList') {
			return (htmlOutput += getOrderedList(item))
		}

		if (item.type === 'bulletList') {
			return (htmlOutput += getBulletList(item))
		}

		if (item.type === 'image') {
			return (htmlOutput += getImage(item))
		}

		return (htmlOutput += getParagraph(item))
	})

	return htmlOutput
}

const getHeading = (item: Item): string => {
	const level = item.attrs.level
	const text = item.content[0].text
	return `<h${level}>${text}</h${level}>`
}

const getParagraph = (item: Item): string => {
	const text = item.content[0].text
	return `<p>${text}</p>`
}

const getOrderedList = (item: Item): string => {
	let orderedList = ''
	orderedList += `<ol start=${item.attrs.start}>`
	item.content.forEach(
		(listItem: { content: { content: { text: string }[] }[] }) => {
			let text = listItem.content[0].content[0].text
			orderedList += `<li>${text}</li>`
		},
	)
	orderedList += `</ol>`
	return orderedList
}

const getBulletList = (item: Item): string => {
	let bulletList = '<ul>'
	item.content.forEach(
		(listItem: { content: { content: { text: string }[] }[] }) => {
			let text = listItem.content[0].content[0].text
			bulletList += `<li>${text}</li>`
		},
	)
	bulletList += `</ul>`
	return bulletList
}

const getImage = (item: Item): string => {
	const src = item.attrs.src
	return `<img src=${src} />`
}
