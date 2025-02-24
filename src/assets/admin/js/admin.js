import { useSelector } from "react-redux";
import { useEffect } from 'react';

const useCustomFunctions = () => {
    const $ = useSelector((state) => state.global.jQuery);

    // Tam ekran kontrolü
    const handleFullscreen = () => {
        if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement) {
            $("body").removeClass("fullscreen-enable");
        }
    };

    // Menü tıklama işlemi
    const handleMenuClick = () => {
        $("#vertical-menu-btn").on("click", function (e) {
            e.preventDefault();
            $("body").toggleClass("sidebar-enable");
            if ($(window).width() >= 992) {
                $("body").toggleClass("vertical-collpsed");
            } else {
                $("body").removeClass("vertical-collpsed");
            }
        });

        //Sidebar aktif menü kontrolü
        // $("#sidebar-menu a").each(function () {
        //     const currentUrl = window.location.href.split(/[?#]/)[0];
        //     if (this.href === currentUrl) {
        //         $(this).addClass("active");
        //         $(this).parent().addClass("mm-active");
        //         $(this).parent().parent().addClass("mm-show");
        //         $(this).parent().parent().prev().addClass("mm-active");
        //         $(this).parent().parent().parent().addClass("mm-active");
        //         $(this).parent().parent().parent().parent().addClass("mm-show");
        //         $(this).parent().parent().parent().parent().parent().addClass("mm-active");
        //     }
        //     else{
        //         $(this).removeClass("active");
        //     }
        // });
    };

    // Sayfa yüklendiğinde aktif menü öğesini kaydırma
    useEffect(() => {
        if ($("#sidebar-menu").length && $("#sidebar-menu .mm-active .active").length) {
            const e = $("#sidebar-menu .mm-active .active").offset().top;
            if (e > 300) {
                $("html, body").animate({ scrollTop: e - 300 }, "slow");
            }
        }
    }, []);

    // Preloader ve yükleme animasyonu
    useEffect(() => {
        $(window).on("load", function () {
            $("#status").fadeOut();
            $("#preloader").delay(350).fadeOut("slow");
        });
    }, []);

    // Fullscreen değişiklikleri
    useEffect(() => {
        const fullscreenChange = (e) => handleFullscreen(e);
        document.addEventListener("fullscreenchange", fullscreenChange);
        document.addEventListener("webkitfullscreenchange", fullscreenChange);
        document.addEventListener("mozfullscreenchange", fullscreenChange);

        return () => {
            document.removeEventListener("fullscreenchange", fullscreenChange);
            document.removeEventListener("webkitfullscreenchange", fullscreenChange);
            document.removeEventListener("mozfullscreenchange", fullscreenChange);
        };
    }, []);

    return { handleMenuClick };
}

export default useCustomFunctions;