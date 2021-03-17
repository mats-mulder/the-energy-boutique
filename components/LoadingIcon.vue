<template>
  <div id="loader" class="container">
    <div  class="spinner-grow" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<script>
export default {
name: "LoadingIcon"
}
</script>

<style scoped>
.container{
  z-index: 300;
  top:0;
}

.spinner-grow{
  position: fixed;
  top: 50%;
  left: 50%;
  margin-left: -1rem;
  margin-top: -1rem;
  z-index: 1051;
}

</style>
