<template>
  <header class="header">
    <div class="container">
      <h1 class="logo">
        <router-link to="/"
          ><img src="@/assets/images/logo2.png" alt="logo"
        /></router-link>
      </h1>
      <TheNavigation />
    </div>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  padding: 20px 0;
  position: fixed;
  z-index: 1000;
  .container {
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      max-width: 200px;
    }
    img {
      width: 100%;
    }
  }
}
</style>
