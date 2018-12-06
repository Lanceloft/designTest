import Vue from 'vue'
import Vuex from 'vuex'
import design from './modules/design'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    design
  }
})
