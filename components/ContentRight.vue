<template>

  <div class="container-fluid component-content-right">
    <div class="row">
      <div class="col-12 text-center section-title">
        <div class="page-title-top" v-html="content.title.top"></div>
        <div class="page-title-bottom" v-html="content.title.bottom"></div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-lg-6 col-xl-5 p-0">
        <div class="fixed-image-holder">
          <img class="img-fluid fixed-image" :src="content.image">
        </div>
      </div>
      <div class="col-12 col-lg-6 col-xl-7 section-text">

        <h5>{{ content.introduction }}</h5>

        <div class="mt-5" v-for="item in content.content">
          <h4>{{ item.title }}</h4>
          <p>{{item['content-block']}}<span style="margin-left: 10px" v-if="item['extra_content_container'].active === true" @click="openExtraContent(item['extra_content_container'].title + '-modal')" class="extra-content-link" >Meer Informatie →</span></p>
          <ExtraContentContainer v-if="item['extra_content_container'].active === true" :content="item['extra_content_container']"></ExtraContentContainer>
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
    content: Object
  },
  mounted() {
    fixSectionTitle(['page-title-top', 'page-title-bottom'])
  },
  methods: {
    openExtraContent: function (name){
      console.log(name)
        let model = document.getElementById(name)
        let tl = gsap.timeline()
        tl.set(model,{marginLeft:'100vw'})
        tl.set('.header-image',{opacity:'0', marginTop:'-5vh'})
        tl.set(['.column-content','.extra-content-title'],{opacity:'0', paddingTop: '-2vh'})
        tl.to(model,{marginLeft:'0'},0)
        tl.to('.header-image',{opacity: 1, marginTop: '0'},0.3)
        tl.to('.extra-content-title',{opacity:1, paddingTop:0},0.4)
        tl.to('.column-content',{opacity:1, paddingTop:0},0.5)
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
  margin-left: 5vh;
  overflow: hidden;
  border-radius: 5vh;
}

.fixed-image{
  min-width: 150%;
  margin-left: 0;
  object-fit: cover;
  bottom: 0;
}

.section-title{
  position: absolute;
  z-index: 100;
  margin-top: 30vh;
}

.section-text{
  margin-top: 55vh;
  padding-left: 10vh;
  padding-right: 10vh;
}



@media only screen and (max-width: 576px) {
  h1{
    font-size: 5vh;
  }
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
}

@media only screen and (max-width: 1199px) {

}


</style>
