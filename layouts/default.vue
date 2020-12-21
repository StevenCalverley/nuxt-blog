<template>
  <div class="min-h-screen antialiased bg-gray-50">
    <header class="bg-gray-800 p-4 flex items-baseline space-x-12">
      <nuxt-link to="/"
        ><h1 class="text-4xl text-gray-300">The Blog</h1></nuxt-link
      >
      <Nav />
    </header>

    <div class="pt-16 mx-auto container">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import Nav from '~/components/common/layout/Nav.vue'

export default {
  components: {
    Nav,
  },
}
</script>
