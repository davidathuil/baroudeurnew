<template>
  <div id="mainContainerPoster">
    <!-- Formulaire de connexion -->
    <form id="creation" @submit.prevent="poster" > <!-- enctype="multipart/form-data" -->
    <div class="input-container">
      <label for="title">title : </label>
      <input
        type="text"
        name="title"
        id="title"
        v-model="title"
        placeholder="Votre Titre"
        
        
      />
    </div>

    <div class="input-container">
      <label for="content">content : </label>
      <input
        type="text"
        name="content"
        id="content"
        v-model="content"
        placeholder="Votre post"
        
        
      />
    </div>
     <div class="input-container">
      <label for="content">joindre : </label>
      <input
      id="fichier"
        type="file"
        name="file"
        accept="image/png, image/jpg, image/gif"
        
      />
    </div>

    <button>Ajouter</button>
    <button @click="test">test</button>
    </form>
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
      title: "test",
      content: "",
      like: 0,
      idPost: "",
    };
  },

  emits:['uptadepost'],
   
 
  methods: {


test(){
  this.$emit('uptadepost');
},

    async poster() {
// body: new FormData(creation)
// alert(document.getElementById("fichier").value);
        let formData = new FormData();
  formData.append('title',  this.title);
  formData.append('content', this.content);

  formData.append("file", document.getElementById("fichier").files[0]);

      const options = {
        body:  formData,
        method: "POST",
        
        headers: {
            // "Content-Type": "multipart/form-data",
          Authorization: "bearer " + localStorage.getItem("token"),
        },
        
        
        // idPost:this.idPost,
      };
   delete options.headers['Content-Type'];

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

<style scoped>
#mainContainerPoster {
  font-family: Avenir, Helvetica, Arial, sans-serif;

     
margin: 10px;
  text-align: center;
  display: block;
 
 

  
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
#content {
  padding: 50px 130px;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-top-right-radius: 20px;
}
#creation {
  color: white;
  background-color: rgba(0, 0, 0, 0.435);
  padding: 20px;
  margin: 20px;;
}
#title {
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-top-right-radius: 10px;
  
  margin-left:10%;
  margin-right:10%;
  height: 50px;
}
#profilPost {
  margin-left: 20%;
  margin-right: 20%;
 display: flex;
  margin-top: -10px;
}
</style>
