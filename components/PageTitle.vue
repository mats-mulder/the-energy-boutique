<template>

  <div class="container-fluid component-page-title">
    <div class="row" id="page-title">
      <div class="col-12 text-center">
        <h1>{{ title }}</h1>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "PageTitle",
  props:{
    title: String,
  }
}
</script>

<style scoped>
.container-fluid{
  min-height: 100vh;
}


#page-title{
  opacity: 0;
  padding-top: 45vh;
}

@media only screen and (max-width: 576px) {

}

@media only screen and (max-width: 767px) {

}

@media only screen and (max-width: 991px) {

}

@media only screen and (max-width: 1199px) {

}

</style>
