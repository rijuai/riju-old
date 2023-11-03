import type { HTMLContent, JSONContent } from '@tiptap/core'

export const convertContentToHtml = (content: JSONContent): HTMLContent => {
	let htmlOutput = '',
		count = 0,
		temphtml = '',
		blocks: string[] = [],
		addSubSection = false,
		images = []

	content.forEach((item: Item) => {
		let itemType = item.type
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

				blocks.forEach((block) => {
					blocksHtml += `<div>${block}</div>`
				})

				htmlOutput += `<section><div class="grid grid-cols-2 gap-16 justify-around">${blocksHtml}</div></section>`

				addSubSection = false
				blocks.length = 0
			} else {
				htmlOutput += `<section>${temphtml}</section>`
			}

			temphtml = ''
		}
	})

	console.log(htmlOutput)
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
	const alt = item.attrs.alt ?? 'image'
	return `<img class="h-full w-full" data-src=${src} alt=${alt} />`
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
