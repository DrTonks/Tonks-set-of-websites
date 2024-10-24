let list = document.querySelectorAll(".tubiao")
let main = document.querySelector(".cbody")
for (let i = 0; i < list.length; i++) {
    list[i].addEventListener("click", () => {
        main.style.left = (i * -100) + "%"
    })
}//滚动起来！