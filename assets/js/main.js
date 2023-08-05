
/*======================

	01. Custom Cursor

========================*/

var cursor = $(".cursor"),
follower = $(".cursor-follower");

var posX = 0,
posY = 0,
mouseX = 0,
mouseY = 0;


TweenMax.to({}, 0.016, {
    repeat: -1,
    onRepeat: function() {
        posX += (mouseX - posX) / 4;
        posY += (mouseY - posY) / 4;

        TweenMax.set(follower, {
            css: {
                left: posX - 20,
                top: posY - 20
            }
        });

        TweenMax.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        });
    }
});

$(document).on("mousemove", function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
});

$("a").on("mouseenter", function() {
    cursor.addClass("active");
    follower.addClass("active");
});

$("a").on("mouseleave", function() {
    cursor.removeClass("active");
    follower.removeClass("active");
});


/*======================

	02. Header scroll

========================*/
window.addEventListener('scroll', event => {
  var navbarScroll = function () {
      const headerTop = document.body.querySelector('.header');
      if (!headerTop) {
          return;
      }
      if (window.scrollY === 0) {
          headerTop.classList.remove('active')
  
      } 
      if(window.scrollY > 100){
          headerTop.classList.add('active')
      }

  };
  navbarScroll();
});

/*======================

	02.Modal Search

========================*/


$('.search-icon').click(function(){
  $('.modal-search').addClass('active');
})
$('.close-modal-search').click(function(){
  $('.modal-search').removeClass('active');
})


// Slick carousel

$('.banner-slick').slick({
    dots: true,
    arrows:false,
    autoplay: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});


$('.partner-slick').slick({
    dots: false,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slideToScroll: 2,
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
});

/*======================

	03. Scroll animate

========================*/

window.addEventListener('scroll', reveal);
window.addEventListener('scroll', reveal_2);
window.addEventListener('scroll', reveal_3);
window.addEventListener('scroll', reveal_4);
window.addEventListener('scroll', reveal_5);
window.addEventListener('scroll', reveal_6);

function reveal() {
    var reveals = document.querySelectorAll('.reveal-image');
    for (let i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint =150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
        
    }
}

function reveal_2() {
    var reveals_2 = document.querySelectorAll('.reveal-caption');
    for (let i = 0; i < reveals_2.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals_2[i].getBoundingClientRect().top;
        var revealpoint =150;

        if(revealtop < windowheight - revealpoint){
            reveals_2[i].classList.add('active');
        }
        else{
            reveals_2[i].classList.remove('active');
        }
        
    }
}

function reveal_3() {
    var reveals_3 = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals_3.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals_3[i].getBoundingClientRect().top;
        var revealpoint =150;

        if(revealtop < windowheight - revealpoint){
            reveals_3[i].classList.add('active');
        }
        else{
            reveals_3[i].classList.remove('active');
        }
        
    }
}

function reveal_4() {
  var reveals_3 = document.querySelectorAll('.reveal-2');
  for (let i = 0; i < reveals_3.length; i++) {
      var windowheight = window.innerHeight;
      var revealtop = reveals_3[i].getBoundingClientRect().top;
      var revealpoint =150;

      if(revealtop < windowheight - revealpoint){
          reveals_3[i].classList.add('active');
      }
      else{
          reveals_3[i].classList.remove('active');
      }
      
  }
}

function reveal_5() {
  var reveals_3 = document.querySelectorAll('.reveal-3');
  for (let i = 0; i < reveals_3.length; i++) {
      var windowheight = window.innerHeight;
      var revealtop = reveals_3[i].getBoundingClientRect().top;
      var revealpoint =150;

      if(revealtop < windowheight - revealpoint){
          reveals_3[i].classList.add('active');
      }
      else{
          reveals_3[i].classList.remove('active');
      }
      
  }
}

function reveal_6() {
    var reveals = document.querySelectorAll('.reveal-scale');
    for (let i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint =150;
  
        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        
    }
  }