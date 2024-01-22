import { supabase } from '$lib/config/supabase'

export const isUserAuthenticated = async (): Promise<boolean> => {
	const user = (await supabase.auth.getSession()).data.session?.user

	return user ? true : false
}
