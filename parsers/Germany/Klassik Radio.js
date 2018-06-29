// Copyright (c) 2018 Alexandre Storelli
// This file is licensed under the Affero General Public License version 3 or later.
// See the LICENSE file.

var get = require("../get.js");

module.exports = function(exturl, callback) {
	get(exturl, function(err, result, corsEnabled) {

		if (err) {
			return callback(err, null, null);
		}

		try {
			parsedResult = JSON.parse(result);
		} catch(e) {
			console.log(result);
			return callback(e.message, null, null);
		}

		const artist = parsedResult.data.title.artist;
		const title = parsedResult.data.title.song;
		const cover = parsedResult.data.title.image;

		return callback(null, { artist: artist, title: title, cover: cover }, corsEnabled);
	});
}
