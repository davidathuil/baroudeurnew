<template>
  <section>
  <br>
  <br>
  <br>
    <div>
      <input type = "text" placeholder = "recherche">
    </div>

    <div class="home">
      <h4>Mon profil</h4> 
    </div>

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

    <div id="monPost"> 
      Poster une actu
    </div>
 <input type ="text" id="content" v-model="content" placeholder="Je poste mon actu">
    <div>
     <button @click="ajouter" id="ajouter"> Ajouter poste/photo </button>
    </div>

    <div id="actu">
    Mon actu    
    </div>

  </section>
</template>

<script>
export default {
  data() {
    return {
      
      token: localStorage.getItem("token"),
      title: "",
      content:"",
      
      idPost:"",

    };
  },
  
  methods: {
    async poster() {
     

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "bearer " + localStorage.getItem("token")
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

<style scope> 
#content { 
padding: 50px 130px;
border-top-left-radius: 20px;
border-bottom-right-radius: 20px;
}
</style>
