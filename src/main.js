import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

//Vue.use(VueAxios, axios);

new Vue({
  render: h => h(App)
}).$mount("#app");
