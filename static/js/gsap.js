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
  document.getElementsByClassName('component-page-title').forEach(function (section){
    let tl = gsap.timeline()
    ScrollTrigger.create({
      trigger: section,
      start: "top 70%",
      end: "bottom 50%",
      scrub: true,
      animation: tl,
      onUpdate: self => updateFooter('-1')
    })
  })

  document.getElementsByClassName('component-quote').forEach(function (section){
    let parent = section.parentNode
    let tl = gsap.timeline()
    ScrollTrigger.create({
      trigger: parent,
      start: "top 70%",
      end: "bottom 50%",
      scrub: true,
      animation: tl,
      onUpdate: self => updateFooter(section.parentNode.parentNode.id)
    })
  })


  document.getElementsByClassName('component-content-right').forEach(function (section){
    let parent = section.parentNode
    let imageHolder = section.getElementsByClassName('fixed-image-holder')
    let image = section.getElementsByClassName('fixed-image')
    let text = section.getElementsByClassName('section-text')
    let titleTop = section.getElementsByClassName('page-title-top')
    let titleBottom = section.getElementsByClassName('page-title-bottom')
    let tl = gsap.timeline()

    tl.set([imageHolder, text, titleTop, titleBottom],{opacity:0})
    tl.to([titleTop, titleBottom],{opacity: 1, duration: 5},0)
    tl.to([titleTop],{marginLeft: '-10%', duration: 15},0)
    tl.to([titleBottom],{marginLeft: '25%', duration: 15},0)
    tl.to(imageHolder,{opacity: 1, duration: 4},6)
    tl.to([text],{opacity: 1, duration: 3},6)
    tl.to([image],{marginLeft: '-50%', duration: 15},0)
    ScrollTrigger.create({
      trigger: parent,
      start: "top 70%",
      end: "bottom 50%",
      scrub: true,
      animation: tl,
      onUpdate: self => updateFooter(section.parentNode.parentNode.id)
    })
  })

  //
  /* CONTENT RIGHT
  document.getElementsByClassName('component-content-right').forEach(function (section){
    let parent = section.parentNode
    let imageHolder = section.getElementsByClassName('fixed-image-holder')
    let image = section.getElementsByClassName('fixed-image')
    let text = section.getElementsByClassName('section-text')
    let titleTop = section.getElementsByClassName('page-title-top')
    let titleBottom = section.getElementsByClassName('page-title-bottom')
    let tl = gsap.timeline()
    tl.set(section,{opacity: 1})
    tl.set([imageHolder, text, titleTop, titleBottom],{opacity:0})
    tl.set([imageHolder],{marginLeft: '5vh', duration: 5},0)
    tl.to([imageHolder, titleTop, titleBottom],{opacity: 1, duration: 5},0)
    tl.to([imageHolder],{marginLeft: '0', duration: 5},0)
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
      onUpdate: self => updateFooter(section.parentNode.parentNode.id)
    })
  })

   */

  // IMAGE RIGHT
  document.getElementsByClassName('component-image-right').forEach(function (section){
    let parent = section.parentNode
    let gallery = section.getElementsByClassName('carousel')
    let titleTop = section.getElementsByClassName('page-title-top')
    let titleBottom = section.getElementsByClassName('page-title-bottom')
    let text = section.getElementsByClassName('section-text')
    let tl = gsap.timeline()
    tl.set([text, titleTop, titleBottom, gallery],{opacity:0})
    //tl.set(gallery,{marginTop:'-20vh'})
    tl.to([titleTop, titleBottom],{opacity: 1, duration: 5},0)
    tl.to(gallery,{opacity: 1, duration: 4},6)
    tl.to([titleTop],{marginLeft: '20%', duration: 15},0)
    tl.to([titleBottom],{marginLeft: '0%', duration: 15},0)
    tl.to([text],{opacity: 1, duration: 3},6)
    ScrollTrigger.create({
      trigger: parent,
      start: "top 70%",
      end: "bottom 50%",
      scrub: true,
      animation: tl,
      onUpdate: self => updateFooter(section.parentNode.parentNode.id)
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

