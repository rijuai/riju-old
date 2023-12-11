import { supabase } from '$lib/config/supabase'

export const isUserAuthenticated = async (): Promise<boolean> => {
	const user = (await supabase.auth.getSession()).data.session?.user

	return user ? true : false
}

export const getUserEmail = async (): Promise<string | null> => {
	const { data } = await supabase.auth.getSession()
	const userEmail = data.session?.user.email

	return userEmail ? userEmail : null
}

export const signOut = async (): Promise<boolean> => {
	const { error } = await supabase.auth.signOut()

	return error ? false : true
}
