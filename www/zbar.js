var argscheck = require('cordova/argscheck'),
    exec      = require('cordova/exec');

function ZBar () {};

ZBar.prototype = {

    scan: function (params, success, failure)
    {
        argscheck.checkArgs('*fF', 'CsZBar.scan', arguments);

        params = params || {};
        if(params.text_title === undefined) params.text_title = "Scan QR Code";
        if(params.text_instructions === undefined) params.text_instructions = "Please point your camera at the QR code.";
        if(params.camera != "front") params.camera = "back";
        if(params.flash != "on" && params.flash != "off") params.flash = "auto";
        if(params.height === undefined) params.height = "0.5";

        exec(success, failure, 'CsZBar', 'scan', [params]);
    },

    cancel: function () {
        return new Promise(function(resolve, reject) {
            exec(function(message) {
                resolve(message);
            }, function(message) {
                reject(message);
            }, 'CsZBar', 'cancel', null);
        });
    },
};

module.exports = new ZBar;
