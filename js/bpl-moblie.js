function WindowFontSize () {
  //获取视窗宽度
  var htmlWidth = $(window).width();
  if (htmlWidth > 640) {
    htmlWidth = 640
  }
  //获取视窗高度字体
  var htmlDom = document.getElementsByTagName('html')[ 0 ];
  htmlDom.style.fontSize = htmlWidth / 750 * 100 + "px";
}
$(function () {
  WindowFontSize();
})