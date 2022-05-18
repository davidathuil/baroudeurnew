<template>
  <div id="log">
    <div v-if="isDisplay">
      <Login />
    </div>
    <button @click="isDisplay = !isDisplay">Inscription</button>
    <div v-if="!isDisplay">
      <Creation />
    </div>
    <Deconnecter />
  </div>

  <video autoplay loop>
    <source src="../assets/video.mp4" />
  </video>
</template>

<script>
import Login from "../components/Login.vue";
import Creation from "../components/Creation.vue";
import Deconnecter from "../components/Deconnecter.vue";

export default {
  name: "App",
  components: {
    Login,
    Creation,
    Deconnecter,
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

#log {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.507);
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  width: 30%;
  align-items: center;
  margin-top: 13%;
  margin-left: 36%;
}

video {
  resize: both;
  width: 100%;
  height: 100%;
}
</style>
