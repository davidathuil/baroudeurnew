<template>
  <div>
    <NavBar />

    <router-link to="/"> Fil d'actu </router-link>
    <router-link to="/Profil"> Profil </router-link>
    <router-link to="/Login"> Login </router-link>

    <div v-if="isDisplay">
      <Login />
    </div>
    <button @click="isDisplay = !isDisplay">Inscription</button>
    <div v-if="!isDisplay">
      <Creation />
    </div>
    <Deconnecter />
  </div>
</template>

<script>
import Login from "../components/Login.vue";
import Creation from "../components/Creation.vue";
import Deconnecter from "../components/Deconnecter.vue";
import NavBar from "../components/NavBar.vue";

export default {
  name: "App",
  components: {
    Login,
    Creation,
    Deconnecter,
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
