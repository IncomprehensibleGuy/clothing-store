<template>
  <nav class="user-menu">
    <ul class="user-menu__list">
      <!--      <li class="user-menu__list-item">-->
      <!--        <input-->
      <!--          type="search"-->
      <!--          placeholder="ПОИСК"-->
      <!--          class="user-menu__search"-->
      <!--          :class="searchIsActive ? 'active' : ''"-->
      <!--          ref="search"-->
      <!--          v-model.trim="searchInput"-->
      <!--          @focus="focusSearch"-->
      <!--          @blur="blurSearch"-->
      <!--          @input="searchProducts"-->
      <!--        >-->
      <!--        <img-->
      <!--          class="user-menu__icon"-->
      <!--          src="~images/search.svg"-->
      <!--          alt="search"-->
      <!--          @click="focusSearch"-->
      <!--        >-->
      <!--      </li>-->
      <li class="user-menu__list-item">
        <a uk-toggle="target: #sign-in-modal">
          <img
            class="user-menu__icon"
            src="~assets/images/user.svg"
            alt="sign-in"
          />
        </a>
        <sign-in-modal></sign-in-modal>
      </li>
      <li class="user-menu__list-item">
        <NuxtLink to="/cart">
          <img class="user-menu__icon" src="@images/cart.svg" alt="cart" />
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
import SignInModal from '@/components/SignInModal'

export default {
  name: 'TheHeaderNavUser',

  components: {
    SignInModal
  },

  data() {
    return {
      searchInput: '',
      searchIsActive: false
    }
  },

  methods: {
    focusSearch() {
      this.searchIsActive = true
      this.$refs.search.focus()
    },
    blurSearch() {
      this.searchIsActive = false
      this.$refs.search.blur()
    },
    searchProducts() {
      if (this.searchInput) {
        return true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.user-menu {
  width: rem(230);

  &__list {
    display: flex;
    justify-content: flex-end;
  }

  &__list-item {
    margin-left: rem(10);

    &:nth-child(1) {
      display: flex;
      align-items: center;
      margin-left: 0;
    }
  }

  &__icon {
    margin: 0 2px;
    width: rem(20);
    height: rem(20);
    cursor: pointer;
  }

  &__search {
    width: rem(55);
    transition: ease-out 0.3s;
    text-transform: uppercase;
    font-family: Helvetica, Arial, sans-serif;
    font-size: rem(12);

    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      -webkit-appearance: none;
    }

    &.active {
      width: rem(120);
    }
  }
}
</style>
