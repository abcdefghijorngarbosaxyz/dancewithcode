<script lang="ts">
  import '../app.css';
  import person from '$lib/schema';

  const schema = `<script type="application/ld+json">${
    JSON.stringify(person, null, 2) + '<'
  }/script>`;
</script>

<svelte:head>
  {@html schema}
</svelte:head>

<main>
  <article>
    <slot />
  </article>
</main>
