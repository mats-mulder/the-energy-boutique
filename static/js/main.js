function openMenu(){
  let overlay = window.document.getElementById('menu-overlay')
  overlay.style.display = 'initial'
  gsap.set(overlay,{marginTop: -50})
  gsap.set('.menu-option',{opacity: 0})
  let menu_timeline = gsap.timeline();
  menu_timeline.to(overlay,{opacity: 1, marginTop: 0})
  document.getElementsByClassName('menu-option').forEach(function (el, index){
    menu_timeline.to(el,{opacity: 1, marginLeft: 0, duration: 0.1},index/5)
  })
}

function closeMenu(){
  let overlay = window.document.getElementById('menu-overlay')
  gsap.to(overlay, {opacity: 0, duration: 0.5,});
  setTimeout(function (){
    overlay.style.display = 'none'
  }, 500)

}


