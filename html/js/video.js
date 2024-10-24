//播放小智动画
let video = document.getElementById("myVideo");
  video.onended = function() {
    // 使用闭包来捕获 video 的引用
    setTimeout(() => {
        video.style.opacity = 0;   
    }, 1000);
    setTimeout(() => {
        video.style.display = "none";   
    }, 2000);
};
//手机端
let video2 = document.getElementById("myVideo2");
  video2.onended = function() {
    // 使用闭包来捕获 video 的引用
    setTimeout(() => {
        video2.style.opacity = 0;   
    }, 1000);
    setTimeout(() => {
        video2.style.display = "none";   
    }, 2000);
};