$( document ).ready(function() {
    $('.banner-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        autoplayTimeout:5000,
        responsiveClass:true,
        dots: true,
        responsive:{
            0:{
                items:1,
                nav: true 
            }
        }
    })
    $('.banner .arrow.prev').click(function() {
        $('.banner-carousel').trigger('prev.owl.carousel');
    });
    $('.banner .arrow.next').click(function() {
        $('.banner-carousel').trigger('next.owl.carousel');
    });

    $('.team-carousel .owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        responsiveClass:true,
        dots: false,
        responsive:{
            0:{
                items:1,
                nav: false 
            },
            480:{
                items:2,
                nav: false 
            },
            768:{
                items:3,
                nav: false 
            }
        }
    })
    $('.team .arrow.prev').click(function() {
        $('.team-carousel .owl-carousel').trigger('prev.owl.carousel');
    });
    $('.team .arrow.next').click(function() {
        $('.team-carousel .owl-carousel').trigger('next.owl.carousel');
    });
    $('.dropdown .select').click(function(){
        $(this).parent().toggleClass('active')
        if($(this).parents('.contact-box').hasClass('disable')){
            $(this).parent().removeClass('active')
        }
    });
    $('.dropdown .option').click(function(){
        var content = $(this).html();
        $('.dropdown .select').html(content)
        $('.dropdown').toggleClass('active')
    })
    
    $(window).scroll(function () {
        screenSize = $(window).height();
        scrollHeight = $(window).scrollTop();
        if(scrollHeight > screenSize/2 ){
            $('.scroll-top').addClass('active')
        }else{
            $('.scroll-top').removeClass('active')
        }
    });

    $('.scroll-top .box').click(function(){
        window.scrollTo(0, 0)
    })

    if($('.contact-box').hasClass('disable')){
        $(this).find("input").prop("disabled", true)
        $(this).find("textarea").prop("disabled", true)
    }

    $('.contact-list__li').click(function(){
        $('.contact-list__li').removeClass('active')
        $(this).addClass('active')
        var id = $(this).attr('data-id');
        $('.contact-box').addClass('disable')
        $(`#${id}`).removeClass('disable')
    })

    $('.menu').click(function(){
        $('.navigation').toggleClass('active')
    })
    $(document).mouseup(function(e){
        var container = $(".navigation");

        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && container.has(e.target).length === 0 && $(".navigation").hasClass('active')) 
        {
            container.removeClass('active');
        }
    });
});