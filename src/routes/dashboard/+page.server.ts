import { googleAI } from '$lib/server/config/gemini.js'
import { fail, redirect } from '@sveltejs/kit'
import * as cheerio from 'cheerio'
import type { PageLoad } from '../$types.js'

export const load: PageLoad = async () => {
	return {
		text: ''
	}
}

export const actions = {
	scrape: async ({ request }: { request: Request }) => {
		try {
			const formData = await request.formData()
			const url = formData.get('url')?.toString()

			if (!url) {
				return fail(400, {
					success: false,
					message: 'URL is required'
				})
			}

			const response = await fetch(url)

			if (!response.ok) {
				return fail(400, {
					success: false,
					message: `Failed to fetch URL: ${response.statusText}`
				})
			}

			const html = await response.text()
			const $ = cheerio.load(html)

			// Remove unnecessary elements
			$('script').remove()
			$('style').remove()
			$('nav').remove()
			$('footer').remove()
			$('header').remove()
			$('aside').remove()
			$('.ads').remove()
			$('[class*="cookie"]').remove()
			$('[class*="banner"]').remove()

			// Convert headings to Markdown
			$('h1, h2, h3, h4, h5, h6').each((_, el) => {
				const level = Number.parseInt(el.tagName.substring(1))
				const text = $(el).text().trim()
				$(el).replaceWith(`${'#'.repeat(level)} ${text}\n\n`)
			})

			// Convert links to Markdown format
			$('a').each((_, el) => {
				const text = $(el).text().trim()
				const href = $(el).attr('href')
				$(el).replaceWith(`[${text}](${href})`)
			})

			// Convert lists to Markdown
			$('ul, ol').each((_, el) => {
				$(el)
					.find('li')
					.each((i, li) => {
						const text = $(li).text().trim()
						$(li).replaceWith(
							el.tagName.toLowerCase() === 'ul'
								? `- ${text}\n`
								: `${i + 1}. ${text}\n`
						)
					})
			})

			// Convert paragraphs with newlines
			$('p').each((_, el) => {
				const text = $(el).text().trim()
				$(el).replaceWith(`${text}\n\n`)
			})

			// Extract title for reference
			const title = $('title').text().trim()

			// Clean the final text by removing extra whitespaces
			const content = $('body')
				.text()
				.trim()
				.replace(/\n\s+\n/g, '\n\n')
				.replace(/[ \t]+/g, ' ')
				.replace(/ +\n/g, '\n')

			console.log('content', content)

			return {
				success: true,
				title,
				content,
				url
			}
		} catch (error) {
			console.error('Scraping error:', error)
			return fail(400, {
				success: false,
				message: 'Failed to scrape URL',
				error: error instanceof Error ? error.message : String(error)
			})
		}
	},

	extractPDF: async ({ request }: { request: Request }) => {
		try {
			const formData = await request.formData()
			const uploadedFile = formData.get('file') as File

			if (!uploadedFile) {
				return fail(400, {
					success: false,
					message: 'No file uploaded'
				})
			}

			// Check if it's actually a file
			if (!(uploadedFile instanceof File)) {
				return fail(400, {
					success: false,
					message: 'The uploaded content is not a file'
				})
			}

			// Get file metadata
			const fileName = uploadedFile.name
			const fileType = uploadedFile.type

			console.log('File Info', fileName, fileType)

			return {
				success: true,
				fileName
			}
		} catch (error) {
			console.error('File upload error:', error)
			return fail(400, {
				success: false,
				message: 'Failed to process uploaded file',
				error: error instanceof Error ? error.message : String(error)
			})
		}
	},

	generateSummary: async ({ request }: { request: Request }) => {
		try {
			const formData = await request.formData()
			const text = formData.get('text')?.toString()

			const result = await generateSummary(text as string)

			console.log(result)

			return {
				text: result
			}
		} catch {
			console.log('error')
		}
	}
}

const generateSummary = async (text: string) => {
	const response = await googleAI.models.generateContent({
		model: 'gemini-1.5-flash',
		contents: [
			{
				parts: [
					{
						text: `Please summarize the following text in 2-3 sentences: ${text}`
					}
				]
			}
		]
	})

	return response.text
}

