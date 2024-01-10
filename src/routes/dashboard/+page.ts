import { getPresentations } from '$lib/db/presentation'
import type { PageLoad } from './$types'

export const load = (async () => {
	const presentations = await getPresentations()

	return {
		presentations,
	}
}) satisfies PageLoad
