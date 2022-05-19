<template>



  <div id="mainContainer">

    

<!-- <video autoplay loop id="bgvid">
    <source src="../assets/video.mp4" type="video/mp4" >
</video> -->
    <!-- Formulaire de connexion -->
    <form id="formulaire" @submit.prevent="login" >
      <center><img src="../assets/logo.png"></center>
      <h1>Le Petit Baroudeur</h1>
      <br>
      <h2> LOG IN </h2>
      <br>
      <div class="input-container">
        <label for="emailInput">Email : </label>
        <input
          type="email"
          id="emailInput"
          v-model="email"
          placeholder="john.doe@network"
          required
        />
      </div>

      <div class="input-container">
        <label for="passwordInput">Password : </label>
        <input
          type="password"
          id="passwordInput"
          v-model="password"
          placeholder="1234"
          required
        />
      </div>

      <input class="login-button" type="submit" value="Se connecter" />
    </form>

    <p v-if="result === true" class="success">
      Connexion réussie
      <br />
      Token: {{ token }}
    </p>
    <p v-else-if="result === false" class="error">Connexion échouée</p>
    

  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "david_athuil@yahoo.fr",
      password: "test",
      result: null,
      token: "",
    };
  },
props:{ 

},
  methods: {
      
    async login() {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
      };

      const response = await fetch(
        "https://social-network-api.osc-fr1.scalingo.io/demo/login",
        options
      );
console.log(response);
      const data = await response.json();
console.log(data);
      this.result = data.success;
      if (data.success === true) {
        this.token = data.token;
         localStorage.setItem("token",this.token);
         this.$router.push(  '/' );
      }
    },

    
  },
};
</script>

<style>
#mainContainer {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: white;
 
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
#bgvid {
    position: relative;
    background-size: cover;
    background-position: center;
    overflow: hidden;
}

h1 {
      margin-top: -50px;
    margin-bottom: 30px;
}

#passwordInput {
  text-align: center;
}

#emailInput {
  text-align: center;
}

#formulaire {
  z-index: 10000;
  position: relative;
}

</style>
