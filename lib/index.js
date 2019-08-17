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

/*
{
	"token": "123456789abcdefg",
	"data": {
		"message": "Mensaje de test",
		"cellphone": "3137775301"
	}
}

{
	"token": "123456789abcdefg",
	"data": [
		{ "cellphone": "3137775301", "message": "mensaje de test 1"},
		{ "cellphone": "3137775301", "message": "mensaje de test 2"},
		{ "cellphone": "3137775301", "message": "mensaje de test 3"}
	]
}
*/