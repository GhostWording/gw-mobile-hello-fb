(function() {

  "use strict";

  angular.module('app/config').factory('config', function() {
    return {
      'apiUrl': 'http://api.cvd.io/',
      'imagesPerDay': 8,
      'textsPerDay': 8,
      'showWelcomeTextTimes': 2,
      'imageHeightFactor': '0.55',
      'endOfFileImageUrl': 'app/messageimage/eof.jpg',
      'defaultNotificationHour': 16,
      'defaultNotificationMinute': 0,
      'googleAnalyticsTrackerId': 'UA-47718196-5',
      'googleAnalyticsDebugMode': true
    };
  });

}());
