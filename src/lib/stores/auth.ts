import supabase from '$lib/supabase'
import type { Session, User } from '@supabase/supabase-js'
import { writable } from 'svelte/store'

// Create stores for auth state
export const user = writable<User | null>(null)
export const session = writable<Session | null>(null)

// Initialize auth state
export const initAuth = async () => {
	// Get initial session
	const { data } = await supabase.auth.getSession()
	session.set(data.session)
	user.set(data.session?.user ?? null)

	// Listen for auth changes
	supabase.auth.onAuthStateChange((event, currentSession) => {
		session.set(currentSession)
		user.set(currentSession?.user ?? null)
	})
}

// Helper functions
export const signOut = async () => {
	try {
		const { error } = await supabase.auth.signOut()
		if (error) {
			console.error('Error signing out:', error.message)
			return false
		}
		return true
	} catch (err) {
		console.error('Unexpected error during sign out:', err)
		return false
	}
}
