/**
 * Created by weiyi on 2017/1/19.
 */
$(function() {
    $('.banner').unslider({
        autoplay:true,
        speed: 500,               //  The speed to animate each slide (in milliseconds)
        delay: 2000,
        complete: function() {},  //  A function that gets called after every slide animation
        keys: true,               //  Enable keyboard (left, right) arrow shortcuts
        dots: true,               //  Display dot navigation
        fluid: true              //  Support responsive design. May break non-responsive designs
    });
});
