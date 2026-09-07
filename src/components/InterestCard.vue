<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'InterestCard',
  props: {
    title: { type: String, required: true },
    description: { type: String, required: true },
    icon: { type: String, required: true } // raw HTML for FontAwesome
  }
})
</script>

<template>
  <article class="hover-grow hover-border p-6 pb-7 text-center bg-bg-700 rounded-[15px]">
    <div class="interest-icon" v-html="icon"></div>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </article>
</template>

<style scoped>
.interest-icon {
  margin-bottom: 1rem;
  font-size: 2rem;
  color: var(--color-primary);
}

.interest-element h3 {
  font-weight: 700;
}
</style>
