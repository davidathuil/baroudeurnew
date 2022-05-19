<template>
  <head>
    <link href="/your-path-to-fontawesome/css/all.css" rel="stylesheet" />
  </head>

  <body>
    <!-- TITRE ET BACKGROUND -->
    <div id="title">Le Petit Baroudeur</div>
    <div id="navBarContainer">
      <nav>
        <ul id="navBarLinks">
          <li id="nomLogo"> <img src="../assets/nomLogo.jpg"></li>
          <li id="quiSommesNous">Qui sommes nous ?</li>
          <li id="vol">
            <a href="https://www.kayak.fr/" target="_blank">Trouver un Vol</a>
          </li>
          <li id="hotel">
            <a href="https://www.booking.com" target="_blank">
              <font-awesome-icon icon="fas fa-bed" />Trouver un Hotel
            </a>
          </li>

          <li id="meteo">
            Vérifiez la météo avant de réserver !
            <form @submit.prevent="Meteoreche">
              <input
                id="destinationMeteo"
                type="text"
                v-model="Recherche"
                placeholder="Votre destination"
              />
              <input id="validation" @click="Meteoreche" type="submit" />
            </form>
          </li>
          <li v-if="results !== null">
            <p>{{ results }} °C</p>
            <img :src="'http://openweathermap.org/img/w/' + icon + '.png'" />
          </li>
        </ul>
      </nav>
    </div>
  </body>
</template>

<script>
export default {
  data() {
    return {
      Recherche: "",
      results: null,
      icon: [],
      Coordon: {
        lat: null,
        lon: null,
      },
    };
  },

  /* Methodes */
  methods: {
    async Meteoreche() {
      //   +this.Recherche
      let response = await fetch(
        "http://api.openweathermap.org/geo/1.0/direct?q=" +
          this.Recherche +
          "&appid=9f5d0a8ada32be8e3a27f796a520e7fd"
      );

      let donnees = await response.json();
      console.log(response);
      console.log(donnees);
      this.Coordon.lat = donnees[0].lat;
      this.Coordon.lon = donnees[0].lon;
      let response1 = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?lat=" +
          this.Coordon.lat +
          "&lon=" +
          this.Coordon.lon +
          "&units=metric&appid=9f5d0a8ada32be8e3a27f796a520e7fd"
      );
      console.log(response1);
      let donnees1 = await response1.json();
      console.log(donnees1);
      this.results = donnees1.main.temp;
      this.icon = donnees1.weather[0].icon;
      console.log(this.results);
      console.log(this.icon);
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Montserrat:wght@300&family=Passion+One&family=Roboto:wght@100;500&family=Square+Peg&display=swap");

#title {
  
  background-image: url(../assets/bgTitle2.jpg);
  background-size: cover;
  padding: 2px;
  font-size: 5rem;
   font-family: "Montserrat", sans-serif;
  font-family: "Roboto", sans-serif;
  font-family: "Square Peg", cursive;
  font-size: 210px;
  color: black;
  text-shadow: white 1px 0 10px;
  width: 100vw;
  height: 70vh;
   min-width: 100%;
 min-height: 100%;
  top: 0;
 left: 0;
}

#navBarContainer {
  box-sizing: border-box;
  background-color: black;
  align-items: center;
  margin-top: -16px;
  width: 100vw;
}

#navBarLinks {
  display: flex;
  justify-content: space-between;
  padding: 25px;
  align-items: center;
}

a:hover {
  cursor: pointer;
  background-color: white;
  color: black;
  border-right: white;
}

li,
a {
  font-family: "Montserrat", sans-serif;
  font-weight: 1000;
  font-size: 16px;
  text-decoration: none;
  color: white;
  list-style: none;
}

li {
  padding-right: 3rem;
  display: inline-block;
}
</style>
