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
 $(".navbar a").click(function(){
  $("body,html").animate({
   scrollTop:$("#" + $(this).data('value')).offset().top
  },1000)
  
 })