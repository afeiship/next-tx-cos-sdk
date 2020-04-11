(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var COS = require('cos-nodejs-sdk-v5');
  var DEFAULT_OPTIONS = {
    SecretId: 'COS_SECRETID',
    SecretKey: 'COS_SECRETKEY'
  };

  var NxTxCosSdk = nx.declare('nx.TxCosSdk', {
    methods: {
      init: function (inOptions) {
        this.options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
        this.cos = new COS(this.options);
      },
      put: function (inOptions) {
        var self = this;
        return new Promise(function (resolve, reject) {
          return self.cos.putBucket(inOptions, function (err, data) {
            if (err) return reject(err);
            resolve(data);
          });
        });
      },
      del: function (inOptions) {
        var self = this;
        return new Promise(function (resolve, reject) {
          return self.cos.deleteBucket(inOptions, function (err, data) {
            if (err) return reject(err);
            resolve(data);
          });
        });
      },
      get: function () {
        var self = this;
        return new Promise(function (resolve, reject) {
          return self.cos.getService(function (err, data) {
            if (err) return reject(err);
            resolve(data);
          });
        });
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxTxCosSdk;
  }
})();
