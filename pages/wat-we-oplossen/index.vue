<template>
  <div>

    <section v-for="(section, index) in content.content" :key="index">
      <div class="section-fix">
        <QuotePage v-if="section.template === 'page'" :quoteAuthor="section.author" :quoteText="section.quote"></QuotePage>
        <ContentRight v-if="section.template === 'content-right'" :title="section.title" :content="section.content" :introduction="section.introduction"></ContentRight>
      </div>
    </section>


    <NextPage v-if="footerLink" :footerLink="footerLink"></NextPage>
    <Footer ></Footer>
  </div>

</template>

<script>
import QuotePage from "@/components/QuotePage";
import LargeImage from "@/components/LargeImage";
import ContentRight from "@/components/ContentRight";
import Footer from "@/components/Footer";
import NextPage from "@/components/NextPage";

export default {
  components: {NextPage, QuotePage, LargeImage, ContentRight, Footer},
  mounted() {
    document.addEventListener('DOMContentLoaded', (event) => {
      initGsap()
    })
  },
  data(){
    return{
      footerLink: '../onze-aanpak'
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

.footer{
  background-color: var(--indigo);
}

.footer p{
  color: var(--timberwolf);
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
  background-color: var(--timberwolf);
}

.menu-btn-holder{
  background-color: var(--indigo);
}

.menu-dash{
  fill: white;
}

.footer-nav-item rect{
  fill: var(--timberwolf)!important;
}

.footer-nav-item path{
  fill: var(--timberwolf)!important;
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


</style>
