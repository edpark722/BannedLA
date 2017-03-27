sabio.services.registration = sabio.services.registration || {};

sabio.services.registration.insertNewUser = function (data, onSuccess, onError) {
    var url = "/api/public/add";

    var settings = {
        cache: false
        , contentType: "application/x-www-form-urlencoded; charset=UTF-8"
        , data: data
        , dataType: "json"
        , success: onSuccess
        , error: onError
        , type: "POST"
    };
    $.ajax(url, settings);

}

//sabio.services.registration.update = function (id, data, onSuccess, onError) {

//    var url = "/api/jobs/" + id;
//    var settings = {
//        cache: false
//    , contentType: "application/x-www-form-urlencoded; charset=UTF-8"
//    , data: data
//    , dataType: "json"
//    , success: onSuccess
//    , error: onError
//    , type: "PUT"
//    };

//    $.ajax(url, settings);

//}

//sabio.services.registration.updatePaymentNonce = function (id, data, onSuccess, onError) {

//    var url = "/api/jobs/update/" + id;
//    var settings = {
//        cache: false
//    , contentType: "application/x-www-form-urlencoded; charset=UTF-8"
//    , data: data
//    , dataType: "json"
//    , success: onSuccess
//    , error: onError
//    , type: "PUT"
//    };

//    $.ajax(url, settings);

//}







//sabio.services.registration.get = function (onAjaxSuccess, onAjaxError) {
//    //var url = sabio.services.apiPrefix + "/api/jobs/;
//    var url = "/api/jobs/"

//    var settings = {
//        cache: false
//            , contentType: "application/x-www-form-urlencoded; charset=UTF-8"
//            , dataType: "json"
//            , success: onAjaxSuccess
//            , error: onAjaxError
//            , type: "GET"
//    };

//    $.ajax(url, settings);

//}


//sabio.services.registration.getById = function (id, onSuccess, onError) {

//    var url = "/api/jobs/" + id;
//    var settings = {
//        cache: false
//    , contentType: "application/x-www-form-urlencoded; charset=UTF-8"
//    , dataType: "json"
//    , success: onSuccess
//    , error: onError
//    , type: "GET"
//    };

//    $.ajax(url, settings);

//}

//sabio.services.registration.delete = function (id, onSuccess, onError) {


//    var url = "/api/jobs/" + id;
//    var settings = {
//        cache: false
//    , contentType: "application/x-www-form-urlencoded; charset=UTF-8"
//    , dataType: "json"
//    , success: onSuccess
//    , error: onError
//    , type: "DELETE"
//    };

//    $.ajax(url, settings);

//}

