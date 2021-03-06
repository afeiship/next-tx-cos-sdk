# next-tx-cos-sdk
> Tencent cos-nodejs-sdk wrapper.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-tx-cos-sdk
```

## apis
| api | params | description   |
| --- | ------ | ------------- |
| get | -      | desc balabala |
| put | -      | desc balabala |
| del | -      | desc balabala |

## usage
```js
import NxTxCosSdk from '@jswork/next-tx-cos-sdk';

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

## license
Code released under [the MIT license](https://github.com/afeiship/next-tx-cos-sdk/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-tx-cos-sdk
[version-url]: https://npmjs.org/package/@jswork/next-tx-cos-sdk

[license-image]: https://img.shields.io/npm/l/@jswork/next-tx-cos-sdk
[license-url]: https://github.com/afeiship/next-tx-cos-sdk/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-tx-cos-sdk
[size-url]: https://github.com/afeiship/next-tx-cos-sdk/blob/master/dist/next-tx-cos-sdk.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-tx-cos-sdk
[download-url]: https://www.npmjs.com/package/@jswork/next-tx-cos-sdk
