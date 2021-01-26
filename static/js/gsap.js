// Init gsap animations of page
function initGsap(){
  gsap.registerPlugin(ScrollTrigger);

  document.getElementsByTagName('section').forEach(function (el){
    let fix = el.getElementsByClassName('section-fix')[0]
    let page_title_top = el.getElementsByClassName('page-title-top')[0]
    let page_title_bottom = el.getElementsByClassName('page-title-bottom')[0]
    let image_holder = el.getElementsByClassName('fixed-image-holder')[0]
    let image = el.getElementsByClassName('fixed-image')[0]
    let text = el.getElementsByClassName('page-text')[0]
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top top",
        end: "bottom top",
        pin: image_holder,
        scrub: true,
        onEnter: function (){setFooter()},
        onEnterBack: function (){setFooter('back')},
      }
    })
    tl.to(image_holder, {x: 100})
    tl.to(fix, {opacity: 1, duration: 3},0)
    tl.to(text, {opacity: 1, duration: 2},2)
    tl.to(image_holder, {x: 0, duration: 3},0)
    tl.to(page_title_top, {x:-70, duration: 15},0)
    tl.to(page_title_bottom, {x: 70, duration: 15},0)
    tl.to(image, {x:-500, duration: 15},0)
    tl.to(image_holder, {x: -100, duration: 3},12)
    tl.to(fix, {opacity: 0, duration: 3},12)
  })


}

//Set information in footer navigation
function setFooter(type){
  let height = []
  document.getElementsByTagName('section').forEach(function (sec, index){
    height.push(Math.abs(sec.getBoundingClientRect().top))
  })
  let min = height.indexOf(Math.min(...height));
  if(type === 'back'){
    min -= 1
  }
  document.getElementsByClassName('progress-bar')[0].style.width = ((((min+1)/height.length)*100).toString() + '%')
  document.getElementById('footer-nav-current').innerText = (min+1).toString()
  document.getElementById('footer-nav-total').innerText = (height.length).toString()
}
