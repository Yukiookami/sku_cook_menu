import { defineStore } from "pinia";
import { ref } from "vue";
import { siteTextConfig } from "../config/text.js";

export const useTextStore = defineStore("text", () => {
  const text = ref(siteTextConfig.default);

  /**
   * 更换语言时，重新设置网站语言
   * @param {string} text 主题名称
   */
  const setText = (textName) => {
    text.value = siteTextConfig[textName] || siteTextConfig.default;
  };

  return {
    text,
    setText,
  };
});
