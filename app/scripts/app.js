import $ from 'jquery';
import WOW from "wowjs";

$(() => {
    const wow = new WOW.WOW({
        live: false,
        boxClass: "wow",
    });

    wow.init();
});
