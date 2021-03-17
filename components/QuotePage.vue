<template>
  <div class="container-fluid component-quote">
    <div class="row">
      <div class="col-10 offset-1 col-md-8 col-lg-7 col-xl-6 offset-xl-2 quote-holder">
        <div class="quote">
          <h1 class="quote-text">{{ quoteText }}</h1>
          <p class="quote-author">{{ quoteAuthor }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuotePage",
  props:{
    quoteText: String,
    quoteAuthor: String,
  }
}
</script>

<style scoped>

.quote-background-image{
  position: absolute;
  min-width: 100%;
  height: 95vh;
  object-fit: cover;
  margin-top: -40vh;
}

.component-quote{
  height: 95vh;
  padding-top: 40vh;
}

h1{
  font-size: 3rem;
}

.quote-author{
  font-family: 'Lora',serif;
  margin-top: 25px;
  font-size: 1.6rem;
  font-weight: bold;
}

.quote-text:before{
  content:'“';
  font-family: 'Lora', serif;
  font-size: 15vh;
  position: absolute;
  left: -6vh;
  font-weight: bolder;
  top: -2vh;
}

.quote-text:after{
  content:'“';
  font-family: 'Lora', serif;
  font-size: 15vh;
  position: absolute;
  transform: rotate(180deg);
  font-weight: bold;
  margin-top: 1rem;
  margin-left: 0.5rem;
}

@media only screen and (max-width: 576px) {
  h1{
    font-size: 2rem;
  }
  .quote-author{
    font-size: 1rem;
  }
}

@media only screen and (max-width: 767px) {

}

@media only screen and (max-width: 991px) {
 .component-quote{
   opacity: 1;
 }
}

@media only screen and (max-width: 1199px) {

}

</style>
