import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
// import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import TheHeader from "./components/layout/TheHeader";
import TheNavigation from "./components/layout/TheNavigation";
import TheFooter from "./components/layout/TheFooter";
import TopBanner from "./components/TopBanner.vue";
import "./assets/css/style.css";

Vue.config.productionTip = false;
Vue.component("TheHeader", TheHeader);
Vue.component("TheNavigation", TheNavigation);
Vue.component("TheFooter", TheFooter);
Vue.component("TopBanner", TopBanner);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
