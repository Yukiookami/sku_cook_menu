<template>
  <div class="login-page">
    <sku-back-banner :bannerImg="bannerImg">
      <sku-card>
        <template #header>{{ text.title }}</template>

        <!-- 用户名，密码 -->
        <van-field
          v-for="(_, key, index) in loginForm"
          class="login-page__input"
          v-model="loginForm[key]"
          :left-icon="iconMap[key]"
          :placeholder="text[key]"
          @focus="() => changeIcon(key)"
          @blur="() => changeIcon(key)"
          :key="index"
        />

        <!-- 忘记密码，注册 -->
        <div class="login-page__link-box">
          <span>
            {{ text.forgetPassword }}
          </span>

          <!-- 记住我 -->
          <van-checkbox
            class="login-page__checkbox"
            v-model="rememberMe.checked"
            :checked-color="theme['--login-button-color']"
            icon-size="14px"
            shape="square"
            >{{ text.rememberMe }}</van-checkbox
          >
        </div>

        <!-- 登录 -->
        <van-button block :color="theme['--login-button-color']">
          {{ text.login }}
        </van-button>

        <span class="login-page__register">
          {{ text.register }}
        </span>
      </sku-card>
    </sku-back-banner>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useTextStore, useThemeStore } from "../../stores";
import bannerImg from "../../assets/images/login-banner.png";
import skuCard from "../../components/common/skuCard.vue";
import skuBackBanner from "../../components/common/skuBackBanner.vue";

const textStore = useTextStore();
const themeStore = useThemeStore();
const text = ref(textStore.text.login);
const theme = ref(themeStore.themeContent);

// 密码框图标
const iconMap = reactive({
  username: "smile-o",
  password: "eye-o",
});

// 登录表单
const loginForm = reactive({
  username: "",
  password: "",
});

// 记住我
const rememberMe = reactive({
  checked: false,
});

// **
//  * @description: 密码框被点击，更换图标为闭眼
//  * @param {string} key 键值
//  * @return {void}
//  */
const changeIcon = (key) => {
  if (key === "password") {
    iconMap[key] = iconMap[key] === "eye-o" ? "closed-eye" : "eye-o";
  }
};
</script>

<style lang="scss" scoped>
.login-page {
  &__input {
    background-color: rgba($color: var(--login-background-color), $alpha: 0.1);
    box-shadow: 0 0px 4px
      rgba($color: var(--login-input-shadow-color), $alpha: 0.1);
    border-radius: 6px;
    margin: 0 0 10px 0;
    color: var(--login-input-color);

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__link-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px auto;
    width: 95%;

    span {
      color: var(--login-link-color);
      font-size: 12px;
    }

    .login-page__checkbox {
      font-size: 12px;
    }
  }

  &__register {
    display: block;
    text-align: right;
    padding-right: 2.5%;
    margin-top: 10px;
    font-size: 12px;
  }
}
</style>
