const host = 'https://api.dkjt.qeebu.com';
const api = {
  wechat: {
    // 获取公众号链接信息
    getLinkInfo: host + '/post/wechat-info'
  },
  upload: {
    // 上传文件
    upload_file: host + '/upload',
    //上传附件
    upload_attr: host + '/post/attr'
  },
}
module.exports = api;