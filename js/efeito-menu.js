
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 50) {
          $(".menuwrapper").css("background" , "rgba(0,0,0,0.8)");
         
        }
  
        else{
            $(".menuwrapper").css("background" , "transparent"); 	
        }
    })
  })