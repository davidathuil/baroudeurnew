<template>
  <div>
    <NavBar />
    <nav></nav>
    <div id="logInAcc">
      <div>
        <button @click="$router.push('/Login')" class="buttonStyle" id="btn1">
          Connexion
        </button>
        <br />
        <br />
      </div>

      <div>
        <button class="buttonStyle" id="btn2">Mon profil</button>
      </div>
      <br />
      <br />
      <div>
        <button class="buttonStyle" id="btn3">Déconnexion</button>
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

<style scoped>
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
.buttonStyle {
  background-color: rgba(25, 25, 112, 0.684);
  color: white;
  padding: 5px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  letter-spacing: 2px;
  font-size: medium;
}
#btn1:hover {
  box-shadow: 0 10px 5px 0 rgba(0, 0, 0, 0.24),
    0 30px 50px 0 rgba(0, 0, 0, 0.19);
}
#btn2:hover {
  box-shadow: 0 10px 5px 0 rgba(0, 0, 0, 0.24),
    0 30px 50px 0 rgba(0, 0, 0, 0.19);
}
#btn3:hover {
  box-shadow: 0 10px 5px 0 rgba(0, 0, 0, 0.24),
    0 30px 50px 0 rgba(0, 0, 0, 0.19);
}
</style>
