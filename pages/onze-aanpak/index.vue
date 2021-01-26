<template>
  <div id="page-holder">
    <section id="section-1">
      <div class="section-fix">
        <ContentRight></ContentRight>
      </div>
    </section>

    <NextPage v-if="footerLink" :footerLink="footerLink"></NextPage>
    <Footer></Footer>

  </div>
</template>

<script>
import QuotePage from "@/components/QuotePage";
import LargeImage from "@/components/LargeImage";
import ContentRight from "@/components/ContentRight";
import Footer from "@/components/Footer";

export default {
  components: {QuotePage, LargeImage, ContentRight, Footer},
  mounted() {
    document.addEventListener('DOMContentLoaded', (event) => {
      initGsap()
    })
  },
  data(){
    return{
      footerLink: '../contact'
    }
  },
  transition: {
    leave(el, done) {
      let timeline = gsap.timeline({

      });
      timeline.to('#page-holder',{opacity:0})
    }
  }
}
</script>

<style>

body{
  background-color: var(--curry);
}

.footer{
  background-color: var(--timberwolf);
}

.footer p{
  color: var(--brown);
}

.social-logo{
  background-color: var(--silver);
}

.social-logo:hover{
  background-color: var(--brown);
}

.progress{
  background-color: var(--brown);
}

.progress-bar{
  background-color: var(--silver);
}

.menu-btn-holder{
  background-color: var(--timberwolf);
}

.menu-dash{
  fill: var(--brown);
}

.footer-nav-item rect{
  fill: var(--brown)!important;
}

.footer-nav-item path{
  fill: var(--brown)!important;
}

.menu-btn-holder:hover{
  background-color: var(--brown);
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


</style>
