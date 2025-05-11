<template>
  <div class="sku-header flex justify-between items-center">
    <div>
      <i class="header-icon-left icon-header-icon-left"></i>
    </div>

    <div></div>

    <div></div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.sku-header {
  height: 50px;
  background-color: var(--header-background-color);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 0 20px;

  .header-icon-left {
    font-size: 20px;
    color: var(--header-left-icon-color);
  }
}
</style>
