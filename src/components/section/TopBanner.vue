<template>
  <div class="topBanner">
    <video class="video" ref="video" autoplay loop muted>
      <source src="../../assets/video/main.mp4" type="video/mp4" />
    </video>
    <div class="text">
      <p>{{ detail.top }}</p>
      <p>{{ detail.bottom }}</p>
      <span>TAKENSOFT</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopBanner",
  props: {
    detail: {
      type: Object,
      required: true,
    },
  },
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
    top: 40%;
    right: 10%;
    color: $white;
    p {
      font-size: 2rem;
      line-height: 160%;
    }
    p:nth-of-type(2) {
      margin-bottom: 20px;
    }
    span {
      font-weight: bold;
      padding: 20px 0;
      font-size: 2rem;
      &:before {
        content: "";
        display: block;
        width: 50px;
        border-top: 1px solid $white;
        padding: 10px 0;
      }
    }
  }
}
</style>
