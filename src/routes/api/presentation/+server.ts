import { supabase } from '$lib/config/supabase'
import { json } from '@sveltejs/kit'
import type { JSONContent } from '@tiptap/core'

export const POST = async ({ request }) => {
	// res.header('Access-Control-Allow-Origin', 'https://example.com')
	// res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
	// res.header('Access-Control-Allow-Headers', 'Content-Type')

	const body: {
		title: string
		content?: JSONContent
	} = await request.json()

	const { data, error } = await supabase
		.from('public_presentations')
		.insert({
			title: body.title,
			content: body.content,
		})
		.select('presentation_id')

	if (error) {
		console.log(error)
		return json({
			success: false,
			error: error.message,
		})
	}

	return json(
		{
			presentation_id: data![0].presentation_id,
		},
		{
			headers: {
				'Access-Control-Allow-Origin':
					'https://*.atlassian.net, https://*.riju.page',
				'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
				'Access-Control-Allow-Headers': 'Content-Type',
			},
		},
	)
}
