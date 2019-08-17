'use strict';

const BASE_URL = 'http://http://proempresa.com.co/api/v1';
const json = true;


function Resource(proempresa) {
	this._proempresa
}

Resource.prototype.request = function(endpoint, method, data) {

	return new Promise( ( resolve, reject ) => {
		let opts = {
			method,
			url: BASE_URL+endpoint,
			headers: {
				Authorization: 'Beader '+data.token
			},
			json,
			form: data.data
		};
		request(opts, function(err, body, respose) {
			if (err)	return reject(err);
				resolve(response);
		})
	});
}

module.exports = Resource;

