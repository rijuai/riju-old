import { supabase } from '$lib/config/supabase'
import type { JSONContent } from '@tiptap/core'
import type { Json } from '../../schema'

export const getPresentations = async (): Promise<
	{ id: string; title: string | null }[] | null
> => {
	const { data } = await supabase
		.from('presentations')
		.select('id, title')
		.order('updated_at', { ascending: false })

	return data ? data : null
}

export const createPresentation = async (
	title: string,
	content = [],
	theme = {},
	// biome-ignore lint/suspicious/noConfusingVoidType: <explanation>
): Promise<string | void> => {
	const { data, error } = await supabase
		.from('presentations')
		.insert({
			title: title,
			content: content,
			theme: theme,
		})
		.select('id')

	return data ? data[0].id : console.error(error)
}

export const getFullPresentation = async (
	presentationId: string,
): Promise<{
	content: Json
	theme: Json
	is_public: boolean | null
} | null> => {
	const { data } = await supabase
		.from('presentations')
		.select('content, theme, is_public')
		.eq('id', presentationId)

	return data ? data[0] : null
}

export const getPresentationContent = async (
	presentationId: string,
): Promise<Json | null> => {
	const { data, error } = await supabase
		.from('presentations')
		.select('content')
		.eq('id', presentationId)

	return data ? data[0].content : null
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
