const Proempresa = require('../lib');
const proempresa = new Proempresa('YOU_ULTRASECRET_TOKEN');


const send = async function() {
	try {

		let cellphone = '3207005000';
		let message = 'A beautiful message';
		
		let result = await proempresa.send(cellphone, message);
		console.log('RESULT: ', result);
	} catch (err) {
		console.log(err);
	}
}

send();