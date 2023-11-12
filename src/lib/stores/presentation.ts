import type { JSONContent } from '@tiptap/core'
import { writable } from 'svelte/store'

export let editorOutput = writable({} as JSONContent)
