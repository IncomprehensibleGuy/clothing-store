<template>
  <footer class="footer uk-background-muted">
    <div class="footer__body">
      <nav v-for="block in linksBlocks" :key="block.id" class="footer-nav">
        <div class="footer-nav__body">
          <h3 class="footer-nav__title">
            {{ block.title }}
          </h3>
          <ul class="footer-nav__list">
            <li
              v-for="link in block.links"
              :key="link.id"
              class="footer-nav__list-item"
            >
              <NuxtLink
                v-if="link.type === 'text'"
                class="footer-nav__link"
                :to="link.url"
              >
                {{ link.title }}
              </NuxtLink>
              <a
                v-else
                class="footer-nav__link"
                :href="link.url"
                target="_blank"
              >
                <img
                  class="footer-nav__icon"
                  :src="require(`@images/${link.imageName}`)"
                  :alt="link.title"
                />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </footer>
</template>

<script>
import footerLinksBlocks from '@/data/footer-links'

export default {
  name: 'TheFooter',

  data() {
    return {
      linksBlocks: footerLinksBlocks
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  //justify-self: flex-end;
  border-top: 1px solid $border;

  &__body {
    //max-width: rem(1440);
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: rem(50) 0 rem(100);
    grid-gap: 20px;

    @include breakpoint_max(md) {
      max-width: rem(720);
      padding: rem(50) 0 rem(100);
      grid-template-columns: repeat(4, rem(180));
    }

    @include breakpoint_max(sm) {
      max-width: rem(280);
      padding: rem(30) 0;
      grid-template-columns: repeat(1, rem(280));
    }
  }
}

.footer-nav {
  @include flex(flex, $dir: column);

  @include breakpoint_max(md) {
    //align-items: flex-start;
  }

  @include breakpoint_max(sm) {
    margin-bottom: rem(30);
  }

  &__body {
  }

  &__title {
    margin: 0 0 rem(14) 0;
    text-transform: uppercase;
    font-size: rem(13);
    font-weight: 500;

    @include breakpoint_max(sm) {
      font-size: rem(18);
    }
  }

  &__list {
    padding: 0;
  }

  &__list-item {
    @include breakpoint_max(md) {
      margin-bottom: rem(10);
    }
  }

  &__link,
  &__link:visited {
    height: rem(18);
    font-size: rem(14);
    letter-spacing: 0.3px;
    font-weight: 400;
    color: #555;

    @include breakpoint_max(sm) {
      font-size: rem(18);
    }
  }

  &__icon {
    width: rem(30);
    height: rem(30);
  }
}

.footer-nav:nth-child(1) {
  @include breakpoint_max(sm) {
    order: 3;
  }
}
.footer-nav:nth-child(2) {
  @include breakpoint_max(sm) {
    order: 1;
  }
}
.footer-nav:nth-child(3) {
  @include breakpoint_max(sm) {
    order: 2;
  }
}

.footer-nav:nth-child(4) {
  @include breakpoint_max(sm) {
    order: 4;
  }

  .footer-nav {
    &__list {
      @include flex(flex);
    }

    &__icon {
      margin: rem(8) rem(15) 0 0;
    }
  }
}
</style>
