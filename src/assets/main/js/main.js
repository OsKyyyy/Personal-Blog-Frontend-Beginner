import { useSelector } from "react-redux";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import "waypoints/lib/jquery.waypoints";
import "jquery.animate-number";

export const useCustomFunctions = () => {

    const $ = useSelector((state) => state.global.jQuery);

    const fullHeight = () => {
        if (!$) return;
        $('.js-fullheight').css('height', $(window).height());
        $(window).resize(function(){
            $('.js-fullheight').css('height', $(window).height());
        });
    }

    const loader = () => {
        const timer = setTimeout(function() {
            if($('#ftco-loader').length > 0) {
                $('#ftco-loader').removeClass('show');
            }
        }, 1);

        return () => clearTimeout(timer);
    }

    const carousel = () => {
        $('.owl-carousel').owlCarousel({
            loop:true,
            autoplay: true,
            margin:0,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            nav:false,
            autoplayHoverPause: false,
            items: 1,
            navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        });
    }

    const scrollWindow = () => {
        $(window).scroll(function(){
            let $w = $(this),
                st = $w.scrollTop(),
                navbar = $('.ftco_navbar'),
                sd = $('.js-scroll-wrap');

            if (st > 150) {
                if ( !navbar.hasClass('scrolled') ) {
                    navbar.addClass('scrolled');
                }
            }
            if (st < 150) {
                if ( navbar.hasClass('scrolled') ) {
                    navbar.removeClass('scrolled sleep');
                }
            }
            if ( st > 350 ) {
                if ( !navbar.hasClass('awake') ) {
                    navbar.addClass('awake');
                }

                if(sd.length > 0) {
                    sd.addClass('sleep');
                }
            }
            if ( st < 350 ) {
                if ( navbar.hasClass('awake') ) {
                    navbar.removeClass('awake');
                    navbar.addClass('sleep');
                }
                if(sd.length > 0) {
                    sd.removeClass('sleep');
                }
            }
        });
    }

    const counter = () => {
        if (!$) return;
        $('#section-counter, .hero-wrap, .ftco-counter, .ftco-about').waypoint(
            function (direction) {
                if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
                    let comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');

                    $('.number').each(function () {
                        let $this = $(this),
                            num = $this.data('number');

                        $this.animateNumber(
                            {
                                number: num,
                                numberStep: comma_separator_number_step,
                            },
                            7000
                        );
                    });
                }
            },
            { offset: '95%' }
        );
    };

    return { fullHeight, loader, carousel, scrollWindow, counter }

};