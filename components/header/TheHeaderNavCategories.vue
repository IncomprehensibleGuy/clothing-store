<template>
  <nav class="catalog-menu" uk-navbar>
    <!-- offcanvas -->
    <a class="burger" href="#offcanvas-menu" uk-toggle>
      <span class="burger-mid"></span>
    </a>
    <div id="offcanvas-menu" uk-offcanvas="mode: none">
      <div class="uk-offcanvas-bar offcanvas-menu__bar">
        <button class="uk-offcanvas-close" type="button" uk-close></button>
        <ul
          class="
            uk-margin-medium-top uk-nav-default uk-nav-parent-icon
            offcanvas-menu__list
          "
          uk-nav
        >
          <li
            v-for="category in categories"
            :key="category.id"
            class="uk-parent offcanvas-menu__list-item"
          >
            <NuxtLink :to="category.url">
              {{ category.title }}
            </NuxtLink>
            <ul
              class="uk-nav-sub uk-nav-parent-icon offcanvas-menu__list2"
              uk-nav
            >
              <li
                v-for="subcategory in category.categories"
                :key="subcategory.id"
                class="uk-parent offcanvas-menu__list2-item"
              >
                <NuxtLink :to="subcategory.url">
                  {{ subcategory.title }}
                </NuxtLink>
                <ul class="uk-nav-sub offcanvas-menu__list3">
                  <li
                    v-for="subsubcategory in subcategory.categories"
                    :key="subsubcategory.id"
                    class="offcanvas-menu__list3-item"
                  >
                    <NuxtLink :to="subsubcategory.url">
                      {{ subsubcategory.title }}
                    </NuxtLink>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <!-- offcanvas/ -->

    <ul class="uk-navbar-nav catalog-menu__list">
      <li
        v-for="category in categories"
        :key="category.id"
        class="catalog-menu__item"
      >
        <NuxtLink class="catalog-menu__link" :to="category.url">
          {{ category.title }}
        </NuxtLink>
        <div
          class="sub-catalog-menu"
          uk-dropdown="pos: bottom-justify; animation: uk-animation-slide-top-small; duration: 0; delay-show: 200; delay-hide: 300;"
        >
          <div
            v-for="subcategory in category.categories"
            :key="subcategory.id"
            class="uk-nav uk-navbar-dropdown-nav sub-catalog-menu__container"
          >
            <h3 class="sub-catalog-menu__title">
              {{ subcategory.title }}
            </h3>
            <ul class="sub-catalog-menu__list">
              <li
                v-for="subsubcategory in subcategory.categories"
                :key="subsubcategory.id"
                class="sub-catalog-menu__item"
              >
                <NuxtLink
                  :to="subsubcategory.url"
                  class="sub-catalog-menu__item"
                >
                  {{ subsubcategory.title }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
import categories from '@/data/categories'

export default {
  name: 'TheHeaderNavCategories',

  data() {
    return {
      categories
    }
  }
}
</script>

<style lang="scss" scoped>
.catalog-menu {
  margin: 0 rem(-100) 0 0;

  &__list {
    @include breakpoint_max(md) {
      display: none;
    }
  }

  &__item {
    padding: 0 4px;
  }

  &__link {
    padding: rem(28) rem(20);
    text-transform: uppercase;
    font-size: rem(13);
    font-weight: 600;
    letter-spacing: 0.5px;
    color: #000;
    transition: ease 0.3s;

    &:visited {
      color: black;
    }

    &:hover {
      text-decoration: underline;
      text-underline-position: under;
    }
  }
}

.sub-catalog-menu {
  min-width: rem(720);
  padding: rem(30) 0 0;
  position: absolute;
  background-color: #fff;
  border-bottom: 1px solid $border;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.15);

  &__title {
    text-transform: uppercase;
    font-size: rem(13);
    font-weight: 700;
  }

  &__container {
    display: inline-flex;
    flex-direction: column;
    padding: 0 rem(10);

    &:first-of-type {
      padding: 0 rem(10) 0 rem(30);
    }
  }

  &__list {
    margin: rem(20) 0;
    font-size: rem(14);
  }

  &__item {
    padding: 3px 0;
  }
}

.burger {
  display: none;

  @include breakpoint_max(md) {
    display: block;
    width: 30px;
    height: 30px;
    margin: auto 0;
    position: relative;

    & span {
      width: 100%;
      height: 3px;
      position: absolute;
      top: 14px;
      left: 0;
      border-radius: 2px;
      background-color: #111;
    }

    &::before {
      content: '';
      width: 100%;
      height: 3px;
      position: absolute;
      top: 2px;
      left: 0;
      border-radius: 2px;
      background-color: #111;
    }

    &::after {
      content: '';
      width: 100%;
      height: 3px;
      position: absolute;
      bottom: 1px;
      left: 0;
      border-radius: 2px;
      background-color: #111;
    }
  }
}

.offcanvas-menu {
  &__bar {
    width: rem(300);
    padding: rem(60) rem(15) 0;

    .uk-close {
      width: rem(30);
      top: rem(30);
    }

    @include breakpoint_max(md) {
      width: 100vw;
    }
  }

  &__list {
    font-size: rem(22);
  }

  &__list-item {
    margin: rem(25) 0;
  }

  &__list2 {
    font-size: rem(20);
  }

  &__list2-item {
    margin: rem(20) 0;
  }

  &__list3 {
  }

  &__list3-item {
    margin: rem(15) 0;
  }
}
</style>
