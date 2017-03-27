var sabio = {
    utilities: {}
    , layout: {}
    , page: {
        handlers: {
        }
        , startUp: null
    }

    , services: {
        apiPrefix: "http://localhost:1552/",
        media: {}
    }
    , ui: {}
  
};
sabio.moduleOptions = {
    APPNAME: "SabioApp"
        , extraModuleDependencies: []
        , runners: []
        , page: sabio.page//we need this object here for later use
}


sabio.layout.startUp = function () {

    console.debug("sabio.layout.startUp");

    //this does a null check on sabio.page.startUp
    if (sabio.page.startUp) {
        console.debug("sabio.page.startUp");
        sabio.page.startUp();
    }

};


//Custom Jquery Validation customization functions:
//Add the fields below under the ("Form").validate({
//errorElement: "small",
//errorClass: "help-block",
//errorPlacement: sabio.layout.errorPlacement,
//success: sabio.layout.validateSuccess,
sabio.layout.errorPlacement = function (error, element) {
    //console.log("Errors Rendered", error, element);
    element.closest(".form-group").addClass("has-error");

    //this one inserts after the input
    error.insertAfter(element);
}
sabio.layout.validateSuccess = function (small) {
    small.closest(".form-group").removeClass("has-error");
    small.removeClass("help-block");

}



sabio.APPNAME = "SabioApp";//legacy



$(document).ready(sabio.layout.startUp);

