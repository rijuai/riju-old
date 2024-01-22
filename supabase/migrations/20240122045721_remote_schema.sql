drop policy "Enable all access for users based on user_id" on "public"."presentations";

CREATE INDEX presentations_created_by_id_idx ON public.presentations USING btree (created_by, id);

create policy "presentation_read_policy"
on "public"."presentations"
as permissive
for select
to public
using (((is_public = true) OR (created_by = ( SELECT auth.uid() AS uid))));


create policy "presentation_write_policy"
on "public"."presentations"
as permissive
for all
to authenticated
using ((( SELECT auth.uid() AS uid) = created_by))
with check ((( SELECT auth.uid() AS uid) = created_by));



