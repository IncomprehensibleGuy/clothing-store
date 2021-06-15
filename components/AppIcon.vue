<template>
  <client-only>
    <a
      class="uk-icon app-icon"
      :uk-icon="`icon: ${name}; ratio: ${size}`"
      :class="{
        'uk-icon-button': button,
        'heart-icon': name === 'heart'
      }"
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
    if (this.name === 'heart') {
      const iconComponent = this.$uikit.icon(this.$el)
      iconComponent.svg.then((svg) => {
        const path = svg.querySelector('path')
        if (path) path.removeAttribute('fill')
      })
    }
  },

  methods: {
    log() {
      console.log('click')
    }
  }
}
</script>

<style lang="scss" scoped>
.app-icon {
  width: 36px;
  height: 36px;
  padding: 8px;
}

.heart-icon {
  fill: none;
  color: #ff4d4d;

  &:hover {
    color: #ff4d4d;
    fill: #ff4d4d;
  }
}
</style>
