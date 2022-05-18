<template>
  <div>
    <NavBar />
    <nav>
      <router-link to="/"> Fil d'actu </router-link>
      <router-link to="/Profil"> Profil </router-link>
      <router-link to="/Login"> Login </router-link>
    </nav>

     <Recuperer />
    <Deconnecter />
    <Poster />
  </div>
</template>

<script>

import Poster from "../components/Poster.vue";
import Deconnecter from "../components/Deconnecter.vue";
import NavBar from "../components/NavBar.vue";
import Recuperer from "../components/Recuperer.vue";
export default {
  name: "App",
  components: {
    // Login,
    // Creation,
    Recuperer,
    Poster,
    Deconnecter,
    // RecupUser,
    NavBar,
  },
  data() {
    return {
      isDisplay: true,
    };
  },

  computed: {
    ShowCreation() {
      this.isDisplay = !this.isDisplay;
    },
  },
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
  color: #2c3e50;
}
</style>
