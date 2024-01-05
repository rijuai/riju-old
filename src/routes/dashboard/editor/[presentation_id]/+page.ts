import { getPresentationContent } from '$lib/db/presentation'
import type { PageLoad } from './$types'

export const load = (async ({ params }) => {
	const presentationId = params.presentation_id
	const { content } = await getPresentationContent(presentationId) ?? { content: null}

	return {
		content: content,
	}
}) satisfies PageLoad
