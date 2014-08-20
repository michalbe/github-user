'use strict';

var request = require('request');

var ghu = function(user, cb) {
  request({
    url: 'https://api.github.com/users/' + user,
    headers: {
      'user-Agent': 'github-user node package'
    }
  }, function(err, resp, body){
    cb(err, JSON.parse(body));
  });
};

module.exports = ghu;
