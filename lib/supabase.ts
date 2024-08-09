import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { createClient } from "@supabase/supabase-js";

// Replace 'YOUR_SUPABASE_URL' and 'YOUR_SUPABASE_KEY' with your actual Supabase URL and key
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabasePublicKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;
const supabaseAdminKey = process.env
  .NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY as string;

// Create a new Supabase client
//For Website
const supabaseAnon = createClient(supabaseUrl, supabasePublicKey);

//For Dashboard
const supabaseAdmin = createClient(supabaseUrl, supabaseAdminKey);

const supabaseClient = createClientComponentClient({
  supabaseUrl,
  supabaseKey: supabasePublicKey,
});

export { supabaseAnon, supabaseAdmin, supabaseClient };
