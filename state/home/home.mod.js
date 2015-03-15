(function() {

  "use strict";

  angular.module('state/home', [
    'common/services/helperSvc',
    'mobile/config',
    'mobile/settings',
    'mobile/images',
    'mobile/slider/fixedslider',
    'mobile/popup/sendmethod',
    'mobile/localisation',
    'mobile/contact',
    'mobile/send/sms',
    'mobile/send/email',
    'state/home/settings',
    'state/home/sendmethod',
    'state/home/smswarn',
    'state/home/emailselect',
    'state/home/mobileselect',
    'state/home/sendresult',
    'mumpetname',
    'texts'
  ]);

}());
