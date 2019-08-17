var util = require('util');
var Resource = require('./');

module.exports = sms;

function sms(proempresa) {
	Resource.call(this.proempresa);
}

util.inherits(sms, Resource);

sms.prototype.send = function(options) {
	return this.request('/sms/send', 'POST', data )
}

sms.prototype.sendMassive = function(options) {
	return this.request('/sms/sendMassive', 'POST', data )
}