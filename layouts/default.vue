<template>
  <div>
    <the-header></the-header>
    <main class="content">
      <Nuxt />
    </main>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from '../components/header/TheHeader'
import TheFooter from '../components/TheFooter'

export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style lang="scss">
.content {
  padding: 0 rem(20);
}
</style>
