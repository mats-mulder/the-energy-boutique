function openMenu(){
  let overlay = window.document.getElementById('menu-overlay')
  overlay.style.display = 'initial'
  gsap.set(overlay,{marginLeft: '100vw'})
  gsap.set('#menu-overlay-contact',{bottom: '-50vh'})
  gsap.set('#close-btn',{marginTop: '-10vh'})
  gsap.set('#menu-language-choice',{opacity: '0'})
  let menu_timeline = gsap.timeline();
  menu_timeline.to(overlay,{marginLeft: 0, duration:0.4},0)
  menu_timeline.to('#menu-overlay-contact',{bottom: 0, duration:0.4},0.2)
  menu_timeline.to('#close-btn',{marginTop: 0, duration:0.2},0.4)
  menu_timeline.to('#menu-language-choice',{opacity: 1, duration:0.2},0.4)
  document.getElementsByClassName('menu-option').forEach(function (el, index){
    gsap.set(el,{opacity:0})
    menu_timeline.to(el,{opacity: 1, marginLeft: 0, duration: 0.1},(index/6)+0.4)
  })
}

function closeMenu(){
  let overlay = window.document.getElementById('menu-overlay')
  gsap.to(overlay, {marginLeft:'100vw', duration: 0.3,});
  setTimeout(function (){
    overlay.style.display = 'none'
  }, 300)

}

function fixSectionTitle(element){
  element.forEach(function (el){
    let parent = document.getElementsByClassName(el)[0]
    parent.innerHTML = parent.innerHTML.replace(/<p>/g, '<h1>').replace(/<\/p>/g, '</h1>');
    parent = parent.getElementsByTagName('h1')[0]
    parent.innerHTML = parent.innerHTML.replace(/<em>/g, '<i>').replace(/<\/em>/g, '</i>');
  })
}


function closeExtraContent(element){
  let name = element.parentNode.parentNode.parentNode.id
  let tl = gsap.timeline({onComplete: function (){
      $('#'+name).modal('toggle')
    }})
  tl.to('.column-content',{opacity:0, paddingTop: '-2vh'},0)
  tl.to('.extra-content-title',{opacity:0, paddingTop:'-2vh'},0.1)
  tl.to('.header-image',{opacity: 0, marginTop: '-5vh'},0.2)
  tl.to('.modal',{opacity: 0},0.4)
  tl.to('.fixed-image-holder',{marginLeft:'0', duration: 0.5},0.4)
  tl.to('.section-text',{left:'0', duration: 0.5},0.4)
  tl.to('.page-title-top',{marginLeft:'0', opacity: 1, duration: 0.5},0.4)
  tl.to('.page-title-bottom',{marginLeft:'15%', opacity: 1, duration: 0.5},0.4)
}


