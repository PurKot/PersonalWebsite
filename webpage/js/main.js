$(document).ready(function(){
 $('.header').height($(window).height());
  
 });
 $(window).scroll(function() {
          // checks if window is scrolled more than 500px, adds/removes solid class
          var height = $(window).height();
          var scrollTop = $(window).scrollTop();
          
          if(scrollTop >= height-40) { 
              $('.navbar').addClass('solid-nav');
          } else {
              $('.navbar').removeClass('solid-nav');
          }
        });
 $(function(){ 
     var navMain = $(".navbar-collapse");

     navMain.on("click", "a", null, function () {
         navMain.collapse('hide');
     });
 });
        
 $('.ml1 .letters').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({loop: true})
  .add({
    targets: '.ml1 .letter',
    scale: [0.3,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 700,
    delay: function(el, i) {
      return 70 * (i+1)
    }
  }).add({
    targets: '.ml1 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 800,
    offset: '-=875',
    delay: function(el, i, l) {
      return 80 * (l - i);
    }
  }).add({
    targets: '.ml1',
    opacity: 1,
    duration: 1100,
    easing: "easeOutExpo",
    delay: 1100
  });
  
  $(".navbar a").click(function(){
  $("body,html").animate({
   scrollTop:$("#" + $(this).data('value')).offset().top
  },1000)
  
 })