<template>
  <div uk-height-viewport="min-height: 500px" class="tm-cart-page">
    <h3 class="tm-page-title tm-page-title__cart">Корзина</h3>

    <div class="uk-width-1-1 uk-flex uk-flex-column uk-flex-middle">
      <div>
        <ul class="tm-product-list">
          <li id="product1" class="tm-product-list__item tm-product">
            <div class="tm-product__info-container">
              <div class="tm-product__img-container">
                <img
                  class="tm-product__img"
                  src="assets/images/products/кроссовки-air-force_1.jpg"
                  alt="кроссовки-air-force_1.jpg"
                />
              </div>
              <div class="tm-product__info">
                <h3 class="tm-product__title">Nike Air Force 1 Mid</h3>
                <span class="tm-product__color">Белый</span>
                <span class="tm-product__size">42 RUS</span>
                <p class="tm-product__price">7990 ₽</p>
              </div>
            </div>

            <div class="tm-product__quantity-column">
              <div class="uk-flex">
                <a
                  uk-icon="icon: minus; ratio: .75"
                  class="
                    uk-icon uk-icon-button
                    tm-change-qty-btn tm-decrement-qty-btn
                  "
                ></a>
                <input
                  class="uk-input uk-border-pill tm-product__quantity"
                  type="text"
                  maxlength="2"
                  min="1"
                  value="1"
                />
                <a
                  uk-icon="icon: plus;  ratio: .75"
                  class="
                    uk-icon uk-icon-button
                    tm-change-qty-btn tm-increment-qty-btn
                  "
                ></a>
              </div>
              <a
                class="uk-icon-button uk-button-danger tm-delete-btn"
                uk-icon="icon: trash;"
              ></a>
            </div>
          </li>

          <li id="product2" class="tm-product-list__item tm-product">
            <div class="tm-product__info-container">
              <div class="tm-product__img-container">
                <img
                  class="tm-product__img"
                  src="assets/images/products/кроссовки-air-force_1.jpg"
                  alt="кроссовки-air-force_1.jpg"
                />
              </div>
              <div class="tm-product__info">
                <h3 class="tm-product__title">Nike Air Force 2 Mid</h3>
                <span class="tm-product__color"> Белый </span>
                <span class="tm-product__size"> 42 RUS </span>
                <p class="tm-product__price">7990 ₽</p>
              </div>
            </div>

            <div class="tm-product__quantity-column">
              <div class="uk-flex">
                <a
                  uk-icon="icon: minus; ratio: .75"
                  class="
                    uk-icon uk-icon-button
                    tm-change-qty-btn tm-decrement-qty-btn
                  "
                ></a>
                <input
                  class="uk-input uk-border-pill tm-product__quantity"
                  type="text"
                  maxlength="2"
                  min="1"
                  value="1"
                />
                <a
                  uk-icon="icon: plus;  ratio: .75"
                  class="
                    uk-icon uk-icon-button
                    tm-change-qty-btn tm-increment-qty-btn
                  "
                ></a>
              </div>
              <a
                class="uk-icon-button uk-button-danger tm-delete-btn"
                uk-icon="icon: trash;"
              ></a>
            </div>
          </li>
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
export default {
  name: 'CartPage'
}
</script>

<style lang="scss" scoped>
.tm-cart-page {
  // min-height: 100%;
}

.tm-page-title__cart {
}

.tm-product-list {
  border-top: 1px solid $border;
  &__item {
  }
}
.tm-product {
  padding: 20px 0;
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid $border;

  &__info-container {
    display: flex;
  }
  &__img-container {
    overflow: hidden;
    height: 200px;
  }
  &__img {
    position: relative;
    object-fit: cover;
    width: 200px;
    top: -40px;
  }
  &__info {
    padding: 0 0 0 20px;
  }
  &__title {
    margin: 0px 0 10px;
  }
  &__size {
  }
  &__color {
  }
  &__price {
  }
  &__quantity-column {
    padding: 0 0 0 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 250px;
  }
  &__quantity {
    margin: 0 10px;
    padding: 0;
    width: 36px;
    height: 36px;

    text-align: center;
    line-height: 5px;
  }
}
.tm-total-price {
  margin: auto 0;
}
.tm-total-price span {
  font-weight: 500;
  color: #111;
}
.tm-change-qty-btn {
}
.tm-change-qty-btn > svg {
  width: 100%;
  height: 100%;
  padding: 10.5px;
}
.tm-delete-btn {
}
.tm-delete-btn > svg {
  width: 100%;
  height: 100%;
  padding: 8px;
}
.tm-checkout-btn {
}

//@media (max-width: @xsm) {
//  .tm-page-title__cart {
//    margin: 20px;
//  }
//  .tm-product-list {
//    &__item {}
//  }
//  .tm-product {
//
//    &__info-container {
//      display: flex;
//    }
//    &__img-container {
//      width: 50%;
//    }
//    &__img {}
//
//    &__info {
//      padding: 0 0 0 10px;
//    }
//    &__title {}
//    &__size {}
//    &__color {}
//    &__price {}
//    &__quantity-column {
//      width: 100%;
//    }
//  }
//  .tm-checkout-btn {
//    line-height: 38px;
//  }
//}
//
//@media (max-width: @phone-sm) {
//  .tm-page-title__cart {
//    margin: 10px;
//  }
//  .tm-product {
//    &__info-container {
//      display: block;
//      height: 100%;
//    }
//    &__img-container {
//      width: 100%;
//      height: 50%;
//    }
//    &__img {
//      width: 100%;
//      height: 100%;
//      top: 0;
//    }
//    &__info {}
//    &__title {}
//    &__size {}
//    &__color {}
//    &__price {}
//  }
//  .tm-checkout-btn {
//    padding: 0 15px;
//  }
//}
</style>
