// import { supabase } from '$lib/config/supabase'
import { createClient } from '@supabase/supabase-js'
import { json } from '@sveltejs/kit'
import type { JSONContent } from '@tiptap/core'

const SUPABSE_URL = 'https://xrqtyfvyqmwhdnuyskip.supabase.co'
const SUPABASE_ANON_KEY =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhycXR5ZnZ5cW13aGRudXlza2lwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI1MTIzMDUsImV4cCI6MjAwODA4ODMwNX0.fS48YgFiPMHbyunud5vQO3lAe3maHOAlJyn-_-3ZuWg'

const supabase = createClient(SUPABSE_URL, SUPABASE_ANON_KEY)

export const POST = async ({ request }) => {
	const body: {
		title: string
		content: JSONContent
	} = await request.json()

	const { data, error } = await supabase
		.from('public_presentations')
		.insert({
			title: body.title,
			content: body.content,
		})
		.select('presentation_id')

	if (error) {
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
				'Access-Control-Allow-Origin': 'https://*.atlassian.net',
				'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
			},
		},
	)
}
