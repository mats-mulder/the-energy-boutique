<template>
  <div>

    <transition-group name="fade">
      <section v-if="show"  v-for="(section, index) in content.content" :key="index" :id="index">
        <div class="section-fix">
          <QuotePage v-if="section.template === 'page'" :quoteAuthor="section.author" :quoteText="section.quote"></QuotePage>
          <ContentRight v-if="section.template === 'content-right'" :content="section"></ContentRight>
        </div>
      </section>
    </transition-group>


    <NextPage v-if="footerLink" :footerLink="footerLink"></NextPage>


    <Footer></Footer>



  </div>

</template>

<script>
import QuotePage from "@/components/QuotePage";
import LargeImage from "@/components/LargeImage";
import ContentRight from "@/components/ContentRight";
import Footer from "@/components/Footer";
import NextPage from "@/components/NextPage";
import ExtraContentContainer from "@/components/ExtraContentContainer";

export default {
  components: {ExtraContentContainer, NextPage, QuotePage, LargeImage, ContentRight, Footer},
  mounted() {
    if(checkViewport()){
      newGsap()
    }
  },
  data(){
    return{
      footerLink: '../onze-aanpak',
      show: true,
    }
  },
  async asyncData ({ $content }) {
    const content = await $content('wat-we-oplossen').fetch()
    return {
      content
    }
  }
}
</script>

<style>

body{
  background-color: var(--oxford);
}

.modal{
  padding: 0!important;
}


.modal-extra-content{
  width: 100%;
}

.footer{
  background-color: var(--indigo);
}

.footer p{
  color: white;
}

.social-logo{
  background-color: var(--oxford);
}

.social-logo:hover{
  background-color: var(--curry);
}

.progress{
  background-color: var(--oxford);
}

.progress-bar{
  background-color: white;
}

.menu-btn-holder{
  background-color: var(--indigo);
}

.menu-dash{
  fill: white;
}

.footer-nav-item rect{
  fill: white!important;
}

.footer-nav-item path{
  fill: white!important;
}

.menu-btn-holder:hover{
  background-color: var(--curry);

}

#menu-overlay{
  background-color: var(--oxford);
}

#menu-overlay-contact{
  background-color: var(--indigo);
}

#menu-overlay-contact h4{
  color: var(--timberwolf);
}

#menu-overlay-contact p{
  color: var(--timberwolf);
}

.section-fix{
  opacity: 1;
}

@media only screen and (max-width: 576px) {

}

@media only screen and (max-width: 767px) {

}

@media only screen and (max-width: 991px) {
  .section-fix{
    opacity: 1;
  }
}

@media only screen and (max-width: 1199px) {

}



</style>
