const btn1 = document.getElementById("color1")
const btn2 = document.getElementById("color2")
const body = document.body
const colorCode = document.getElementsByClassName("colorCode")[0]



       

const textGen = ()=>{
    const str = "0123456789abcdef"
    
    let res = ""
    for(let i = 0;i < 6;i++)
        res = res + str[Math.trunc((Math.random()*100)%16)]

    return res
}
btn1.addEventListener("click",()=>{
    let randText = textGen()
    btn1.innerText = "#" + randText
    let gradient = `linear-gradient(to right,${btn1.textContent},${btn2.textContent} )`
    body.style.backgroundImage = gradient
    colorCode.innerText = gradient
})
btn2.addEventListener("click",()=>{
    let randText = textGen()
    btn2.innerText = "#" + randText
    let gradient = `linear-gradient(to right,${btn1.textContent},${btn2.textContent} )`
    body.style.backgroundImage = gradient
    colorCode.innerText = gradient
})

colorCode.addEventListener("click",()=>{
    navigator.clipboard.writeText(colorCode.innerText)
    alert("code has been copied")
})