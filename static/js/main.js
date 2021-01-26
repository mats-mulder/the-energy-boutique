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


