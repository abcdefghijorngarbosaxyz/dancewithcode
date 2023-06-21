<script lang="ts">
  import { page } from '$app/stores';
</script>

<svelte:head>
  {#if $page.status === 404}
    <title>Lost Gems Unveiled</title>
    <meta
      name="description"
      content="Lost in the vastness of the digital realm, stumbled upon a void—a page that vanished into
      nothingness." />
  {:else}
    <title>Into the Unknown</title>
    <meta name="description" content="Unraveling the Mystery of an Unexpected Error." />
  {/if}
</svelte:head>

<h1>{$page.status}—{$page.error?.message}</h1>
{#if $page.status === 404}
  <p>
    Within the confines of an Error 404 page, we encounter fragments of the past—thoughts discarded,
    designs unfinished, and phrases left unspoken. In this digital realm, as websites grow smaller,
    they shed layers of the familiar, unveiling new possibilities. But in this minimalistic
    landscape, we find room for evolution, reinvention, and the allure of what lies beyond the
    confines of the known. Embrace the mystery, for in the absence of what once was, new
    possibilities emerge, waiting to be unveiled.
  </p>
{:else}
  <p>
    In the realm of the unforeseen, an enigmatic error emerges, with its dancing glitches and
    whispered server secrets, defying explanation. Amidst the uncertainty, embrace the quest for
    answers, for within the unknown lies the opportunity to uncover hidden truths, forge new
    understandings, and illuminate uncharted paths.
  </p>
{/if}
