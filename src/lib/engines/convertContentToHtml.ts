import type { HTMLContent, JSONContent } from '@tiptap/core'

export const convertContentToHtml = (content: JSONContent): HTMLContent => {
	let outputHtml = ''
	let count = 0
	let temphtml = ''
	const blocks: string[] = []
	let addSubSection = false
	const images = []

	for (const item of content) {
		const itemType = item.type
		count++

		if (itemType === 'heading') {
			temphtml += getHeading(item)
		}

		if (itemType === 'paragraph') {
			temphtml += getParagraph(item)
		}

		if (itemType === 'orderedList' || itemType === 'bulletList') {
			temphtml += getList(item)
		}

		if (itemType === 'image') {
			temphtml += getImage(item)
			images.push(getImage(item))
		}

		if (itemType === 'subSection') {
			addSubSection = true
			blocks.push(temphtml)
			temphtml = ''
		}

		if (itemType === 'horizontalRule' || count === content.length) {
			if (addSubSection) {
				let blocksHtml = ''
				blocks.push(temphtml)

				for (const block of blocks) {
					blocksHtml += `<div>${block}</div>`
				}

				outputHtml += `<section><div class="grid grid-cols-2 gap-16">${blocksHtml}</div></section>`

				addSubSection = false
				blocks.length = 0
			} else {
				outputHtml += `<section>${temphtml}</section>`
			}

			temphtml = ''
		}
	}

	return outputHtml
}

const getHeading = (item: Item): string => {
	if (!item.content) return ''

	const level = item.attrs.level
	let text = ''

	for (const element of item.content) {
		if (element.marks) {
			text += applyMarks(element.text, element.marks)
		} else {
			text += element.text
		}
	}

	return `<h${level}>${text}</h${level}>`
}

const getParagraph = (item: Item): string => {
	if (!item.content) return ''

	let text = ''
	for (const element of item.content) {
		if (element.marks) {
			text += applyMarks(element.text, element.marks)
		} else {
			text += element.text
		}
	}

	return `<p>${text}</p>`
}

const getList = (item: ListItem): string => {
	const listType = item.type === 'orderedList' ? 'ol' : 'ul'
	let list = `<${listType}>`

	for (const listItem of item.content) {
		if (listItem.content[0].content !== undefined) {
			for (const content of listItem.content) {
				if (content.type === 'paragraph') {
					let text = ''
					for (const element of content.content) {
						if (element.marks !== undefined) {
							text += applyMarks(element.text, element.marks)
						} else {
							text += element.text
						}
					}
					list += `<li>${text}</li>`
				} else if (
					content.type === 'orderedList' ||
					content.type === 'bulletList'
				) {
					list += getList(content)
				}
			}
		}
	}
	list += `</${listType}>`

	return list
}

const getImage = (item: Item): string => {
	const src = item.attrs.src
	const alt = item.attrs.alt ?? 'image'
	return `<img class="object-cover" data-src=${src} alt=${alt} />`
}

const applyMarks = (text: string, marks: Marks[]): string => {
	let html = ''
	const openTags: string[] = []
	for (const mark of marks) {
		if (mark.type === 'bold') openTags.push('<strong>')
		if (mark.type === 'italic') openTags.push('<em>')
		if (mark.type === 'underline') openTags.push('<u>')
		if (mark.type === 'strike') openTags.push('<s>')
	}

	for (const tag of openTags) {
		html += tag
	}

	html += text

	for (const tag of openTags.reverse()) {
		html += tag.replace('<', '</')
	}

	return html
}
