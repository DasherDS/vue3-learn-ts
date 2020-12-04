import { createStore } from "vuex";

export default createStore({
  state: {
      tsetNum:{
          count:0
      }
  },
  getters:{
    getTestNum:(state)=>{
        return state.tsetNum
    }
  },
  mutations: {
      SET_NUM(state,data){
          state.tsetNum = data
      }
  },
  actions: {
      setNum( {commit},datas){
          commit('SET_NUM',datas)
      }
  },
  modules: {}
});
