AOS.init();
AOS.init({

  offset: 120, 
  delay: 0,
  duration: 800, 
  easing: 'ease', 
  once: false, 
  mirror: false, 
  anchorPlacement: 'top-bottom', 

});


var typed =new Typed(".txt",{
  strings: ["Front-end Developer", "UI/UX Designer", "Web Developer"],
  typeSpeed: 80,
  backSpeed: 30,
  loop: true
});