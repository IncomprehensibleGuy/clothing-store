<template>
  <form>
    <button class="uk-button uk-button-default" type="button">
      {{ title }}
    </button>
    <div uk-dropdown="mode:click; duration: 0; offset: -5">
      <slot></slot>
    </div>
  </form>
</template>

<script>
export default {
  name: 'CatalogFilter',

  props: {
    title: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: false,
      default: 'select'
    }
  },

  emits: {},

  data() {
    return {
      values: []
    }
  }
}
</script>

<style scoped></style>
