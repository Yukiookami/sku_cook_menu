import { defineStore } from "pinia";
import { ref } from "vue";
import themeConfig from "../config/theme";

export const useThemeStore = defineStore("theme", () => {
  const theme = ref("default");

  /**
   * 更换主题时，重新设置全局css变量
   * @param {string} theme 主题名称
   */
  const applyTheme = (theme) => {
    const root = document.documentElement;
    const themeColors = themeConfig;

    const selectedTheme = themeColors[theme] || themeColors.default;

    for (const [key, value] of Object.entries(selectedTheme)) {
      root.style.setProperty(key, value);
    }
  };

  const setTheme = (newTheme) => {
    theme.value = newTheme;
    applyTheme(newTheme);
  };

  return {
    theme,
    setTheme,
  };
});
