<template>
  <div class="modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" :id="content.title + '-modal'">
    <div class="modal-extra-content">
      <!--
      <div class="header-image-holder">

        <img class="img-fluid header-image" :src="content.image">
      </div>
    -->
      <div onclick="closeExtraContent(this)" class="round-btn">
        <img class="img-fluid" src="/assets/large_arrow_left_white.png">
      </div>
      <div class="content-container">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h1 class="extra-content-title">{{ content.title }}</h1>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="column-content">
                <h5 class="mb-5">{{ content.content.introduction }}</h5>

                <div class="mt-4" v-for="section in content.content.sections">
                  <h4>{{ section.title }}</h4>
                  <p>{{ section.content  }}</p>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="quote-container" :style="'background-image: url('+ content.quote.image.toString() +')'">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-8 text-center">
              <h3 class="quote-text">{{ content.quote.quote }}</h3>
              <h4 class="mt-4">{{ content.quote.author }}</h4>
            </div>
          </div>
        </div>
      </div>

      <div class="action-container">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h2>{{ content['call_to_action'].title }}</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-8">
              <h5 class="mt-2">{{ content['call_to_action'].description }}.</h5>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-12">
              <button type="button" class="btn btn-primary">{{ content['call_to_action'].button }}</button>
            </div>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
export default {
  name: "ExtraContentContainer",
  props: {
    content: Object
  }
}
</script>

<style scoped>

h1{
  font-size: 10vh;
  text-decoration: underline var(--curry) 6px;
  margin-bottom: 5vh;
}

.header-image-holder{
  height: 20vh;
  overflow: hidden;
  width: 100%;
  background-color: var(--oxford);
}

.header-image{
  opacity: 0;
  width: 100%;
}


.content-container{
  background-color: var(--oxford);
  min-height: 100vh;
  padding-top: 25vh;
}

.content-container .container{

}

.round-btn{
  position: absolute;
  left: 1.5vh;
  top: 1.5vh;
  height: 5vh;
  width: 5vh;
  background-color: var(--indigo);
  border-radius: 10vh;
  padding: 1vh;
  transition: 200ms;
  z-index: 200;
}

.round-btn:hover{
  cursor: pointer;
  transform: scale(0.9);
}

.column-content{
  column-count: 2;
  column-gap: 5vh;

}

h4{
  font-size: 2.2vh;
}

h5{
  font-size: 2vh;
}

p{
  font-size: 1.6vh;
}

.quote-container{
  padding-top: 40vh;
  padding-bottom: 40vh;
  background-size: cover;
  min-height: 100vh;
}

.quote-text:before{
  content:'“';
  font-family: 'Lora', serif;
  font-size: 10vh;
  position: absolute;
  left: -3vh;
  font-weight: bolder;
  top: -2vh;
}

.quote-text:after{
  content:'“';
  font-family: 'Lora', serif;
  font-size: 10vh;
  position: absolute;
  transform: rotate(180deg);
  font-weight: bold;
  margin-top: 1vh;
  margin-left: 1vh;
}

.action-container{
  padding-top: 10vh;
  padding-bottom: 10vh;
  background-color: var(--oxford);
  color: var(--white);
}

.action-container h5{
  color: white;
}

.btn-primary{
  background-color: var(--curry);
  font-family: Lora;
  font-weight: bold;
  border-radius: 10vh;
  border: 0px;
  padding: 1vh 2vh 1vh 2vh;
  font-size: 1.6vh;
  transition: 200ms;
}

.btn-primary:hover{
  padding: 1vh 3vh 1vh 2vh;
}



</style>
