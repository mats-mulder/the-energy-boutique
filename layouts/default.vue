<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
export default {

}
</script>

<style>

body{
  overflow-x: hidden;
  max-width: 100vw!important;
}

:root {
  --morning: #89B0AE;
  --curry: #E3B23C;
  --oxford: #031D44;
  --indigo: #253E63;
  --timberwolf: #DED9D3;
  --silver: #B2AFA6;
  --light-yellow: #FFD46F;
  --brown: #524B38;
}

h1{
  font-family: 'Arapey', serif;
  font-size: 5rem;
  color: white;
  line-height: 100%;
}

h2{
  font-family: 'Arapey', serif;
  font-size: 6vh;
}

h3{
  font-family: 'Arapey', serif;
  font-size: 5vh;
  color: white;
  line-height: 100%;
}

h4{
  font-family: 'Lora', serif;
  font-weight: 600;
  color: white;
  font-size: 1.3rem;
}

h5{
  font-family: 'Lora', serif;
  font-weight: 600;
  color: white;
  font-size: 1.3rem
}

.extra-content-link{
  margin-left: 10px;
}

p{
  font-family: 'Lato', serif;
  color: white;
  font-size: 1.1rem;
}

.extra-content-link{
  font-family: Lora;
  font-weight: 700;
  color: white;
  font-size: 1.2rem;
}

.extra-content-link:hover{
  cursor: pointer;
  text-decoration: underline;
}

#close-btn{
  position: absolute;
  right: 20px;
  top: 20px;
  background-color: var(--timberwolf);
  border-radius: 5vh;
  transition: 200ms;
  height: 60px;
  width: 60px;
}

#close-btn:hover{
  transform: scale(0.9);
  cursor: pointer;
}

#close-btn img{
  position: absolute;
  width: 30px;
  margin-left: 15px;
  margin-top: 18px;
  transform: rotate(180deg);
}

.section-fix{
  margin-bottom: 25vh;
}

i{
  text-decoration: underline var(--curry);
  text-decoration-thickness: 0.5vh;
}

.page-text{
  opacity: 0;
}


@media only screen and (max-width: 576px) {
  h1{
    font-size: 1.6rem;
  }
  #menu-overlay-contact{
    display: none;
  }
  .menu-option{
    font-size: 2.5rem;
  }
  h4{
    font-size: 1.5rem;
  }
}

@media only screen and (max-width: 767px) {

}

@media only screen and (max-width: 991px) {
}

@media only screen and (max-width: 1199px) {

}

.modal-backdrop {
  background-color: transparent;
}

</style>
