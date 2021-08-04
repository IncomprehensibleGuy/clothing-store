<template>
  <div class="product uk-margin-top">
    <div class="product__container uk-flex uk-flex-center uk-flex-wrap">
      <div
        class="
          uk-width-1-1 uk-width-1-2@s uk-flex uk-flex-right
          product__images
        "
      >
        <div uk-slider class="product__slider">
          <div class="uk-position-relative">
            <div class="uk-slider-container" uk-lightbox="animation: slide">
              <ul class="uk-slider-items uk-child-width-1-1">
                <li v-for="(image, index) in images" :key="index">
                  <a :href="require(`@images/products/${image}`)">
                    <img
                      :src="require(`@images/products/${image}`)"
                      :alt="image"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div class="uk-visible@s">
              <a
                class="uk-position-center-left-out uk-position-small"
                href="#"
                uk-slidenav-previous
                uk-slider-item="previous"
              ></a>
              <a
                class="uk-position-center-right-out uk-position-small"
                href="#"
                uk-slidenav-next
                uk-slider-item="next"
              ></a>
            </div>
          </div>
        </div>
      </div>
      <div class="uk-width-1-1 uk-width-1-3@s product__info">
        <h1 class="product__title">Nike Air Force 1 '07</h1>
        <div class="uk-flex uk-flex-wrap">
          <div>
            <p class="product__availability">В наличии</p>
            <h3 class="product__price">7 999 ₽</h3>
          </div>

          <div class="product__sizes-block">
            <ul
              class="uk-subnav uk-subnav-pill product__sizes-switcher"
              uk-switcher
            >
              <li v-for="(sizeName, index) in Object.keys(sizes)" :key="index">
                <a href="#">
                  {{ sizeName }}
                </a>
              </li>
            </ul>
            <ul class="uk-switcher">
              <li
                v-for="(sizesArray, sizesArrayIndex) in sizes"
                :key="sizesArrayIndex"
              >
                <ul class="product__sizes">
                  <li
                    v-for="(size, sizeIndex) in sizesArray"
                    :key="sizeIndex"
                    class="product__size uk-border-pill"
                  >
                    {{ size }}
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div class="uk-child-width-1-1 product__btn-container">
          <NuxtLink
            class="uk-button uk-button-primary uk-border-pill product__buy-btn"
            to="/cart"
          >
            Купить
          </NuxtLink>
          <a
            class="uk-button uk-button-default uk-border-pill product__save-btn"
          >
            Сохранить
          </a>
        </div>

        <p class="product__description">
          Модель для баскетбольного матча в парке, воскресного барбекю и
          солнечной погоды. Пусть солнце сияет для тебя с кроссовками Nike Air
          Force 1 '07. Это обновленная версия классической баскетбольной модели
          из кожи с прошитыми накладками и идеальным сиянием, выполненная
          полностью в оригинальной белой расцветке.
        </p>
      </div>
    </div>

    <div class="related-products uk-margin-large">
      <h2 class="related-products__title">Похожие товары</h2>
      <div class="related-products__grid">
        <ProductCard v-for="(n, index) in 6" :key="index" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard'

export default {
  name: 'ProductPage',

  components: {
    ProductCard
  },

  validate({ params }) {
    return /^\d+$/.test(params.id)
  },

  data() {
    return {
      images: [
        'кроссовки-air-force_1.jpg',
        'кроссовки-air-force_2.jpg',
        'кроссовки-air-force_3.jpg',
        'кроссовки-air-force_4.jpg'
      ],
      sizes: {
        RUS: [37, 39, 40, 41.5, 42, 42.5, 43, 44, 45],
        EUR: [1, 3, 4.5, 5],
        US: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        CM: [1, 2, 3, 4, 5, 6, 7, 8, 9]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.uk-lightbox {
  background: none;

  button {
    color: black;

    svg {
      width: 30px;
      height: 30px;
    }
  }

  &-toolbar {
    background: none !important;
  }

  &-button {
    background: none;
    color: #333 !important;
    margin: 0 5px !important;
  }
  &-page body .container {
    filter: blur(3px);
    background: rgba(0, 0, 0, 0.2);
  }
}

.uk-position-center-left-out,
.uk-position-center-right-out {
  margin: 10px;
}

.product {
  margin: 0 auto;

  &__images {
    margin: 0 60px 0 0;
  }

  &__slider {
    max-width: 600px;

    .uk-slidenav {
      color: #888 !important;
    }
  }

  &__image {
    object-fit: cover;
  }
  &__title {
    margin-bottom: 20px;
  }
  &__availability {
  }
  &__price {
    margin: 20px 0;
  }
  &__description {
    margin: 15px 0 0 0;
    font-size: 16px;
  }

  &__sizes-block {
    margin: 0 auto 20px;
  }

  &__sizes-switcher {
    margin: 0 0 15px 0;
  }

  &__sizes {
    display: grid;
    grid-template-columns: repeat(5, 42px);
    grid-gap: 10px;
    color: #000;

    > li {
      display: inline-block;
      line-height: 42px;
      height: 30px;
      border: 1px solid $border;
    }
    > li:hover {
      color: #1e87f0;
      cursor: pointer;
    }
  }
  &__size {
    height: 42px !important;
    text-align: center;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 0.5px;
  }
  &__size.active {
    background-color: #333 !important;
    color: #fff;
    border: 2px solid black;
  }

  &__btn-container {
    width: 200px;
  }
  &__btn-container > a {
    font-size: 15px;
    margin: 5px 0;
    padding: 0 40px;
    line-height: 53px;
  }
}

.related-products {
  border-top: 1px solid $border;

  &__title {
    margin: 20px 0;
    text-align: center;
  }

  &__grid {
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

    @include breakpoint(xl) {
      grid-template-columns: repeat(5, 1fr);
    }
  }
}

//@media (max-width: $md) {
//  .product {
//    &__sizes {
//      grid-template-columns: repeat(4, 50px);
//    }
//    &__btn-container > button {
//      padding: 0 30px;
//      line-height: 38px;
//    }
//  }
//}
//
//@media (max-width: $xsm) {
//
//  .product {
//    &__images, &__info {
//      margin: 0;
//    }
//    &__slider-small {
//      display: none;
//    }
//    &__sizes-block {
//      width: 230px;
//    }
//    &__sizes {
//      grid-template-columns: repeat(4, 50px);
//    }
//    &__btn-container {
//      margin: 0 auto;
//    }
//  }
//}
</style>
