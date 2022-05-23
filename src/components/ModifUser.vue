<template>
  <div id="mainContaineruser">
    <!-- Formulaire de connexion -->

   
    <div id="modifProfil">
        <h3>Vos Coordonnées :</h3>
    <ul id="coordonnees">
      <li v-for="(user, index) in users" :key="user._id">
        
        <p>{{ user }}</p>
        <p>{{ user.firstname }}</p>
        <p>{{ user.lastname }}</p>
        <p>{{ user.email }}</p>

        <!-- <p>{{postt._id}} </p> -->
      </li>
    </ul>
    
      <button @click="isDisplay = !isDisplay">Modifier vos coordonnées</button>
      <div v-if="isDisplay">
        <div>
            <br>
            <br>
          <label for="firstnamemodif">Prénom : </label>
          <br>
          <input
            type="text"
            id="firstnamemodif"
            v-model="firstnameM"
            placeholder="david"
            required
          />
        </div>
        <div class="input-container">
          <label for="lastnamemodif">Nom: </label>
          <input
            type="text"
            id="lastnamemodif"
            v-model="lastnameM"
            placeholder="athuil"
            required
          />
        </div>

        <div class="input-container">
          <label for="emailmodif">Email : </label>
          <input
            type="email"
            id="emailmodif"
            v-model="emailM"
            placeholder="john.doe@network"
            required
          />
        </div>
        <button @click="modifUser">Valider les modifications</button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      result: null,
      token: localStorage.getItem("token"),
      lastname: "",
      firstname: "",
      posttest: [],
      isDisplay: false,
      likes: 0,
      commentaire: [],
      users: [],
      iduser: "",
    };
  },



  methods: {
    async recupererUser() {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "bearer " + localStorage.getItem("token"),
        },
      };

      const response = await fetch(
        "https://social-network-api.osc-fr1.scalingo.io/demo/user",
        options
      );

      const data = await response.json();
      this.users = data;
      this.iduser = data._id;
      console.log(response), console.log(data);
    },
    modifIsdisplay() {
      if ((this.isDisplay = true)) {
        return (this.isDisplay = false);
      } else {
        return (this.isDisplay = true);
      }
    },

    async modifUser() {
      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({
          firstname: this.firstnameM,
          lastname: this.lastnameM,
          email: this.emailM,
        }),
      };

      const response = await fetch(
        "https://social-network-api.osc-fr1.scalingo.io/demo/user",
        options
      );

      const data = await response.json();
      this.users = data;
      console.log(response), console.log(data);
    },

   
  },

  beforeMount() {
    this.recupererUser();
  },
//   mounted() {
//     this.recuperer();
//   },
};
</script>

<style scoped>
#mainContaineruser {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: black;
  margin-top: 60px;
    display: block;
    background-color: rgba(0, 0, 0, 0.366);
    padding: 30px;
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

li {
  background-color: rgb(248, 247, 247);
  margin-bottom: 30px;
  margin-top: 10px;

  border-radius: 20px;
  color: black;
}

h1 {
  color: white;
  margin: 20px;
}

button {
      margin: 20px;
  padding: 10px;
  background-color: black;
  color: white;
  border: 0px;
  border-radius: 5px;
  font-size: 15px;
  cursor: pointer;
}



#coordonnees {
list-style: none;
color: black;
}

#modifProfil {
    color:black;
    
}




</style>
