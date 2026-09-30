<script setup lang="ts">
const socials = [
  { label: 'GitHub', icon: '\uf09b', href: 'https://github.com/Akeoott' },
  { label: 'osu!', icon: '\uf001', href: 'https://osu.ppy.sh/users/36050791' },
  { label: 'Email', icon: '\uf0e0', href: 'mailto:akeoot@pm.me' },
]
</script>

<template>
  <div class="relative min-h-screen flex items-center justify-center pb-32">
    <div class="text-center space-y-6 px-6 pt-10">
      <h1 class="text-8xl md:text-[10rem] font-['Nunito'] tracking-tight text-primary-300">Ame</h1>

      <div class="space-y-2 font-thin">
        <p class="text-text-muted text-[1.5rem] tracking-[0.3em]">code/music/osu!</p>
        <a href="mailto:akeoot@pm.me" class="hover:underline text-[1.5rem]">akeoot@pm.me</a>
      </div>
    </div>

    <div
      class="absolute inset-x-0 bottom-10 flex items-center justify-center gap-5 font-nerd text-[2rem] leading-none select-none"
    >
      <a
        v-for="s in socials"
        :key="s.label"
        :href="s.href"
        :aria-label="s.label"
        :title="s.label"
        class="text-text-muted transition-colors duration-200 hover:text-primary-300"
        :target="s.href.startsWith('mailto:') ? undefined : '_blank'"
        :rel="s.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'"
        >{{ s.icon }}</a
      >
    </div>
  </div>
</template>

<style scoped></style>
