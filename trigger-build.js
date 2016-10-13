var Travis = require('travis-ci');
var repo = "denar90/mn-com-test";
var travis = new Travis({
  version: '2.0.0',
  headers: {
    'User-Agent': 'Travis/1.0'
  }
});

var getLastMainBuildId = function(builds) {
  return builds.forEach(function(build) {
    if (!build.pull_request) {
      return build.id;
    }
  });
};


travis.authenticate({
	github_token: process.env.GH_TOKEN
}, function (err, res) {
	if (err) {
	return console.error(err);
	}
  
	//get repo builds
	travis.repos(repo.split('/')[0], repo.split('/')[1]).builds.get(function (err, res) {
		if (err) {
			return console.error(err);
		}
    	//rebuild latest build
    	travis.requests.post({
			build_id: getLastMainBuildId(res.builds)
		}, function (err, res) {
			if (err) {
				return console.error(err);
			}
			console.log(res.flash[0].notice);
		});
	});
});
