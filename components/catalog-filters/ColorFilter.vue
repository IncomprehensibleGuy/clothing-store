<template>
  <li class="filter">
    <ul class="filter__list colors">
      <li
        v-for="(value, index) in values"
        :key="index"
        class="filter__list-item color"
      >
        {{ value }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'ColorFilter',

  data() {
    return {
      values: ['', '', '', '', '', '', '', '', '', '', '', '', '']
    }
  }
}
</script>

<style lang="scss" scoped>
.colors {
  grid-template-columns: repeat(7, 40px);
}
.color {
}
.colors > li:nth-child(1) {
  background-color: black;
}
.colors > li:nth-child(2) {
  background-color: white;
}
.colors > li:nth-child(3) {
  background-color: lightgray;
}
.colors > li:nth-child(4) {
  background-color: red;
}
.colors > li:nth-child(5) {
  background-color: yellow;
}
.colors > li:nth-child(6) {
  background-color: green;
}
.colors > li:nth-child(7) {
  background-color: aqua;
}
.colors > li:nth-child(8) {
  background-color: pink;
}
.colors > li:nth-child(9) {
  background-color: palegreen;
}
.colors > li:nth-child(10) {
  background-color: blue;
}
.colors > li:nth-child(11) {
  background-color: peru;
}
.colors > li:nth-child(12) {
  background-color: orange;
}
.colors > li:nth-child(13) {
  background-color: orangered;
}
</style>
