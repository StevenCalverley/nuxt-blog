<template>
  <article class="p-8">
    <h1 class="text-2xl lg:text-6xl font-bold text-gray-900">
      {{ page.title }}
    </h1>
    <div class="mt-2 text-gray-500 flex space-x-4">
      <p class="">Written by {{ page.author }}</p>
      <p>Created {{ page.createdAt }}</p>
    </div>

    <hr />
    <nuxt-content class="mt-8 prose lg:prose-xl" :document="page" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    try {
      const page = await $content('pages', params.slug).fetch()
      return {
        page,
      }
    } catch (err) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>

<style></style>
