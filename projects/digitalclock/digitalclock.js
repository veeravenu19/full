function digi(){
    console.log("hi")
    var x = new Date();
    document.getElementsByClassName("Hours")[0].innerHTML = x.getHours();
    document.getElementsByClassName("Min")[0].innerHTML = x.getMinutes();
    document.getElementsByClassName("sec")[0].innerHTML = x.getSeconds();

}
setInterval(digi,1000)