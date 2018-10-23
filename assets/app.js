//$(document).ready(function () {
   // var open = false
    //$('.animated-icon1,.animated-icon3,.animated-icon4').click(function () {
 //  $(this).toggleClass('open');
   //if (open === false){
   //$('.putHere').html($('.navbar-nav'))
   //$('.putHere').show()
   //console.log('test')
   //open = true
   //}
   //else if (open){
     //  $('.putHere').hide()
       //open = false
  // }
//});
   
 // });
  
  // Works everywhere


  // Works everywhere
  $(document).ready(function () {
    
    $('.fa-github').on('click', function() {
        window.location.href = 'https://github.com/maxwilets?tab=repositories'
    })
    
    $('.fa-linkedin').on('click', function(){
      window.location.href = 'https://www.linkedin.com/in/maxwell-wilets-7aa205139/'
    })
  
    // Hide/show animation hamburger function
    $('.navbar-toggler').on('click', function () {
  
      // Take this line to first hamburger animations
      $('.animated-icon1').toggleClass('open');
  
      // Take this line to second hamburger animation
      $('.animated-icon3').toggleClass('open');
  
      // Take this line to third hamburger animation
      $('.animated-icon4').toggleClass('open');
    });
  
  });
  