var animation = bodymovin.loadAnimation({
    container: document.getElementById('sword_animation-right'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'Animations/swords.json'
    
  })

  var animation1 = bodymovin.loadAnimation({
    container: document.getElementById('sword_animation-left'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'Animations/swords.json'
  })

  var animation2 = bodymovin.loadAnimation({
    container: document.getElementById('close_button_animation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'Animations/close.json'
  })



  var animation3 = bodymovin.loadAnimation({
    container: document.getElementById("fire"),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'Animations/Fire2.json',
  })

  setTimeout(function(){ animation3.play();  }, 1000);
  animation3.addEventListener('complete', function() {


    animation4.play();
  })


  

  var animation4 = bodymovin.loadAnimation({
    container: document.getElementById("slide_profile"),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'Animations/Slide_Profile_Animation.json',
  })
  setTimeout(function(){   }, 2000);
  animation4.addEventListener('complete', function() {
    setTimeout(function(){
      animation4.goToAndPlay(0);
    }, 2000);
  })



