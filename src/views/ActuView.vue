<template>
  <div>
    <NavBar />
    <nav></nav>
    <div id="logInAcc">
      <div>
        <button @click="$router.push('/Login')">Connexion</button>
      </div>
      <br />
      <br />
      <div>
        <button>Mon profil</button>
      </div>
      <div>
        <button>Déconnexion</button>
      </div>
    </div>
    <Recuperer :emitprop="this.test"></Recuperer>
    <Deconnect />
    <Poster @uptadepost="recuperer"></Poster>
  </div>
</template>

<script>
import Poster from "../components/Poster.vue";
import Deconnect from "../components/Deconnect.vue";
import NavBar from "../components/NavBar.vue";
import Recuperer from "../components/Recuperer.vue";
export default {
  components: {
    // Login,
    // Creation,
    Recuperer,
    Poster,
    Deconnect,
    // RecupUser,
    NavBar,
  },
  props: {
    emitprop: String,
  },
  data() {
    return {
      isDisplay: true,
      test: "pasok",
    };
  },

  computed: {
    ShowCreation() {
      this.isDisplay = !this.isDisplay;
    },
  },

  methods: {
    recuperer() {
      alert("coucou");

      this.test = "ok";
      alert(this.test);
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
  color: black;
}
#logInAcc {
  display: flex;
  justify-content: flex-end;
}

#btn {
  font-family: initial;
  letter-spacing: 1.8px;
}
</style>
