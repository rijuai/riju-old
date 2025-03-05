import supabase from '$lib/supabase'
import type { PageLoad } from './$types'
import { convertEditorJsContentToHtml } from './converter'

export const ssr = false

export const load: PageLoad = async ({ params }) => {
	const presentationId = params.presentation_id

	const { data: { content, theme, is_public } } = await supabase
		.from('presentations')
		.select('content,theme,is_public')
		.eq('id', presentationId)
		.single()

	const htmlOutput = convertEditorJsContentToHtml(content)

	return {
		theme,
		isPublic: is_public,
		htmlOutput,
		presentationId: presentationId
	}
}
