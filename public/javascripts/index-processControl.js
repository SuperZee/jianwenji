
// 页面加载的时候显示进度条
// 加载完毕五秒后隐藏
// 运用定时器
$(document).ready(function(){
  var process = $("#process");
  var oldDate = new Date();
  setTimeout(function () {
    process.hide();
    console.log(new Date() - oldDate);
  },5000);
});


// 解决主页面左边菜单重叠问题
// 运用函数节流技术
$(document).ready(function () {

});
