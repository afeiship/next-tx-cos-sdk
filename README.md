# next-tx-cos-sdk
> Tencent cos-nodejs-sdk wrapper.

## installation
```bash
npm install -S @feizheng/next-tx-cos-sdk
```

## apis
| api | params | description   |
| --- | ------ | ------------- |
| get | -      | desc balabala |
| put | -      | desc balabala |
| del | -      | desc balabala |

## usage
```js
import NxTxCosSdk from '@feizheng/next-tx-cos-sdk';

const config = {
  id: 'xxx',
  SecretId: 'xxxx',
  SecretKey: 'xxxxx'
};

// https://console.cloud.tencent.com/cos5/bucket
const nxCos = new NxTxCosSdk(config);

// create
nxCos
  .get({
    Bucket: 'img3-1301823685',
    Region: 'ap-chengdu'
  })
  .then((res) => {
    console.log(res);
  });

// // get
// nxCos.get().then((res) => {
//   console.log(res);
// });

// //delete
// nxCos
//   .del({
//     Bucket: 'img1-xxx',
//     Region: 'ap-chengdu'
//   })
//   .catch((err) => {
//     console.log(err);
//   });
```

## resources
- https://github.com/sindresorhus/pify
- https://cloud.tencent.com/document/product/436/8629
- https://cloud.tencent.com/document/product/436/36119
