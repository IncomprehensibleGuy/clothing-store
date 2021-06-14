<template>
  <header class="header">
    <div class="header__body">
      <NuxtLink class="logo" to="/">
        <img class="logo__img" src="@images/logo.svg" alt="no logo image" />
      </NuxtLink>

      <TheHeaderNavCategories />

      <TheHeaderNavUser />
    </div>
  </header>
</template>

<script>
import TheHeaderNavCategories from '@/components/header/TheHeaderNavCategories'
import TheHeaderNavUser from '@/components/header/TheHeaderNavUser'

export default {
  name: 'TheHeader',

  components: {
    TheHeaderNavCategories,
    TheHeaderNavUser
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: rem($header-height);
  background-color: white;
  border-bottom: 1px solid $border;
  z-index: 1;

  &__body {
    max-width: rem(1440);
    height: 100%;
    margin: auto;
    padding: 0 rem(20);
    @include flex(flex, center, space-between);
  }
}

.logo {
  &__img {
    height: rem(35);
  }

  @include breakpoint-max(md) {
    display: none;
  }
}
</style>
