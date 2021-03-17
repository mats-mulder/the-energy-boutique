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

    <Footer></Footer>

  </div>
</template>

<script>
import LoadingIcon from "@/components/LoadingIcon";
import PageTitle from "@/components/PageTitle";
import ExtraContentContainer from "@/components/ExtraContentContainer";
import NextPage from "@/components/NextPage";
import QuotePage from "@/components/QuotePage";
import LargeImage from "@/components/LargeImage";
import ContentRight from "@/components/ContentRight";
import Footer from "@/components/Footer";

export default {
  components: {LoadingIcon, PageTitle, ExtraContentContainer, NextPage, QuotePage, LargeImage, ContentRight, Footer},
  head: {
    title: "Contact - The Energy Boutique"
  },
  mounted() {
    addExtraBtn()
    newGsap()
  },
  data(){
    return{
      footerLink: '../contact',
    }
  },
  async asyncData ({ $content }) {
    const content = await $content('contact').fetch()
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

.spinner-grow{
  background-color: var(--brown);
}

p{
  color: var(--brown);
}

h1{
  color: var(--brown);
}

h4{
  color: var(--brown)
}

h5{
  color: var(--brown);
}

body{
  background-color: var(--timberwolf);
}

.footer{
  background-color: var(--silver);
}

.footer p{
  color: var(--brown);
}

#close-btn{
  background-color: var(--silver);
}

.social-logo{
  background-color: var(--brown);
}

.social-logo:hover{
  background-color: var(--yellow);
}

.progress{
  background-color: var(--timberwolf);
}

.progress-bar{
  background-color: var(--brown);
}

.menu-btn-holder{
  background-color: var(--brown);
}

.menu-dash{
  fill: white;
}

.quote-text:before{
  color: var(--curry);
}

.quote-text:after{
  color: var(--curry);
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
  background-color: var(--timberwolf);
}

#menu-overlay p{
  color: var(--brown);
}

#menu-overlay h5{
  color: var(--brown);
}

#menu-overlay-contact{
  background-color: var(--silver);
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

.vertical-divider{
  border-right: 1px solid white;
}

.modal{
  background-color: var(--timberwolf);
}

.modal .round-btn{
  background-color: var(--silver);
}

.modal .arrow-brown{
  opacity: 0;
}

.modal .btn-primary{
  color: var(--brown);
  background-color: var(--curry);
}

.modal .quote-container h4{
  color: white;
}

.modal h2{
  color: var(--brown);
}

.extra-content-link{
  color: var(--brown);
}

</style>
