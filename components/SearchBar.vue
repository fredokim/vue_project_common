<template>
  <div class="pl-3 pr-3 searchBar" :class="width + ` ` + height">
    <div class="clearfix">
      <slot name="first"></slot>
      <slot name="second"></slot>
      <slot name="third"></slot>
      <slot name="fourth"></slot>
      <slot name="fifth"></slot>
      <slot name="sixth"></slot>
    </div>
    <div class="clearfix">
      <slot name="downFirst"></slot>
      <slot name="downSecond"></slot>
      <slot name="downThird"></slot>
      <slot name="downFourth"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: "",
    },
    height: {
      type: String,
      default: "",
    },
    flot: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
@media screen and (min-width: 1299px) {
  .searchBar {
    min-height: 100px;
  }
}
@media screen and (max-width: 1298px) {
  .searchBar {
    height: 180px;
  }
@media screen and (max-width:750px) {
    .searchBar{
        height: 360px;
    }
}
}
</style>
