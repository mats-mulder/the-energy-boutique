<template>
  <div class="container-fluid component-quote">
    <div class="row">
      <div class="col-10 offset-1 col-md-8 col-lg-7 col-xl-6 offset-xl-2 quote-holder">
        <div class="quote">
          <p class="quote-text">{{ quoteText }}</p>
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

.quote-holder{
  margin-top: 30vh;
  height: 80vh;
}

.quote{
  position: absolute;
  bottom: 150px;
}

.quote-text{
  font-size: 5vh  ;
  line-height: 95%;
  font-family: 'Arapey', serif;
}

.quote-author{
  font-family: 'Lora',serif;
  margin-top: 25px;
  font-size: 2.3vh;
  font-weight: bold;
}

.quote-text:before{
  content:'“';
  color: #CEA018;
  font-family: 'Lora', serif;
  font-size: 15vh;
  position: absolute;
  left: -6vh;
  font-weight: bolder;
  top: -2vh;
}

.quote-text:after{
  content:'“';
  color: #CEA018;
  font-family: 'Lora', serif;
  font-size: 15vh;
  position: absolute;
  transform: rotate(180deg);
  font-weight: bold;
  margin-top: 1vh;
}

</style>
