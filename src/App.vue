<template>
  <div>
    <NavBar />

    <div v-if="isDisplay">
      <Login />
    </div>
    <button @click="isDisplay = !isDisplay">Inscription</button>
    <div v-if="!isDisplay">
      <Creation />
    </div>
    <Deconnecter />
    <RecupUser />
    <Recuperer />
    <Poster />
  </div>
</template>

<script>
import Page from "./components/Page.vue";
import Login from "./components/Login.vue";
import Creation from "./components/Creation.vue";
import Recuperer from "./components/Recuperer.vue";
import Poster from "./components/Poster.vue";
import Deconnecter from "./components/Deconnecter.vue";
import RecupUser from "./components/RecupUser.vue";
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    Page,
    Login,
    Creation,
    Recuperer,
    Poster,
    Deconnecter,
    RecupUser,
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
