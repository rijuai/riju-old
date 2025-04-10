<script lang="ts">
import { enhance } from '$app/forms'
import { page } from '$app/state'

let loading = false

function handleSubmit() {
	loading = true
	return async ({ update }) => {
		await update()
		loading = false
	}
}
</script>

<div class="scraper-container">
    <h1>Website Scraper</h1>

    <form
        method="POST"
        action="/dashboard?/scrape"
        use:enhance={handleSubmit}
        class="scraper-form"
    >
        <div class="form-group">
            <label for="url">URL to Scrape</label>
            <input
                type="url"
                id="url"
                name="url"
                placeholder="https://example.com"
                required
            />
        </div>
        <input type="file" />

        <button type="submit" disabled={loading}>
            {loading ? "Scraping..." : "Scrape URL"}
        </button>
    </form>

    {#if page.form}
        {#if page.form.success}
            <div class="results-container">
                <h2>Scraping Results</h2>

                <div class="result-section">
                    <h3>URL</h3>
                    <p>{page.form.scraped.url}</p>
                </div>

                <div class="result-section">
                    <h3>Title</h3>
                    <p>{page.form.scraped.title}</p>
                </div>

                <div class="result-section">
                    <h3>Meta Description</h3>
                    <p>{page.form.scraped.metaDescription || "None"}</p>
                </div>

                <div class="result-section">
                    <h3>Headings ({page.form.scraped.headings.length})</h3>
                    {#if page.form.scraped.headings.length > 0}
                        <ul>
                            {#each page.form.scraped.headings as heading}
                                <li>{heading}</li>
                            {/each}
                        </ul>
                    {:else}
                        <p>No headings found</p>
                    {/if}
                </div>

                <div class="result-section">
                    <h3>Links ({page.form.scraped.links.length})</h3>
                    {#if page.form.scraped.links.length > 0}
                        <ul class="links-list">
                            {#each page.form.scraped.links.slice(0, 50) as link}
                                <li>
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {link.text || link.href}
                                    </a>
                                </li>
                            {/each}
                            {#if page.form.scraped.links.length > 50}
                                <li class="more-links">
                                    ...and {page.form.scraped.links.length - 50}
                                    more links
                                </li>
                            {/if}
                        </ul>
                    {:else}
                        <p>No links found</p>
                    {/if}
                </div>
            </div>
        {:else}
            <div class="error-container">
                <h2>Error</h2>
                <p>{page.form.message}</p>
                {#if page.form.error}
                    <p class="error-detail">{page.form.error}</p>
                {/if}
            </div>
        {/if}
    {/if}
</div>
