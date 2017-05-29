'use strict';

angular.module('app', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/landing');

  $stateProvider.state('home', {
    url: '/home',
    templateUrl: './views/home.html',
    controller: 'mainCtrl'
  }).state('landing', {
    url: '/landing',
    templateUrl: './views/landing.html'
  }).state('motivation', {
    url: '/motivation',
    templateUrl: './views/motivation.html',
    controller: 'mainCtrl'
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

  $scope.recipes = mainSrv.getRecipes();
  $scope.recipes2 = mainSrv.getRecipes2();

  $scope.showMe = function () {
    $scope.show = true;
  };
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

  this.getRecipes = function () {
    return recipeData;
  };

  this.getRecipes2 = function () {
    return recipeData2;
  };
});

var recipeData = [{
  "name": "Vegetable Lentil Soup",
  "ingredients": ["2 T Olive Oil", "1 Onion", "2 Carrots", "2 Celery", "1 Clove Garlic", "1 can Italian Stewed Tomatoes", "32 oz Organic Vegetable Broth", "1 Sweet Potato", "1 Cup Lentils", "3 Cups Water", "1 T Summer Savory", "2 T Sea Salt"],
  "directions": ["1. Heat olive oil in enamel cast-iron Dutch Oven over medium-high heat.", "2. Chop onion, slice carrots and celery, and saute for 4 min.", "3. Mince garlic and add, saute-ing for 2 more minutes.", "4. Add stewed tomatoes, sliced and quartered sweet potato, vegetable broth, water, lentils, salt, and summer savory.", "5. Bring to a boil then set to simmer for 50 min.", "6. Let cool for about 20-30 min for quick eating."]
}];
var recipeData2 = [{
  "name": "5 Minute Artisan Bread",
  "ingredients": ["3 cups lukewarm water", "1 packet fast-rise yeast", "1 1/2 T Sea Salt", "6 1/2 C unbleached all-purpose flour"],
  "directions": ["1. Warm the water slightly. It should feel just a little warmer than body temperature. Warm water will rise the dough to the right point for storage in about 2 hours. With cold water it will need 3-4 hours.", "2. Add the yeast to the water in a 5 quart bowl or, preferably, in a resealable, lidded (not airtight) plastic food container or food-grade bucket. Don't worry about getting it all to dissolve.", "3. Mix in the flour and salt - kneading is unnecessary. Add all of the flour at once, measuring it in with dry-ingredient measuring cups, by gently scooping up the flour, then sweeping the top level with a knife or spatula. Don't press down into the flour as you scoop or you'll throw off the measurement. Mix with a wooden spoon, a high-capacity food processor (14 cups or larger) fitted with the dough attachment, or a heavy duty stand mixer fitted with the dough hook until the mixture is uniform. If you're hand mixing and it becomes too difficult to incorporate all the flour with the spoon, you can reach into your mixing vessel with very wet hands and press the mixture together. Don't knead, it isn't necessary. You're finished when everything is uniformly moist, without dry patches. It takes a few minutes, and will yield a dough that is wet and loose enough to conform to the shape of its container.", "4. Allow to rise. Cover with lid (not airtight or it could explode the lid off). Allow the mixture to rise at room temperature until it begins to collapse (or at least flattens on the top), approx 2 hours, depending on room temperature, and initial water temperature Longer rising times, up to 5 hours, won't harm the result.", "5. You can use a portion of the dough any time after this period. Fully refrigerated dough is less sticky and easier to work with than dough at room temperature.", "On Baking Day:", "1. prepare your loaf tin, tray, or whatever you're baking it in/on. Sprinkle the surface of your refrigerated dough with four. Pull up and cut of a grapefruit-size piece of dough (c 1 lb), using a serrated knife.", "2. Hold the mass of dough in your hands and add a little more flour as needed so it won't stick to your hands. Gently stretch the surface of the dough around to the bottom on all 4 sides, rotating the ball a quarter-turn as you go. Most of the dusting flour will fall off - that's fine, it isn't meant to be incorporated. The bottom of the loaf may appear to be a collection of bunched ends, but it will sort itself out during resting and baking.", "3. Rest the loaf and let it rise in the form, on the tray/pizza peel, for about 40 minutes Depending on the age of the dough, you may not see much rise during this period. That's fine, more rising will occur during baking.", "4. Twenty minutes before baking, preheat the oven to 450°F Place an empty broiler tray for holding water on any other shelf that won't interfere with the rising bread.", "5. Dust and Slash. Dust the top of the loaf liberally with flour, which will allow the slashing knife to pass without sticking. Slash a quarter inch deep cross, diagonal lines, or tic-tac-toe pattern on top using a serrated knife.", "6. After a 20 min preheat you're ready to bake, even though the oven thermometer won't be at full temperature yet. Put your loaf in the oven. Pour about 1 cup of hot water (from the tap) into the broiler tray and close the oven to trap the steam.", "7. Bake for about 30 minutes, or until the crust is nicely browned and firm to the touch.", "8. Store the rest of the dough in the fridge in your lidded (not airtight) container and use it over the next 14 days. The flavour and texture improves, becoming like sourdough. Even 24 hours of storage improves the flavour."]
}];

// var runPlan = [
//   {
//  "week1": "Week 1"
//  , "day": [
//    "3 cups lukewarm water"
//  ,  "1 packet fast-rise yeast"
//  ,  "1 1/2 T Sea Salt"
//  ,  "6 1/2 C unbleached all-purpose flour"
//  ]
//  , "directions": [
//  "1. Warm the water slightly. It should feel just a little warmer than body temperature. Warm water will rise the dough to the right point for storage in about 2 hours. With cold water it will need 3-4 hours."
//  , "2. Add the yeast to the water in a 5 quart bowl or, preferably, in a resealable, lidded (not airtight) plastic food container or food-grade bucket. Don't worry about getting it all to dissolve."
//  , "3. Mix in the flour and salt - kneading is unnecessary. Add all of the flour at once, measuring it in with dry-ingredient measuring cups, by gently scooping up the flour, then sweeping the top level with a knife or spatula. Don't press down into the flour as you scoop or you'll throw off the measurement. Mix with a wooden spoon, a high-capacity food processor (14 cups or larger) fitted with the dough attachment, or a heavy duty stand mixer fitted with the dough hook until the mixture is uniform. If you're hand mixing and it becomes too difficult to incorporate all the flour with the spoon, you can reach into your mixing vessel with very wet hands and press the mixture together. Don't knead, it isn't necessary. You're finished when everything is uniformly moist, without dry patches. It takes a few minutes, and will yield a dough that is wet and loose enough to conform to the shape of its container."
//  , "4. Allow to rise. Cover with lid (not airtight or it could explode the lid off). Allow the mixture to rise at room temperature until it begins to collapse (or at least flattens on the top), approx 2 hours, depending on room temperature, and initial water temperature Longer rising times, up to 5 hours, won't harm the result."
//  , "5. You can use a portion of the dough any time after this period. Fully refrigerated dough is less sticky and easier to work with than dough at room temperature."
//  , "On Baking Day:"
//  , "1. prepare your loaf tin, tray, or whatever you're baking it in/on. Sprinkle the surface of your refrigerated dough with four. Pull up and cut of a grapefruit-size piece of dough (c 1 lb), using a serrated knife."
//  , "2. Hold the mass of dough in your hands and add a little more flour as needed so it won't stick to your hands. Gently stretch the surface of the dough around to the bottom on all 4 sides, rotating the ball a quarter-turn as you go. Most of the dusting flour will fall off - that's fine, it isn't meant to be incorporated. The bottom of the loaf may appear to be a collection of bunched ends, but it will sort itself out during resting and baking."
//  , "3. Rest the loaf and let it rise in the form, on the tray/pizza peel, for about 40 minutes Depending on the age of the dough, you may not see much rise during this period. That's fine, more rising will occur during baking."
//  , "4. Twenty minutes before baking, preheat the oven to 450°F Place an empty broiler tray for holding water on any other shelf that won't interfere with the rising bread."
//  , "5. Dust and Slash. Dust the top of the loaf liberally with flour, which will allow the slashing knife to pass without sticking. Slash a quarter inch deep cross, diagonal lines, or tic-tac-toe pattern on top using a serrated knife."
//  , "6. After a 20 min preheat you're ready to bake, even though the oven thermometer won't be at full temperature yet. Put your loaf in the oven. Pour about 1 cup of hot water (from the tap) into the broiler tray and close the oven to trap the steam."
//  , "7. Bake for about 30 minutes, or until the crust is nicely browned and firm to the touch."
//  , "8. Store the rest of the dough in the fridge in your lidded (not airtight) container and use it over the next 14 days. The flavour and texture improves, becoming like sourdough. Even 24 hours of storage improves the flavour."
//  ],
//  }
// ];
//# sourceMappingURL=bundle.js.map
