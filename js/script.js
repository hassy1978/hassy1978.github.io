$(function() {
  //$('.main-content-wrapper').stickyStack();
/*
  $('.main-content-wrapper').stickyStack({
    containerElement: '.main-content-wrapper',
    stackingElement: 'section',
    boxShadow: '0 -3px 20px rgba(0, 0, 0, 0.25)'
  });
*/
  bubbly({
    canvas: document.getElementById("canvas1"),
    colorStart: '#fff4e6',
    colorStop: '#ffe9e4',
    blur:1,
    compose: 'source-over',
    bubbleFunc:() => `hsla(${Math.random() * 50}, 100%, 50%, .3)`,
  });
  bubbly({canvas: document.getElementById("canvas2")});
  var typed = new Typed('#typed', {
    //stringsElement: "#typed-string",
    //strings: typedString.replace(/\n/gm, '\n'),
    strings: ['<h1 class="mb-1 headfonts"><span class="mb-1 headfonts">Portfolio</span></h1>\n<h3 class="mb-5 headfonts"><span class="mb-5 headfonts"> <em>Web Enginner</em></span></h3>'],

    typeSpeed: 100,
    startDelay: 0,
    backSpeed: 30,
    backDelay: 500,
    loop: false,
    showCursor: false,
    cursorChar: "|",
    autoInsertCss: true,
    contentType: 'html',
    smartBackspace: false
  });

  /* skitter */
  //$slider = $('#portfolio ul').slick({dots:true});
  $('.skitter-large').skitter({
    theme: 'square',
    animation:'random',
    progressbar: true,
    progressbar_css: {
      backgroundColor: '#000',
      width:'100%'
    },
    label_animation: 'slideUp',
    //responsive: { small: { animation: 'fade', max_width: 768, suffix: '-small' }, medium: { animation: 'directionRight', max_width: 1024, suffix: '-medium' } }
  });

  $(window).scroll(function (){
    $('.effect-fade').each(function(){
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        var elemOffsetTop = parseInt($(this).attr('data-offsetTop'));
        if (scroll > elemPos - windowHeight + elemOffsetTop){
            $(this).addClass('effect-scroll');
        }else{
          if($(this).find('effect-scroll')) {
            $(this).removeClass('effect-scroll');
          }
        }
    });
    $('#portfolio').each(function(){
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      var elemOffsetTop = parseInt($(this).attr('data-offsetTop'));
      if (scroll > elemPos - windowHeight){
        //$('canvas:first-child').addClass('canvas-view');
        $('#canvas2').addClass('canvas-noview');
      }else{
        //if($('canvas:first-child').find('canvas-view')) {
        //  $('canvas:first-child').removeClass('canvas-view');
        //}
        if($('#canvas2').find('canvas-noview')) {
          $('#canvas2').removeClass('canvas-noview');
        }
      }
    });
  });
});
