
  $(document).ready(function(){
    
      if (document.documentElement.clientWidth <= '479' ) {
        $('.reviews-slider').slick({
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        });
      } else if (document.documentElement.clientWidth <= '1024' ) {
        $('.reviews-slider').slick({
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        });
      } else {
        $('.reviews-slider').slick({
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
        });
      }
  });




  var t;
function up() {
	var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
	if(top > 0) {
		window.scrollBy(0,-100);
		t = setTimeout('up()',20);
	} else clearTimeout(t);
	return false;
}


$(document).ready(function(){
  $("a[href*=#]").on("click", function(e){
  var anchor = $(this);
  $('html, body').stop().animate({
  scrollTop: $(anchor.attr('href')).offset().top
  }, 777);
  e.preventDefault();
  return false;
  });
  });




  // Get the modal
var modal = document.getElementById("myModal");


var btn = document.getElementById("myBtn");


var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}