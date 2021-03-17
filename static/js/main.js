function openMenu(){
  document.body.style.overflow = 'hidden';
  let overlay = window.document.getElementById('menu-overlay')
  overlay.style.display = 'initial'
  gsap.set(overlay,{marginLeft: '100vw'})
  gsap.set('#menu-overlay-contact',{bottom: '-50vh'})
  gsap.set('#close-btn',{marginTop: '-10vh'})
  gsap.set('#menu-language-choice',{opacity: '0'})
  let menu_timeline = gsap.timeline();
  menu_timeline.to(overlay,{marginLeft: 0, duration:0.4},0)
  menu_timeline.to('#menu-overlay-contact',{bottom: 0, duration:0.4},0.2)
  menu_timeline.to('#close-btn',{marginTop: 0, duration:0.2},0.3)
  menu_timeline.to('#menu-language-choice',{opacity: 1, duration:0.2},0.4)
  document.getElementsByClassName('menu-option').forEach(function (el, index){
    gsap.set(el,{opacity:0})
    menu_timeline.to(el,{opacity: 1, marginLeft: 0, duration: 0.1},(index/6)+0.4)
  })
}


function closeMenu(){
  document.body.style.overflow = 'initial';
  document.body.style.overflowX = 'hidden';
  let overlay = window.document.getElementById('menu-overlay')
  gsap.to(overlay, {marginLeft:'100vw', duration: 0.3,});
  setTimeout(function (){
    overlay.style.display = 'none'
  }, 300)

}


function fixSectionTitle(element){
  element.forEach(function (el){
    document.getElementsByClassName(el).forEach(function (parent){
      parent.innerHTML = parent.innerHTML.replace(/<p>/g, '<h1>').replace(/<\/p>/g, '</h1>');
      parent = parent.getElementsByTagName('h1')[0]
      parent.innerHTML = parent.innerHTML.replace(/<em>/g, '<i>').replace(/<\/em>/g, '</i>');
    })
  })
}


function homeNext(){
  let tl = gsap.timeline({onComplete: function (){
      window.location = '/wat-we-oplossen'
    }
  })
  tl.to('#loader',{opacity:1, duration: 0.5}, 0)
  tl.to('#home-holder',{opacity: 0, duration: 0.5, marginTop: '0'},0)
  tl.to('#home-footer',{opacity: 0 , bottom:'-10vh', duration: 0.5},0)
  tl.to('.menu-holder',{opacity: 0, top: '-10vh', duration: 0.5}, 0)
  tl.to('body', {backgroundColor: '#031D44', duration: 0.5},0.5)
  tl.to('.spinner-grow',{backgroundColor: '#253E63', duration:0.5},0.5)
}


function menuTransition(colors, link) {
  let tl = gsap.timeline({onComplete: function (){
      window.location = link
    }});
  tl.to('#menu-overlay-contact', {bottom: '-50vh', duration: 0.5}, 0)
  tl.to('#close-btn', {marginTop: '-20vh', duration: 0.5}, 0)
  tl.to(['#menu-language-choice', '.menu-option'], {opacity: 0, duration: 0.3}, 0)
  tl.to('#menu-overlay', {backgroundColor: colors[0], duration: 0.5},0.5)
  tl.to('#loader',{opacity: 1, duration: 0.5}, 0)
  tl.to('.spinner-grow',{backgroundColor: colors[1], duration:0.5},0.5)
}


function updateFooter(index){
  index = parseInt(index)
  let p = ((index+1)/document.getElementsByClassName('section-fix').length)*100
  if(p.toString() + '%' !== document.getElementById('progress-bar').style.width){
    document.getElementById('progress-bar').style.width = p.toString() + '%'
  }
  document.getElementById('footer-nav-current').innerText = index + 1
}


function openExtraContent(type, el){
  let modal = document.getElementById(el)
  let tl = gsap.timeline()
  tl.set(modal,{opacity:0})
  tl.set(['.extra-content-title'],{opacity:'0', marginTop: '0'})
  tl.set(['.column-content'],{opacity:'0'})
  tl.to('.extra-content-title',{opacity:1, marginTop: '5vh'},0.5)
  tl.to('.page-title-top',{marginTop:'-5%', opacity: 0, duration: 0.5},0)
  tl.to('.page-title-bottom',{opacity: 0, duration: 0.5},0)

  if(type === 'content'){
    tl.to('.fixed-image',{paddingLeft: '100vw', duration: 0.5},0)
    tl.to('.section-text',{left:'100%', duration: 0.5},0)
  }

  if(type === 'content-small') {
    tl.to('.fixed-image', {paddingTop: '5%', paddingLeft: '100vw', duration: 0.5}, 0)
    tl.to('.section-text', {paddingTop: '5%', left: '100%', duration: 0.5}, 0)
  }


  if(type === 'gallery'){
    tl.to('.section-text',{left:'-100%', duration: 0.5},0)
    tl.to('.d-block',{marginLeft:'-200%', duration: 0.5},0)
    tl.to('.carousel-holder',{opacity:'0', duration: 0.5},0)
  }

  tl.to('.column-content',{opacity:1},0.8)
  tl.to(modal,{opacity:1},0.4)
  $('#'+el).modal('show')
}


function closeExtraContent(element){
  let type = element.getAttribute('type')
  let name = element.parentNode.parentNode.id
  let tl = gsap.timeline({onComplete: function (){
      $('#'+name).modal('hide')
    }})
  tl.to('.column-content',{opacity:0, paddingTop: '-2vh'},0)
  tl.to('.extra-content-title',{opacity:0, marginTop:'-5vh'},0.1)
  tl.to('.modal',{opacity: 0},0.4)

  if(type === 'content'){
    tl.to('.fixed-image',{paddingLeft:'0', duration: 0.5},0.4)
  }

  if(type === 'content-small'){
    tl.to('.fixed-image',{paddingLeft:'0', paddingTop: 0, duration: 0.5},0.4)
    tl.to('.section-text',{paddingTop: 0, duration: 0.5},0.4)
  }

  if(type === 'gallery'){
    tl.to('.carousel-holder',{marginLeft: '0', duration: 0.5},0)
    tl.to('.d-block',{marginLeft:'0', duration: 0.5},0)
    tl.to('.carousel-holder',{opacity:'1', duration: 0.5},0)
  }

  tl.to('.section-text',{left:'0', duration: 0.5},0.4)
  tl.to('.page-title-top',{marginTop:'0', opacity: 1, duration: 0.5},0.4)
  tl.to('.page-title-bottom',{marginTop:'0', opacity: 1, duration: 0.5},0.4)
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

function navigateToContact(){
  let tl = gsap.timeline({
    onComplete: function (){
      window.location = '/contact'
    }
  })
  tl.to(['.action-container'],{opacity: 0, height: '100vh', duration: 0.5},0)
  tl.to(['.quote-container'],{minHeight: 0, height: 0, paddingTop: 0, paddingBottom: 0, opacity: 0, duration: 0.5},0)
  tl.to('#loader',{opacity:1, duration: 0.5}, 0.3)
  tl.to('.modal', {backgroundColor: '#DED9D3', duration: 0.5},0.5)
  tl.to('.spinner-grow',{backgroundColor: '#524B38', duration:0.5},0.5)
}


function addExtraBtn(){
  document.getElementsByClassName('read-further-btn').forEach(function (el){
    let text = el.getElementsByTagName('p')
    let lastText = text[text.length - 1]
    console.log(el.getAttribute('type'))
    lastText.innerHTML = lastText.innerHTML + '<span class="extra-content-link" onclick="openExtraContent('+ "'" +  el.getAttribute('type') + "','" + el.getAttribute('modalId') + "'" + ')">Lees verder →</span>'
  })
}
