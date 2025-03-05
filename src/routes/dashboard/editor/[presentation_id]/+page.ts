import supabase from '$lib/supabase'
import type { PageLoad } from './$types'

export const load: PageLoad = async ({ params }) => {
	const { presentation_id } = params
	const { data: { content } } = await supabase
		.from('presentations')
		.select('content')
		.eq('id', presentation_id)
		.single()

	return {
		content,
		presentationId: presentation_id
	}
}
