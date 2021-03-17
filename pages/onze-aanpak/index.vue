<template>
  <div>

    <LoadingIcon></LoadingIcon>

    <PageTitle :title="content['page_title']"></PageTitle>

    <section v-for="(section, index) in content.content" :key="index" :id="index">
      <div class="section-fix">
        <QuotePage v-if="section.template === 'page'" :quoteAuthor="section.author" :quoteText="section.quote"></QuotePage>
        <ContentRight v-if="section.template === 'content-right'" :content="section" :slide-index="index.toString()"></ContentRight>
        <ImageRight v-if="section.template === 'image-right'" :content="section" :slide-index="index.toString()"></ImageRight>

      </div>
    </section>

    <NextPage :text="'Contact'" v-if="footerLink" :footerLink="footerLink" :colors="['#DED9D3', '#524B38', '#FFD46F']"></NextPage>

    <Footer></Footer>

  </div>
</template>

<script>
import QuotePage from "@/components/QuotePage";
import LargeImage from "@/components/LargeImage";
import ContentRight from "@/components/ContentRight";
import Footer from "@/components/Footer";
import PageTitle from "@/components/PageTitle";
import LoadingIcon from "@/components/LoadingIcon";
import ImageRight from "@/components/ImageRight";

export default {
  components: {ImageRight, LoadingIcon, PageTitle, QuotePage, LargeImage, ContentRight, Footer},
  head: {
    title: "Onze aanpak - The Energy Boutique"
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
      footerLink: '../contact',
    }
  },
  async asyncData ({ $content }) {
    const content = await $content('onze-aanpak').fetch()
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
      tl.to('#footer',{opacity:1, bottom: 0, duration: 0.5}, 0.5)
      tl.to('.menu-holder',{opacity:1, marginTop: 0, duration: 0.5}, 0.5)
      tl.to('#page-title',{opacity:1, duration: 0.5}, 1)
      tl.to('#loader',{opacity: 0, duration: 0.5}, 0.5)
    }
  }
}
</script>

<style>

#next-page-outer{
  background-color: var(--brown);
}

.spinner-grow{
  background-color: var(--light-yellow);
}

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
  background-color: var(--silver);
}

.progress-bar{
  background-color: var(--brown);
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
  background-color: var(--silver);
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

h1 i{
  text-decoration-color: var(--light-yellow);
}

.quote-text:before{
  color: var(--light-yellow);
}

.quote-text:after{
  color: var(--light-yellow);
}

.arrow-white{
  opacity: 0;
}

.modal{
  background-color: var(--curry);
}

.modal .round-btn{
  background-color: var(--timberwolf);
}

.modal .arrow-white{
  opacity: 0;
}

.modal .btn-primary{
  background-color: var(--brown);
}

.modal .btn-primary:hover{
  background-color: var(--brown);
}


</style>
