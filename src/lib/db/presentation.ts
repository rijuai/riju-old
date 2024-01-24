import { supabase } from '$lib/config/supabase'
import type { JSONContent } from '@tiptap/core'
import type { Json } from '../../schema'

export const createPresentation = async (
	title: string,
	content: Json = [],
	theme: Json = {},
): Promise<string | null> => {
	const { data } = await supabase
		.from('presentations')
		.insert({
			title: title,
			content: content,
			theme: theme,
		})
		.select('id')

	return data ? data[0].id : null
}

export const getPresentationContent = async (
	presentationId: string,
): Promise<{ content: Json } | null> => {
	const { data } = await supabase
		.from('presentations')
		.select('content')
		.eq('id', presentationId)

	return data ? data[0] : null
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
