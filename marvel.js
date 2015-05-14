var md5 				= require('MD5');
var Client 				= require('node-rest-client').Client;


var marvelKeyPublic 	= process.env.MARVEL_KEY_PUBLIC,
	marvelKeyPrivate 	= process.env.MARVEL_KEY_PRIVATE;
    
var marvelURL_prefix 	= "https://gateway.marvel.com/v1/public/";


buildAuthParams = function() {
	var date = new Date(),
		now = date.getTime(),
		authParams = md5(now + marvelKeyPrivate + marvelKeyPublic);

		console.log(now + marvelKeyPrivate + marvelKeyPublic);

	return "&ts=" + now + "&apikey=" + marvelKeyPublic + "&hash=" + authParams;
}


getCharacter = function(name) {
    var client = new Client();

	var urlPath = "characters?name=";
	var requestURL = marvelURL_prefix + urlPath + name + buildAuthParams();

	console.log(requestURL);

}


// ===========================
// Execute
// ===========================
run = function() {

	getCharacter("cyclops");
}

run();