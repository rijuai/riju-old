import { supabase } from '$lib/config/supabase'

export const getUserData = async () => {
	const { data, error } = await supabase.auth.getSession()

	if (error) return console.error(error)
	return data.session!.user
}
