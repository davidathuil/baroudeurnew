<template>
  <div>
    
<nav>
    <router-link to="/"> Fil d'actu </router-link>
    <router-link :to="{ name: 'Profil', params: { id: this.id } }">Profil</router-link>
    <router-link to="/Login"> Login </router-link>
</nav>    
<!-- 
    <Deconnecter />
    <RecupUser />
    <Recuperer />
    <Poster /> -->
    <router-view/>
  </div>
</template>

// <script>
// import Page from "./components/Page.vue";

// import Recuperer from "./components/Recuperer.vue";
// import Poster from "./components/Poster.vue";
// import Deconnecter from "./components/Deconnecter.vue";
// import RecupUser from "./components/RecupUser.vue";
// import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    
    // Login,
    // Creation,
    // Recuperer,
    // Poster,
    // Deconnecter,
    // RecupUser,
    // NavBar,
  },
  data() {
    return {
       id :"orange",
    };
  },

  // computed: {
  //   ShowCreation() {
  //     this.isDisplay = !this.isDisplay;
  //   },
  // },
};
</script>

<style>
* {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: pink;
}
</style>
