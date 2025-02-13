<script lang="ts">
import BlocksList from '$lib/assets/images/docs/blocks-list.png'
import Blocks from '$lib/assets/images/docs/blocks.png'
import Dashboard from '$lib/assets/images/docs/dashboard.png'
import Editor from '$lib/assets/images/docs/editor.png'
import MetaTags from '$lib/components/MetaTags.svelte'
</script>

<MetaTags
    title="Riju | Getting Started"
    description="How to get started with Riju?"
/>

<div class="prose mx-auto max-w-3xl px-4 py-8 lg:py-12">
    <h1>Getting started with Riju</h1>

    <section>
        <p>
            Riju uses blocks to create presentations. Like if you want to add a
            Heading, then just click slash and select thr Heading 1 or Heading 2
            option.
        </p>
    </section>

    <section>
        <h2>Create a presentation</h2>
        <p>
            In Riju you can create a presentation by two ways. You can create a
            new presentation by choosing a preset templates [OR] by creating
            from a blank presentation. To create just click on the "Create"
            button on top right corner.
        </p>
        <img src={Dashboard} alt="Dashboard" />
    </section>

    <section>
        <h2>Just start typing</h2>
        <p>
            After that just start typing your content. By default the selected
            text will appear as paragraph; if you want to change it to like
            Heading, then just press "/"(Slash) [OR] click on the "+" icon on
            the left.
        </p>
        <img src={Editor} alt="Editor" />
    </section>

    <section>
        <h2>Everything is a block</h2>
        <p>
            Riju uses block based editing for providing much simpler and cleaner
            UI. What it means is in Riju Editor, everthing is a block like a
            text, heading, image, new slide, split slide, etc. is a block.
        </p>
        <p>
            And you can customise the look and feel of your presentation by
            using relevant blocks.
        </p>
        <img src={BlocksList} alt="Blocks List" />
        <h3>Currently available blocks,</h3>
        <ul>
            <li>Text</li>
            <li>Heading 1</li>
            <li>Heading 2</li>
            <li>List</li>
            <li>Image</li>
            <li>New Slide</li>
            <li>Split Slide</li>
        </ul>
        <img src={Blocks} alt="Blocks" />
    </section>

    <section>
        <h2>Autosave</h2>
        <p>
            Riju automatically saves your progress as you type, so you don't
            have to worry about clicking save everytime.
        </p>
    </section>
</div>

<style lang="postcss">
    img {
        @apply mx-auto rounded-lg border p-4 shadow-lg;
    }
</style>
