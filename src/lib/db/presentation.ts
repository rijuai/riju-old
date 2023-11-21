import { supabase } from '$lib/config/supabase'
import type { JSONContent } from '@tiptap/core'

export const getPresentations = async (): Promise<Presentations | null> => {
	const { data } = await supabase
		.from('presentations')
		.select('presentation_id, title, thumbnail')
		.order('updated_at', { ascending: false })

	return data ? data : null
}

export const createPresentation = async (title: string): Promise<string> => {
	const { data, error } = await supabase
		.from('presentations')
		.insert({
			title: title,
		})
		.select('presentation_id')

	return error ? console.error(error) : data![0].presentation_id
}

export const createPresentationUsingTemplate = async (
	title: string,
	content: any,
): Promise<string> => {
	const { data, error } = await supabase
		.from('presentations')
		.insert({
			title: title,
			content: content,
		})
		.select('presentation_id')

	return error ? console.error(error) : data![0].presentation_id
}

export const getFullPresentation = async (
	presentation_id: string,
): Promise<{
	content: JSON[]
	theme: { backgroundCss: string; transitionType: TransitionType }
	is_public: boolean
}> => {
	const { data } = await supabase
		.from('presentations')
		.select('content, theme, is_public')
		.eq('presentation_id', presentation_id)

	return data![0]
}

export const getPresentationContent = async (
	presentation_id: string,
): Promise<any> => {
	const { data, error } = await supabase
		.from('presentations')
		.select('content')
		.eq('presentation_id', presentation_id)

	return error ? null : data![0].content
}

export const updatePresentation = async (
	presentationId: string,
	updatedAt: string,
	title: string,
	content: JSONContent,
): Promise<boolean> => {
	const { error } = await supabase
		.from('presentations')
		.update({ title: title, content: content, updated_at: updatedAt })
		.eq('presentation_id', presentationId)

	return error ? false : true
}

export const deletePresentation = async (
	presentationId: string,
): Promise<boolean> => {
	const { error } = await supabase
		.from('presentations')
		.delete()
		.eq('presentation_id', presentationId)

	return error ? false : true
}

export const savePresentationTheme = async (
	presentationId: string,
	theme: {
		backgroundCss: string
		transitionType: string
	},
): Promise<boolean> => {
	const { error } = await supabase
		.from('presentations')
		.update({ theme: theme })
		.eq('presentation_id', presentationId)

	return error ? false : true
}

export const updatePresentationPublicStatus = async (
	presentationId: string,
	isPublic: boolean,
): Promise<boolean> => {
	const { error } = await supabase
		.from('presentations')
		.update({ is_public: isPublic })
		.eq('presentation_id', presentationId)

	return error ? false : true
}
