<template>
  <div class="login-page">
    <sku-back-banner :bannerImg="bannerImg">
      <sku-card>
        <template #header>{{ text.title }}</template>
      </sku-card>
    </sku-back-banner>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useTextStore } from "../../stores";
import bannerImg from "../../assets/images/login-banner.png";
import skuCard from "../../components/common/skuCard.vue";
import skuBackBanner from "../../components/common/skuBackBanner.vue";

const textStore = useTextStore();
const text = ref(textStore.text.login);
</script>
