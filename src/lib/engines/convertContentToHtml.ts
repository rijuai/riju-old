import type { HTMLContent, JSONContent } from '@tiptap/core'

export const convertContentToHtml = (content: JSONContent): HTMLContent => {
	let htmlOutput = `<section>`

	content.forEach((item: Item) => {
		let itemContents = ''

		if (item.type === 'paragraph' && item.content === undefined) {
			return (htmlOutput += `</section><section>`)
		}

		if (item.type === 'heading') {
			return (htmlOutput += getHeading(item))
		}

		if (item.type === 'paragraph') {
			return (htmlOutput += getParagraph(item))
		}

		if (item.type === 'orderedList' || item.type === 'bulletList') {
			return (htmlOutput += getList(item))
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

const getList = (item: Item): string => {
	let listType = item.type === 'orderedList' ? 'ol' : 'ul'
	let list = `<${listType}>`

	item.content.forEach((listItem: ListItem) => {
		let text = listItem.content[0].content[0].text
		list += `<li>${text}</li>`
	})
	list += `</${listType}>`

	return list
}

const getImage = (item: Item): string => {
	const src = item.attrs.src
	return `<img src=${src} />`
}
