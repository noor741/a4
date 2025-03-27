import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vlgxhxzvfuzowhvonhsj.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZsZ3hoeHp2ZnV6b3dodm9uaHNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMwMzc2NDgsImV4cCI6MjA1ODYxMzY0OH0.m7f9d7xmQYlEfqNRGfUXyu1teUjvI1CpoKIbwOWFsyo";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// const supabase = createClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
// );

export default supabase;