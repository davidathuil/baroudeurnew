<template>
  <div id="mainContainerRecup">
    <!-- Formulaire de connexion -->
    

    <div id="recupUserContent">
      <h1>coucou {{ emitprop }}</h1>
      <div v-for="(postt, index) in posttest" :key="postt._id" id="editPost">
        <p>{{ postt.title }} {{ postt.firstname }}</p>
        <p>{{ postt.content }}</p>
        <p v-if=" postt.filename">
        <img :src="'https://social-network-api.osc-fr1.scalingo.io/media/'+postt.filename" /></p>
        <div>
          <div>
            <p>{{ postt.likes.length }}{{ postt.comments.lenght }}</p>
          </div>
          <div>
            <div>
              <button @click="comment(postt._id, index)">post comment</button>
            </div>
            <div>
              <button @click="like(postt._id)">like</button>
            </div>
          </div>
          <!-- <div v-for="isShowDiv in postt.comments">
            {{ commentaire.isShowDiv }} -->
          <div v-for="com in postt.comments">
            {{ isShowDiv }}
            <div>
              <p v-for="like in postt.likes">{{ likes.firstname }}</p>
            </div>
            <div>
              <p v-for="com in postt.comments">
                {{ com.content }}{{ com.firstname }}
              </p>
              <div>
                <label for="commentaire">commentaire : </label>
                <input
                  type="text"
                  id="commentaire"
                  v-model="commentaire[index]"
                  placeholder="Votre commentaire"
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <!-- <p>{{postt._id}} </p> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    emitprop: String,
  },
  data() {
    return {
      email: "david_athuil@yahoo.fr",
      password: "test",
      result: null,
      token: localStorage.getItem("token"),
      lastname: "Athuil",
      firstname: "David",
      posttest: [],
      likes: 0,
      isShowDiv: "",
      commentaire: [],
    };
  },
  computed: {
    filteredpostuser() {
      let postuser = this.posttest;

      postuser = postuser.filter((item) => {
        return item.userId == postt._id;
      });

      return postuser;
    },
  },
  watch: {
    emitprop: function (ok, pasok) {
      alert("je suis la");
      this.recuperer();
    },
  },

  methods: {
    likeconsole(a) {
      console.log(a);
    },
    recup() {
      alert(this.emitprop);
      if ((this.emitprop = "ok")) {
        alert("je suis la");
      }
      this.recuperer;
    },

    recuponevent(uptadepost) {
      if (uptadepost) {
        this.recuperer();
      }
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

    async comment(a, b) {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({
          postId: a,
          content: this.commentaire[b],
          //  likes:1,
        }),
      };

      const response = await fetch(
        "https://social-network-api.osc-fr1.scalingo.io/demo/post/comment",
        options
      );

      const data = await response.json();
      // this.posttest = data;
      // this.likes=data.posts.likes
      console.log(response);
      console.log(data);
    },
    async like(a) {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({
          postId: a,
        }),
      };

      const response = await fetch(
        "https://social-network-api.osc-fr1.scalingo.io/demo/post/like",
        options
      );

      const data = await response.json();
      // this.posttest = data;
      // this.likes=data.posts.likes
      console.log(response);
      console.log(data);
    },
  },

  mounted() {
    this.recuperer();
  },
  //   mounted(){this.$root.$on('uptadepost', this.recuperer());
  // //     });
  // // },
  // },
};
</script>

<style>
#mainContainerRecup {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  position: absolute;
  overflow-x: hidden;
  overflow-y: scroll;

  border: hidden;
  width: 90%;
  height: 100%;

  margin-top: 45%;
}

body::-webkit-scrollbar {
  width: 12px; /* width of the entire scrollbar */
}

body::-webkit-scrollbar-track {
  background: rgba(223, 225, 227, 0.91); /* color of the tracking area */
}

body::-webkit-scrollbar-thumb {
  background-color: rgba(33, 33, 106, 0.866); /* color of the scroll thumb */
  border-radius: 20px; /* roundness of the scroll thumb */
  border: 3px solid rgba(33, 33, 106, 0.636); /* creates padding around scroll thumb */
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
