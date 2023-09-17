import { supabase } from '$lib/config/supabase'

export const signInWithMagicLink = async (email: string) => {
	let { error } = await supabase.auth.signInWithOtp({
		email: email,
		options: {
			emailRedirectTo: 'https://riju.page/dashboard?userLoggedIn=true',
		},
	})

	if (error) return false
	return true
}
