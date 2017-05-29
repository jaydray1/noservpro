'use strict';

angular.module('app', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/landing');

  $stateProvider.state('home', {
    url: '/home',
    templateUrl: './views/home.html'
  }).state('landing', {
    url: '/landing',
    templateUrl: './views/landing.html'
  }).state('motivation', {
    url: '/motivation',
    templateUrl: './views/motivation.html'
  }).state('about', {
    url: '/about',
    templateUrl: './views/about.html'
  }).state('signup', {
    url: '/signup',
    templateUrl: './views/signup.html'
  }).state('signup-form-lion', {
    url: '/signup-form-lion',
    templateUrl: './views/signup-form-lion.html'
  }).state('signup-form-gazelle', {
    url: '/signup-form-gazelle',
    templateUrl: './views/signup-form-gazelle.html'
  });
});
'use strict';

angular.module('app').controller('mainCtrl', function ($scope, mainSrv) {

  $scope.quote = mainSrv.getQuote().then(function (response) {
    $scope.quote = response.data;
  });
});
'use strict';

angular.module('app').directive('lionvid', function () {

    $(document).ready(function () {

        scaleVideoContainer();

        initBannerVideoSize('.video-container .poster img');
        initBannerVideoSize('.video-container .filter');
        initBannerVideoSize('.video-container video');

        $(window).on('resize', function () {
            scaleVideoContainer();
            scaleBannerVideoSize('.video-container .poster img');
            scaleBannerVideoSize('.video-container .filter');
            scaleBannerVideoSize('.video-container video');
        });
    });

    function scaleVideoContainer() {

        var height = $(window).height() + 5;
        var unitHeight = parseInt(height) + 'px';
        $('.homepage-hero-module').css('height', unitHeight);
    }

    function initBannerVideoSize(element) {

        $(element).each(function () {
            $(this).data('height', $(this).height());
            $(this).data('width', $(this).width());
        });

        scaleBannerVideoSize(element);
    }

    function scaleBannerVideoSize(element) {

        var windowWidth = $(window).width(),
            windowHeight = $(window).height() + 5,
            videoWidth,
            videoHeight;

        // console.log(windowHeight);

        $(element).each(function () {
            var videoAspectRatio = $(this).data('height') / $(this).data('width');

            $(this).width(windowWidth);

            if (windowWidth < 1000) {
                videoHeight = windowHeight;
                videoWidth = videoHeight / videoAspectRatio;
                $(this).css({ 'margin-top': 0, 'margin-left': -(videoWidth - windowWidth) / 2 + 'px' });

                $(this).width(videoWidth).height(videoHeight);
            }

            $('.homepage-hero-module .video-container video').addClass('fadeIn animated');
        });
    }
});
"use strict";
'use strict';

angular.module('app').service('mainSrv', function ($http) {

  this.getQuote = function () {
    return $http.get('http://quotzzy.co/api/quote');
  };
});

// var recipeData = [
// 		{"name": "Vegetable Lentil Soup", "email": "convallis.ante.lectus@euneque.co.uk", "dateEmployed": "01/01/2016", "phone": "1-862-996-4921"},
// 		{"name": "Karen Delgado", "email": "dapibus@Morbiquis.ca", "dateEmployed": "10/03/2014", "phone": "403-8410"},
// 		{"name": "Ursula Melendez", "email": "sit.amet@nullaInteger.edu", "dateEmployed": "07/06/2016", "phone": "1-818-102-1801"}
//   ]
//# sourceMappingURL=bundle.js.map
