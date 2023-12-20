drop policy "Enable all access for users based on user_id" on "public"."presentations";

alter table "public"."presentations" drop constraint "presentations_user_id_fkey";

alter table "public"."presentations" drop column "user_id";

alter table "public"."presentations" add column "created_by" uuid default auth.uid();

alter table "public"."presentations" add constraint "presentations_created_by_fkey" FOREIGN KEY (created_by) REFERENCES auth.users(id) ON DELETE CASCADE not valid;

alter table "public"."presentations" validate constraint "presentations_created_by_fkey";

create policy "Enable all access for users based on user_id"
on "public"."presentations"
as permissive
for all
to authenticated
using ((auth.uid() = created_by))
with check ((auth.uid() = created_by));



