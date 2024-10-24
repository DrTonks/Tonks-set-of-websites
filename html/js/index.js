
//打开手机端导航栏
 function getnav(){
        let sidebar =document.getElementById("sidebar");
        let overlay =document.getElementById("overlay");
        let openbut = document.getElementById('openbut')
        let phonenav = document.getElementById('phonenav')
        if (sidebar.style.width === "250px"){
            sidebar.style.width = "0";
            overlay.style.display = "none";
            openbut.style.opacity = '1'
            phonenav.style.opacity = '1'
        }
        else{
            sidebar.style.width = "250px";
            overlay.style.display = "block";
            openbut.style.opacity = '0'
            phonenav.style.opacity = '0'

        }

    }  





 /*
 const Path = window.location.pathname;
 const nav= document.querySelectorAll('.navbar a');
  nav.forEach(link => {
    if(link.getAttribute('href') === Path) {
        link.classList.add('active');  
    }
});
能实现功能，但是比较麻烦，故采用静态active
*/

// loading部分
const images = document.querySelectorAll('img');
const loadingWrapper = document.querySelector('.loading-wrapper');
const content = document.querySelector('.needToLoad');
let loadedImagesCount = 0;

function clearListeners() {
    images.forEach((image) => {
        image.removeEventListener('load', checkAllImagesLoaded);
        image.removeEventListener('error', checkAllImagesLoaded);
    });
}
function checkAllImagesLoaded() {
    loadedImagesCount++;
    if (loadedImagesCount === images.length) {
        setTimeout(() => {
            loadingWrapper.style.opacity= '0';

            content.style.opacity = '1';
        }, 300)
        // loadingWrapper.style.opacity= '0';

        // content.style.display = 'block';
        setTimeout(() => {
            loadingWrapper.style.zIndex= '1';
        }, 300); 
        setTimeout(() => {
            loadingWrapper.style.display = 'none'; // 隐藏加载指示器
        }, 1000); // 2秒后执行
    }

}
clearListeners();
loadedImagesCount = 0; // 重置计数器
// 为每张图片添加加载事件监听器
images.forEach((image) => {
    image.addEventListener('load', checkAllImagesLoaded);
    image.addEventListener('error', checkAllImagesLoaded); // 处理加载错误
});
images.forEach((image) => {
    if (image.complete) {
        checkAllImagesLoaded(); // 如果图片已经加载，立即调用
    }
});
