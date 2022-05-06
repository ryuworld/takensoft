<template>
  <div class="topBanner">
    <video class="video" ref="video" autoplay loop muted>
      <source src="../assets/video/main.mp4" type="video/mp4" />
    </video>
    <div class="text">
      <p>
        인공지능 기반의 <br />
        의사결정 지원 솔루션을 제공하는 <br />
        <span>TAKENSOFT</span>
      </p>
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
    right: 10%;
    color: $white;

    p {
      font-size: 2rem;
      line-height: 160%;
      span {
        font-weight: bold;
        padding: 20px 0;
        &:before {
          content: "";
          display: block;
          width: 50px;
          border-bottom: 1px solid #fff;
          padding: 10px 0;
        }
      }
    }
  }
}
</style>
