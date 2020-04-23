var nx = require('@feizheng/next-js-core2');
var NxTxCosSdk = require('../src/next-tx-cos-sdk');
var fs = require('fs');
var globby = require('globby');
var config = require('./config.json');

console.log('config:', config);


// https://console.cloud.tencent.com/cos5/bucket
var nxCos = new NxTxCosSdk(config);


nxCos.clear({
  Bucket: 'img3-1301823685',
  Region: 'ap-shanghai'
}).catch(err=>{
  console.log(err);
});
