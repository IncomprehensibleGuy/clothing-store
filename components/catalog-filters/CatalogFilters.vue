<template>
  <div class="filters">
    <template v-if="true"></template>

    <ul v-else class="filters__list">
      <li class="filters__list-item">
        <catalog-filter title="Сортировать по">
          <sort-by-filter></sort-by-filter>
        </catalog-filter>
      </li>
      <li class="filters__list-item">
        <catalog-filter title="Цена">
          <price-filter></price-filter>
        </catalog-filter>
      </li>
      <li class="filters__list-item">
        <catalog-filter title="Размер">
          <size-filter></size-filter>
        </catalog-filter>
      </li>
      <li class="filters__list-item">
        <catalog-filter title="Цвет">
          <color-filter></color-filter>
        </catalog-filter>
      </li>
      <li class="filters__list-item">
        <catalog-filter title="Бренд">
          <brand-filter></brand-filter>
        </catalog-filter>
      </li>
      <li class="filters__list-item">
        <catalog-filter title="Сезон">
          <season-filter></season-filter>
        </catalog-filter>
      </li>
    </ul>
  </div>
</template>

<script>
import CatalogFilter from '@/components/catalog-filters/CatalogFilter'
import SortByFilter from '@/components/catalog-filters/SortByFilter'
import PriceFilter from '@/components/catalog-filters/PriceFilter'
import SizeFilter from '@/components/catalog-filters/SizeFilter'
import ColorFilter from '@/components/catalog-filters/ColorFilter'
import BrandFilter from '@/components/catalog-filters/BrandFilter'
import SeasonFilter from '@/components/catalog-filters/SeasonFilter'

export default {
  name: 'CatalogFilters',

  components: {
    CatalogFilter,
    SortByFilter,
    PriceFilter,
    SizeFilter,
    ColorFilter,
    BrandFilter,
    SeasonFilter
  }
}
</script>

<style lang="scss">
.sort {
  width: 280px;
  @include flex(flex, $justify: space-between);

  &__label {
    font-size: 15px;
  }

  &__select-container {
  }

  &__select {
    line-height: 20px;
  }
}

.filters {
  &__list {
    @include flex(flex);
    margin: 30px 0;
    padding: 0;
  }

  &__list-item {
    margin-right: 10px;
  }
}

.filter {
  margin: 0;

  &__title {
  }

  &__list {
    display: grid;
    grid-gap: 2px;
    color: #000;
  }

  &__list-item {
    display: inline-block;
    box-sizing: border-box;
    padding: 6px;
    height: 40px;
    border: 1px solid $border;
    font-weight: 100;

    &:hover {
      color: #1e87f0;
      cursor: pointer;
    }

    .active {
      background-color: #333;
      color: #fff;
      border: 2px solid black !important;
    }

    .unavailable {
      background-color: #eee;
    }
  }
}

//@media (max-width: 349px) {
//  #show-filters-btn {
//    padding: 0 18px;
//  }
//
//  .filters__list {
//    .prices, .brends, .seasons {
//      grid-template-columns: repeat(2, 120px);
//    }
//  }
//}
</style>
