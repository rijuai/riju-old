<script lang="ts">
    import Dashboard from "$lib/assets/images/docs/dashboard.png";
    import Editor from "$lib/assets/images/docs/editor.png";
    import CommandMenuImage from "$lib/assets/images/docs/command-menu.png";
</script>

<div class="prose prose-xl mx-auto max-w-3xl">
    <h1>How to get started with Riju?</h1>

    <section>
        <p>
            This section shows you how you can easily get started with Riju and
            also it explores all the features of Riju so that you can get most
            out it
        </p>
    </section>

    <section>
        <h2>Intuitive Dashboard</h2>
        <img src={Dashboard} alt="Dashboard" />
        <p>
            The dashboard page is the first page you see when you log in to
            Riju. It contains a list of all your presentations. You can create a
            new presentation by clicking on the <strong>New Presentation</strong
            > button on the top right corner of the page. You can also create presentations
            much more quickly by using prebuilt templates.
        </p>
    </section>

    <section>
        <h2>Creating Presentations</h2>
        <img src={Editor} alt="Editor" />
        <p>
            To create a presentation in the editor, just add your content. To
            add headings, images, lists just enter "/"(slash) OR click on the
            "+"(plus) icon in the left of the line. This will open a menu where
            you can add required action for your slide.
        </p>
    </section>

    <section>
        <h2>Command Menu</h2>
        <img src={CommandMenuImage} alt="Command Menu" />
        <p>
            To add a heading just choose either Heading 1 OR Heading 2. For
            adding a list just choose List, and for adding image choose Image
            menu. For adding new slide, just add New Slide menu and to create a
            split in the slide, use the Split Slide and add content below it,
            and this content will be shown besides the above previous content.
        </p>
    </section>
</div>

<style lang="postcss">
    img {
        @apply rounded-md border p-8 shadow-md;
    }
</style>
