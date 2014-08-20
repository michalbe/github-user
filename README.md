# github-user by [@michalbe](http://github.com/michalbe) #
Simple wrapper around GH API

### How to use: ###
```
npm install github-user
```
then:
```javascript
var gu = require('github-user');

// First argument of the function is a username
gu('michalbe', function(err, result) {
  console.log(result.location); // 'Warsaw, Poland'
});
