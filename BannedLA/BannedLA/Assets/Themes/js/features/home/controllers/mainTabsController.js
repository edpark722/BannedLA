
(function () {
    "use strict"
    angular.module(APPNAME)
    .controller("homeController", HomeController)

    HomeController.$inject = [];
    function HomeController() {
        var vm = this;
        var revapi;

        render();

        function render() {
            revapi = jQuery("#rev_slider").revolution({
                sliderType: "standard",
                sliderLayout: "auto",
                delay: 9000,
                navigation: {
                    arrows: { enable: true }
                },
                gridwidth: 1230,
                gridheight: 500
            });
        }
    }
})();


///******************************************
// -	PREPARE PLACEHOLDER FOR SLIDER	-
// ******************************************/

//var revapi;
//jQuery(document).ready(function () {
//    console.log("mic check ng")
//    revapi = jQuery("#rev_slider").revolution({
//        sliderType: "standard",
//        sliderLayout: "auto",
//        delay: 9000,
//        navigation: {
//            arrows: { enable: true }
//        },
//        gridwidth: 1230,
//        gridheight: 500
//    });
//});	/*ready*/