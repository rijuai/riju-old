import { writable, type Writable } from 'svelte/store'

export let userId: Writable<string> = writable('')
export let isUserSignedIn = writable(false)
