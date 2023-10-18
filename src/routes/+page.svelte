<script lang="ts">
  import ArrowNe from '../components/icons/ArrowNE.svelte';

  type LinkItem = { url: string; name: string; description?: string };

  const socials: Array<LinkItem> = [
    {
      url: 'mailto:hello@jorndoescode.lol',
      name: 'Email'
    },
    {
      url: 'https://instagram.com/definitelynotjorn',
      name: 'Instagram'
    },
    {
      url: 'https://github.com/abcdefghijorngarbosaxyz',
      name: 'GitHub'
    },
    {
      url: 'https://rep.ly/dfntlynotjorn',
      name: 'Rep.ly'
    }
  ];

  const buildings: Array<LinkItem> = [
    {
      url: 'https://github.com/Zeri-App/zeri',
      name: 'Zeri',
      description: 'an offline first, free, and open-source desktop music player.'
    },
    {
      url: 'https://github.com/abcdefghijorngarbosaxyz/quakerauth',
      name: 'Quakerauth',
      description: 'a time-based OTP authenticator app.'
    },
  ];

  const projects: Array<LinkItem> = [
    {
      url: 'https://dmw-registration.vercel.app',
      name: 'DMW Registration',
      description: 'a demo app on Department of Migrant Workers(PH) registration.'
    },
    {
      url: 'https://kazinsbeachresort.com',
      name: 'Kazins',
      description: 'a mock website for a resort in Capiz.'
    },
    {
      url: 'https://text-to-asterisks.vercel.app',
      name: 'Star-inator',
      description: 'a text masking app, for fun.'
    },
    {
      url: 'https://capsu-clearance.vercel.app',
      name: 'Clearsys',
      description: 'a case study app for a state university in Capiz.'
    }
  ];
</script>

<svelte:head>
  <title>Jorn Blaedel Garbosa</title>
  <meta
    name="description"
    content="I am a web developer, focusing in Typescript, holding a steadfast belief in the transformative power of simplicity." />
  <meta property="og:title" content="Jorn Blaedel Garbosa" />
  <meta
    property="og:description"
    content="I am a web developer, focusing in Typescript, holding a steadfast belief in the transformative power of simplicity." />
  <meta property="twitter:title" content="Jorn Blaedel Garbosa" />
  <meta
    property="twitter:description"
    content="I am a web developer, focusing in Typescript, holding a steadfast belief in the transformative power of simplicity." />
  <meta property="og:site_name" content="Jorn Blaedel Garbosa" />
</svelte:head>

<h1>Jorn Blaedel Garbosa</h1>
<p>
  I am a web developer, focusing in <a target="_blank" href="https://www.typescriptlang.org/"
    >Typescript</a
  >, holding a steadfast belief in the transformative power of simplicity. Embracing the elegance of
  minimalism, my website becomes a reflection of my approach to both design and life itself. With
  every pixel meticulously placed, I passionately strive to create digital experiences that exhale
  elegance and functionality.
</p>

<hr class="border-dashed" />

<h2>Say Hello</h2>
<section class="w-full flex flex-col max-md:space-y-4 md:flex-row md:space-x-4">
  {#each socials as social}
    <a
      target="_blank"
      rel="noopener noreferrer"
      class="flex items-center no-underline w-fit"
      href={social.url}
      >{social.name} <span class="w-4 h-4 ml-1 -mr-1"><ArrowNe class="w-full h-full" /></span>
    </a>
  {/each}
</section>

<hr class="border-dashed" />

<h2>Beyond the Clock</h2>
<p>
  I am fully dedicated to developing and refining my skills as a web developer. Each day is a new
  opportunity for growth, as I actively engage in practice and learning to stay ahead of the curve.
  These are what I'm building now:
</p>
<ul>
  {#each buildings as building}
    <li>
      <p>
        <span><a target="_blank" href={building.url}>{building.name}</a></span> — {building.description}
      </p>
    </li>
  {/each}
</ul>
<p>
  I also freelance occasionally, it has become my playground, where I apply my expertise and
  collaborate with clients to bring their visions to life.
</p>

<hr class="border-dashed" />

<h2>Ideas Brought to Life</h2>
<ul>
  {#each projects as project}
    <li>
      <p>
        <span><a target="_blank" href={project.url}>{project.name}</a></span> — {project.description}
      </p>
    </li>
  {/each}
</ul>

<hr class="border-dashed" />

<h2>PS: BOBO MO AYWA</h2>
