var o={}
function fun(event){
    o[event.target.name]=event.target.value;
    // console.log(event.target.value);
}
function fun1(event){
    event.preventDefault();
    console.log(o);
}