<template>
  <div id="mainContainer">
    <img src="../assets/logo.png" />
    <h1>Bienvenue chez les Baroudeurs !</h1>
    <br />
    <!-- Formulaire de connexion -->
    <form id="creation" @submit.prevent="register">
      <div class="input-container">
        <label for="firstname">Prénom : </label>
        <input
          type="text"
          id="firstname"
          v-model="firstname"
          placeholder="Votre prénom"
          required
        />
      </div>
      <div class="input-container">
        <label for="lastname">Nom : </label>
        <input
          type="text"
          id="lastname"
          v-model="lastname"
          placeholder="Votre Nom"
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
 <input class="login-button" type="submit" value="S'inscrire" />
      <br>
      <button id="homeBtn" @click="$router.push('/')">Retour à l'accueil</button>
      
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
      lastname: "Athuil",
      firstname: "David",
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
          lastname: this.lastname,
          firstname: this.firstname,
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

<style scoped>
#creation {
  z-index: 10000;
}
</style>
