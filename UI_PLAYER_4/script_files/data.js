


  var animation3 = bodymovin.loadAnimation({
    container: document.getElementById("status_fire"),
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



