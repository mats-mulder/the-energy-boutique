<template>
  <div class="row">

    <div class="fixed-image-holder">
      <img class="fixed-image" src="/images/back_image.jpg">
    </div>

    <div class="col-12 col-md-6" style="padding-top: 50vh; padding-left: 75px">
      <div style="margin-left: -10vw">
        <h1 class="page-title-top">Hoe <i>verander</i> je</h1>
        <h1 class="page-title-bottom"><i>oude</i> gewoontes?</h1>
      </div>
      <div class="mt-5 page-text">
        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
        <h4>Lorem ipsum</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        <h4>Excepteur sint occaecat</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "ContentRight",
  mounted() {

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
