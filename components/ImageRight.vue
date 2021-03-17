<template>
  <div class="container-fluid component-image-right">
    <div class="row">
      <div class="col-12 section-title">
        <div class="page-title-top" v-html="content.title.top"></div>
        <div class="page-title-bottom" v-html="content.title.bottom"></div>
      </div>
    </div>

    <div class="row">

      <div class="col-12 col-lg-3 section-text">

        <h5 class="pb-3">{{ content.introduction }}</h5>

        <div class="mt-4" v-for="(item, sectionIndex) in content.content">
          <h4>{{ item.title }}</h4>
          <div :modalId="slideIndex + sectionIndex.toString() + '-modal'" :type="'gallery'" v-html="item['content']" :class="{'read-further-btn': item['extra_content_container'].active === true}"></div>
          <ExtraContentContainer v-if="item['extra_content_container'].active === true" :content="item['extra_content_container']" :type="'gallery'" :modalId="slideIndex + sectionIndex.toString() + '-modal'"></ExtraContentContainer>
        </div>
      </div>
      <div class="col-12 col-lg-8 carousel-holder">
        <div :id="slideIndex + 'carousel'" class="carousel slide" data-ride="carousel">
          <ol v-if="content.gallery.length > 1" class="carousel-indicators">
            <li data-target="#carousel" v-for="(item, index) in content.gallery" :data-slide-to="index" :class="{'active': index === 0}"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item" v-for="(item, index) in content.gallery" :class="{'active': index === 0}">
              <img class="d-block w-100" :src="item">
            </div>
          </div>
          <a v-if="content.gallery.length > 1" class="carousel-control-prev" :href="'#'+slideIndex + 'carousel'" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a v-if="content.gallery.length > 1" class="carousel-control-next" :href="'#'+slideIndex + 'carousel'" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import ExtraContentContainer from "@/components/ExtraContentContainer";

export default {
  name: "ImageRight",
  components: {ExtraContentContainer},
  props:{
    content: Object,
    slideIndex: String,
  },
  mounted() {
    fixSectionTitle(['page-title-top', 'page-title-bottom'])

  }
}
</script>

<style scoped>

.page-title-top{
  margin-left: 15%;
}

.page-title-bottom{
  margin-left: 5%;
}

.section-title{
  position: absolute;
  z-index: 100;
  margin-top: 3rem;
  margin-left: 5vw;
}

.section-text{
  margin-top: 17rem;
  margin-left: 5vw;

}

.carousel-inner{
  max-height: 80vh;
  overflow: hidden;
  border-radius: 5vh;
}

.carousel-inner img{
  min-height: 80vh;
  object-fit: cover;
}

.carousel-holder{
  padding-left: 3vw;
}

.title-spacer{
  opacity: 0;
}


@media only screen and (max-width: 576px) {

}

@media only screen and (max-width: 767px) {

}

@media only screen and (max-width: 991px) {
  .carousel-holder{
    padding-left: 0;
    padding-right: 0;
  }
  .carousel-inner{
    border-radius: 0;
  }
}

@media only screen and (max-width: 1199px) {

}


</style>
