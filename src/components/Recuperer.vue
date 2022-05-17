<template>
  <div id="mainContainer">
    <!-- Formulaire de connexion -->
   
<button @click="recuperer">recuperer</button>

     <ul>
          <li v-for="(postt,index)  in posttest" :key="postt._id">
             <p>{{postt.title}} {{postt.firstname}}</p>
             <p>{{postt.content}}</p>
             <p>{{postt.likes.length}}</p>
             <p v-for="like in postt.likes "> {{likes.firstname}} </p> 
            
             <p v-for="com in postt.comments ">{{com.content}}{{com.firstname}}  </p>
             
            
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
            
            <button @click="comment(postt._id,index)">post comment</button>
          </div>
            <!-- <p>{{postt._id}} </p> -->
            
          </li>
        </ul>

    

   
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
      lastname:"Athuil",
      firstname:"David",
      posttest:[],
      likes:0,
      commentaire:[],

    };
  },
   computed:{
     commentaireindex(b){
       return this.commentaire[b]
     }
      
  },

  
// Query parameters:
// page: Number (par défaut: 0)
// limit: Number (par défaut: 20)
// Exemple: /posts?page=2&limit=10
// pour obtenir la page 3 et 10 posts par
  methods: {

    likeconsole(a) {
      console.log(a)
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
console.log(response),
console.log(data)
      
    },
 

async comment(a,b) {
  
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "bearer " + localStorage.getItem("token")
        },
         body: JSON.stringify({
          
          
          postId:a,
          content: this.commentaire[b]
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
console.log(data)

      
    },
 async like(a) {
  
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "bearer " + localStorage.getItem("token")
        },
         body: JSON.stringify({
          
          
          postId:a,
          
           
          
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
console.log(data)

      
    },
 
 
 
 
 },

mounted() {this.recuperer()},

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
