<template>
  <div uk-height-viewport="min-height: 500px" class="tm-cart-page">
    <PageTitle title="Корзина" />

    <div class="uk-width-1-1 uk-flex uk-flex-column uk-flex-middle">
      <div>
        <ul class="tm-product-list">
          <CartProduct
            v-for="(product, index) in products"
            :key="index"
            :product="product"
          />
        </ul>

        <div class="uk-flex uk-flex-between uk-margin">
          <h4 class="tm-total-price">Всего: <span>7990 ₽</span></h4>
          <NuxtLink
            class="
              uk-button uk-button-primary uk-button-large uk-border-pill
              tm-checkout-btn
            "
            to="/checkout"
          >
            Оформить заказ
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle'
import CartProduct from '@/components/CartProduct'

export default {
  name: 'CartPage',

  components: {
    PageTitle,
    CartProduct
  },

  data() {
    return {
      products: [
        {
          id: 1,
          title: 'Nike Air Force 1 Mid',
          price: 7990,
          color: 'Белый',
          size: '42 RUS',
          image: 'кроссовки-air-force_1.jpg'
        },
        {
          id: 2,
          title: 'Nike Air Force 1 Mid',
          price: 7990,
          color: 'Белый',
          size: '43 RUS',
          image: 'кроссовки-air-force_1.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.tm-cart-page {
  // min-height: 100%;
}

.tm-page-title__cart {
}

.tm-product-list {
  padding: 0;
  border-top: 1px solid $border;

  &__item {
  }
}

.tm-total-price {
  margin: auto 0;
}

.tm-total-price span {
  font-weight: 500;
  color: #111;
}

.tm-checkout-btn {
}

@media (max-width: 320px) {
  .tm-page-title__cart {
    margin: 20px;
  }
  .tm-product-list {
    &__item {
    }
  }
  .tm-product {
    &__info-container {
      display: flex;
    }
    &__img-container {
      width: 50%;
    }
    &__img {
    }

    &__info {
      padding: 0 0 0 10px;
    }
    &__title {
    }
    &__size {
    }
    &__color {
    }
    &__price {
    }
    &__quantity-column {
      width: 100%;
    }
  }
  .tm-checkout-btn {
    line-height: 38px;
  }
}

@media (max-width: 375px) {
  .tm-page-title__cart {
    margin: 10px;
  }
  .tm-product {
    &__info-container {
      display: block;
      height: 100%;
    }
    &__img-container {
      width: 100%;
      height: 50%;
    }
    &__img {
      width: 100%;
      height: 100%;
      top: 0;
    }
    &__info {
    }
    &__title {
    }
    &__size {
    }
    &__color {
    }
    &__price {
    }
  }
  .tm-checkout-btn {
    padding: 0 15px;
  }
}
</style>
