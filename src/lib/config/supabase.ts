import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://xrqtyfvyqmwhdnuyskip.supabase.co'
const SUPABASE_ANON_KEY =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhycXR5ZnZ5cW13aGRudXlza2lwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI1MTIzMDUsImV4cCI6MjAwODA4ODMwNX0.fS48YgFiPMHbyunud5vQO3lAe3maHOAlJyn-_-3ZuWg'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
