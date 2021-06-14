<template>
  <client-only>
    <a
      class="uk-icon app-icon"
      :uk-icon="`icon: ${name}; ratio: ${size}`"
      :href="url"
      :class="{ 'uk-icon-button': button }"
    >
      {{ text }}
    </a>
  </client-only>
</template>

<script>
export default {
  name: 'AppIcon',

  props: {
    name: {
      type: String,
      required: true,
      default: ''
    },
    url: {
      type: String,
      required: false,
      default: ''
    },
    text: {
      type: String,
      required: false,
      default: ''
    },
    button: {
      type: Boolean,
      required: false,
      default: true
    },
    size: {
      type: Number,
      required: false,
      default: 1
    }
  },

  updated() {
    const iconComponent = this.$uikit.icon(this.$el)
    iconComponent.svg.then((svg) => {
      const path = svg.querySelector('path')
      path.removeAttribute('fill')
    })
  }
}
</script>

<style lang="scss" scoped>
.app-icon {
  width: 36px;
  height: 36px;
  padding: 8px;
  fill: none;
  color: #ff4d4d;

  &:hover {
    color: #ff4d4d;
    fill: #ff4d4d;
  }
}
</style>
