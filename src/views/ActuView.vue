<template>
  <div>
    <NavBar />
    <nav></nav>
    <div id="logInAcc">
      <button id="btn">Connexion</button>
    </div>
    <Recuperer />
    <Deconnecter />
    <Poster />

    <footer id="footer">&copy Le petit Baroudeur</footer>
  </div>
</template>

<script>
import Poster from "../components/Poster.vue";
import Deconnect from "../components/Deconnect.vue";
import NavBar from "../components/NavBar.vue";
import Recuperer from "../components/Recuperer.vue";
export default {
  name: "App",
  components: {
    // Login,
    // Creation,
    Recuperer,
    Poster,
    Deconnect,
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

  // methods: { eventMouse
  //   MouseEvent(){
  // this.eventMouse.transform

  //   }
  // }
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
  color: black;
}
#logInAcc {
  display: flex;
  justify-content: flex-end;
}

#footer {
  background-color: black;
  color: white;
  padding: 2%;
  position: unset;
  margin-top: 200%;
}
#btn {
  font-family: initial;
  letter-spacing: 1.8px;
}
</style>
