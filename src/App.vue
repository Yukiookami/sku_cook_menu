<template>
  <sku-main-layout>
    <template #header>
      <sku-header />
    </template>

    <template #footer>
      <sku-footer />
    </template>

    <router-view />
  </sku-main-layout>
</template>

<script setup>
import { RouterView } from "vue-router";
import skuMainLayout from "./components/layout/skuMainLayout.vue";
import skuHeader from "./components/layout/skuHeader.vue";
import skuFooter from "./components/layout/skuFooter.vue";
import { useThemeStore, useTextStore } from "./stores";
import { onBeforeMount } from "vue";

// 设置全局主题和文本
onBeforeMount(() => {
  const themeStore = useThemeStore();
  const text = useTextStore();
  themeStore.setTheme("default");
  text.setText("default");
});
</script>
