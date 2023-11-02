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
	if (item.content !== undefined) {
		const level = item.attrs.level
		let text = ''
		item.content.forEach((element) => {
			if (element.marks !== undefined) {
				text += applyMarks(element.text, element.marks)
			} else text += element.text
		})
		return `<h${level}>${text}</h${level}>`
	}
	return ''
}

const getParagraph = (item: Item): string => {
	let text = ''
	if (item.content !== undefined) {
		item.content.forEach((element) => {
			if (element.marks !== undefined) {
				text += applyMarks(element.text, element.marks)
			} else text += element.text
		})
	}
	return `<p>${text}</p>`
}

const getList = (item: Item | Content): string => {
	let listType = item.type === 'orderedList' ? 'ol' : 'ul'
	let list = `<${listType}>`

	item.content.forEach((listItem: ListItem) => {
		if (listItem.content[0].content !== undefined) {
			listItem.content.forEach((content: Content) => {
				if (content.type === 'paragraph') {
					let text = ''
					content.content.forEach((element) => {
						if (element.marks !== undefined) {
							text += applyMarks(element.text, element.marks)
						} else text += element.text
					})
					list += `<li>${text}</li>`
				} else if (
					content.type === 'orderedList' ||
					content.type === 'bulletList'
				) {
					list += getList(content)
				}
			})
		}
	})
	list += `</${listType}>`

	return list
}

const getImage = (item: Item): string => {
	const src = item.attrs.src
	const alt = item.attrs.alt ?? ''
	return `<img class="r-stretch" data-src=${src} alt=${alt} />`
}

const applyMarks = (text: string, marks: Marks[]): string => {
	let html = ''
	let openTags: string[] = []
	for (const mark of marks) {
		if (mark.type === 'bold') openTags.push('<strong>')
		if (mark.type === 'italic') openTags.push('<em>')
		if (mark.type === 'underline') openTags.push('<u>')
		if (mark.type === 'strike') openTags.push('<s>')
	}

	openTags.forEach((tag) => {
		html += tag
	})

	html += text

	openTags.reverse().forEach((tag) => {
		html += tag.replace('<', '</')
	})

	return html
}
