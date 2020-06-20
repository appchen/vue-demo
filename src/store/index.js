import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store=new Vuex.Store({
state:{
    count:100
},
mutations:{
    inc(state,payload){
        state.count+=payload.count
    },
    dec(state,payload){
        state.count-=payload.count
    }
},
actions:{
   async delayinc(context,payload){
        
       /*  setTimeout(()=>{
            context.commit('inc',{count:2})
        },2000)
        console.lawaitog('notified caller')
        payload() */
        return await new Promise((resolve,reject)=>{
            setTimeout(()=>{
                context.commit('inc',{count:2})
                resolve('completed')

            },5000)
        })
    }

},
getters:{
    powcount(state){
        return Math.pow(state.count,2)
    }

},
modules:{
    a:{
        state:{
            name:'modela'
        }

    },
    b:{
        state:{
            name:'modelb'
        },
        getters:{
            fullname(state,getters,rootState){
                return state.name+rootState.count
            }
        }
    }

}
})
export default store