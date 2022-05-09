<template>
  <nav class="mainNav">
    <ul>
      <li v-for="menu in menus" :key="menu.title">
        <router-link :to="menu.link">{{ menu.title }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "TheNavigation",
  data() {
    return {
      menus: [
        { title: "회사소개", link: "/company" },
        { title: "서비스소개", link: "/service" },
        { title: "팀", link: "/team" },
        { title: "채용", link: "/career" },
        { title: "데이터바우처", link: "/datavoucher" },
        { title: "사용자문의", link: "/inquiry" },
      ],
    };
  },
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
