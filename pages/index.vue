<template>
  <div>
    <LoadingIcon></LoadingIcon>
    <div class="container-fluid" id="home-holder">
      <div class="row" id="home-company-text">
        <div class="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-6 offset-md-1">
          <h3>{{ content.slogan }}</h3>
          <h1>{{ content['company_name'] }}</h1>
        </div>
      </div>

      <div class="row" id="home-intro-text">
        <div id="home-intro-text-col" class="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-5 offset-md-1">
          <p>{{ content.introduction }}</p>
          <h4 onclick="homeNext()" id="link" class="mt-3">Lees verder →</h4>
        </div>
      </div>
    </div>

    <div id="home-footer"></div>

  </div>
</template>

<script>
import Footer from "~/components/Footer";
import ContentRight from "~/components/ContentRight";
import LargeImage from "~/components/LargeImage";
import QuotePage from "@/components/QuotePage";
import LoadingIcon from "@/components/LoadingIcon";
export default {
  head: {
    title: "Home - The Energy Boutique"
  },
  components: {LoadingIcon, QuotePage, LargeImage, ContentRight, Footer},
  async asyncData ({ $content }) {
    const content = await $content('home').fetch()
    return {
      content
    }
  },
  transition: {
    appear:true,
    enter(el, done){
      let tl = gsap.timeline()
      tl.set('.spinner-grow',{backgroundColor: '#FFD46F'})
      tl.to('#loader',{opacity:0, duration: 0.5}, 0.5)
      tl.to('#home-holder',{opacity: 1, duration: 0.5, marginTop: '10vh'},0.5)
      tl.to('#home-footer',{opacity:1 , bottom:0, duration: 0.5},0.5)
      tl.to('#home-company-text',{opacity:1 ,paddingTop: '12vh', duration: 0.5},1)
      tl.to('#home-intro-text',{opacity:1, duration: 0.5},1.5)
      tl.to('.menu-holder',{opacity:1, top: 0, duration: 0.5}, 1)
    }
  },
}
</script>


<style>

.spinner-grow{
  background-color: var(--light-yellow);
}

h1{
  font-size: 11vh;
}

body{
  background-color: var(--curry);
  overflow-x: hidden;
}

.menu-btn-holder{
  background-color: var(--timberwolf);
}

.menu-dash{
  fill: var(--brown);
}

#link:hover{
  text-decoration: underline;
  cursor: pointer;
}

#home-holder{
  margin: 0 5vh 5vh 5vh;
  width: auto;
  border-radius: 5vh;
  background-size: cover;
  background-image: url("/images/back_image.jpg");
  padding-bottom: 7vh;
  min-height: 85vh;
  position: relative;
  z-index: 100;
  opacity: 0;
}

#home-company-text{
  padding-top: 10vh;
  position: relative;
  z-index: 2;
  opacity: 0;
}

#home-intro-text{
  opacity: 0;
}

#home-intro-text-col{
  position: absolute;
  bottom: 8vh;
  border-left: 1.5vh solid white;
}

#home-intro-text-col p{
  font-size: 1.5rem;
}

#home-intro-text-col h4{
  font-size: 1.4rem;
}

#home-footer{
  position: fixed;
  z-index: 2;
  left: 0;
  width: 100%;
  height: 15vh;
  background-color: var(--timberwolf);
  opacity: 0;
  bottom: -15vh;
}

.menu-holder{
  opacity: 0;
  top: -10vh;
}

#menu-overlay{
  background-color: var(--curry);
}

#menu-overlay-contact{
  background-color: var(--timberwolf);
}

#menu-overlay-contact h4{
  color: var(--brown);
}

#menu-overlay-contact p{
  color: var(--brown);
}

.menu-btn-holder:hover{
  background-color: var(--silver);
}

@media only screen and (max-width: 576px) {

}

@media only screen and (max-width: 767px) {
  #home-holder{
    border-radius: 3vh;
  }

  #home-company-text{
    margin-left: 10px;
  }
  #home-intro-text{
    margin-left: 10px;
  }

  #home-intro-text-col p{
    font-size: 1rem;
  }

  #home-intro-text-col h4{
    font-size: 1rem;
  }
}

@media only screen and (max-width: 991px) {
  h1{
    font-size: 7vh;
  }
  h3{
    font-size: 3.5vh;
  }
}

@media only screen and (max-width: 1199px) {

}


</style>
