<template>
  <div class="next-page" align="center">
    <div id="next-page-outer">
    </div>
    <div id="next-page-inner">
      <p class="m-0">{{ text }}</p>
      <img src="/assets/arrow_down.png">
    </div>
  </div>
</template>

<script>
export default {
  name: "NextPage",
  props: {
    footerLink: String,
    colors: Array,
    text: String,
  },
  mounted() {
    let vm = this;
    let link = ''
    let colors = []

    this.$nextTick(function () {
      link = vm.footerLink
      colors = vm.colors
      const next_tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#next-page-outer',
          start: 'top 100%',
          end: 'top 50%',
          scrub: true,
          onLeave: function (){
            let t1 = gsap.timeline({onComplete: function (){
                window.location = link
              }})
            t1.to('.section-fix',{opacity:0, duration: 0.2},0)
            t1.to('#footer',{opacity: 0, bottom:'-10vh', duration: 0.5},0)
            t1.to('.next-page',{opacity: 0},0)
            t1.to('.menu-holder', {opacity:0, marginTop: '-10vh', duration: 0.5},0)
            t1.to('body', {backgroundColor: colors[0], duration:0.5},0)
            t1.to('#loader',{opacity: 1, duration: 0.5}, 0)
            t1.to('.spinner-grow',{backgroundColor: colors[1], duration: 0.5},0)
          }
        }
      })
      next_tl.totalDuration(6);
      next_tl.to('#next-page-outer', {marginTop: '-20px', marginLeft: '-60px',width:'120px', height:'120px', opacity: 1, duration:4},0.5)
      next_tl.to('#next-page-outer', {backgroundColor: colors[2], duration:0.4},4)

    });
  }
}
</script>

<style scoped>

.next-page{
  height: 100vh;
  padding-top: 25vh;
  margin: 0 auto;
  z-index: 200;
  position: relative;
  opacity: 1;
}

#next-page-outer{
  position: absolute;
  opacity: 0;
  height: 80px;
  width: 80px;
  left: 50%;
  margin-left: -40px;
  border-radius: 200px;
}

#next-page-inner p{
  font-family: 'Lato', serif;
  font-size: 0.8rem;
  font-weight: bold;
  color: var(--brown);
  line-height: 95%;
}

#next-page-inner img{
  height: 15px;
  margin-top: -10px;
}

#next-page-inner {
  left: 50%;
  margin-left: -40px;
  position: absolute;
  height: 80px;
  width: 80px;
  background-color: var(--timberwolf);
  border-radius: 100px;
  z-index: 500;
  padding-top: 1.2rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

#next-page-underline{
  height: 1px;
  background-color: var(--yellow);
  width: 5px;
}

</style>
