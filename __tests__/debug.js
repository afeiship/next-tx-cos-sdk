var nx = require('@feizheng/next-js-core2');
var NxTxCosSdk = require('../src/next-tx-cos-sdk');
var config = {
  id: 'xxx',
  SecretId: 'xxxx',
  SecretKey: 'xxxxx'
};

// https://console.cloud.tencent.com/cos5/bucket
var nxCos = new NxTxCosSdk(config);

// create
nxCos
  .put({
    Bucket: 'img2-1301823685',
    Region: 'ap-chengdu'
  })
  .then((res) => {
    console.log(res);
  });

// get
nxCos.get().then((res) => {
  console.log(res);
});

//delete
nxCos
  .del({
    Bucket: 'img1-1301823685',
    Region: 'ap-chengdu'
  })
  .catch((err) => {
    console.log(err);
  });
