import $ from 'jquery';
import slick from "slick-carousel";
import WOW from "wowjs";

$(() => {
  const wow = new WOW.WOW({
		live: false,
		boxClass: "wow",
	});

	wow.init();

    $('.fantastic__wrap__list').slick({
        infinite: true, 
        slidesToShow: 1, 
        slidesToScroll: 1,
        prevArrow: $('.fantastic__wrap__button-prev'),
        nextArrow: $('.fantastic__wrap__button-next'),
    });

    $('.fantastic__list__card-wrap-item-button').click(function () {
        $('.fantastic__list__card-back').removeClass('flip-front');
        $('.fantastic__list__card-front').removeClass('flip-back');
        $('.fantastic__list__card-back').addClass('flip-back');
        $('.fantastic__list__card-front').addClass('flip-front');
    });

    $('.fantastic__list__card-back-close').click(function () {
        $('.fantastic__list__card-back').removeClass('flip-back');
        $('.fantastic__list__card-front').removeClass('flip-front');
        $('.fantastic__list__card-back').addClass('flip-front');
        $('.fantastic__list__card-front').addClass('flip-back');
    });
});
