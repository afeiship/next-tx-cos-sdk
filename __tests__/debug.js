var nx = require('@feizheng/next-js-core2');
var NxTxCosSdk = require('../src/next-tx-cos-sdk');
var fs = require('fs');
var globby = require('globby');
var config = {
  id: 'xxx',
  SecretId: 'xxx',
  SecretKey: 'uuu'
};

// https://console.cloud.tencent.com/cos5/bucket
var nxCos = new NxTxCosSdk(config);

// update acl
// nxCos.aclPut({
//   Bucket: 'img2-1301823685' /* 必须 */,
//   Region: 'ap-chengdu' /* 必须 */,
//   ACL: 'public-read'
// });

// // create
// nxCos
//   .put({
//     Bucket: 'img2-1301823685',
//     Region: 'ap-chengdu'
//   })
//   .then((res) => {
//     console.log(res);
//   });


// // get
// nxCos.get().then((res) => {
//   console.log(res);
// });


// //delete
// nxCos
//   .del({
//     Bucket: 'img1-1301823685',
//     Region: 'ap-chengdu'
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// var dir = '/Users/feizheng/github/qq-group-sharing';
// nxCos.cos.putObject({
//   Bucket: 'img2-1301823685' /* 必须 */,
//   Region: 'ap-chengdu' /* 必须 */,
//   Key: 'index.html' /* 必须 */,
//   StorageClass: 'STANDARD',
//   Body: fs.createReadStream('/Users/feizheng/github/qq-group-sharing/dist/index.html') // 上传文件对象
// });

// cos.deleteMultipleObject(
//   {
//     Bucket: 'img2-1301823685' /* 必须 */,
//     Region: 'ap-chengdu' /* 必须 */,
//     Objects: [{ Key: 'exampleobject' }, { Key: 'exampleobject2' }]
//   },
//   function (err, data) {
//     console.log(err || data);
//   }
// );

var files = globby.sync('*', {
  cwd: '/Users/feizheng/github/qq-group-sharing/dist'
});

var objs = files.map((file) => {
  return { Key: file };
});

// nxCos.cos.deleteMultipleObject(
//   {
//     Bucket: 'img2-1301823685' /* 必须 */,
//     Region: 'ap-chengdu' /* 必须 */,
//     Objects: objs
//   },
//   function (err, data) {
//     console.log(err || data);
//   }
// );

// console.log(files);

// files.forEach((file) => {
//   nxCos.objUpload({
//     Bucket: 'img2-1301823685' /* 必须 */,
//     Region: 'ap-chengdu' /* 必须 */,
//     Key: file /* 必须 */,
//     StorageClass: 'STANDARD',
//     Body: fs.createReadStream(`/Users/feizheng/github/qq-group-sharing/dist/${file}`) // 上传文件对象
//   });
// });

// cos.putBucketAcl(
//   {
//     Bucket: 'examplebucket-1250000000' /* 必须 */,
//     Region: 'COS_REGION' /* 必须 */,
//     ACL: 'public-read'
//   },
//   function (err, data) {
//     console.log(err || data);
//   }
// );
