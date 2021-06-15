<template>
  <li :id="product.id" class="tm-product-list__item tm-product">
    <div class="tm-product__info-container">
      <div class="tm-product__img-container">
        <img
          class="tm-product__img"
          :src="require(`@images/products/${product.image}`)"
          :alt="product.image"
          @click="$destroy"
        />
      </div>
      <div class="tm-product__info">
        <h3 class="tm-product__title">{{ product.title }}</h3>
        <span class="tm-product__color">{{ product.color }}</span>
        <span class="tm-product__size">{{ product.size }}</span>
        <p class="tm-product__price">{{ product.price }} ₽</p>
      </div>
    </div>

    <div class="tm-product__quantity-column">
      <div class="uk-flex">
        <AppIcon
          name="minus"
          :size="0.75"
          class="tm-change-qty-btn tm-decrement-qty-btn"
          @click="decrement"
        />
        <input
          v-model="quantity"
          class="uk-input uk-border-pill tm-product__quantity"
          type="number"
          maxlength="2"
          min="1"
        />
        <AppIcon
          name="plus"
          :size="0.75"
          class="tm-change-qty-btn tm-increment-qty-btn"
          @click="increment"
        />
      </div>
      <AppIcon
        name="trash"
        class="uk-button-danger tm-delete-btn"
        @click="onDelete"
      />
    </div>
  </li>
</template>

<script>
import AppIcon from '@/components/AppIcon'

export default {
  name: 'CartProduct',

  components: {
    AppIcon
  },

  props: {
    product: {
      type: Object,
      required: false, // change to true
      default: () => {
        // delete default
        return {
          id: 1,
          title: 'Nike Air Force 1 Mid',
          price: 7990,
          color: 'Белый',
          size: '42 RUS',
          image: 'кроссовки-air-force_1.jpg'
        }
      }
    }
  },

  data() {
    return {
      quantity: 1
    }
  },

  watch: {
    quantity(v) {
      console.log('qty changed:', v)
    }
  },

  methods: {
    increment() {
      console.log(this.quantity)
      this.quantity++
    },
    decrement() {
      console.log(this.quantity)
      this.quantity--
    },
    onDelete() {
      this.$emit('removeProductFromCart', this.product.id)
    }
  }
}
</script>

<style lang="scss" scoped>
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
    margin: 0 0 10px;
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
</style>
