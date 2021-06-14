<template>
  <div class="filter">
    <ul class="filter__list prices">
      <li
        v-for="(price, index) in prices"
        :key="index"
        class="filter__list-item prices__price"
      >
        {{ formatPrice(price) }}
      </li>
    </ul>
    <div class="uk-margin">
      <input
        class="uk-range"
        type="range"
        value="2"
        :min="minPrice"
        :max="maxPrice"
        step="1"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PriceFilter',

  data() {
    return {
      minPrice: 0,
      maxPrice: 15000,
      prices: [3000, 5000, 8000, 10000, 15000]
    }
  },

  methods: {
    formatPrice(value) {
      return 'До ' + value / 1000 + ' 000 ₽'
    }
  }
}
</script>

<style lang="scss" scoped>
.prices {
  grid-template-columns: repeat(3, 100px);

  &__price {
    text-align: right;
  }
}
</style>
