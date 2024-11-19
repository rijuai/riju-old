import type { OutputData } from "@editorjs/editorjs"

export const convertEditorJsContentToHtml = (content: OutputData) => {
	let outputHtml = ""
	let count = 0
	let tempHtml = ""
	const blocks: string[] = []
	let addSubSection = false

	for (const block of content.blocks) {
		console.log(block)
		const blockType = block.type
		count++

		if (blockType === "heading") {
			tempHtml += getHeading(block)
		} else if (blockType === "paragraph") {
			tempHtml += getParagraph(block)
		} else if (blockType === "nestedList") {
			tempHtml += getList(block)
		} else if (blockType === "image") {
			tempHtml = `<div>${tempHtml}</div><div>${getImage(block)}</div>`
		} else if (blockType === "table") {
			tempHtml += getTable(block)
		} else if (blockType === "splitSlide") {
			addSubSection = true
			blocks.push(tempHtml)
			tempHtml = ""
		}

		if (blockType === "newSlide" || count === content.blocks.length) {
			if (addSubSection) {
				let blocksHtml = ""
				blocks.push(tempHtml)

				for (const blockHtml of blocks) {
					blocksHtml += `<div>${blockHtml}</div>`
				}

				outputHtml += `<section><div class="grid grid-cols-2 gap-12">${blocksHtml}</div></section>`

				addSubSection = false
				blocks.length = 0
			} else {
				outputHtml += `<section class="">${tempHtml}</section>`
			}

			tempHtml = ""
		}
	}

	return outputHtml
}

const getHeading = (block: any) => {
	if (!block.data || !block.data.text) return ""

	const level = block.data.level
	const text = block.data.text

	return `<h${level}>${text}</h${level}>`
}

const getParagraph = (block: any) => {
	if (!block.data || !block.data.text) return ""

	const text = block.data.text

	return `<p>${text}</p>`
}

const getList = (block: any) => {
	if (!block.data || !block.data.items) return ""

	const listItems = (items: any[]): string => {
		let itemsHtml = ""
		for (const item of items) {
			if (typeof item === "object" && item.content) {
				const nestedListHtml =
					item.items && item.items.length > 0
						? `<ul>${listItems(item.items)}</ul>`
						: ""
				itemsHtml += `<li>${item.content}${nestedListHtml}</li>`
			}
		}
		return itemsHtml
	}

	const style = block.data.style === "ordered" ? "ol" : "ul"
	const list = `<${style}>${listItems(block.data.items)}</${style}>`

	return list
}

const getImage = (block: any) => {
	if (!block.data || !block.data.file) return ""

	const src = block.data.file.url
	const alt = block.data.caption ?? "image"
	return `<img class="" src="${src}" alt="${alt}" />`
}

const getTable = (block: any) => {
	if (!block.data || !block.data.content) return ""

	let tableHtml = "<table>"

	// Check if there is a header configuration and output the header row
	if (block.data.withHeadings) {
		tableHtml += "<thead><tr>"
		for (const header of block.data.content[0]) {
			tableHtml += `<th>${header}</th>`
		}
		tableHtml += "</tr></thead>"
		// Remove the header row from the content
		block.data.content.shift()
	}

	tableHtml += "<tbody>"
	for (const row of block.data.content) {
		tableHtml += "<tr>"
		for (const cell of row) {
			tableHtml += `<td>${cell}</td>`
		}
		tableHtml += "</tr>"
	}
	tableHtml += "</tbody></table>"

	return tableHtml
}
