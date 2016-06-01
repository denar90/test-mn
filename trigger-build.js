var Travis = require('travis-ci');

// change this
var repo = "denar90/mn-com-test";

var travis = new Travis({
  version: '2.0.0'
})

travis.auth.github.post({
    github_token: '0e7fefbd5f4759b505ac65d5f07eb0dbb9594cec'
}, function (err, res) {
  console.log(err);
    // res => {
    //     access_token: XXXXXXX
    // }
    travis.authenticate({
        access_token: res.access_token
    }, function (err) {
         console.log(err)
    });
});
