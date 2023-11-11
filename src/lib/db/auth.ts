import { supabase } from '$lib/config/supabase'

export const signInWithMagicLink = async (email: string): Promise<boolean> => {
	let { error } = await supabase.auth.signInWithOtp({
		email: email,
		options: {
			emailRedirectTo: 'https://riju.ai/dashboard',
		},
	})

	return error ? false : true
}

export const signInWithGooogle = async (): Promise<boolean> => {
	const { error } = await supabase.auth.signInWithOAuth({
		provider: 'google',
		options: {
			redirectTo: 'https://riju.ai/dashboard',
		},
	})

	return error ? false : true
}

export const signInWithMicrosoft = async () => {
	const { error } = await supabase.auth.signInWithOAuth({
		provider: 'azure',
		options: {
			redirectTo: 'https://riju.ai/dashboard',
		},
	})

	return error ? false : true
}

export const isUserAuthenticated = async (): Promise<boolean> => {
	const user = (await supabase.auth.getSession()).data.session?.user

	return user ? true : false
}

export const signOut = async (): Promise<boolean> => {
	let { error } = await supabase.auth.signOut()

	return error ? false : true
}

export const getUserId = async (): Promise<string | false> => {
	const { data } = await supabase.auth.getSession()
	const userId = data.session?.user.id

	return userId ? userId : false
}

export const getUserEmail = async (): Promise<string | false> => {
	const { data } = await supabase.auth.getSession()
	const userEmail = data.session?.user.email

	return userEmail ? userEmail : false
}
