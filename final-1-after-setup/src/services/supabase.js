
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://trhwiordgjppwwuodptf.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRyaHdpb3JkZ2pwcHd3dW9kcHRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg3ODQ1NzIsImV4cCI6MjAxNDM2MDU3Mn0.-ZmSgBOcTxPLlRoXZeXTMCUXv3w-YVMrHB8JKFwFM24"

const supabase = createClient(supabaseUrl, supabaseKey)
// const supabaseKey = process.env.SUPABASE_KEY

export default supabase;