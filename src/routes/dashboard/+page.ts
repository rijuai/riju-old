export const prerender = true

import { getPresentations } from '$lib/db/presentation'
import type { PageLoad } from './$types'

export const load: PageLoad = async () => {
	const presentations = await getPresentations()
	return {
		presentations,
	}
}
