<template>
  <div>
    <div class="menu-holder">
      <div onclick="openMenu()" class="menu-btn-holder">
        <svg  class="menu-btn" width="30" height="20" viewBox="0 0 25 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect class="menu-dash" x="5.44434" width="36.5556" height="2.33333" rx="1.16667" fill="white"/>
          <rect class="menu-dash" x="0.777832" y="9.33331" width="41.2222" height="2.33333" rx="1.16667" fill="white"/>
          <rect class="menu-dash" x="15.5557" y="18.6667" width="26.4444" height="2.33333" rx="1.16667" fill="white"/>
        </svg>
      </div>
      <div id="menu-overlay">
        <div id="close-btn" onclick="closeMenu()">
          <svg width="31" height="25" viewBox="0 0 31 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="11" width="19" height="3" fill="#524B38"/>
            <path d="M30.6553 11.842C23.2079 15.0373 19.4819 17.2224 16.0001 24.9999L17.1274 12.5L16.0001 -5.01935e-05C20.3389 8.61932 24.1641 9.17575 30.6553 11.842Z" fill="#524B38"/>
          </svg>
        </div>
        <div class="container" style="padding-top: 15vh">
          <div class="row">
            <div class="col-12"id="menu-language-choice">
              <h5><span id="language-nl" class="current-language language-choice">NL</span> / <span class="language-choice" id="language-eng">ENG</span></h5>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-12">
              <p onclick="window.location = '../'" class="menu-option current-page">Introductie</p>
              <p onclick="window.location = '../wat-we-oplossen'" class="menu-option">Wat we oplossen</p>
              <p onclick="window.location = '../onze-aanpak'" class="menu-option">Onze aanpak</p>
              <p onclick="window.location = '../contact'" class="menu-option">Contact</p>
            </div>
          </div>
        </div>
        <div class="container-fluid p-0" id="menu-overlay-contact">
          <div class="container">
          <div class="row pt-5 pb-3">
            <div class="col-10">
              <h4>The Energy Boutique</h4>
            </div>
          </div>
          <div class="row pb-5">
            <div class="col-3 vertical-divider">
              <p>Helen Essers</p>
              <p>info@theenergyboutique.nl</p>
              <p>06 242 049 13</p>
            </div>
            <div class="col-3 vertical-divider">
              <p>Nirwana flat</p>
              <p>Benoordenhoutseweg 227D</p>
              <p>2597 BE Den Haag</p>
            </div>
            <div class="col-3">
              <p>KVK: 74508776</p>
              <p>BTW: NL002155844B96</p>
              <p>Privacy Verklaring</p>
            </div>
          </div>
        </div>
        </div>

      </div>
    </div>


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
}

:root {
  --curry: #DCAC00;
  --oxford: #031D44;
  --indigo: #253E63;
  --timberwolf: #DED9D3;
  --silver: #BBB7AB;
  --brown: #524B38;
}

h1{
  font-family: 'Arapey', serif;
  font-size: 5.5rem;
  color: white;
}

h4{
  font-family: 'Lora', serif;
  font-weight: bold;
  color: white;
  font-size: 1.2rem;
}

h5{
  font-family: 'Lora', serif;
  font-weight: bold;
  color: white;
  font-size: 1.1rem;
}

p{
  font-family: 'Lora', serif;
  color: white;
}


.menu-holder{
  position: fixed;
  width: 100%;
  z-index: 500;
}

.menu-btn-holder{
  position: absolute;
  right: 20px;
  top: 20px;
  border-radius: 500px;
  height: 60px;
  width: 60px;
  transition-duration: 200ms;
}

.menu-btn-holder:hover{
  transform: scale(0.9);
  cursor: pointer;
}

.menu-btn{
  margin-top: 38%;
  margin-left: 18%;
}

#menu-overlay{
  height: 100vh;
  z-index: 450;
  display: none;
  margin-left: 100vw;
  width: 100%;
  position: fixed;
}

.menu-option{
  font-family: 'Arapey', serif;
  font-size: 8vh;
  line-height: 120%;
  transition: 250ms;
  opacity: 0;
  margin-left: -40px;
}

.menu-option:hover{
  padding-left: 20px;
  cursor: pointer;
}

#menu-overlay-contact{
  position: fixed;
  bottom: 0;
}

#menu-overlay-contact h4{
   font-size: 2.5vh;
}

#menu-overlay-contact p{
  margin: 0;
}

.vertical-divider{
  border-right: 1px solid var(--brown);
  margin-right: 50px;
}

.language-choice{
  font-weight: normal;
}

.language-choice:hover{
  cursor: pointer;
  text-decoration: underline;
}

.current-page{
  font-style: italic;
}

.current-language{
  font-weight: bold;
}

#close-btn{
  position: absolute;
  right: 20px;
  top: 20px;
  background-color: var(--timberwolf);
  padding: 1.5vh;
  border-radius: 5vh;
  transition: 200ms;
  height: 60px;
  width: 60px;
}

#close-btn:hover{
  transform: scale(0.9);
  cursor: pointer;
}

.section-fix{
  min-height: 100vh;
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  padding: 0;
  opacity: 0;
}

i{
  text-decoration: underline var(--curry);
  text-decoration-thickness: 7px;
}

.page-text{
  opacity: 0;
}



</style>
