import type { JSONContent } from '@tiptap/core';
import { writable, type Writable } from 'svelte/store';

export let editorOutput: Writable<JSONContent> = writable();
