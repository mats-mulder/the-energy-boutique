<template>
  <div>

    <LoadingIcon></LoadingIcon>

    <page-title :title="content['page_title']"></page-title>

    <transition-group name="fade">
      <section v-if="show"  v-for="(section, index) in content.content" :key="index" :id="index">
        <div class="section-fix">
          <QuotePage v-if="section.template === 'page'" :quoteAuthor="section.author" :quoteText="section.quote"></QuotePage>
          <ContentRight v-if="section.template === 'content-right'" :content="section" :slide-index="index.toString()"></ContentRight>
          <ImageRight v-if="section.template === 'image-right'" :content="section" :slide-index="index.toString()"></ImageRight>

        </div>
      </section>
    </transition-group>

    <NextPage :text="'Onze Aanpak'" v-if="footerLink" :footerLink="footerLink" :colors="['#E3B23C', '#FFD46F', '#E3B23C']"></NextPage>

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
import PageTitle from "@/components/PageTitle";
import LoadingIcon from "@/components/LoadingIcon";

export default {
  components: {LoadingIcon, PageTitle, ExtraContentContainer, NextPage, QuotePage, LargeImage, ContentRight, Footer},
  head: {
    title: "Wat we oplossen - The Energy Boutique"
  },
  mounted() {
    addExtraBtn()
    newGsap()
    /*
    if(checkViewport()){
      newGsap()
    }

     */
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
  },
  transition: {
    appear: true,
    beforeEnter(el) {
      gsap.set('#footer',{opacity: 0, bottom:'-10vh'})
      gsap.set('.menu-holder', {opacity:0, marginTop: '-10vh'})
    },
    enter(el, done) {
      let tl = gsap.timeline()
      tl.to('#footer',{opacity:1, bottom: 0, duration: 0.5}, 0.4)
      tl.to('.menu-holder',{opacity:1, marginTop: 0, duration: 0.5}, 0.4)
      tl.to('#loader',{opacity: 0, duration: 0.5}, 0.5)
      tl.to('#page-title',{opacity:1, duration: 0.5}, 1)
    }
  }
}
</script>

<style>

#next-page-outer{
  background-color: var(--indigo);
}

.spinner-grow{
  background-color: var(--indigo);
}

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

#close-btn{
  background-color: var(--indigo);
}

.arrow-brown{
  opacity: 0;
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
  color: white;
}

#menu-overlay-contact p{
  color: white;
}

.section-fix{
  opacity: 1;
}

.quote-text:before{
  color: var(--curry);
}

.quote-text:after{
  color: var(--curry);
}

.vertical-divider{
  border-right: 1px solid white;
}

.modal{
  background-color: var(--oxford);
}

.modal .round-btn{
  background-color: var(--indigo);
}

.modal .arrow-brown{
  opacity: 0;
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
