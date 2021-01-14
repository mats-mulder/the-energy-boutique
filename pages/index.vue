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

    <section id="section-3" style="margin-bottom: 100vh">
      <div class="section-fix">
        <large-image></large-image>
      </div>
    </section>

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


</style>
