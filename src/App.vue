<template>
  <div>
    <div v-if="isDisplay">
  <Login/>
    </div>
  <button @click="isDisplay=!isDisplay"> Inscription</button>
   <div v-if="!isDisplay">
  <Creation/>

    </div>
    <Recuperer/>
    <Poster/>
  </div>
</template>

<script>
import Page from './components/Page.vue'
import Login from './components/Login.vue'
import Creation from './components/Creation.vue'
import Recuperer from './components/Recuperer.vue'
import Poster from './components/Poster.vue'

export default {
  name: 'App',
  components: {
    Page,
    Login,
    Creation,
    Recuperer,
    Poster,
},
 data() {
    return {
      isDisplay:true,
    };
  },

computed:{
  ShowCreation(){
    this.isDisplay = !this.isDisplay;

  }
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
