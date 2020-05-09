$(document).ready(function () {


    $('.sliders').slick({
        dots: true,
       // arrows: false,
        infinite: true,
        //slidesToShow: 1,
        //slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 500,
        fade: true,
        cssEase: 'ease-out',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    
                }
            },
            {
                breakpoint: 480,
                settings: {
                    
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]

  });



    $('.sliders-testimonial').slick({
        dots: false,
        // arrows: false,
        infinite: true,
        //slidesToShow: 1,
        //slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 500,
        fade: true,
        cssEase: 'ease-out',
       

    });


   

    

   



});