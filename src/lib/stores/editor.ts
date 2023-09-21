import type { JSONContent } from '@tiptap/core'
import { writable } from 'svelte/store'

export let currentPresentationId = writable('')
export let currentPresentationTitle = writable('')
export let showDeleteModal = writable(false)
export let editorOutput = writable({} as JSONContent)
