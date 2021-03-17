<template>
  <div class="footer" align="center" id="footer">

    <div style="margin-top: 1.2vh">

      <p class="footer-page-title">Wat we oplossen</p>
      <div style="display: table">
        <!--<img class="img-fluid footer-nav-item mr-3" src="/assets/arrow_left.png">-->
        <p id="footer-nav-current" class="footer-nav-item">0</p>
        <div class="footer-nav-item pl-3 pr-3" style="display: table-cell; vertical-align: middle">
          <div class="progress">
            <div id="progress-bar" class="progress-bar" role="progressbar" style="width: 10%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        <p class="footer-nav-item" id="footer-nav-total">3</p>
        <!--<img class="img-fluid footer-nav-item ml-3" src="/assets/arrow_right.png">-->
      </div>

    </div>

    <div class="social-holder" align="left">
      <div class="row">
        <div class="col-6">
          <a href="https://www.facebook.com/rechargeyourvitality/" target="_blank">
            <div class="social-logo">
              <img class="img-fluid logo" src="/assets/facebook_logo.png">
            </div>
          </a>
        </div>
        <div class="col-6">
          <a href="https://www.linkedin.com/in/helen-essers-229863a6/" target="_blank">
            <div class="social-logo">
              <img class="img-fluid logo" src="/assets/linkedin_logo.png">
            </div>
          </a>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
export default {
  name: "Footer",
  props: {
    footerLink: String,
  },
  mounted() {
    document.getElementById('footer-nav-total').innerText = document.getElementsByClassName('section-fix').length.toString()
  }

}
</script>

<style scoped>

.footer{
  position: fixed;
  height: 6vh;
  bottom: -10vh;
  width: 100%;
  z-index: 150;
}

.social-holder{
  position: absolute;
  right: 3vh;
  width: auto;
  top: 1vh;
}

.social-holder .col-6{
  padding: 0 0.5vh 0 0;
}

.social-logo{
  border-radius: 100px;
  height: 4vh;
  width: 4vh;
  transition: 200ms;
}

.logo{
  padding: 1.2vh;
  height: 100%;
}

.social-logo:hover{
  transform: scale(0.9);
}

.progress{
  width: 20vw;
  border-radius: 0;
  height: 3px;
  max-width: 250px;
}


.footer-page-title{
  font-family: Lora;
  font-size: 0.8rem;
  margin-bottom: -0.5vh;

}

.footer-nav-item{
  display: table-cell;
  transition: 200ms;
  font-size: 0.8rem;
  font-family: Lora;
}

.footer-nav-btn:hover{
  cursor: pointer;
  transform: scale(1.1);
}

.progress-bar{
  transition: 500ms;
}

@media only screen and (max-width: 576px) {
  .footer{
    height: 8vh;
  }
  .social-logo{
    height: 5vh;
    width: 5vh;
    margin-top: 0.5vh;
  }
  .progress{
    width: 25vw;
  }
}

@media only screen and (max-width: 767px) {

}

@media only screen and (max-width: 991px) {

}

@media only screen and (max-width: 1199px) {

}

</style>
