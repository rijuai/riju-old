# Riju

Superfast presentation creator...

## Installation

1. Clone the repo using
```git clone```
2. Install PNPM
3. Install Biome VSCode extension
4. Install the dependencies using
```pnpm install```
5. Set the environment variables in ```.env.local```

```env
# Supabase
PUBLIC_SUPABASE_URL = <your-local-supabase-url>
PUBLIC_SUPABASE_ANON_KEY = <your-local-supabase-anon-key>

# Cloudflare R2
R2_ACCESS_KEY = <r2-cloud-access-key>
R2_ACCOUNT_ID = <r2-cloud-account-id>
R2_SECRET_KEY = <r2-cloud-secret-key>
PUBLIC_R2_BUCKET_NAME = riju-user-assets

# OpenAI
OPENAI_KEY = <open-ai-key>

# Pexels
PEXELS_API_KEY = <pexels-key>

# Listmonk
LISTMONK_USERNAME = <listmonk-username>
LISTMONK_PASSWORD = <listmonk-password>
```

## Tech Stack

- SvelteKit: Frontend, APIs
- Supabase: Database, Auth
- Cloudflare R2: Image Storage
- Cloudflare Pages: Hosting
- Cloudflare Workers: Serverless Functions
- OpenAI: AI Image Generation
- Pexels: Stock Images
- Listmonk: Email Marketing
