var h = document.getElementsByClassName("hours")[0]
var m = document.getElementsByClassName("min")[0]
var s = document.getElementsByClassName("sec")[0]

var hr=0
var min = 0
var se = 0
s.innerHTML = "00";
    m.innerHTML = "00";
    h.innerHTML = "00";
function reset(){
    se=0
    min=0
    hr=0
    s.innerHTML = "00";
    m.innerHTML = "00";
    h.innerHTML = "00";
}
function fun1(){
    se+=1;
    s.innerHTML = se
    if(se==59){
        se=0
    }
}
function fun2(){
    min+=1;
    m.innerHTML = min;
    if(se==59){
        se=0
    }
}
function fun3(){
    hr+=1;
    h.innerHTML = hr;
    if(hr==23){
        hr=0
    }
}
function start(){
    p = setInterval(fun1,1000)
    q = setInterval(fun2,60000)
    r = setInterval(fun3,3600000)
}
function stop(){
    clearInterval(p)
    clearInterval(q)
    clearInterval(r)
}

