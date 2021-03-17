<template>
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
        <img class="img-fluid arrow-white" src="/assets/large_arrow_left_white.png">
        <img class="img-fluid arrow-brown" src="/assets/large_arrow_left.png">
      </div>
      <div class="container" style="padding-top: 15vh">
        <div class="row">
          <div class="col-12"id="menu-language-choice">
            <h5><span id="language-nl" class="current-language language-choice">NL</span> / <span class="language-choice" id="language-eng">ENG</span></h5>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-12">
            <p :class="{'current-page':currentIndex === 0}" onclick="menuTransition(['#E3B23C','#FFD46F'], '../')" class="menu-option">{{ content['page_titles'][0]['title'] }}</p>
            <p :class="{'current-page':currentIndex === 1}" onclick="menuTransition(['#031D44','#253E63'],'../wat-we-oplossen')" class="menu-option">Wat we oplossen</p>
            <p :class="{'current-page':currentIndex === 2}" onclick="menuTransition(['#E3B23C', '#FFD46F'],'../onze-aanpak')" class="menu-option">Onze aanpak</p>
            <p :class="{'current-page':currentIndex === 3}" onclick="menuTransition(['#DED9D3','#524B38'],'../contact')" class="menu-option">Contact</p>
          </div>
        </div>
      </div>
      <div class="container-fluid" id="menu-overlay-contact">
        <div class="container">
          <div class="row pt-5 pb-3">
            <div class="col-10">
              <h4>The Energy Boutique</h4>
            </div>
          </div>
          <div class="row pb-5">
            <div class="col-12 col-md-4 col-lg-3 vertical-divider">
              <p>Helen Essers</p>
              <p>info@theenergyboutique.nl</p>
              <p>06 242 049 13</p>
            </div>
            <div class="col-12 col-md-4 col-lg-3 mt-3 mt-md-0 vertical-divider">
              <p>Nirwana flat</p>
              <p>Benoordenhoutseweg 227D</p>
              <p>2597 BE Den Haag</p>
            </div>
            <div class="col-12 col-md-4 col-lg-3 mt-3 mt-md-0">
              <p>KVK: 74508776</p>
              <p>BTW: NL002155844B96</p>
              <p>Privacy Verklaring</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  props:{
    currentIndex: Number,
  },
  async asyncData ({ $content }) {
    const content = await $content('menu').fetch()
    return {
      content
    }
  },
}
</script>

<style scoped>

.menu-holder{
  position: fixed;
  width: 100%;
  z-index: 201;
  top: 0;
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
  height: 100%;
  z-index: 450;
  display: none;
  margin-left: 100vw;
  width: 100%;
  position: fixed;
}

.menu-option{
  font-family: 'Arapey', serif;
  font-size: 5rem;
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
  font-size: 1.8rem;
}

#menu-overlay-contact p{
  margin: 0;
}

.vertical-divider{
  border-right: 1px solid var(--brown);
  padding-right: 25px;
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


</style>
