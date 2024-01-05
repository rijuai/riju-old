import { getFullPresentation } from '$lib/db/presentation'
// ! DON'T PRE-RENDER THIS PAGE

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

	return {
		content: content,
		theme: theme,
		isPublic: is_public,
	}
}) satisfies PageLoad
