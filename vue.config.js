const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOption: {
      scss: {
        additionalData: `@import "@/assets/scss/abstracts/_mixin.scss";`,
      },
    },
  },
});
