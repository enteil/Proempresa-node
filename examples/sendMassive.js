const Proempresa = require('../lib');
const proempresa = new Proempresa('YOU_ULTRASECRET_TOKEN');


const sendMassive = async function() {
	try {

		let messages = [
			{
				cellphone: '3207005000',
				message: 'A beautiful message 1'
			},
			{
				cellphone: '3207005000',
				message: 'A beautiful message 2'
			},
			{
				cellphone: '3207005000',
				message: 'A beautiful message 3'
			}
		];

		let result = await proempresa.sendMassive(messages);
		console.log('RESULT: ', result);
	} catch (err) {
		console.log(err);
	}
}

sendMassive();