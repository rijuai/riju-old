import { supabase } from '$lib/config/supabase'
import type { JSONContent } from '@tiptap/core'

export const getPresentations = async (): Promise<Presentations | null> => {
	const { data } = await supabase
		.from('presentations')
		.select('id, title, thumbnail')
		.order('updated_at', { ascending: false })

	return data ? data : null
}

export const createPresentation = async (title: string): Promise<string> => {
	const { data, error } = await supabase
		.from('presentations')
		.insert({
			title: title,
		})
		.select('id')

	return error ? console.error(error) : data![0].id
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
		.select('id')

	return error ? console.error(error) : data![0].id
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
		.eq('id', presentation_id)

	return data![0]
}

export const getPresentationContent = async (
	presentationId: string,
): Promise<any> => {
	const { data, error } = await supabase
		.from('presentations')
		.select('content')
		.eq('id', presentationId)

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
		.eq('id', presentationId)

	return error ? false : true
}

export const deletePresentation = async (
	presentationId: string,
): Promise<boolean> => {
	const { error } = await supabase
		.from('presentations')
		.delete()
		.eq('id', presentationId)

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
		.eq('id', presentationId)

	return error ? false : true
}

export const updatePresentationPublicStatus = async (
	presentationId: string,
	isPublic: boolean,
): Promise<boolean> => {
	const { error } = await supabase
		.from('presentations')
		.update({ is_public: isPublic })
		.eq('id', presentationId)

	return error ? false : true
}
