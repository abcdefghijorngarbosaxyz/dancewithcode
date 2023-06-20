<script lang="ts">
  import ArrowNe from '../components/icons/ArrowNE.svelte';

  const socials: Array<{ url: string; name: string }> = [
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
    }
  ];
</script>

<h1>Jorn Blaedel Garbosa</h1>
<p>
  I am a web developer, specializing in Typescript and Web Performance, holding a steadfast belief
  in the transformative power of simplicity. Embracing the elegance of minimalism, my website
  becomes a reflection of my approach to both design and life itself. With every pixel meticulously
  placed, I passionately strive to create digital experiences that exhale elegance and
  functionality.
</p>
<p>
  I am also proficient in Python and Rust, but my true passion lies in the realm of web development.
  It is within this domain that I pour my energy and expertise, channeling my creativity and
  problem-solving abilities to build seamless and immersive digital experiences.
</p>

<section class="w-full flex flex-col md:flex-row space-x-4">
  {#each socials as social}
    <a class="flex items-center" href={social.url}
      >{social.name} <span class="w-4 h-4 ml-1 -mr-1"><ArrowNe class="w-full h-full" /></span>
    </a>
  {/each}
</section>

<hr class="w-full border-dashed" />

<h2>Now</h2>
<p>
  In this present moment, I am fully dedicated to developing and refining my skills as a web
  developer. Each day is a new opportunity for growth, as I actively engage in practice and learning
  to stay ahead of the curve. The freelance world has become my playground, where I apply my
  expertise and collaborate with clients to bring their visions to life.
</p>
<p>
  When I'm not immersed in the world of web development, you'll often find me diving into the
  captivating universe of online gaming. It's a thrilling escape where I can unleash my competitive
  spirit and connect with a vibrant community of like-minded individuals.
</p>
