Vue = require("vue")
Vue.config.debug = true
Router = require("/Users/alysson/localhost/siop-frontend/node_modules/vue-router/dist/vue-router.js")
Vue.use(Router)
router = new Router({history:false, hashbang: true})

routes = {
  "/components/Cabecalho": {component: require("./components/Cabecalho.vue")},
  "/components/Card": {component: require("./components/Card.vue")},
  "/components/Corpo": {component: require("./components/Corpo.vue")},
  "/components/Hello": {component: require("./components/Hello.vue")},
  "/components/Inicio": {component: require("./components/Inicio.vue")},
  "/components/MenuVertical": {component: require("./components/MenuVertical.vue")},
  "/components/Rodape": {component: require("./components/Rodape.vue")},
  "/App": {component: require("./App.vue")},

}
app = Vue.extend({data: function() {return {availableRoutes: routes}}})
router.map(routes)
router.on("/", {component: require("/Users/alysson/localhost/siop-frontend/node_modules/vue-dev-server/app/main.js")})
router.afterEach(function(transition) {
  document.title = transition.to.path + " - vue-dev-server"
})
router.start(app,"#app")