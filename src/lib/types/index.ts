import type { SvelteComponent } from 'svelte'

export interface PostMetadata {
    title: string
    description?: string
    date?: string
    author?: string
    image?: string
    layout: string
}

export interface Post {
    metadata: PostMetadata
    default: typeof SvelteComponent
} 