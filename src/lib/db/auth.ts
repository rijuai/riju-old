import { supabase } from '$lib/config/supabase'

export const signInWithMagicLink = async (email: string): Promise<boolean> => {
	let { error } = await supabase.auth.signInWithOtp({
		email: email,
		options: {
			emailRedirectTo: 'https://riju.page/dashboard?userLoggedIn=true',
		},
	})

	if (error) return false
	return true
}

export const getUserSignInStatus = async (): Promise<boolean> => {
	const user = (await supabase.auth.getSession()).data.session?.user

	if (user) return true

	return false
}

export const signOut = async (): Promise<void> => {
	supabase.auth.signOut()
}

export const getUserId = async (): Promise<string> => {
	const { data, error } = await supabase.auth.getSession()

	if (data.session) {
		const userId = data.session.user.id
		return userId
	}
	return error!.message
}
