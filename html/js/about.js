// function boxtext(){
//     let boxtext=document.getElementsByClassName('boxtext')

//     if (window.innerWidth<= 768){
//         boxtext[0].innerText=''
//         boxtext[1].innerText='NEW!'
//         boxtext[2].innerText='NEW!'
//         boxtext[3].innerText='NEW!'
//     }
//     else{
        
//     }
// }
// //因为工程量不大，而且人笨，所以用这种办法，空间换时间，轻喷qwq
// window.onload = boxtext;
// window.onresize = boxtext;
document.querySelectorAll(".s_button")[1].onclick = ()=>{
    let lists=document.querySelectorAll('.item');
    document.querySelector('#slide').appendChild(lists[0])
}
document.querySelectorAll(".s_button")[0].onclick = ()=>{
    let lists=document.querySelectorAll('.item');
    document.querySelector('#slide').prepend(lists[lists.length-1])
}
//BUG解决：做一个保存文本，否则浏览器窗口变动时手机端文本会被保存在电脑端
// let initText = []; 
// function boxtext() {
//     let boxtext = document.getElementsByClassName('boxtext');
//     if (initText.length === 0) {
//         for (let i = 0; i < boxtext.length; i++) {
//             initText[i] = boxtext[i].innerText;
//         }
//     }
//     if (window.innerWidth <= 768) {
//         boxtext[0].innerText = '是一名来自福建的大一新生。\n网名的来源是小学期间同学们用哈利波特里面的名字来相互称呼对方，并且沿用至今。\n（由于毕业卡片上面同学给我错写的英文名，后来一度把Tanks当作尼法朵拉的姓氏qwq）';
//         boxtext[1].innerText = '喜欢写作。偶尔有点子了就去作家助手上面写点玩意儿放松。童年梦想是成为一名作家，现在也是。\n喜欢和同学们在一起玩，但是不喜欢出门，也不喜欢参与太多社交活动（比如班上团建）';
//         boxtext[2].innerText = '想当高手。\n想当机器学习高手。\n想当前端开发高手。\n想当计算机C语言高手。\n唉唉，想得太多，做得太少。';
//         boxtext[3].innerText = '想要做出一些属于自己的东西，这是我选择前端的原因。想要让AI变得越来越像人，这是我尝试机器学习的原因。\n我不会停止思考，不会停止创造，不会因为未来的不确定而畏葸不前。\nAI可以越来越像人，但人不能越来越像AI。';
//     } else {
//         for (let i=0; i<boxtext.length; i++) {
//             boxtext[i].innerText = initText[i]; 
//     }
// }}

// window.addEventListener('resize', boxtext);
// boxtext();
