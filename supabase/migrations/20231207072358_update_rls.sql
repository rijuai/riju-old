create policy "Enable all access for users based on user_id"
on "public"."presentations"
as permissive
for all
to public
using ((auth.uid() = user_id))
with check ((auth.uid() = user_id));


create policy "Public presentations are visible to everyone"
on "public"."presentations"
as permissive
for select
to public
using ((is_public = true));



