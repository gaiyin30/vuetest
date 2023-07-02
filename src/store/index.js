import {createStore} from 'vuex'


const store=createStore({
    state(){
        return{
            count:1
        }
    },
    getters:{
        double(state){
            return state.count*2
        },
        doubleByCount:(state)=>(count)=>{
            return state.count*count
        }
    },
    mutations:{
        increment(state,{ amount }){
            state.count=amount
        }
    },
    actions:{
        async increment({state,commit,getters}){
            commit('increment',{amount:state.count})
        },
        asyncIncrement({dispatch,state,commit,getters}){
            dispatch('increment')
        }
    },
    modules:{

    }
})

export default store