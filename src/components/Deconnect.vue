<template>
  <div id="mainContainerDeco">
    <!-- Formulaire de connexion -->

    <button @click="deconnecter">deconnecter</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: localStorage.getItem("token"),
    };
  },

  methods: {
    deconnecter() {
      localStorage.removeItem("token");
    },
  },
};
</script>

<style>
#mainContainerDeco {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: white;
  margin-top: 60px;
  display: flex;
  justify-content: flex-end;
}

.input-container {
  margin: 10px;
  display: flex;
  flex-direction: column;
}

.input-container label {
  padding: 5px;
}

.input-container input {
  border: 1px solid grey;
  padding: 5px;
  font-size: 12px;
  border-radius: 5px;
  flex-grow: 1;
}

.login-button {
  margin: 20px;
  padding: 10px;
  background-color: black;
  color: white;
  border: 0px;
  border-radius: 5px;
  font-size: 15px;
}

.login-button:hover {
  cursor: pointer;
}

.success {
  margin-top: 20px;
  padding: 10px;
  background-color: #2c962c;
  color: white;
}

.error {
  margin-top: 20px;
  padding: 10px;
  background-color: #b42f26;
  color: white;
}
</style>
