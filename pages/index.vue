<template>
  <div>

    <section id="section-1">
      <div class="section-fix">
        <QuotePage></QuotePage>
      </div>
    </section>

    <section id="section-2">
      <div class="section-fix">
        <ContentRight></ContentRight>
      </div>
    </section>

    <section id="section-3">
      <div class="section-fix">
        <large-image></large-image>
      </div>
    </section>

    <div class="next-page" align="center">
      <div id="next-page-outer">
        <div id="next-page-inner">
          <p class="m-0">Next</p>
          <img src="/assets/arrow_down.png">
        </div>
      </div>
    </div>
    <Footer></Footer>

  </div>

</template>

<script>
import Footer from "~/components/Footer";
import ContentRight from "~/components/ContentRight";
import LargeImage from "~/components/LargeImage";
import QuotePage from "@/components/QuotePage";
export default {
  components: {QuotePage, LargeImage, ContentRight, Footer},
  mounted() {
    document.addEventListener('DOMContentLoaded', (event) => {
      initGsap()
    })
  }
}
</script>


<style>

body{
  background-color: var(--oxford);
}



</style>
