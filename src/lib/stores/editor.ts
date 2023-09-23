import type { JSONContent } from '@tiptap/core'
import { writable } from 'svelte/store'

export let currentPresentationId = writable(''),
	currentPresentationTitle = writable(''),
	showDeleteModal = writable(false),
	editorOutput = writable({} as JSONContent)
