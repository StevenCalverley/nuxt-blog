<template>
  <div>
    <article class="prose lg:prose-lg">
      <nuxt-content :document="article" />
    </article>
    <div class="flex justify-between">
      <NuxtLink
        v-if="prev"
        :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
        class="text-primary font-bold hover:underline"
      >
        {{ prev.title }}
      </NuxtLink>
      <span v-else>&nbsp;</span>
      <NuxtLink
        v-if="next"
        :to="{ name: 'blog-slug', params: { slug: next.slug } }"
        class="font-bold hover:underline"
      >
        {{ next.title }}
      </NuxtLink>
      <span v-else>&nbsp;</span>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    return { article, prev, next }
  },
}
</script>
