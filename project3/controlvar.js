const input = document.querySelectorAll("input")
console.log(input)
function getvalue(){

console.log(this.value)
const suffix =this.dataset.size
console.log(suffix)
document.documentElement.style.setProperty('--' + this.name , this.value + suffix + ' ')
}
input.forEach(input=>input.addEventListener("change",getvalue))