<template>
  <div id="mainContainerRecup">
    <!-- Formulaire de connexion -->

    <div id="recupUserContent">
      <h1 class="cache">coucou {{ emitprop }}</h1>
      <div
        class="post"
        v-for="(postt, index) in posttest"
        :key="postt._id"
        id="editPost"
      >
        <p>{{ postt.title }} {{ postt.firstname }}</p>
        <p>{{ postt.content }}</p>
        <p v-if="postt.filename">
          <img class="postimg"
            :src="
              'https://social-network-api.osc-fr1.scalingo.io/media/' +
              postt.filename
            "
          />
        </p>

        <div class="likecomment">
          <div>{{ postt.likes.length }} likes</div>
          <div>{{ postt.comments.length }} commentaire</div>
        </div>
        <button @click="like(postt._id)">like</button>
        <button @click="affichage(postt._id)">comment affichage</button>
        <div v-if="isDisplay === postt._id" class="commentairepost">
          <p v-for="like in postt.likes" :key="like._id">
            {{ like.firstname }} a commenté:
          </p>
          <p v-for="com in postt.comments" :key="com._id">
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
            <button @click="comment(postt._id, index)">post comment</button>
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
      isDisplay: null,
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
    affichage(b) {
      if (this.isDisplay === null) {
        this.isDisplay = b;
      } else {
        this.isDisplay = null;
      }
    },
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
      this.recuperer();
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
      this.recuperer();
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

<style scoped>
#mainContainerRecup {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;

  overflow-x: hidden;
  overflow-y: scroll;
  border: hidden;
  width: 100%;
  height: 320%;

  margin-top: 5%;
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
.post {
  /* background: rgb(255, 226, 190); */
  border-radius: 15%;
  border: solid;
  border-color: #2c3e50;
}
.cache{
   display:none
}
#editPost {
  column-gap: 40px;
  margin: 40px;
  border-top-right-radius: 5%;
  padding: 10%;
  border-color: rgba(232, 237, 237, 0.927);
  background-color: rgb(245, 245, 245);
  border-style: ridge;
  margin-left: 20%;
  margin-right: 20%;
}

.postimg{
  width: 100%;
}
.commentairepost {
  background: rgb(255, 226, 190);
  border: hidden;
  border-color: #e24dc2;
  column-gap: 40px;
  border-bottom-left-radius: 1%;
  border-top-right-radius: 1%;
  border-top-left-radius: 1%;
  border-top-right-radius: 1%;
}

.likecomment {
  display: flex;
  /* border:inherit; */
  border: hidden;
  border-color: #2c502e;
  column-gap: 40px;
  justify-content: space-between;
}
body {
  background: rgb(101, 237, 239);
  background: linear-gradient(
    245deg,
    rgba(101, 237, 239, 0.8158613787311799) 4%,
    rgba(229, 240, 239, 0.9615196420365021) 22%,
    rgba(110, 166, 183, 0.8942927512801996) 79%,
    rgba(224, 239, 237, 0.8914916308320203) 100%
  );
}
</style>
