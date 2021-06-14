<template>
  <div class="catalog-page">
    <h3 class="page-title">
      {{ pageTitle }}
    </h3>

    <CatalogFilters />

    <div class="products-grid">
      <product-card v-for="idx in 20" :key="idx"> </product-card>
    </div>
  </div>
</template>

<script>
import CatalogFilters from '@/components/catalog-filters/CatalogFilters'
import ProductCard from '@/components/ProductCard'

export default {
  name: 'Catalog',

  components: {
    CatalogFilters,
    ProductCard
  },

  data() {
    return {
      pageTitle: 'Мужская обувь'
    }
  }
}
</script>

<style lang="scss" scoped>
.catalog-page {
  margin: 0 auto;
  max-width: rem(1400);
}

.page-title {
  text-align: center;
  margin: rem(30);
}

.products-grid {
  display: grid;
  grid-gap: rem(20);
  margin: 0 0 rem(40) 0;

  @include breakpoint(426, true) {
    grid-template-columns: repeat(2, 1fr);
  }

  @include breakpoint(sm) {
    grid-template-columns: repeat(3, 1fr);
  }

  @include breakpoint(md) {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
