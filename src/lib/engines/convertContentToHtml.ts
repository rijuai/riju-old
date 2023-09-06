import type { HTMLContent, JSONContent } from '@tiptap/core'

export const convertContentToHtml = (content: JSONContent): HTMLContent => {
	let htmlOutput = `<section>`

	content.forEach(
		(item: {
			type: string
			content: any[]
			attrs: { start: number; src: string; level: number }
			text: string
		}) => {
			if (item.type === 'paragraph' && item.content === undefined) {
				htmlOutput += `</section><section>`
			} else if (item.type === 'heading') {
				switch (item.attrs.level) {
					case 1:
						htmlOutput += `<h1>${item.content[0].text}</h1>`
						break
					case 2:
						htmlOutput += `<h2>${item.content[0].text}</h2>`
						break
					default:
						htmlOutput += `<p>${item.content[0].text}</p>`
						break
				}
				// htmlOutput += `<h1>${item.content[0].text}</h1>`
			} else if (item.type === 'paragraph') {
				htmlOutput += `<p>${item.content[0].text}</p>`
			} else if (item.type === 'orderedList') {
				htmlOutput += `<ol start=${item.attrs.start}>`
				item.content.forEach(
					(listItem: { content: { content: { text: string }[] }[] }) => {
						htmlOutput += `<li>${listItem.content[0].content[0].text}</li>`
					},
				)
				htmlOutput += `</ol>`
			} else if (item.type === 'bulletList') {
				htmlOutput += `<ul>`
				item.content.forEach(
					(listItem: { content: { content: { text: string }[] }[] }) => {
						htmlOutput += `<li>${listItem.content[0].content[0].text}</li>`
					},
				)
				htmlOutput += `</ul>`
			} else if (item.type === 'image') {
				htmlOutput += `<img src=${item.attrs.src} />`
			} else {
				htmlOutput += `<p>${item.text}</p>`
			}
		},
	)

	return htmlOutput
}
