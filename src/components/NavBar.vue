<template>
  <div id="navBarContainer">
    <nav>
      <ul id="navBarLinks">
        <li id="quiSommesNous">Qui sommes nous ?</li>
        <li id="vol">
          <a href="https://www.kayak.fr/" target="_blank">Trouver un Vol</a>
        </li>
        <li id="hotel">
          <a href="https://www.booking.com" target="_blank"
            >Trouver un Hotel
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
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Montserrat:wght@300&family=Roboto:wght@100;500&family=Square+Peg&display=swap');


#navBarContainer {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  background-color: black;
  align-items: center;
  
  
}

a:hover {
  cursor: pointer;
  background-color: white;
  color: black;
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
