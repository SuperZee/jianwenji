var express = require('express');
var router = express.Router();
var assert = require('chai').assert;

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});


// Mocha测试Demo
describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});

module.exports = router;
