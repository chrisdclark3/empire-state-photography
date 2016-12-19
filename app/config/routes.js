(function() {

  'use strict';

  angular
    .module('app.routes', ['ui.router'])
    .config(Config);

  function Config($urlRouterProvider, $stateProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/home")
      //
      // Now set up the states
    $stateProvider
      .state('app', {
        abstract: true,
        controller: 'MainController',
        templateUrl: "../main/main.html"
      })
      .state('app.home', {
        url: "^/home",
        controller: 'PhotoAlbumController',
        templateUrl: "../photo-album/photo-album.html"
      })
      .state('app.contact', {
        url: "^/contact",
        controller: 'ContactController',
        templateUrl: "../contact/contact.html"
      })
      .state('app.about', {
        url: "^/about",
        controller: 'AboutController',
        templateUrl: "../about/about.html"
      })
      .state('app.pricing', {
        url: "^/pricing",
        controller: 'PricingController',
        templateUrl: "../pricing/pricing.html"
      })
      .state('app.terms-and-conditions', {
        url: "^/terms-and-conditions",
        controller: 'TermsAndConditionsController',
        templateUrl: "../terms-and-conditions/terms-and-conditions.html"
      })
      .state('app.privacy-policy', {
        url: "^/privacy-policy",
        controller: 'PrivacyPolicyController',
        templateUrl: "../privacy-policy/privacy-policy.html"
      })

  }

}());
