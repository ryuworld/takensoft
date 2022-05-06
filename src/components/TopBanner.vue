<template>
  <div class="topBanner">
    <video class="video" ref="video" autoplay loop muted>
      <source src="../assets/video/main.mp4" type="video/mp4" />
    </video>
    <div class="text">
      <p>데이터로 가치를 만들다.</p>
      <p>TAKENSOFT</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopBanner",
  computed: {
    videoElement() {
      return this.$refs.video;
    },
  },
};
</script>

<style lang="scss" scoped>
.topBanner {
  position: relative;
  height: 100vh;
  overflow: hidden;
  .text {
    position: absolute;
    top: 50%;
    right: 25%;
    color: #fff;
  }
}
</style>
