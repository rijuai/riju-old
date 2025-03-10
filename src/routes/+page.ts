import supabase from '$lib/supabase'
import { redirect } from '@sveltejs/kit'
import type { PageLoad } from './$types'

export const ssr = false
export const prerender = true

export const load: PageLoad = async () => {
	const { data } = await supabase.auth.getSession()
	const isUserAuthenticated = !!data.session
	if (isUserAuthenticated) redirect(307, '/dashboard')
}
