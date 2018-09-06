import Vue from 'vue'
import App from './App'
import store from './store'

Vue.config.productionTip = false
Vue.config.devtools = (process.env.NODE_ENV === 'development') ? true : false

function createElementRoot() {
  let div = document.createElement("div")
  div.setAttribute("id", "root")
  return div
}

const elementRoot = createElementRoot()
const root = document.querySelector("body").appendChild(elementRoot)

const app = new Vue({
  store,
  ...App
})

app.$mount('#root', root)