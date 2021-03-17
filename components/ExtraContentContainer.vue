<template>
  <div class="modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" :id="modalId">
    <div class="modal-extra-content">
      <!--
      <div class="header-image-holder">

        <img class="img-fluid header-image" :src="content.image">
      </div>
    -->
      <div onclick="closeExtraContent(this)" :type="type" class="round-btn">
        <img class="img-fluid arrow-brown" src="/assets/large_arrow_left.png">
        <img class="img-fluid arrow-white" src="/assets/large_arrow_left_white.png">
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
            <div class="col-11 offset-1m col-md-10 col-lg-9 col-xl-8 text-md-center">
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
            <div class="col-12 col-md-10 col-lg-9 col-xl-8">
              <p style="font-size: 1.3rem" class="mt-2">{{ content['call_to_action'].description }}.</p>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-12">
              <a onclick="navigateToContact()"><button type="button" class="btn btn-primary">{{ content['call_to_action'].button }}</button></a>
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
    content: Object,
    modalId: String,
    type: String,
  },
}
</script>

<style scoped>

.modal{
  padding: 0!important;
  max-width: 100vw;
}

h1{
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
  min-height: 100vh;
  padding-top: 20vh;
  padding-bottom: 15vh;
}

.content-container .container{

}

.round-btn{
  position: absolute;
  left: 20px;
  top: 20px;
  height: 60px;
  width: 60px;
  border-radius: 10vh;
  transition: 200ms;
  z-index: 200;
}

.round-btn img{
  position: absolute;
  width: 30px;
  margin-left: 15px;
  margin-top: 18px;
}

.round-btn:hover{
  cursor: pointer;
  transform: scale(0.9);
}

.column-content{
  column-count: 2;
  column-gap: 5vh;
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
  color: var(--white);
}

.action-container h5{
  color: white;
}

.btn-primary{
  background-color: transparent;
  font-family: Lora;
  font-weight: bold;
  border-radius: 100px;
  border: 1.5px solid var(--curry);
  padding: 0.75rem 1.5rem 0.75rem 1.5rem;
  font-size: 1rem;
  transition: 200ms;
}

.btn-primary:hover{
  background-color: var(--curry);
}

.btn-primary:after{
  content: "→";
  margin-left: 1rem;
  transition: 200ms;

}

.btn-primary:hover:after{
  content: "→";
  margin-left: 1.5rem;
}

@media only screen and (max-width: 576px) {
  .column-content{
    column-count: 1;
  }
}

@media only screen and (max-width: 767px) {

}

@media only screen and (max-width: 991px) {

}

@media only screen and (max-width: 1199px) {

}

</style>
