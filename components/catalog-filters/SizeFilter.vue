<template>
  <li class="filter">
    <ul class="filter__list sizes">
      <li
        v-for="(size, index) in sizes"
        :key="index"
        class="filter__list-item size"
      >
        {{ size }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'SizeFilter',

  data() {
    return {
      sizes: ['37', '39', '40', '41.5', '42', '42.5', '43', '44', '45']
    }
  }
}
</script>

<style lang="scss" scoped>
.sizes {
  grid-template-columns: repeat(7, 30px);

  size {
    width: 100%;
    text-align: center;
    padding: 0.5em 0;
  }
}
</style>
