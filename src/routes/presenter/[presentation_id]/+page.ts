import { getFullPresentation } from '$lib/db/presentation'
import { convertContentToHtml } from '$lib/engines/convertContentToHtml'
import type { JSONContent } from '@tiptap/core'
import type { PageLoad } from './$types'

export const load = (async ({ params }) => {
	const presentationId = params.presentation_id
	const { content, theme, is_public } = (await getFullPresentation(
		presentationId,
	)) ?? {
		content: [],
		theme: null,
		is_public: false,
	}

	const htmlOutput = convertContentToHtml(content as JSONContent[])

	return {
		theme: theme,
		isPublic: is_public,
		htmlOutput: htmlOutput,
		presentationId: presentationId,
	}
}) satisfies PageLoad
