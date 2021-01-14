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
      <div id="next-page-btn">
        <p class="m-0">Next Page</p>
        <div id="next-page-underline"></div>
        <svg id="next-page-arrow" width="26" height="31" viewBox="0 0 26 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="14.8276" y="0.171875" width="19" height="3" transform="rotate(90 14.8276 0.171875)" fill="white"/>
          <path d="M13.9856 30.8271C10.7904 23.3797 8.60525 19.6538 0.827688 16.172L13.3277 17.2993L25.8277 16.172C17.2083 20.5107 16.6519 24.336 13.9856 30.8271Z" fill="white"/>
        </svg>

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

.next-page{
  height: 50vh;
  margin-top: 40%;
}

#next-page-btn{
  margin: 0 auto;
  font-family: 'Lora', serif;
  font-size: 1rem;
  color: var(--brown);
  opacity: 0;
}

#next-page-underline{
  height: 1px;
  background-color: var(--yellow);
  width: 5px;
}

</style>
