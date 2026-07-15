<template>
    <header class="bg-bg-900">
        <div class="container">
            <div class="flex flex-col items-center text-center my-40">
                <h1 class="container font-bold text-5xl text-center text-primary">
                    Privacy Policy
                </h1>
                <p class="text-bg-200 text-sm mt-2">Last Updated: July 15, 2026</p>
            </div>
        </div>
    </header>

    <section class="py-15 bg-bg-800">
        <div class="container">
            <h2>Data Collection</h2>
            <article class="card hover-up hover-shadow">
                <p class="mb-4">
                    Our source code contains <strong>zero</strong> tracking scripts, analytics, cookies, or data-collection mechanisms.
                    We do not store, log, or transmit any of your personal data because we don't have our own server.
                    Since we hold absolutely none of your data, we cannot fulfill access, deletion, or correction requests—because there is simply
                    nothing to give.
                </p>
                <div class="my-8 h-1 gradient-divider"></div>
                <p class="mb-4">
                    This site is delivered through <strong>Cloudflare</strong> (our CDN and security provider).
                    Cloudflare processes network-level data on their edge servers to keep the site fast and secure.
                    This may include your IP address, browser type, device, country, and request timestamps.
                </p>
                <p class="mb-4">
                    Cloudflare may also place strictly necessary security cookies (e.g., <code>__cf_bm</code>) to block bots.
                    We do not control these cookies, they are set automatically by Cloudflare's infrastructure.
                </p>
                <p>
                    We rely on our <strong>legitimate interest</strong> (security and performance) for this processing.
                    All data is handled under Cloudflare's own policies.
                </p>
            </article>
        </div>
    </section>

    <section class="py-15 bg-bg-900">
        <div class="container">
            <h2>Your Rights &amp; Third-Party Links</h2>
            <article class="card hover-up hover-shadow">
                <p class="mb-4">
                    Because we store no personal data, we cannot action individual data requests.
                    For full details on how Cloudflare processes data, their international transfers (SCCs), and their cookie practices,
                    please read their official policies:
                </p>
                <p class="mb-4">
                    <a href="https://cloudflare.com/privacy/" target="_blank" class="text-primary hover:underline" referrerpolicy="strict-origin-when-cross-origin">
                        Cloudflare Privacy Policy
                    </a><br>
                    <a href="https://cloudflare.com/cloudflare-customer-dpa/" target="_blank" class="text-primary hover:underline" referrerpolicy="strict-origin-when-cross-origin">
                        Cloudflare Data Processing Addendum (DPA)
                    </a><br>
                </p>
                <p>
                    Contact us: <a href="mailto:akeoot@pm.me">akeoot@pm.me</a>
                </p>
            </article>
        </div>
    </section>

    <div class="container my-10 text-center">
        <a class="text-bg-700 font-bold no-underline inline-block bg-primary rounded-xl px-5 py-2.5 transition-transform duration-300 hover:transform-[scale(1.1)]" href="/">
            Return to Homepage
        </a>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ViewPrivacyPolicy',
})
</script>

<style scoped />