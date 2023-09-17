import { writable } from 'svelte/store'

export let userId = writable('')
export let isUserSignedIn = writable(false)
