<template>
    <header class="pb-5 bg-bg-900">
        <div class="container">
            <div class="flex flex-col items-center text-center mt-20 gap-6">
                <div class="profile-img">
                    <img src="/images/death_accomplished_PINK.webp" alt="Ame's profile picture" decoding="async" loading="eager" width="142px" height="142px">
                </div>

                <h1 class="header-1 gradient">Ame</h1>

                <p class="text-[1.2rem] text-primary">
                    (Akeoot/Akeoott)<br>Backend Developer &amp; Linux Enthusiast<br>
                    <span class="text-[1rem] text-primary-dark">
                        This page is my bio. This ain't a portfolio.<br>
                        Don't treat this like a professional page.
                    </span>
                </p>
            </div>
        </div>
    </header>

    <section class="pt-10 pb-15 bg-bg-800">
        <div class="container">
            <h2 class="header-2">
                About Me
            </h2>

            <article class="card hover-up hover-shadow">
                <p>
                    Hello! I'm Ame, a self-taught backend and semi frontend dev from Germany.
                    I started my coding journey on <time datetime="2025-2-20">February 20th, 2025</time>,
                    and I've been fully immersed in it ever since.
                    I love building systems, testing new technologies and learning how things work under the hood.
                </p>
                <div class="my-8 h-1 gradient-divider"></div>
                <p>
                    When I'm not coding, you'll almost always find me with music playing.
                    I love everything from Vocaloid to breakcore to heavy metal etc.
                    I'm also a huge cat person, and I'm probably customizing my Arch Linux setup or playing rhythm games.
                    I learn very quickly when something really catches my interest, and I love a good challenge.
                </p>
                <br>
                <p>
                    I've gathered some experience by now, but still not an expert!
                </p>
            </article>
        </div>
    </section>

    <section class="pt-10 pb-15 bg-bg-900">
        <div class="container">
            <h2 class="header-2">
                My Interests
            </h2>

            <div class="grid gap-6 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
                <InterestCard title="Linux Systems" description="Daily Arch Linux user who's actually productive using it (unlike u)" icon='<i class="fab fa-linux"></i>' />
                <InterestCard title="Backend Dev" description="Currently primarily using C# for solid backends with many features" icon='<i class="fas fa-code"></i>' />
                <InterestCard title="Music" description="I've wanted to learn creating music for a while now ;-; (help)" icon='<i class="fas fa-music"></i>' />
                <InterestCard title="Tech" description="Wanna learn docker, PostgreSQL and other things once i get to it >.<" icon='<i class="fa-solid fa-gears"></i>' />
            </div>
        </div>
    </section>


    <section class="pt-10 pb-15 bg-bg-800">
        <div class="container">
            <h2 class="header-2">
                My Journey &amp; Goals
            </h2>

            <button type="button" role="button" class="collapsible" aria-label="Toggle My Coding Journey Section">
                My Coding Journey
            </button>
            <article class="content">
                <div class="dropdown-card flex flex-col">
                    <p>
                        I started learning to code in early <time datetime="2025">2025</time>
                        and made my first GitHub commit on <time datetime="4-29">April 29th</time>.
                        As someone with a certain degree of autism,
                        I enjoy figuring out complex problems and how different systems fit together,
                        which is why backend development is so interesting to me.
                        I'm a quick learner and I'm always looking for the next thing to understand.
                    </p>
                    <img class="mt-5 w-full h-62.5 rounded-[15px]" src="/images/kitty-cat.webp" decoding="async" loading="lazy" alt="fuh">
                </div>
            </article>

            <button type="button" role="button" class="collapsible" aria-label="Toggle My Tech Stack &amp; Preferences Section">
                My Tech Stack &amp; Preferences
            </button>
            <article class="content">
                <div class="dropdown-card">
                    <ul class="list-[circle] pl-6 space-y-1">
                        <li>
                            <span class="font-bold">Programming Lang:</span>
                            I use C# and am comfortable building things with it.
                        </li>
                        <li>
                            <span class="font-bold">Learning Now:</span>
                            Frontend frameworks, containers, databases.
                        </li>
                        <li>
                            <span class="font-bold"> Web Stuff:</span>
                            I know my way around Vue, Tailwind, TypeScript.
                        </li>
                        <li>
                            <span class="font-bold">Operating System:</span>
                            I use Arch Linux everyday, used to be windows only user XP.
                        </li>
                        <li>
                            <span class="font-bold">Languages:</span>
                            I'm German, but fluent in English.
                        </li>
                    </ul>
                    <p class="pt-4">
                        I know my way around most things!
                    </p>
                    <figure id="skillicons" class="pt-1 grid grid-cols-[repeat(auto-fill,minmax(50px,1fr))]"></figure>
                </div>
            </article>

            <button type="button" role="button" class="collapsible" aria-label="Toggle My Aspirations Section">
                My Aspirations
            </button>
            <article class="content">
                <div class="dropdown-card">
                    <p>
                        My biggest goal right now is to get so comfortable at C# so that I can help contribute to osu!lazer.
                        It's my most favorite game, and I'd love to help make it even better. I gotta click the circles!
                    </p>
                    <p>
                        In the long run, I want to work on big, challenging backend systems and keep contributing to open-source projects.
                        I want to build things that are both smart and reliable unlike some programs that I'm not gonna mention -_-<br>
                        Btw Linus Torvalds is my god &lt;3
                    </p>
                </div>
            </article>
        </div>
    </section>

    <section class="py-10 bg-bg-900">
        <div class="container">
            <h2 class="header-2">
                Let's Connect!
            </h2>

            <article class="card hover-up hover-shadow">
                <p>
                    Love backend development and complex systems as much as I do?
                    Let's build something amazing together!
                </p>
                <p>
                    Feel free to reach out for collaborations about Programming, Linux, or Music:
                </p>
                <p>
                    Email: <a href="mailto:ame@akeoot.org">ame@akeoot.org</a>
                </p>
                <br>
                <img class="w-full object-cover rounded-[15px]" src="/images/im_goated.webp" decoding="async" loading="lazy" alt="cat stretched with a header saying 'wait im goated'">
            </article>
        </div>
    </section>
</template>

<script lang="ts">
import InterestCard from '@/components/CompInterestCard.vue';
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

<style scoped />
