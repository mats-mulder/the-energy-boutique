<template>

  <div class="container-fluid component-content-right">
    <div class="row">
      <div class="col-12 text-lg-center section-title" :class="{'small-image-title': content['small_image'] === true}">
        <div class="page-title-top" v-html="content.title.top"></div>
        <div class="page-title-bottom" v-html="content.title.bottom"></div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-lg-6 col-xl-5">
        <div class="fixed-image-holder" :class="{'small-image-holder': content['small_image'] === true}">
          <img class="fixed-image" :src="content.image">
        </div>
      </div>
      <div class="col-12 col-lg-6 col-xl-7 section-text" :class="{'small-image-text': content['small_image'] === true}">
        <h5 class="pb-3">{{ content.introduction }}</h5>
        <div v-if="content['small_image'] === false" class="mt-4" v-for="(item, sectionIndex) in content.content">
          <h4>{{ item.title }}</h4>
          <div :modalId="slideIndex + sectionIndex.toString() + '-modal'" :type="'content'" v-html="item['content-block']" :class="{'read-further-btn': item['extra_content_container'].active === true}"></div>
          <ExtraContentContainer v-if="item['extra_content_container'].active === true" :content="item['extra_content_container']" :modalId="slideIndex + sectionIndex.toString() + '-modal'" :type="'content'"></ExtraContentContainer>
        </div>
        <div v-if="content['small_image'] === true" class="mt-4" v-for="(item, sectionIndex) in content.content">
          <h4>{{ item.title }}</h4>
          <div :modalId="slideIndex + sectionIndex.toString() + '-modal'" :type="'content-small'" v-html="item['content-block']" :class="{'read-further-btn': item['extra_content_container'].active === true}"></div>
          <ExtraContentContainer v-if="item['extra_content_container'].active === true" :content="item['extra_content_container']" :modalId="slideIndex + sectionIndex.toString() + '-modal'" :type="'content-small'"></ExtraContentContainer>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
import ExtraContentContainer from "@/components/ExtraContentContainer";
export default {
  name: "ContentRight",
  components: {ExtraContentContainer},
  props:{
    content: Object,
    slideIndex: String,
  },
  mounted() {
    fixSectionTitle(['page-title-top', 'page-title-bottom'])
  },
  methods: {
    openeExtraContent: function (name){
      let model = document.getElementById(name)
      let tl = gsap.timeline()
      tl.set(model,{opacity:0})
      tl.set(['.extra-content-title'],{opacity:'0', marginTop: '0'})
      tl.set(['.column-content'],{opacity:'0'})
      tl.to('.fixed-image-holder',{marginLeft:'-100%', duration: 0.5},0)
      tl.to('.section-text',{left:'100%', duration: 0.5},0)
      tl.to('.page-title-top',{marginLeft:'-150%', opacity: 0, duration: 0.5},0)
      tl.to('.page-title-bottom',{marginLeft:'150%', opacity: 0, duration: 0.5},0)
      tl.to(model,{opacity:1},0.4)
      tl.to('.extra-content-title',{opacity:1, marginTop: '5vh'},0.5)
      tl.to('.column-content',{opacity:1},0.8)
      $('#'+name).modal('toggle')
    }
  }
}
</script>

<style scoped>


.container-fluid{
  overflow-x: hidden;
}

.page-title-top{
  margin-bottom: 0;
}

.page-title-bottom{
  margin-left: 15%;
}

.fixed-image-holder{
  height: 80vh;
  margin-left: 5rem;
  overflow: hidden;
  border-radius: 5vh;
}

.fixed-image{
  min-width: 150%;
  margin-left: 0;
  object-fit: cover;
  bottom: 0;
  height: 100%;
}

.section-title{
  position: absolute;
  z-index: 100;
  margin-top: 3rem;
}

.section-text{
  margin-top: 16rem;
  padding-left: 5rem;
  padding-right: 5rem;
}

.small-image-holder{
  height: 55vh;
  margin-top: 5vh;
}

.small-image-title{
  position: relative;
  margin-left: -10vw;
}

.small-image-text{
  margin-top: 5vh;
}

@media only screen and (max-width: 576px) {

}

@media only screen and (max-width: 767px) {

}

@media only screen and (max-width: 991px) {
  .section-title{
    position: relative;
  }
  .section-text{
    margin-top: 5vh;
    padding-left: 15px;
    padding-right: 15px;
  }
  .test-image-holder{
    margin-right: 5vh;
  }
  .fixed-image-holder{
    height: 40vh;
    margin-left: 0;
    border-radius: 0;
    margin-top: 5vh;
  }

  .fixed-image{
    width: 100%;
    object-fit: cover;
  }
  .component-content-right{
    opacity: 1;
  }
  .section-title{
    margin-top: 0;
  }
}

.testiets p{
  display: inline-block;
}

@media only screen and (max-width: 1199px) {

}


</style>
