<template>
  <section class="home">
    <HomeTop />
  </section>
</template>

<script>
import HomeTop from "../components/HomeTop.vue";
export default {
  name: "HomeView",
  components: { HomeTop },
};
</script>

<style lang="scss" scoped>
.home {
  background-color: black;
}
</style>
