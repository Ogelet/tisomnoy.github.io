;
// Начинать писать отсюда!!!!
$(document).ready(function(){


$(function(){
    $(".menu_toggle").on("click",function(){
        $(".top_mnu").slideToggle(300,function(){
            if($(this).css("display") === 'none'){
                $(this).removeAttr('style');
            }
        });
    });
});

$(function(){
    $(".show_insmnu").on("click",function(){
        $(".insert_mnu").slideToggle(100,function(){
            if($(this).css("display") === 'none'){
                $(this).removeAttr('style');
            }
        });
    });
});

// анимация элементов
$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

$('.info1').animateCss('fadeInLeft');
$('.info2').animateCss('fadeInUp');
$('.info3').animateCss('fadeInRight');
$('.review_item').animateCss('zoomIn');

//анимация end



//slick-slider

$('.video_slide').slick({ centerMode:true,
});

 $('.partners_logo').slick({
    autoplay:true,
    slidesToShow:4,
    slidesToScroll:4,
    speed:2500,
        responsive:[
        {breakpoint:990,
            settings:{
            slidesToShow:3,
            slidesToScroll:3,
            speed:1500}
        },
          {breakpoint:540,
            settings:{
            slidesToShow:2,
            slidesToScroll:2,
            speed:1000}
        },
      {breakpoint:440,
            settings:{
            slidesToShow:2,
            slidesToScroll:2,
            speed:1000}
        },
]
  });
 $('#adv_list').slick({
    autoplay:true,
    slidesToShow:3,
    slidesToScroll:3,
    speed:1500,
    responsive:[
        {breakpoint:990,
            settings:{
            slidesToShow:2,
            slidesToScroll:2}
        },
          {breakpoint:640,
            settings:{
            slidesToShow:1,
            slidesToScroll:1}
        }
]
  });




//slick-slider








 $('.pay_det').magnificPopup({type: 'inline'});


    $('.but_appl_wd').magnificPopup({type: 'inline', focus: '#name'
}); 
    $('.but_applic2').magnificPopup({type: 'inline', focus: '#ffname'
});
    $('.but_review').magnificPopup({type: 'inline', focus: '#mmname'
});
    $('.ask').magnificPopup({type: 'inline', focus: '#qname'
});


    $('.appl').magnificPopup({type: 'inline', mainClass:"production_order"
});


    $('.popup_youtube').magnificPopup({type: 'inline', mainClass:"youtube"
});



// FAQ ответы на вопросы

$(function() {
$(".qw1").click(function() {
$(".ans").toggleClass('show',false);
$(".ans").toggleClass('hide',true);
$(".answer1").removeClass("hide");
$(this).toggleClass("show");
})
});
$(function() {
$(".qw2").click(function() {
$(".ans").toggleClass('show',false);
$(".ans").toggleClass('hide',true);
$(".answer2").removeClass("hide");
$(this).toggleClass("show");
})
});
$(function() {
$(".qw3").click(function() {
$(".ans").toggleClass('show',false);
$(".ans").toggleClass('hide',true);
$(".answer3").removeClass("hide");
$(this).toggleClass("show");
})
});
$(function() {
$(".qw4").click(function() {
$(".ans").toggleClass('show',false);
$(".ans").toggleClass('hide',true);
$(".answer4").removeClass("hide");
$(this).toggleClass("show");
})
});
$(function() {
$(".qw5").click(function() {
$(".ans").toggleClass('show',false);
$(".ans").toggleClass('hide',true);
$(".answer5").removeClass("hide");
$(this).toggleClass("show");
})
});
$(function() {
$(".qw6").click(function() {
$(".ans").toggleClass('show',false);
$(".ans").toggleClass('hide',true);
$(".answer6").removeClass("hide");
$(this).toggleClass("show");
})
});
$(function() {
$(".qw7").click(function() {
$(".ans").toggleClass('show',false);
$(".ans").toggleClass('hide',true);
$(".answer7").removeClass("hide");
$(this).toggleClass("show");
})
});
$(function() {
$(".qw8").click(function() {
$(".ans").toggleClass('show',false);
$(".ans").toggleClass('hide',true);
$(".answer8").removeClass("hide");
$(this).toggleClass("show");
})
});
$(function() {
$(".qw9").click(function() {
$(".ans").toggleClass('show',false);
$(".ans").toggleClass('hide',true);
$(".answer9").removeClass("hide");
$(this).toggleClass("show");
})
});

//address list 
$(function() {
$(".show_lines").click(function() {
  if($(".metro_lines").hasClass("hide")){
    $(".metro_lines").removeClass("hide").addClass("show")
  }
  else{$(".metro_lines").removeClass("show").addClass("hide")};
})
});

$(function() {
$(".show_addresses1").click(function() {
$(".metro_line").toggleClass('show',false).toggleClass('hide',true);
$(".line1").removeClass("hide").toggleClass("show");
})
});
$(function() {
$(".show_addresses2").click(function() {
$(".metro_line").toggleClass('show',false).toggleClass('hide',true);
$(".line2").removeClass("hide").toggleClass("show");
})
});
$(function() {
$(".show_addresses3").click(function() {
$(".metro_line").toggleClass('show',false).toggleClass('hide',true);
$(".line3").removeClass("hide").toggleClass("show");
})
});
$(function() {
$(".show_addresses4").click(function() {
$(".metro_line").toggleClass('show',false).toggleClass('hide',true);
$(".line4").removeClass("hide").toggleClass("show");
})
});
$(function() {
$(".show_addresses5").click(function() {
$(".metro_line").toggleClass('show',false).toggleClass('hide',true);
$(".line5").removeClass("hide").toggleClass("show");
})
});
$(function() {
$(".show_addresses6").click(function() {
$(".metro_line").toggleClass('show',false).toggleClass('hide',true);
$(".line6").removeClass("hide").toggleClass("show");
})
});
$(function() {
$(".show_addresses7").click(function() {
$(".metro_line").toggleClass('show',false).toggleClass('hide',true);
$(".line7").removeClass("hide").toggleClass("show");
})
});
$(function() {
$(".show_addresses8").click(function() {
$(".metro_line").toggleClass('show',false).toggleClass('hide',true);
$(".line8").removeClass("hide").toggleClass("show");
})
});
$(function() {
$(".show_addresses9").click(function() {
$(".metro_line").toggleClass('show',false).toggleClass('hide',true);
$(".line9").removeClass("hide").toggleClass("show");
})
});
$(function() {
$(".show_addresses10").click(function() {
$(".metro_line").toggleClass('show',false).toggleClass('hide',true);
$(".line10").removeClass("hide").toggleClass("show");
})
});


$('.show_howtoget').magnificPopup({
type: 'inline'});



$('.but_appl').magnificPopup({type: 'inline', focus: '#name'
});



$('.show_details1').magnificPopup({
type: 'inline'
});
$('.show_details2').magnificPopup({
type: 'inline'
});
$('.show_details3').magnificPopup({
type: 'inline'
});
$('.show_details4').magnificPopup({
type: 'inline'
});
$('.show_details5').magnificPopup({
type: 'inline'
});
$('.show_details6').magnificPopup({
type: 'inline'
});
$('.show_details7').magnificPopup({
type: 'inline'
});
$('.show_details8').magnificPopup({
type: 'inline'
});
$('.show_details9').magnificPopup({
type: 'inline'
});
$('.show_details10').magnificPopup({
type: 'inline'
});
$('.link_photo_report').magnificPopup({
type: 'inline'
});

$('.popup-gallery').magnificPopup({
 delegate: 'a',
 type: 'image',
 tLoading: 'Загрузка изображения #%curr%...',
 gallery: {
     enabled: true,
     navigateByImgClick: true,
     preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
 }
 });

$("#video_slide").owlCarousel(
        {
            items:1,
            dots:true,
            loop:true,
        });

$("#news_slide").owlCarousel(
        {
            items:1,
            dots:true,
            autoplay:true,
            loop:true,
            smartSpeed:2000,

        });


$("#partners_logo").owlCarousel(
        {
            items:4,
            autoplay:true,
            autoplayTimeout:500,
            smartSpeed:1500,
            loop:true,
        });

    $(document).on('click', '.show_insmnu', function(){
        $('.insert_mnu').toggleClass('insert_mnu_show');
    });







});