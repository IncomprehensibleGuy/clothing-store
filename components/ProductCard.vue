<template>
  <div class="uk-card uk-card-default product-card">
    <div class="uk-card-media-top">
      <NuxtLink :to="`/catalog/${product.id}`">
        <img
          class="product-card__img"
          :src="require(`@images/products/${product.image}`)"
          :alt="product.image"
        />
      </NuxtLink>
    </div>
    <div class="product-card__body">
      <div class="uk-flex uk-flex-between">
        <NuxtLink :to="`/catalog/${product.id}`">
          <h3 class="uk-card-title uk-margin-remove">
            {{ product.title }}
          </h3>
        </NuxtLink>
        <AppIcon name="heart" />
        <!-- here should be the like icon -->
      </div>
      <p class="uk-margin-small product-card__availability">
        В наличии в <span>{{ product.colors.length }}</span> цветах
      </p>
      <p class="uk-margin-small product-card__price">
        {{ formatPrice(product.price) }}
      </p>
    </div>
  </div>
</template>

<script>
import AppIcon from '@/components/AppIcon'

export default {
  name: 'ProductCard',

  components: {
    AppIcon
  },

  props: {
    product: {
      type: Object,
      required: false,
      default: () => {
        return {
          id: 1,
          title: 'Nike Air Force 1 Mid',
          image: 'кроссовки-air-force_1.jpg',
          price: 7999,
          colors: ['black', 'white', 'White/Crimson Tint']
        }
      }
    }
  },

  data() {
    return {
      isLiked: false
    }
  },

  methods: {
    formatPrice(price) {
      const stringPrice = price.toString()
      return (
        Math.floor(price / 1000) +
        ' ' +
        stringPrice.slice(stringPrice.length - 3) +
        ' ₽'
      )
    },
    onProductLike() {
      this.isLiked = !this.isLiked
    }
  }
}
</script>

<style lang="scss" scoped>
.svg {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  padding: 8px 6px;
  background-color: #f8f8f8;
  pointer-events: all;

  .path {
    fill: none;
    stroke: #999;
  }

  &:hover {
    background-color: #ebebeb;

    path {
      stroke: #ff4d4d;
    }
  }

  &.liked path {
    fill: #ff4d4d;
    stroke: #ff4d4d;
  }
}

.product-card {
  box-shadow: none;

  &:hover {
    box-shadow: 0 5px 15px #ddd;
  }

  &__body {
    padding: 10px 15px;

    .like-btn {
      padding: 8px;

      &:hover {
        color: #ff4d4d;
      }

      & .liked {
        fill: blue;
      }
    }
  }

  &__price {
    color: #333;
  }
  .size {
    display: inline-block;
    min-width: 30px;
    height: 30px;
    text-align: center;
    padding: 0.5em 0;
    border: 1px solid $border;
    transition: ease 0.3s;

    &:hover {
      background-color: #eee;
    }
  }
}
</style>
