$(document).ready(function () {
    var open = false
    $('.animated-icon1,.animated-icon3,.animated-icon4').click(function () {
   $(this).toggleClass('open');
   if (open === false){
   $('.putHere').html($('.navbar-nav'))
   $('.putHere').show()
   console.log('test')
   open = true
   }
   else if (open){
       $('.putHere').hide()
       open = false
   }
});
   
  });
  
  // Works everywhere
  