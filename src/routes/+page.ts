import pb from '$lib/pocketbase'
import { redirect } from '@sveltejs/kit'
import type { PageLoad } from './$types'

export const ssr = false

export const load: PageLoad = async () => {
	const isUserAuthenticated = pb.authStore.isValid
	if (isUserAuthenticated) redirect(302, '/dashboard')
}
