<template>
  <ul class="sort-by__list">
    <li
      v-for="(option, index) in options"
      :key="index"
      class="sort-by__option"
      :class="option === selected ? 'uk-background-primary' : ''"
      @click="selected = option"
    >
      {{ option }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'SortByFilter',

  data() {
    return {
      options: [
        'Рекомендованные',
        'Сначала дешевле',
        'Сначала дороже',
        'Самые новые'
      ],
      selected: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.sort-by {
  &__list {
  }

  &__option {
    height: 40px;
    margin: 0 0 5px 0;
    padding: 0 10px;
    line-height: 40px;
    border: 1px solid #e5e5e5;
    transition: 0.1s background-color ease-in-out;
    cursor: pointer;

    &:hover {
      background-color: #e5e5e5;
    }
  }
}
</style>
