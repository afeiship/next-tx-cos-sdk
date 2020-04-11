(function() {
  var nx = require('@feizheng/next-js-core2');
  var NxTxCosSdk = require('../src/next-tx-cos-sdk');

  describe('NxTxCosSdk.methods', function() {
    test('init', function() {
      var data = {
        key: 1,
        value: 2
      };
      expect(!!data).toBe(true);
    });
  });
})();
