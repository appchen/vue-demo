<template>
  <div class="hello">
  <button @click="dodec">-</button>{{$store.state.count}}<button @click="doinc">+</button>
  pow of count
  {{$store.getters.powcount}}
  <button @click="delayadd">delay 2 sec add</button>
  modela value
{{$store.state.a.name}}
modelb getters
{{$store.getters.fullname}}
  </div>
  
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    doinc(){
      this.$store.commit("inc",{count:1})
    },
    dodec(){
      this.$store.commit({
        type:'dec',
        count:1,
        desc:'sub'
      })
    },
    delayadd(){
      /* this.$store.dispatch('delayinc',()=>{
        console.log('complete add')
      }) */
      this.$store.dispatch('delayinc').then((result)=>{
        console.log(result)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
