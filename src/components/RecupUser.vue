<template>
  <div id="mainContainer">
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

<button @click="modifUser">Modif user</button>    

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
      likes:0,
      commentaire:[],
      users:[],  
    };
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
console.log(response),
console.log(data)
      
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









 },

mounted() {this.recupererUser()},

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
