alter table "public"."presentations" alter column "updated_at" set default now();

alter table "public"."presentations" alter column "updated_at" set not null;


