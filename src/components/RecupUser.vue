<template>
  <div id="mainContaineruser">
    <!-- Formulaire de connexion -->

    <div id="publications">
    <h1>Vos Publications :</h1>
    <ul>
      <li v-for="(postt, index) in filteredpostuser" :key="postt._id">
        <p>{{ postt.title }} {{ postt.firstname }}</p>
        <p>{{ postt.content }}</p>
        <p>{{ postt.likes.length }}</p>
        <p v-for="like in postt.likes">{{ likes.firstname }}</p>

        <p v-for="com in postt.comments">
          {{ com.content }}{{ com.firstname }}
        </p>

        <button @click="like(postt._id)">like</button>
        <div>
          <label for="commentaire">commentaire : </label>
          <input
            type="text"
            id="commentaire"
            v-model="commentaire[index]"
            placeholder="Votre commentaire"
            required
          />

          <button @click="comment(postt._id, index)">post comment</button>
        </div>
        <!-- <p>{{postt._id}} </p> -->
      </li>
    </ul>
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

  computed: {
    filteredpostuser() {
      let postuser = this.posttest;

      postuser = postuser.filter((item) => {
        return item.userId == this.iduser;
      });

      return postuser;
    },
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

    async recuperer() {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await fetch(
        "https://social-network-api.osc-fr1.scalingo.io/demo/posts",
        options
      );

      const data = await response.json();
      this.posttest = data.posts;
      console.log(response), console.log(data);
    },
  },

  beforeMount() {
    this.recupererUser();
  },
  mounted() {
    this.recuperer();
  },
};
</script>

<style scoped>
#mainContaineruser {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: black;
  margin-top: 60px;
  
  display: block;
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
  padding: 10px;
  border-radius: 20px;
  color: black;
}

h1 {
  color: white;
  margin: 20px;
}

#publications {
  background-color: rgba(0, 0, 0, 0.441);
  padding: 30px;
  
}

ul {
  list-style: none;
}

</style>
