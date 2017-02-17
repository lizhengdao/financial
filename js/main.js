/**
 * Created by weiyi on 2017/1/19.
 */

//$(function () {
//    $('.banner').unslider({
//        autoplay: true,
//        speed: 500,
//        delay: 3000,
//        dots: true,
//        fluid: true
//    });
//
//
//
//});
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
    });
});