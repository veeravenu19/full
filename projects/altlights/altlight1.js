function fun(data,data1){
    // console.log(data)
    var x = document.getElementsByClassName(data)[0];
    y = document.getElementsByClassName(data1);
    x.setAttribute("style","width:150px")
    for(var i=0; i<y.length;i++){
        y[i].setAttribute("style","display:block")
    }
}
function fun1(dat,dat1){
    // console.log(data)
    var x = document.getElementsByClassName(dat)[0];
    y = document.getElementsByClassName(dat1);
    x.setAttribute("style","width:0px")
    // y.setAttribute("style","display:none")
    for(var i=y.length-1; i>=0;i--){
        y[i].setAttribute("style","display:none")
    }
}