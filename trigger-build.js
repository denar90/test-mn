var Travis = require('travis-ci');

// change this
var repo = "denar90/mn-com-test";

var travis = new Travis({
  version: '2.0.0'
});

console.log(test);

travis.auth.github.post({
    github_token: process.env.GH_TOKEN
}, function (err, res) {
  console.log(err);
  
    travis.authenticate({
        access_token: res.access_token
    }, function (err) {
         console.log(err)
    });
});
