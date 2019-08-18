const request = require("request"); 
const OK_STATUS = [200];
const URL_BASE = "http://proempresa.com.co/api/v1";

function Proempresa ( token = null, env = null) {
	this._token = token;
	this.env = env;
};

Proempresa.prototype.request = function (endpoint, method, body = null) {
	return new Promise ( (resolve, reject ) => {
		let opts = {
			method,
			url: URL_BASE + endpoint,
			json: true,
			body,
			headers: {
				Authorization: "Bearer " + this._token
			}				
		};
		request(opts, function(err, body, response) {
			if (err) return reject(err);
			if (!OK_STATUS.includes(body.statusCode)) return reject(response);
			resolve(response);
		});
	});
};

Proempresa.prototype.send = function(data) {
	let data = {
		cellphone: data.cellphone,
		message: data.message
	};
	return this.request('/sms/send', 'POST', data )
};

Proempresa.prototype.sendMassive = function(data) {
	let data = data;
	return this.request('/sms/sendMassive', 'POST', data )
};

module.exports = Proempresa;