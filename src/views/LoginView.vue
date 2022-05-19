<template>
  <div id="log">
    <div v-if="isDisplay">
      <Login />
    </div>
<br>
<div id="inscription">
    Nouveau sur le site? inscris toi ! >>> 
    <button id="inscriptionBtn" @click="isDisplay = !isDisplay">Inscription</button>
    </div>
    <div v-if="!isDisplay">
      <Creation />
    </div>
   
  </div>

  <video autoplay loop>
    <source src="../assets/video.mp4" />
  </video>
</template>

<script>
import Login from "../components/Login.vue";
import Creation from "../components/Creation.vue";
import Deconnect from "../components/Deconnect.vue";

export default {
  name: "App",
  components: {
    Login,
    Creation,
    Deconnect,
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
  color:white;
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
  margin-top: 2%;
  margin-left: 36%;
  z-index:10000;
}

video {
  resize: both;
  width: 100%;
  height: 100%;
  
}

#inscriptionBtn {
  margin: 20px;
  padding: 10px;
  background-color: black;
  color: white;
  border: 0px;
  border-radius: 5px;
  font-size: 15px;
  cursor: pointer;
}

#inscription {
  position:relative;
  z-index: 10000;
}
</style>
