﻿(function () {
    "use strict";


    //  we add baseController as a service factory (even though it will be extended by controllers, not services) so it can be injected
    angular.module(APPNAME)
    .factory('$baseController', BaseController);

    BaseController.$inject = ['$document', '$log', '$route', '$routeParams', '$systemEventService', '$alertService', '$sabio'];

    function BaseController(
        $document,
        $log,
        $route,
        $routeParams,
        $systemEventService,
        $alertService,
        $sabio

        ) {

        var base = {
            $document: $document
            , $log: $log
            , merge: $.extend
            , mapData: $.map
            , $sabio: $sabio
            , $route: $route
            , $routeParams: $routeParams
            , $systemEventService: $systemEventService
            , $alertService
            , setUpCurrentRequest: function (viewModel) {

                viewModel.currentRequest = { originalPath: "/", isTop: true };

                if (viewModel.$route.current) {
                    viewModel.currentRequest = viewModel.$route.current;
                    viewModel.currentRequest.locals = {};
                    viewModel.currentRequest.isTop = false;
                }

                viewModel.$log.log("setUpCurrentRequest firing:");
                viewModel.$log.debug(viewModel.currentRequest);
            }
        };

        base.getParentController = _getParentController;

        function _getParentController(controllerName) {

            var controller = null;

            if (this.$scope && this.$scope.$parent) {
                controller = this.$scope.$parent[controllerName];
            }

            return controller;

        }

        var rawUser = $("#currentUser").html();
        if (typeof rawUser != "undefined") {
            rawUser = rawUser.trim();
            base.currentUser = (rawUser) ? JSON.parse(rawUser) : null;
        } else {
            base.currentUser = null;
        }

        var rawSite = $("#currentWebsite").html();
        if (typeof rawSite != "undefined") {
            rawSite = rawSite.trim();
            base.currentWebsite = (rawSite) ? JSON.parse(rawSite) : null;
        } else {
            base.currentWebsite = {id:55,slug:"bringpro"};
        }

        return base;
    }

})();