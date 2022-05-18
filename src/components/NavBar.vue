<template>
<head>
  <link href="/your-path-to-fontawesome/css/all.css" rel="stylesheet">
</head>

<body>
  <!-- TITRE ET BACKGROUND -->
  <div id="title">
    Le Petit Baroudeur
  </div>
  <div id="navBarContainer">
    <nav>
      <ul id="navBarLinks">
        <li id="quiSommesNous">Qui sommes nous ?</li>
        <li id="vol">
          <a href="https://www.kayak.fr/" target="_blank">Trouver un Vol</a>
        </li>
        <li id="hotel">
          <a href="https://www.booking.com" target="_blank"
            > <font-awesome-icon icon="fas fa-bed" />Trouver un Hotel
          </a>
        </li>
        
        <li id="meteo">
          Vérifiez la météo avant de réserver !  
           <form @submit.prevent="Meteoreche" >
          <input
            id="destinationMeteo"
            type="text"
            v-model="Recherche"
            placeholder="Votre destination"
          />
          <input id="validation" type="submit"/> 
          </form>
        </li>
        
 
        
          <li v-for="result in results" :key="result.dt"> 
        
            <p>Temp {{result.main.temp}}</p>
           
            <!-- <p>Vitesse du vent {{result.wind.speed}} </p>
            <p>Description {{result.weather[0].description}} </p> -->
           
            <img :src="'http://openweathermap.org/img/w/'+result.weather[0].icon+'.png'"/>
          </li>
              
    




        
      </ul>
    </nav>
  </div>
</body>
</template>

<script>
export default{

data() {
    return {
      Recherche:"",
      results: [],
        Coordon:{
          lat: null,
          lon: null
      }

    };
  },


  /* Methodes */
  methods: { 

 async  Meteoreche() {
 
    //   +this.Recherche 
      let response = await fetch("http://api.openweathermap.org/geo/1.0/direct?q="+this.Recherche+"&appid=9f5d0a8ada32be8e3a27f796a520e7fd");
      
      let donnees = await response.json();
      console.log(response);
      console.log(donnees);
      this.Coordon.lat = donnees[0].lat
      this.Coordon.lon =donnees[0].lon;
       let response1 = await fetch("https://api.openweathermap.org/data/2.5/weather?lat="+this.Coordon.lat+"&lon="+this.Coordon.lon+"&units=metric&appid=9f5d0a8ada32be8e3a27f796a520e7fd");
      console.log(response1);
      let donnees1 = await response1.json();
      console.log(response1);
      this.results = donnees1.list;
 },
  }
</script>

<style scoped>


@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Montserrat:wght@300&family=Passion+One&family=Roboto:wght@100;500&family=Square+Peg&display=swap');

#title {
 font-family: "Montserrat", sans-serif;
 background-image: url(../assets/bgTitle.jpg); 
 background-size: cover;
 padding: 2px;
 font-size: 5rem;
 color: WHITE;
 width: 100VW;
 height: 70VH;
}

#navBarContainer {
  box-sizing: border-box;
    background-color: black;
    align-items: center;
    margin-top: -16px;
    WIDTH: 100vw;
  
}

#navBarLinks {
  
    display: flex;
    justify-content: space-between;
    padding: 25px
}



a:hover {
  cursor: pointer;
  background-color: white;
  color: black;
  border-right: white;
}

li, a {
 font-family: "Montserrat", sans-serif;
 font-weight: 1000;
 font-size: 16px;
 text-decoration:none;
 color: white;
 list-style: none;
}

li {
  
  padding-right: 3rem;
  display: inline-block;
}
</style>
