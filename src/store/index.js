import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

let store = new Vuex.Store({
    state:{
        isShow:false
    },
    getters:{},
    mutations:{
        showMutation(state,payload){
            state.isShow = !state.isShow;
        }
    },
    actions:{
        showAction({commit},payload){
            commit("showMutation");
        }
    },
    modules:{},
});

export default store;








