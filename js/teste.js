var ll = $('.carrousel-movies');
var lh = []
var wscroll = 0;
var wh = $(window).height();

function update_offsets(){
  $('.carrousel-movies').each(function(){
    var x = $(this).offset().top;
    lh.push(x);
  });
};

function lazy() {
  wscroll = $(window).scrollTop();
  for(i = 0; i < lh.length; i++){
    if(lh[i] <= wscroll + (wh - 200)){
      $('.carrousel-movies').eq(i).addClass('moviebg');
    };
  };
};

// Page Load
update_offsets();
lazy();

$(window).on('scroll',function(){
  lazy();
});