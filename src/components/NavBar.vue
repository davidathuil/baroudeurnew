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
          <input
            id="destinationMeteo"
            type="text"
            placeholder="Votre destination"
          />
        </li>
        <li></li>
      </ul>
    </nav>
  </div>
</body>
</template>

<script>

export default {};
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
