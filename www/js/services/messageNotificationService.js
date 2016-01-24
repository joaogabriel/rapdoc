services.factory("messageNotification", function (ionicToast) {

  // https://github.com/rajeshwarpatlolla/ionic-toast-demo
  
  var _sendInfo = function(message) {
    ionicToast.show(message, 'middle', false, 2500);
  };

  return {
    sendInfo: _sendInfo
  };

});
