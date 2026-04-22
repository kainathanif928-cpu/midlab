import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://pykyesnvyrellsjfzljn.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB5a3llc252eXJlbGxzamZ6bGpuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY4MzkzNjAsImV4cCI6MjA5MjQxNTM2MH0.I6aWJl5KXmDsorGJuNGf8AwzOeaH9p6hkAEt7YvirMk'

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase URL or Anon Key is missing. Check your environment variables.')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
