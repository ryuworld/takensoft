<template>
  <section class="home">
    <TopBanner
      :detail="{
        top: '인공지능 기반의',
        bottom: '의사결정 지원 솔루션을 제공하는',
      }"
    />
  </section>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      detail: {
        top: "인공지능 기반의",
        bottom: "의사결정 지원 솔루션을 제공하는",
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
