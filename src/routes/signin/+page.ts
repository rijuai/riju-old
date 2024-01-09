import { isUserAuthenticated } from '$lib/db/auth'
import { redirect } from '@sveltejs/kit'
import type { PageLoad } from '../$types'

export const ssr = false
export const prerender = true

export const load: PageLoad = async () => {
	if (await isUserAuthenticated()) redirect(301, '/dashboard')
}
