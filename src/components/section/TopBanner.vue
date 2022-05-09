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
@include keyframe(move) {
  100% {
    opacity: 1;
    transform: translateX(260%);
  }
  0% {
    opacity: 0;
    transform: translateX(350%);
  }
}
.topBanner {
  position: relative;
  height: 100vh;
  overflow: hidden;
  .text {
    position: absolute;
    top: 40%;
    color: $white;
    opacity: 0;
    transition: 0.5s;
    @include animation(0.2s, 1.5s, move);
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
