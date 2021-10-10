import x from "./x.js"
import file from "./assets/1.png"
console.log(x)
console.log('hi')

const div = document.getElementById('app')
div.innerHTML = `<img src="${file}">`

const button = document.createElement('button')
button.innerText = ('懒加载')
div.appendChild(button)
button.onclick = () => {
    const promise = import('./lazy.js')
    promise.then((module) => {
        const fn = module.default
        fn()
    }, () => {
        console.log('懒加载错误')
    })
}