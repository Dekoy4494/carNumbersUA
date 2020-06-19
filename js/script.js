
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
  $(document).ready(function () {
    $("form").submit(function () {
    // Получение ID формы
    var formID = $(this).attr('id');
    // Добавление решётки к имени ID
    var formNm = $('#' + formID);
    $.ajax({
    type: "POST",
    url: 'send.php',
    data: formNm.serialize(),
    success: function (data) {
    // Вывод текста результата отправки
    $(formNm).html(data);
    },
    error: function (jqXHR, text, error) {
    
    console.log(error)
    
    }
    });
    return false;
    });
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
const modal = document.getElementById("myModal");

const btn = document.getElementById("myBtn");

const span = document.getElementsByClassName("close")[0];


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

const submit = document.getElementsByClassName('submit')[0];
const submit2 = document.getElementsByClassName('form-btn-accept')[0];


const modalSubmited = document.getElementsByClassName('modal2')[0];

submit.onclick = function() {
  modalSubmited.style.display = 'block';
}
submit2.onclick = function() {
  modalSubmited.style.display = 'block';
}
const span2 = document.getElementsByClassName("close")[1];

span2.onclick = function() {
  modalSubmited.style.display = "none";
}