
function main() {

    (function () {
      
      
          // Portfolio isotope filter
        $(window).load(function() {
            var $container = $('.portfolio-items');
            $container.isotope({
                filter: '*',
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            $('.cat a').click(function() {
                $('.cat .active').removeClass('active');
                $(this).addClass('active');
                var selector = $(this).attr('data-filter');
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });
                return false;
            });
    
        });
        
        // Nivo Lightbox 
        $('.portfolio-item a').nivoLightbox({
                effect: 'slideDown',  
                keyboardNav: true,                            
            });
            
        // Testimonial Slider
              $(document).ready(function() {
              $("#testimonial").owlCarousel({
            navigation : false, // Show next and prev buttons
            slideSpeed : 300,
            paginationSpeed : 400,
            singleItem:true
            });
    
          });	
    
    }());
    
    
    }
    main();