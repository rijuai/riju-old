create table "public"."presentations" (
    "created_at" timestamp with time zone not null default now(),
    "user_id" uuid not null default auth.uid(),
    "updated_at" timestamp with time zone,
    "title" text,
    "content" jsonb,
    "is_public" boolean default false,
    "id" uuid not null default gen_random_uuid(),
    "theme" jsonb
);


alter table "public"."presentations" enable row level security;

CREATE UNIQUE INDEX presentations_id_key ON public.presentations USING btree (id);

CREATE UNIQUE INDEX presentations_pkey ON public.presentations USING btree (id);

alter table "public"."presentations" add constraint "presentations_pkey" PRIMARY KEY using index "presentations_pkey";

alter table "public"."presentations" add constraint "presentations_id_key" UNIQUE using index "presentations_id_key";

alter table "public"."presentations" add constraint "presentations_user_id_fkey" FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE not valid;

alter table "public"."presentations" validate constraint "presentations_user_id_fkey";


