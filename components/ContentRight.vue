<template>
  <div class="row">

    <div class="fixed-image-holder">
      <img class="fixed-image" src="/images/back_image.jpg">
    </div>

    <div class="col-12 col-md-6" style="padding-top: 50vh; padding-left: 75px">
      <div style="margin-left: -10vw">
        <h1 class="page-title-top" v-html="title.top"></h1>
        <h1 class="page-title-bottom" v-html="title.bottom"></h1>
      </div>
      <div class="mt-5 page-text">
        <h5>{{ introduction }}</h5>
        <div class="mt-4" v-for="item in content">
          <h4>{{ item.title }}</h4>
          <p>{{ item['content-block'] }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentRight",
  props:{
    title: Object,
    introduction: String,
    content: Array
  },
  mounted() {
    let top = document.getElementsByClassName('page-title-top')[0].getElementsByTagName('em')[0]
    let new_top = document.createElement('i');
    new_top.innerHTML = top.innerHTML;
    top.parentNode.replaceChild(new_top, top);
    let bottom = document.getElementsByClassName('page-title-bottom')[0].getElementsByTagName('em')[0]
    let new_bottom = document.createElement('i');
    new_bottom.innerHTML = bottom.innerHTML;
    bottom.parentNode.replaceChild(new_bottom, bottom);
  }
}
</script>

<style scoped>

.page-title-top{
  margin-bottom: 0;
}

.page-title-bottom{
  margin-top: 0;
  padding-left: 50px;
}


.fixed-image-holder{
  height: 80vh;
  overflow: hidden;
  border-radius: 50px;
  width: 45%;
  margin-top: 6vh;
}

.fixed-image{
  min-height: 80vh;
  width: 75vw;
  object-fit: cover;
}



</style>
