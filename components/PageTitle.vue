<template>
  <h3 class="page-title">
    {{ title }}
  </h3>
</template>

<script>
export default {
  name: 'PageTitle',

  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.page-title {
  text-align: center;
  margin: rem(30);
}
</style>
