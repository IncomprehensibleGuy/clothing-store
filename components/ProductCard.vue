<template>
  <div class="uk-card product-card">
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
      <div class="uk-flex uk-flex-middle uk-flex-between">
        <NuxtLink :to="`/catalog/${product.id}`">
          <h4>
            {{ product.title }}
          </h4>
        </NuxtLink>
        <AppIcon name="heart" />
      </div>
      <p class="product-card__availability">
        {{
          product.colors.length
            ? 'В наличии в ' + product.colors.length + 'цветах'
            : 'Нет в наличии'
        }}
      </p>
      <p class="product-card__price">
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
.product-card {
  padding: 0;

  &:hover {
    box-shadow: 0 3px 9px #ddd;
  }

  &__body {
    padding: 10px;

    & > p {
      height: 30px;
      display: flex;
      align-items: center;
    }
  }

  &__price {
    color: #333;
  }
}
</style>
