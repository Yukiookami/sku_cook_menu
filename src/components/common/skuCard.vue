<template>
  <div class="sku-card">
    <div class="sku-card__header">
      <slot name="header"></slot>
    </div>
    <div class="sku-card__body">
      <slot></slot>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.sku-card {
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: var(--sku-card-background-color, #fff);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  &__header {
    padding: 16px;
    font-size: 18px;
    font-weight: bold;
  }

  &__body {
    padding: 16px;
    flex-grow: 1;
  }
}
</style>
