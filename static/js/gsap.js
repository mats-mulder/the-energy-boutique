function checkViewport(){
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  return vw >= 992;
}

function toggleGsap(toggle){
  ScrollTrigger.getAll().forEach(function (trigger){
    if(toggle === 'disable'){
      trigger.disable()
    }
    else if(toggle === 'enable'){
      trigger.enable()
    }
  })
}


function newGsap(){

  // QUOTE PAGE
  document.getElementsByClassName('component-quote').forEach(function (section){
    let parent = section.parentNode
    let quoteText = section.getElementsByClassName('quote-text')
    let quoteAuthor = section.getElementsByClassName('quote-author')
    let tl = gsap.timeline()
    tl.set([quoteText, quoteAuthor],{opacity: 0})
    tl.to([quoteText, quoteAuthor],{opacity:1, duration: 2})
    tl.to([quoteText, quoteAuthor],{opacity:0, duration: 2},6)
    ScrollTrigger.create({
      trigger: parent,
      start: "top top",
      end: "bottom 40%",
      scrub: true,
      animation: tl,
    })
  })

  // CONTENT RIGHT
  document.getElementsByClassName('component-content-right').forEach(function (section){
    let parent = section.parentNode
    let imageHolder = section.getElementsByClassName('fixed-image-holder')
    let image = section.getElementsByClassName('fixed-image')
    let text = section.getElementsByClassName('section-text')
    let titleTop = section.getElementsByClassName('page-title-top')
    let titleBottom = section.getElementsByClassName('page-title-bottom')
    let tl = gsap.timeline()
    tl.set([imageHolder, text, titleTop, titleBottom],{opacity:0})
    tl.set([imageHolder],{marginLeft: '5vh', duration: 3},0)
    tl.to([imageHolder, titleTop, titleBottom],{opacity: 1, duration: 3},0)
    tl.to([imageHolder],{marginLeft: '0', duration: 3},0)
    tl.to([image],{marginLeft: '-50%', duration: 15},0)
    tl.to([titleTop],{marginLeft: '-10%', duration: 15},0)
    tl.to([titleBottom],{marginRight: '-10%', duration: 15},0)
    tl.to([text],{opacity: 1, duration: 2},2)
    tl.to([imageHolder, text, titleTop, titleBottom],{opacity: 0, duration: 3},12)
    tl.to([imageHolder],{marginLeft: '-5vh', duration: 3},12)
    ScrollTrigger.create({
      trigger: parent,
      start: "top 7%",
      end: "bottom 50%",
      pin: imageHolder,
      scrub: true,
      animation: tl,
    })
  })

}


// Init gsap animations of page
function initGsap(){
  document.getElementsByTagName('section').forEach(function (el){
    let fix = el.getElementsByClassName('section-fix')[0]
    let page_title_top = el.getElementsByClassName('page-title-top')[0]
    let page_title_bottom = el.getElementsByClassName('page-title-bottom')[0]
    let image_holder = el.getElementsByClassName('fixed-image-holder')[0]
    let image = el.getElementsByClassName('fixed-image')[0]
    let text = el.getElementsByClassName('page-text')[0]
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: image_holder,
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
