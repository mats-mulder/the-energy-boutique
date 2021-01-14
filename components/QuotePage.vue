<template>
  <div class="container">
    <div class="row">
      <div class="col-9 quote-holder">
        <div class="quote">
          <p class="quote-text">Wanneer ik met een kleinkind op de grond had zitten spelen kon ik slechts met moeite overeind komen</p>
          <p class="quote-author"> Mats Mulder</p>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "QuotePage"
}
</script>

<style scoped>

.quote-holder{
  margin-top: 40vh;
  height: 80vh;
}

.quote{
  position: absolute;
  bottom: 150px;
}

.quote-text{
  font-size: 50px;
  line-height: 95%;
  font-family: 'Arapey', serif;
}

.quote-author{
  font-family: 'Lora',serif;
  margin-top: 25px;
  font-size: 20px;
}

.quote-text:before{
  content:'“';
  color: #CEA018;
  font-family: 'Lora', serif;
  font-size: 150px;
  position: absolute;
  left: -75px;
  font-weight: bold;
  top: -20px;
}

.quote-text:after{
  content:'“';
  color: #CEA018;
  font-family: 'Lora', serif;
  font-size: 150px;
  position: absolute;
  transform: rotate(180deg);
  font-weight: bold;
  margin-left: 15px;
}

</style>
