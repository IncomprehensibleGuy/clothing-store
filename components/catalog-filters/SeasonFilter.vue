<template>
  <li class="filter">
    <ul class="filter__list seasons">
      <li
        v-for="(value, index) in values"
        :key="index"
        class="filter__list-item season"
      >
        {{ value }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'SeasonFilter',

  data() {
    return {
      values: [
        'Демисезон',
        'Весна-лето',
        'Весна-осень',
        'Осень-зима',
        'Лето',
        'Зима'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.seasons {
  grid-template-columns: repeat(3, 1fr);
}
.season {
}
</style>
