import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://svrakrhxrlmxryywyqyh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN2cmFrcmh4cmxteHJ5eXd5cXloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg1ODYxMjksImV4cCI6MjAyNDE2MjEyOX0.tAOUYa8LF0-WhusrLCk7U4a_F1097gkMwRxdW3uXA0Y";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
