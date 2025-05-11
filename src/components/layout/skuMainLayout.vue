<template>
  <div class="sku-header" v-if="$route.meta.hideHeader !== true">
    <slot name="header"></slot>
  </div>

  <div class="sku-content">
    <slot></slot>
  </div>

  <div class="sku-footer" v-if="$route.meta.hideFooter !== true">
    <slot name="footer"></slot>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.sku-content {
  padding: 15px;
  width: 100vw;
  overflow: hidden;
}
</style>
