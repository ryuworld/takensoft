<template>
  <nav class="mainNav">
    <ul>
      <li><router-link to="#">메뉴1</router-link></li>
      <li><router-link to="#">메뉴2</router-link></li>
      <li><router-link to="#">메뉴3</router-link></li>
      <li><router-link to="#">메뉴4</router-link></li>
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
    justify-content: space-between;
    align-items: center;
    li {
      list-style: none;
      a {
        display: block;
        max-width: 200px;
        padding: 5px 15px;
        color: #333;
        text-decoration: none;
        &:hover {
          color: dodgerblue;
        }
      }
    }
  }
}
</style>
