<template>
  <div id="mainContainerPoster">
    <!-- Formulaire de connexion -->
    <div class="input-container">
      <label for="title">title : </label>
      <input
        type="text"
        id="title"
        v-model="title"
        placeholder="Votre Titre"
        required
      />
    </div>

    <div class="input-container">
      <label for="content">content : </label>
      <input
        type="text"
        id="content"
        v-model="content"
        placeholder="Votre post"
        required
      />
    </div>

    <button @click="poster">Ajouter</button>
    <button @click="test">test</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "david_athuil@yahoo.fr",
      password: "test",
      result: null,
      token: localStorage.getItem("token"),
      title: "",
      content: "",
      like: 0,
      idPost: "",
    };
  },

  emits:['uptadepost'],
   
  // Query parameters:
  // page: Number (par défaut: 0)
  // limit: Number (par défaut: 20)
  // Exemple: /posts?page=2&limit=10
  // pour obtenir la page 3 et 10 posts par
  methods: {
updtpostrecup(){
this.$root.recuperer()
},

test(){
  this.$emit('uptadepost');
},

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
        // idPost:this.idPost,
      };

      const response = await fetch(
        "https://social-network-api.osc-fr1.scalingo.io/demo/post",
        options
      );

      const data = await response.json();

      console.log(response);
      console.log(data);
      this.test();
      
      
    },
  },                                                                            
};
</script>

<style>
#mainContainerPoster {
  font-family: Avenir, Helvetica, Arial, sans-serif;

  color: #2c3e50;

  position: absolute;
  padding-left: 33%;
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
