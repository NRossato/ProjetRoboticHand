'use strict';

angular.module('robot.manager', [
    'itesoft',
    'local-storage.services',
    'ui.hand',
    'ui.step',
    'ngRoute',
    'ngSanitize',
    'pascalprecht.translate',
    'ui.bootstrap.dropdown'
    ])
    .config(['ITlocalStorageProvider','$translateProvider', '$translatePartialLoaderProvider',
        function (ITlocalStorageProvider, $translateProvider, $translatePartialLoaderProvider) {
        ITlocalStorageProvider.defaultKey = 'ROBOT-MANAGER';

        // Declare languages mapping
        $translateProvider.registerAvailableLanguageKeys(['en', 'fr', 'de'], {
            'en_US': 'en',
            'en_GB': 'en',
            'fr_FR': 'fr',
            'fr-CA': 'fr',
            'de-DE': 'de'
        }).determinePreferredLanguage();

        // Use partial loader
        $translateProvider.useLoader('$translatePartialLoader', {
            urlTemplate: 'assets/locale/{lang}/{part}-{lang}.json'
        });

        $translateProvider.useSanitizeValueStrategy();
    }])
    .run(['$rootScope', '$route', function ($rootScope, $route) {
        $rootScope.$on('$routeChangeSuccess', function () {
            $rootScope.pageTitle = $route.current.title;
        });
    }]);

