<template>
  <div
    :style="{
      'background-image':
        'url(' + require('../../assets/images/home_top_bg.jpg') + ')',
    }"
    class="top"
  ></div>
</template>

<script>
export default {
  name: "HomeTop",
};
</script>

<style lang="scss" scoped>
.top {
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>
