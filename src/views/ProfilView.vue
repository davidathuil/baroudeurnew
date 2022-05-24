<template>
  <div>
    <header>
      <div><img src="../assets/logo.png" /></div>
    </header>

    <body>
      <div id="bandeau">
        <p>
          <button id="homeBtn" @click="$router.push('/')">
            Retour à l'accueil
          </button>
        </p>
        <h1>VOTRE PROFIL</h1>
        <p>
          <button id="connectBtn" @click="$router.push('/Login')">
            Connexion
          </button>
        </p>
      </div>

      <section id="profilPost">
        <div id="mainContainerPoster">
          <!-- Formulaire de connexion -->
          <ModifUser />
          <br>
          <form id="creation" @submit.prevent="poster">
            <h3>Partagez vos expériences !</h3>
            <div class="input-container">
              <br />
              <input
                type="text"
                name="title"
                id="title"
                v-model="title"
                placeholder="Titre de votre commentaire"
              />
            </div>
            <br />

            <div class="input-container">
              <label for="content">Commente ta publication : </label>
              <br />
              <input
                type="text"
                name="content"
                id="content"
                v-model="content"
                placeholder="Votre post"
              />
            </div>

            <br />
            <div class="input-container">
              <label for="content">Ajoute une photo à ton post ! </label>
              <br />
              <br />
              <input
                id="fichier"
                type="file"
                name="file"
                accept="image/png, image/jpg, image/gif"
              />
            </div>
            <br />
              <br />

            <button @click="poster">Ajouter</button>
            <button @click="test">test</button>
          </form>
       
          <RecupUser />
        </div>
      </section>
    </body>
  </div>
</template>

<script>
import RecupUser from "../components/RecupUser.vue";

import ModifUser from "../components/ModifUser.vue";

export default {
  
  components: {
    RecupUser,
    ModifUser,
  },
  data() {
    return {
      token: localStorage.getItem("token"),
      title: "",
      content: "",

      idPost: "",
    };
  },

  methods: {
    async poster() {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({
          title: this.title,
          content: this.content,
        }),
      };

      const response = await fetch(
        "https://social-network-api.osc-fr1.scalingo.io/demo/post",
        options
      );

      const data = await response.json();

      console.log(response);
      console.log(data);
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Montserrat:wght@300&family=Passion+One&family=Roboto:wght@100;500&family=Square+Peg&display=swap");

#content {
  padding: 50px 130px;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-top-right-radius: 20px;
}
#title {
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-top-right-radius: 10px;
}

header {
  background-image: url(../assets/bgTitle2.jpg);
  background-size: cover;
  padding: 20px;
  color: white;
}

#profilPost {
  margin-left: 20%;
  margin-right: 20%;
 display: flex;
  margin-top: -10px;
}

body {
  background-image: url(../assets/bgCol.jpg);
  background-size: cover;
  background-position: center;
}

#bandeau {
  background-color: black;
  padding: 30px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#mainContainerPoster {
  margin: 10px;
  text-align: center;
  display: block;
}

button {
  cursor: pointer;
}

#creation {
  color: black;
  background-color: rgba(0, 0, 0, 0.435);
  padding: 20px;
  margin: 20px;;
}
</style>
