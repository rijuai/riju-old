import { supabase } from '$lib/config/supabase'
import type { JSONContent } from '@tiptap/core'

export const getPresentations = async () => {
	const { data, error } = await supabase
		.from('presentations')
		.select('presentation_id, title, preview_img_url')
		.order('updated_at', { ascending: false })

	if (error) return

	console.log('DATA', data)
	return data
}

export const createPresentation = async (
	userId: string,
	title: string,
): Promise<string> => {
	const { data, error } = await supabase
		.from('presentations')
		.insert({
			user_id: userId,
			title: title,
		})
		.select('presentation_id')

	if (error) console.log(error)

	return data![0].presentation_id
}

export const getPresentationContent = async (
	presentation_id: string,
): Promise<any> => {
	const { data, error } = await supabase
		.from('presentations')
		.select('content')
		.eq('presentation_id', presentation_id)

	if (error) return console.log(error)
	return data![0].content
}

export const updatePresentation = async (
	presentationId: string,
	title: string,
	content: JSONContent,
) => {
	const { error } = await supabase
		.from('presentations')
		.update({ title: title, content: content })
		.eq('presentation_id', presentationId)

	if (error) return console.error(error)
}
