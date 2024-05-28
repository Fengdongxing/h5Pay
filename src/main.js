import Vue from 'vue'
import './assets/base.less';

import App from './App.vue'
import router from './router'
import 'amfe-flexible/index.js'

import { Icon,Dialog,Col, Row,Button,Form,Field,Toast } from 'vant';
import 'vant/lib/index.css';
Vue.use(Icon);
Vue.use(Dialog);
Vue.use(Row);
Vue.use(Col);
Vue.use(Button);
Vue.use(Form);
Vue.use(Field);
Vue.use(Toast);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
