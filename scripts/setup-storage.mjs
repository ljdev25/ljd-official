// One-off setup script: creates the public Storage bucket used for article images.
// Run with: node --env-file=.env.local scripts/setup-storage.mjs
import { createClient } from "@supabase/supabase-js";

const BUCKET = "article-images";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const { data: buckets, error: listError } = await supabaseAdmin.storage.listBuckets();
if (listError) {
  console.error("Failed to list buckets:", listError.message);
  process.exit(1);
}

if (buckets.some((b) => b.name === BUCKET)) {
  console.log(`Bucket "${BUCKET}" already exists.`);
} else {
  const { error } = await supabaseAdmin.storage.createBucket(BUCKET, {
    public: true,
  });
  if (error) {
    console.error("Failed to create bucket:", error.message);
    process.exit(1);
  }
  console.log(`Bucket "${BUCKET}" created.`);
}
