<template>
  <nav class="mainNav">
    <ul>
      <li><router-link to="#">회사 소개</router-link></li>
      <li><router-link to="#">서비스 소개</router-link></li>
      <li><router-link to="#">팀</router-link></li>
      <li><router-link to="#">채용</router-link></li>
      <li><router-link to="#">데이터 바우처</router-link></li>
      <li><router-link to="#">서비스 문의</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "TheNavigation",
};
</script>

<style lang="scss" scoped>
.mainNav {
  max-width: 1000px;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    li a {
      display: block;
      max-width: 200px;
      padding: 10px 20px;
      color: #fff;
      text-decoration: none;
      &:hover {
        color: dodgerblue;
      }
    }
    li:last-child {
      border: 1px solid #fff;
      border-radius: 50px;
      margin-left: 20px;
    }
  }
}
</style>
