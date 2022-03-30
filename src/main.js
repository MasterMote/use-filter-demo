import Vue from 'vue'
import App from './App.vue'
import elTableHeaderFilter from 'el-table-header-filter'
import { Button, Input, Table, Popover, TableColumn } from 'element-ui';
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

// Vue.use(ElementUI)
Vue.use(elTableHeaderFilter)

Vue.use(Table)
Vue.use(Button)
Vue.use(Input)
Vue.use(TableColumn)
Vue.use(Popover)

new Vue({
  el: '#app',
  render: h => h(App)
})
