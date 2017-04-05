import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV != 'production'

const store = new Vuex.Store({
  mudules: {},
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
