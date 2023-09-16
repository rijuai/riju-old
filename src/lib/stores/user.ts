import { writable } from 'svelte/store'

export let userId = writable('')
export let isUserLoggedIn = writable(false)
