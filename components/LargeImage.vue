<template>
  <div class="row">

    <div class="page-title-holder" style="position: absolute; width: 100%; margin-top: 40vh; z-index: 100">
      <div class="col-10">
        <h1 class="page-title-top">“Ik zocht een manier om oude</h1>
        <h1 class="page-title-bottom">gewoontes te <i>veranderen</i>”</h1>
      </div>

    </div>

    <div class="col-12 col-md-3" style="padding-top: 60vh;">
      <div class="mt-5 page-text">
        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
        <h4>Lorem ipsum</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        <h4>Excepteur sint occaecat</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
      </div>
    </div>

    <div class="fixed-image-holder">
      <img class="fixed-image" src="/images/duinen.jpg">
    </div>


  </div>
</template>

<script>
export default {
  name: "LargeImage"
}
</script>

<style scoped>

.page-title-top{
  margin-bottom: 0;
  padding-left: 100px;
}

.page-title-bottom{
  margin-top: 0;
}

.fixed-image-holder{
  height: 80vh;
  overflow: hidden;
  border-radius: 50px;
  width: 65%;
  position: absolute;
  right: 7vh;
  margin-top: 6vh;
}

.fixed-image{
  min-height: 80vh;
  position: absolute;
  bottom: 0;
  width: 100vw;
  object-fit: cover;
}



</style>
