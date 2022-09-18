/** 在页面上显示编辑连接 */
function EditOnGit(url, branch = 'main') {
  // 拼接HTML
  function getHTML(fileName, basePath = '') {
    let editURL = `${url}/edit/${branch}/${basePath}${fileName}`;
    return [
      `<div style="position: absolute; right: 16px; top: 9px;">`,
      `<a style="text-decoration: blink;" href="${editURL}" target="_blank">`,
      `<svg style="margin: -4px 1px;" width="20" height="20" t="1663225336541" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2373"><path fill="#066183" d="M862.709333 116.042667a32 32 0 1 1 45.248 45.248L455.445333 613.813333a32 32 0 1 1-45.258666-45.258666L862.709333 116.053333zM853.333333 448a32 32 0 0 1 64 0v352c0 64.8-52.533333 117.333333-117.333333 117.333333H224c-64.8 0-117.333333-52.533333-117.333333-117.333333V224c0-64.8 52.533333-117.333333 117.333333-117.333333h341.333333a32 32 0 0 1 0 64H224a53.333333 53.333333 0 0 0-53.333333 53.333333v576a53.333333 53.333333 0 0 0 53.333333 53.333333h576a53.333333 53.333333 0 0 0 53.333333-53.333333V448z" p-id="2374"></path></svg>`,
      '编辑此页面',
      `</a></div>\r\n`,
    ].join("")
  }
  // 返回函数
  return function (hook, vm) {
    // 内容解析成 html 后调用
    hook.afterEach(function (html, next) {
      console.log('editOnGitee:', vm);
      let elHTML = getHTML(vm.route.file, vm.config.basePath);
      next(elHTML + html);
    });
  }
}