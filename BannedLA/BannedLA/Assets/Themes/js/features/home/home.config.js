
(function () {
    "use strict";

    angular.module(APPNAME)
        .config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {

            //$routeProvider.when('/',
            //{
            //    templateUrl: '/Assets/Themes/bringpro/js/features/backoffice/templates/jobs/jobsIndex.html',
            //    controller: 'jobsController',
            //    controllerAs: 'job'
            //}).when('/jobs/',  //This will redirect to create mode
            //{
            //    templateUrl: 'Assets/Themes/bringpro/js/features/backoffice/templates/jobs/jobsForm.html',
            //    controller: 'jobsFormController',
            //    controllerAs: 'main'
            //}).when('/jobs/:id',  //This will route to edit mode
            //{
            //    templateUrl: 'Assets/Themes/bringpro/js/features/backoffice/templates/jobs/jobsForm.html',
            //    controller: 'jobsFormController',
            //    controllerAs: 'main'
            //}).when('/users',
            //{
            //    templateUrl: 'Assets/Themes/bringpro/js/features/backoffice/templates/users/adminUserIndex.html',
            //    controller: 'adminUserController',
            //    controllerAs: 'admin'
            //}).when('/users/create', //this will route to create mode for users
            //{
            //    templateUrl: 'Assets/Themes/bringpro/js/features/backoffice/templates/users/adminUserForm.html',
            //    controller: 'adminUserFormController',
            //    controllerAs: 'admin'
            //}).when('/users/manage/:id', //this will route to edit mode for users
            //{
            //    templateUrl: 'Assets/Themes/bringpro/js/features/backoffice/templates/users/adminUserForm.html',
            //    controller: 'adminUserFormController',
            //    controllerAs: 'admin'
            //}).when('/coupons', //coupons needs more work
            //{
            //    templateUrl: 'Assets/Themes/bringpro/js/features/backoffice/templates/coupons/couponList.html',
            //    controller: 'couponsController',
            //    controllerAs: 'main'
            //}).when('/settings', //this is the main Index for settings
            //{
            //    templateUrl: 'Assets/Themes/bringpro/js/features/backoffice/templates/settings/settingsIndex.html',
            //    controller: 'settingsController',
            //    controllerAs: 'set'
            //}).when('/settings/add', //this will redirect to add new settings form
            //{
            //    templateUrl: 'Assets/Themes/bringpro/js/features/backoffice/templates/settings/settingsForm.html',
            //    controller: 'settingsFormController',
            //    controllerAs: 'setForm'
            //}).when('/settings/edit/:id', //This is th edit settings
            //{
            //    templateUrl: 'Assets/Themes/bringpro/js/features/backoffice/templates/settings/settingsForm.html',
            //    controller: 'settingsFormController',
            //    controllerAs: 'setForm'
            //}).when('/reports', //This is the report 
            //{
            //    templateUrl: 'Assets/Themes/bringpro/js/features/backoffice/templates/reports/reports.html',
            //    controller: 'reportsController',
            //    controllerAs: 'report'
            //}).when('/website', //This is the main Index for website admin
            //{
            //    templateUrl: 'Assets/Themes/bringpro/js/features/backoffice/templates/websites/websiteDashboard.html',
            //    controller: 'websiteAdminController',
            //    controllerAs: 'webAdmin'
            //});


            $locationProvider.html5Mode(false).hashPrefix('');
        }]);

})();