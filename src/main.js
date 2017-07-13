// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'vue-material/dist/vue-material.css';
import VueMaterial from 'vue-material';
import Vue from 'vue';
import App from './App';
import router from './router';


Vue.use(VueMaterial);
Vue.config.productionTip = false;

Vue.material.registerTheme('default', {
  primary: 'teal',
  accent: 'pink',
  warn: 'red',
});

Vue.material.registerTheme('student', {
  primary: 'deep-purple',
  accent: 'pink',
});
Vue.material.registerTheme('prepod', {
  primary: 'blue',
  accent: 'amber',
  warn: 'red',
});
Vue.material.registerTheme('otdel', {
  primary: 'indigo',
  accent: 'amber',
  warn: 'red',
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});

