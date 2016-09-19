import Vue from 'vue'
import SiopApp from './SiopApp'
//import VueSelector from 'vue-selector'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'


import Inicio from './components/layout/Inicio'
import AcaoDashboard from './components/AcaoDashboard'
import Hello from './components/Hello'
import DemoList from './components/demo/DemoList'
import TableGridDemo from './components/demo/TableGridDemo'

//Vue.use(VueSelector);
Vue.use(VueRouter);
Vue.use(VueResource);
var router = new VueRouter();


/* eslint-disable no-new */
/*new Vue({
  el: 'body',
  components: { SiopApp }
})*/

router.map({
    "*": {
        component: Inicio
    },
    //rotas temporárias
    "/hello": {
        component: Hello,
        breadCrumb: ["Hello"]
    }, 
    "/demo": {
        component: DemoList,
        breadCrumb: ["Demonstração"] 
    },
    "/acao/:acao": {
        component: AcaoDashboard,
        breadCrumb: ["Paniel da Ação Orçamentária"]
    },
    "tablegrid": {
        component: TableGridDemo,
        breadCrumb: ['TableGridDemo']
    }
});

router.start(SiopApp, 'siop-app')
