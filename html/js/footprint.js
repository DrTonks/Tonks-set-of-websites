let chengdutitle =document.getElementById('chengduTitle');
let chengduimg1 =document.getElementById('chengduimg1');
let meishuguan =document.getElementsByClassName('float');
let but = document.getElementsByClassName('unfold')
const mobile = 1300;
//成都加按钮
window.addEventListener('scroll',()=>{
    let value= window.scrollY;
    if(value <= 700){chengdutitle.style.marginTop=value * 1 + 'px';}
    if(value <= 700){chengduimg1.style.marginTop=value * 0.5 + 'px';}
    if(window.innerWidth >= mobile){
        if(value <= 1000){meishuguan[0].style.marginTop = value * 0.4 + 'px'}
        if(value <= 1400){meishuguan[1].style.marginTop = value * 0.7 + 'px'}}
})

let unfold1 = document.getElementById('unfoldImg1')
let unfold2 = document.getElementById('unfoldImg2')
but[0].addEventListener('click',()=>{
let bar = document.getElementById('CDbar')



    if(bar.style.maxHeight.replace('px', '') > 0){
         bar.style.maxHeight =0 + 'px';
        unfold1.style.transform = 'scale(1)'
        unfold2.style.transform = 'scale(0)'

    }else{
       bar.style.maxHeight = bar.scrollHeight + 'px';
        unfold1.style.transform = 'scale(0)'
        unfold2.style.transform = 'scale(1)'
    }
})
but[1].addEventListener('click',()=>{
    let bar = document.getElementById('CDbar')
        unfold1.style.transform = 'scale(1)'
        unfold2.style.transform = 'scale(0)'

         bar.style.maxHeight =0 + 'px';
    
})
// 广东

// const targetElement = document.querySelector('.guangdongBack');
// let observer = new IntersectionObserver(function(entries) {
//     // 对于每个观察的元素，回调函数都会被执行
//     entries.forEach(entry => {
//       // 如果元素进入视窗
//       if (entry.isIntersecting) {
//         // 开始监听滚动事件
//         window.addEventListener('scroll', ()=>{
//             let background = document.querySelector(".guangdongBack")

//             let scrollY = window.scrollY
        
//             if (scrollY !== 0  && scrollY) {
//                 background.style.backgroundPosition = `calc(50% + ${scrollY}px) calc(50% + ${scrollY}px)`
//             }else{
//                 background.style.backgroundPosition = ''
//             }
//         });
//       } else {
//         // 如果元素离开视窗，移除滚动事件监听
//         window.removeEventListener('scroll');
//       }
//     });
//   }, {
//     // 配置观察器选项，例如根元素、根元素边界的偏移量等
//     root: null, // 观察视窗
//     rootMargin: '0px', // 不偏移边界
//     threshold: 0.1 // 当元素至少10%进入视窗时触发回调
//   });
  
//   // 开始观察目标元素
//   observer.observe(targetElement);

let background = document.querySelector(".guangdongBack")
let bar = document.getElementById('CDbar')

    document.addEventListener('scroll', () => {
        if(bar.style.maxHeight.replace('px', '') > 0){

        let scrollY = window.scrollY

            if (scrollY >= bar.scrollHeight && scrollY <= bar.scrollHeight + 3000) {
            background.style.marginTop = (scrollY - bar.scrollHeight) * 0.4 + 'px'
            background.style.backgroundPosition = `calc(50% + ${scrollY}px) calc(50% + ${scrollY}px)`
            }   else{
            background.style.backgroundPosition = ''
            }
        }
        else{
            if ( scrollY <= 3000 && scrollY >= 400) {

            background.style.backgroundPosition = `calc(50% + ${scrollY}px) calc(50% + ${scrollY}px)`
            background.style.marginTop = (scrollY-400) * 0.4 + 'px'

        }
    }
})
let unfold3 = document.getElementById('unfoldImg3')
let unfold4 = document.getElementById('unfoldImg4')
but[2].addEventListener('click',()=>{
let bar = document.getElementById('GDbar')



    if(bar.style.maxHeight.replace('px', '') > 0){
         bar.style.maxHeight =0 + 'px';
        unfold3.style.transform = 'scale(1)'
        unfold4.style.transform = 'scale(0)'

    }else{
       bar.style.maxHeight = bar.scrollHeight + 'px';
        unfold3.style.transform = 'scale(0)'
        unfold4.style.transform = 'scale(1)'
    }
})

//福建
let unfold5 = document.getElementById('unfoldImg5')
let unfold6 = document.getElementById('unfoldImg6')
but[3].addEventListener('click',()=>{
let bar = document.getElementById('FujianBox')



    if(bar.style.maxHeight.replace('px', '') > 0){
         bar.style.maxHeight =0 + 'px';
        unfold5.style.transform = 'scale(1)'
        unfold6.style.transform = 'scale(0)'

    }else{
       bar.style.maxHeight = bar.scrollHeight + 'px';
        unfold5.style.transform = 'scale(0)'
        unfold6.style.transform = 'scale(1)'
    }
})