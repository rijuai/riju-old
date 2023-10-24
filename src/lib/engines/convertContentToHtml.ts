import type { HTMLContent, JSONContent } from '@tiptap/core'

export const convertContentToHtml = (content: JSONContent): HTMLContent => {
	let htmlOutput = `<section>`

	content.forEach((item: Item) => {
		let itemType = item.type

		if (itemType === 'horizontalRule')
			return (htmlOutput += `</section><section>`)

		if (itemType === 'heading') return (htmlOutput += getHeading(item))

		if (itemType === 'paragraph') return (htmlOutput += getParagraph(item))

		if (itemType === 'orderedList' || itemType === 'bulletList')
			return (htmlOutput += getList(item))

		if (itemType === 'image') return (htmlOutput += getImage(item))
	})

	return htmlOutput
}

const getHeading = (item: Item): string => {
	const level = item.attrs.level
	const text = item.content[0].text
	return `<h${level}>${text}</h${level}>`
}

const getParagraph = (item: Item): string => {
	if (item.content !== undefined) {
		const text = item.content[0].text
		return `<p>${text}</p>`
	}
	return ''
}

const getList = (item: Item): string => {
	let listType = item.type === 'orderedList' ? 'ol' : 'ul'
	let list = `<${listType}>`

	item.content.forEach((listItem: ListItem) => {
		if (listItem.content[0].content !== undefined) {
			let text = listItem.content[0].content[0].text ?? ''
			list += `<li>${text}</li>`
		}
	})
	list += `</${listType}>`

	return list
}

const getImage = (item: Item): string => {
	const src = item.attrs.src
	const alt = item.attrs.alt ?? ''
	return `<img src=${src} alt=${alt} />`
}
