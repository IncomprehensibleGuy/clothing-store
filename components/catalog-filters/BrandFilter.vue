<template>
  <li class="filter">
    <ul class="filter__list brands">
      <li
        v-for="(value, index) in values"
        :key="index"
        class="filter__list-item brand"
      >
        {{ value }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'BrandFilter',

  data() {
    return {
      values: [
        'Adidas',
        'ASICS',
        'Columbia',
        'Demix',
        'Kappa',
        'Nike',
        'Puma',
        'FILA'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.brends {
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: 30px;
}
.brend {
}
</style>
