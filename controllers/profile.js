const { v4: uuidv4 } = require('uuid')

const komentar = require('../models/profile')

module.exports = {
	index: function(request, response){
		if(error) console.log(error)

		console.log(profiles)
		response.render('pages/profile/index', {profiles: komentars})
	},

}