var parent = require('.')

exports.controller = function(){
	console.log('Hello I am A')
}
exports.callB = function(){
	console.log('calling b which calls A')
	parent.b.controller()
}