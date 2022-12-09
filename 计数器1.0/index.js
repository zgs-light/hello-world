
var value=document.getElementById("kk")
value.value=0
var add=document.getElementById("add")
add.addEventListener("click",function(){
    value.value++
})
var unadd=document.getElementById("unadd")
unadd.onclick=function(){
    if (value.value>0) {
        value.value--
    }else{
        value.value=0
        document.getElementById("to0").style.backgroundColor ="red"
    }
    
    
}
var tozero=document.getElementById("to0")
tozero.onclick=function(){
    value.value=0
}