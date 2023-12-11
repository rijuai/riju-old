export const ssr = false
import { getFullPresentation } from '$lib/db/presentation'
// ! DON'T PRE-RENDER THIS PAGE

import type { PageLoad } from '../$types'

export const load: PageLoad = async ({ params }) => {
	console.log('load')
	const presentationId = params.presentation_id
	const { content, theme, is_public } = await getFullPresentation(
		presentationId,
	)
	console.log(content)
	return {
		content,
		theme: theme,
		isPublic: is_public,
	}
}
