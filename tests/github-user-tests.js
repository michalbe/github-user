'use strict';

var assert = require('assert');
var githubUser = require('../');
var nock = require('nock');

nock('http://api.github.com')
  .get('/user/michalbe')
  .reply(200, '{"login":"michalbe","id":347657,"avatar_url":"https://ava' +
              'tars.githubusercontent.com/u/347657?v=2","gravatar_id":"c' +
              '9c16dd1d16ffef177b5e5ce0e50000d","url":"https://api.githu' +
              'b.com/users/michalbe","html_url":"https://github.com/mich' +
              'albe","followers_url":"https://api.github.com/users/micha' +
              'lbe/followers","following_url":"https://api.github.com/us' +
              'ers/michalbe/following{/other_user}","gists_url":"https:/' +
              '/api.github.com/users/michalbe/gists{/gist_id}","starred_' +
              'url":"https://api.github.com/users/michalbe/starred{/owne' +
              'r}{/repo}","subscriptions_url":"https://api.github.com/us' +
              'ers/michalbe/subscriptions","organizations_url":"https://' +
              'api.github.com/users/michalbe/orgs","repos_url":"https://' +
              'api.github.com/users/michalbe/repos","events_url":"https:' +
              '//api.github.com/users/michalbe/events{/privacy}","receiv' +
              'ed_events_url":"https://api.github.com/users/michalbe/rec' +
              'eived_events","type":"User","site_admin":false,"name":"Mi' +
              'chał Budzyński","company":"Mozilla","blog":"http://michal' +
              'be.blogspot.com","location":"Warsaw, Poland","email":"","' +
              'hireable":false,"bio":null,"public_repos":64,"public_gist' +
              's":6,"followers":379,"following":30,"created_at":"2010-07' +
              '-29T02:44:21Z","updated_at":"2014-08-20T16:44:50Z"}');


githubUser('michalbe', function(err, data) {
  assert.equal(data.location, 'Warsaw, Poland');
});
