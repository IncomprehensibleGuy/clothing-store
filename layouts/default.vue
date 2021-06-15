<template>
  <div class="layout">
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
.layout {
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;

  & > * {
    padding: 0 rem(20);

    @include breakpoint(md) {
      padding: 0 rem(50);
    }
  }
}

.content {
  flex: 1 0 auto;
}
</style>
