<template>
  <div id="mainContaineruser">
    <!-- Formulaire de connexion -->
   
<button @click="recupererUser">recuperer user</button>

     <ul>
     
          <li v-for="(user,index)  in users" :key="user._id">
           <p>{{user}} </p>
             <p>{{user.firstname}} </p>
             <p>{{user.lastname}}</p>
             <p>{{user.email}}</p>
             
         
            <!-- <p>{{postt._id}} </p> -->
            
          </li>
        </ul>
         <button  @click="isDisplay = !isDisplay">Modifcompte</button>
        <div  v-if="isDisplay">
        <div>
 <label for="firstnamemodif">Prénom modif: </label>
                <input
                type="text"
                id="firstnamemodif"
                v-model="firstnameM"
                placeholder="david"
                required
                />
            </div>
            <div class="input-container">
                <label for="lastnamemodif">lastname modif: </label>
                <input
                type="text"
                id="lastnamemodif"
                v-model="lastnameM"
                placeholder="athuil"
                required
                />
            </div>

      <div class="input-container">
        <label for="emailmodif">Email modif: </label>
        <input
          type="email"
          id="emailmodif"
          v-model="emailM"
          placeholder="john.doe@network"
          required
        />
      </div>
      <button @click="modifUser"> SEnd Modif user</button> 
</div>
   

<h1>POST utilisateur</h1>
     <ul>
          <li v-for="(postt,index)  in filteredpostuser" :key="postt._id">
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
      email: "",
      password: "",
      result: null,
       token: localStorage.getItem("token"),
      lastname:"",
      firstname:"",
      posttest:[],
      isDisplay:false,
      likes:0,
      commentaire:[],
      users:[],
      iduser:""  
    };
  },
   
computed:{
      filteredpostuser() {
    let postuser = this.posttest
    
    postuser = postuser.filter((item) => {
      return (item.userId == this.iduser)
      
    })
    
    return postuser;
      
  },
},
  
  methods: {

    
    async recupererUser() {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "bearer " + localStorage.getItem("token")
        },
        
      };

      const response = await fetch(
        "https://social-network-api.osc-fr1.scalingo.io/demo/user",
        options
      );

      const data = await response.json();
      this.users = data;
      this.iduser=data._id
console.log(response),
console.log(data)
      
    },
    modifIsdisplay(){
      
 if (this.isDisplay = true) {return this.isDisplay = false}
 else {return this.isDisplay =true}
    },
 
async modifUser() {

      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "bearer " + localStorage.getItem("token")
        },
        body: JSON.stringify({
          firstname: this.firstnameM,
          lastname: this.lastnameM,
          email:this.emailM,
           
          
        }),


        
      };

      const response = await fetch(
        "https://social-network-api.osc-fr1.scalingo.io/demo/user",
        options
      );

      const data = await response.json();
      this.users = data;
console.log(response),
console.log(data)
      
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







 },

beforeMount() {this.recupererUser()},
mounted() {this.recuperer()},

};
 

</script>

<style>
#mainContaineruser {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color:blue;
  margin-top: 60px;
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
