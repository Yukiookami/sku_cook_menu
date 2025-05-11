<template>
  <div class="sku-back-banner">
    <div
      class="sku-back-banner__img"
      :style="{ backgroundImage: `url(${bannerImg})` }"
    ></div>

    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  bannerImg: String,
});
</script>

<style lang="scss" scoped>
.sku-back-banner {
  position: relative;
  width: 100vw;
  padding: 175px 10px 0 10px;
  margin: -15px -15px 0 -15px;

  &__img {
    width: 100%;
    height: 200px;
    background-size: cover;
    background-position: center;

    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
}
</style>
