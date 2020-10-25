const mongoose = require('mongoose');

const name_db = 'db-example'

const URL = `mongodb://localhost/${name_db}`;

mongoose.connect(URL)
	.then(db => console.log('Db is connected') )
	.catch(err => console.error(err))

module.exports = mongoose;