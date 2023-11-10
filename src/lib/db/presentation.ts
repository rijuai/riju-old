import { supabase } from '$lib/config/supabase'
import type { JSONContent } from '@tiptap/core'

export const getPresentations = async () => {
	const { data, error } = await supabase
		.from('presentations')
		.select('presentation_id, title, thumbnail')
		.order('updated_at', { ascending: false })

	if (error) return
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

export const getPresentation = async (
	presentation_id: string,
): Promise<{ content: JSON[]; is_public: boolean } | void> => {
	const { data, error } = await supabase
		.from('presentations')
		.select('content, is_public')
		.eq('presentation_id', presentation_id)

	if (error) return console.log(error)
	return data![0]
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
	updatedAt: string,
	title: string,
	content: JSONContent,
) => {
	const { error } = await supabase
		.from('presentations')
		.update({ updated_at: updatedAt, title: title, content: content })
		.eq('presentation_id', presentationId)

	if (error) return console.error(error)
}

export const deletePresentation = async (
	presentationId: string,
): Promise<boolean> => {
	const { error } = await supabase
		.from('presentations')
		.delete()
		.eq('presentation_id', presentationId)

	if (error) {
		console.log(error)
		return false
	}
	return true
}

export const updatePresentationPublicStatus = async (
	presentationId: string,
	isPublic: boolean,
): Promise<any> => {
	const { error } = await supabase
		.from('presentations')
		.update({ is_public: isPublic })
		.eq('presentation_id', presentationId)

	if (error) return console.error(error)
}
