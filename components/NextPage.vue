<template>
  <div class="next-page" align="center">
    <div id="next-page-outer">
      <div id="next-page-inner">
        <p class="m-0">Next</p>
        <img src="/assets/arrow_down.png">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NextPage",
  props: {
    footerLink: String,
  },
  mounted() {
    let vm = this;
    let link = ''

    this.$nextTick(function () {
      link = vm.footerLink
    });
    const next_tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#next-page-outer',
        start: 'top 50%',
        end: 'top 20%',
        scrub: true,
        onLeave: function (){
          window.location = link
        }
      }
    })
    next_tl.to('#next-page-outer', {opacity:1, duration:1},0)
    next_tl.to('#next-page-outer', {width:'85px', height:'85px', duration:5, marginTop: '5%'},0.5)
    next_tl.to('#next-page-outer', {backgroundColor: '#DCAC00', duration:0.75},4)
  }
}
</script>

<style scoped>

.next-page{
  height: 70vh;
  margin: 0 auto;
  z-index: 200;
  position: relative;
}

#next-page-outer{
  opacity: 0;
  height: 58px;
  width: 58px;
  border-radius: 200px;
  background-color: var(--indigo);
  position: relative;
}

#next-page-inner p{
  font-family: 'Lora', serif;
  font-size: 1.2vh;
  font-weight: bold;
  color: var(--oxford);
}

#next-page-inner img{
  height: 15px;
  margin-top: -10px;
}

#next-page-inner {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -25px;
  margin-left: -25px;
  height: 50px;
  width: 50px;
  background-color: var(--timberwolf);
  border-radius: 100px;
  z-index: 500;
  padding-top: 7px;
}

#next-page-underline{
  height: 1px;
  background-color: var(--yellow);
  width: 5px;
}

</style>
