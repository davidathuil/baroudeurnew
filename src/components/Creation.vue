<template>
  <div id="mainContainer">
    <!-- Formulaire de connexion -->
    <form @submit.prevent="register">
        <div class="input-container">
                <label for="firstname">Prénom : </label>
                <input
                type="text"
                id="firstname"
                v-model="firstname"
                placeholder="david"
                required
                />
            </div>
            <div class="input-container">
                <label for="lastname">lastname : </label>
                <input
                type="text"
                id="lastname"
                v-model="lastname"
                placeholder="athuil"
                required
                />
            </div>

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
      Connexion réussie creation
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
      lastname:"Athuil",
      firstname:"David",

    };
  },

  methods: {
    async register() {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
          lastname:this.lastname,
          firstname:this.firstname,
        }),
      };

      const response = await fetch(
        "https://social-network-api.osc-fr1.scalingo.io/demo/register",
        options
      );

      const data = await response.json();

      this.result = data.success;
      if (data.success === true) {
        this.token = data.token;
      }
    },
  },
};
</script>

<style>
#mainContainer {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.input-container {
  margin: 10px;
  display: flex;
  flex-direction: row;
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
  background-color: grey;
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
