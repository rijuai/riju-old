import supabase from '$lib/supabase'
import type { PageLoad } from './$types'

export const load: PageLoad = async () => {
	try {
		// Example of fetching data from Supabase
		const { data: presentations, error } = await supabase
			.from('presentations')
			.select('id, title')
			.order('updated_at', { ascending: false })

		if (error) {
			console.error('Error fetching presentations:', error.message)
			return { presentations: [] }
		}

		return {
			presentations: presentations || []
		}
	} catch (err) {
		console.error('Unexpected error loading dashboard:', err)
		return { presentations: [] }
	}
}
