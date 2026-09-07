<script lang="ts">
import InterestCard from '@/components/InterestCard.vue';
import { CollapsibleAccordion } from '@/utils/CollapsibleAccordion';
import { SkillIcons } from '@/utils/SkillIcons';
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  name: 'ViewHome',
  components: {
    InterestCard,
  },
  setup() {
    onMounted(() => {
      new CollapsibleAccordion({ allowMultipleOpen: false });
      new SkillIcons("skillicons").load();
    });
  }
})
</script>

<template>
  <header class="pb-5 bg-bg-900">
    <div class="flex flex-col items-center text-center mt-20 gap-6">
      <img class="bg-primary border-primary w-37.5 h-37.5 border-4 rounded-full shadow-element-primary animate-float" src="/favicon/web-app-manifest-192x192.png" alt="Homura Fumo" decoding="async" loading="eager" width="150" height="150">

      <h1 class="gradient">Ame</h1>

      <p class="text-[1.2rem] text-primary">
        (Akeoot/Akeoott)<br>Backend Developer &amp; Linux Enthusiast<br>
        <span class="text-[1rem] text-primary-dark">
          This page is my bio. This is not a portfolio.<br>
          Don't treat this like a professional page.
        </span>
      </p>
    </div>
  </header>

  <section class="pt-10 pb-15 bg-bg-800 bg-full-width">
    <h2 class="mb-8">About Me</h2>

    <article class="card hover-up hover-shadow">
      <p>
        Hello! I'm Ame, a self-taught backend and semi frontend dev from Germany.
        I started my coding journey on <time datetime="2025-02-20">February 20th, 2025</time>,
        and I've been fully immersed in it ever since.
        I love building systems, testing new technologies and learning how things work under the hood.
      </p>
      <div class="my-8 h-1 gradient-divider"></div>
      <p>
        When I'm not coding, you'll almost always find me with music playing.
        I love everything from Vocaloid to K-pop to breakcore etc.
        I'm also a huge cat person, and I'm probably lusting over Felix from stray kids or playing rhythm games like osu or project sekai.
        I learn very quickly when something really catches my interest, and I love a good challenge.
      </p><br>
      <p>
        I've gathered a good amount of experience by now, but still not an expert!
      </p>
    </article>
  </section>

  <section class="pt-10 pb-15 bg-bg-900">
    <h2 class="mb-8">My Interests</h2>

    <div class="grid gap-6 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
      <InterestCard title="Linux Systems" description="Daily Arch Linux user who's actually productive using it (unlike u)" icon='<i class="fab fa-linux"></i>' />
      <InterestCard title="Backend Dev" description="I main C# but am also learning rust! Making things that actually work..." icon='<i class="fas fa-code"></i>' />
      <InterestCard title="Music" description="I've wanted to learn creating music for a while now ;-; (help)" icon='<i class="fas fa-music"></i>' />
      <InterestCard title="Tech" description="Getting more into low level performance and server tech (like Kubernetes etc)" icon='<i class="fa-solid fa-gears"></i>' />
    </div>
  </section>

  <section class="pt-10 pb-15 bg-bg-800 bg-full-width">
    <h2 class="mb-8">My Journey &amp; Goals</h2>

    <button type="button" class="collapsible" aria-label="Toggle My Coding Journey Section" aria-expanded="false" aria-controls="coding-journey-content">
      My Coding Journey
    </button>
    <article id="coding-journey-content" class="content">
      <div class="dropdown-card flex flex-col">
        <p>
          I started learning to code in early <time datetime="2025">2025</time>
          and made my first GitHub commit on <time datetime="2025-04-29">April 29th</time>.
          As someone with a certain degree of autism,
          I enjoy solving problems and and love figuring out how things actually work,
          which is why backend development is so interesting to me.
          I'm a quick learner and I'm always looking for the next thing to understand.
        </p>
        <img class="mt-5 w-full h-64 rounded-[15px]" src="@/assets/images/kitty-cat.webp" decoding="async" loading="lazy" alt="A cute cat">
      </div>
    </article>

    <button type="button" class="collapsible" aria-label="Toggle My Tech Stack &amp; Preferences Section" aria-expanded="false" aria-controls="tech-stack-content">
      My Tech Stack &amp; Preferences
    </button>
    <article id="tech-stack-content" class="content">
      <div class="dropdown-card">
        <ul class="list-disc pl-6 space-y-1">
          <li>
            <span class="font-bold">Stack:</span>
            I main C# and am comfortable building things with it.
          </li>
          <li>
            <span class="font-bold">Learning Now:</span>
            Rust, SignalR, In Depth Vue and more.
          </li>
          <li>
            <span class="font-bold">Web Stuff:</span>
            I know my way around Vue, Tailwind and TypeScript (this site is built on those)
          </li>
          <li>
            <span class="font-bold">Operating System:</span>
            I use Arch Linux everyday, used to be a windows only user XP.
          </li>
          <li>
            <span class="font-bold">Languages:</span>
            I'm German, but fluent in English.
          </li>
        </ul>
        <figure id="skillicons" class="pt-4 grid grid-cols-[repeat(auto-fill,minmax(50px,1fr))]" aria-label="Skill icons"></figure>
        <p class="pt-1">
          I know my way around a good amount of things!
        </p>
      </div>
    </article>

    <button type="button" class="collapsible" aria-label="Toggle My Aspirations Section" aria-expanded="false" aria-controls="aspirations-content">
      My Aspirations
    </button>
    <article id="aspirations-content" class="content">
      <div class="dropdown-card">
        <p class="mb-5">
          I'm currently focusing on getting more fluent in C#,
          learning Rust and getting more comfortable with OS level interactions.
          I've learned making bash scripts, combining different languages and runtimes, frontend styling and much more.
        </p>

        <div class="mb-5">
          <span class="block">What I'm also going to focus on is the server stack:</span>
          <div class="grid grid-cols-[auto_1fr] gap-x-2 pl-4">
            <span class="font-bold">Foundation:</span>
            <span>Proxmox, OS (Talos Linux / Flatcar / Fedora CoreOS)</span>

            <span class="font-bold">Logic flow:</span>
            <span>SQL (PostgreSQL, MySQL, SQLite), Redis, Docker, Kubernetes, nginx</span>
          </div>
        </div>

        <p>
          In the long run, I want to work on big, backend systems and keep contributing to open-source projects.
          I want to build things that are both smart and reliable unlike some programs that I'm not gonna mention -_-<br>
          Btw Linus Torvalds is freaking cool &lt;3
        </p>
      </div>
    </article>
  </section>

  <section class="py-10 bg-bg-900">
    <h2 class="mb-8">Let's Connect!</h2>

    <article class="card hover-up hover-shadow">
      <p class="mb-3">
        Love open source and are comfortable with Nodejs or the .NET SDK?<br>
        Then feel free to reach out to me! It can be about anything really :P<br>
        Email: <a href="mailto:akeoot@pm.me" class="text-primary hover:underline">akeoot@pm.me</a>
      </p>
      <blockquote class="mb-3 text-[1rem] text-primary-dark">
        IMPORTANT: No job offers, "business opportunities", or malicious messages. Only legitimate topics.
      </blockquote>
      <img class="w-full object-cover rounded-[15px]" src="@/assets/images/im_goated.webp" decoding="async" loading="lazy" alt="Cat stretched with a header saying 'wait im goated'">
    </article>
  </section>
</template>

<style scoped>
header {
  position: relative;
  overflow: hidden;
}

header::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background:
    radial-gradient(circle at 20% 50%, var(--color-primary) 0%, transparent 20%),
    radial-gradient(circle at 80% 20%, var(--color-primary-darker) 0%, transparent 20%);
  opacity: 0.1;
  z-index: 0;
}

.gradient {
  background: var(--gradient-primary);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

.collapsible {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 100%;

  color: var(--color-primary);
  text-align: left;
  font-size: 1.1rem;
  font-weight: 600;

  border: none;
  outline: none;
  border-radius: 15px;
  background-color: var(--color-bg-700);
  cursor: pointer;

  transition: background-color 0.4s ease-in-out, border-radius 0.2s ease-in-out;
}

.collapsible:hover {
  background-color: #333;
}

.collapsible:after {
  content: '\002B';
  color: var(--color-primary);
  font-size: 1.5rem;
  font-weight: 700;
  transition: transform 0.4s ease-in-out;
}

.content {
  margin-bottom: 1rem;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease-in-out, padding 0.4s ease-in-out;
}

.dropdown-card {
  padding: 1rem 2rem 1.75rem;
  background-color: var(--color-bg-700);
  border-radius: 0 0 15px 15px;
}

.active:after {
  transform: rotate(45deg);
}
</style>
