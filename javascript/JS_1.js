// var x=new Date();
// document.write(x.getDate() +"-"+ (x.getMonth()+1) +"-"+ x.getFullYear()+"<br>");
// document.write(Math.floor((Math.random()*51)+50));
// function add(a=12,b,c){
//     console.log(typeof a+b);
//     console.log(a+b)
// }
// add(10,1);
// d={
//     "name" : "venu",
//     "rollno" : "22p31a0464",
//     "age" : 20,
//     details : function(){
//         console.log(this.name);
//     }
// }
// d.details();
// try {
//     var x=10,y=10;
//     // console.log(x+y)
//     if(x===y){
//         throw "jnvsdkj.";
//     }
// }
// catch(er){
//     console.log(er)
// }
// finally{
//     console.log("I am executed with any exception occur")
// }
// import a from "./JS_2.js"
//  var x={
//     "name":"venu",
//     "age":18
// }
// x.score=a
// export default x;
//studnet grades
// var n=window.prompt("enter the marks:");
// var grade;
// if(90<n && n<=100){
//     grade='A';
// }
// else if(80<n && n<=90){
//     grade='B';
// }
// else if(70<n && n<=80){
//     grade='C';
// }
// else if(60<n && n<=70){
//     grade='D';
// }
// else if(50<n && n<=60){
//     grade='E';
// }
// else{
//     grade='Fail'
// }
// console.log(grade);
//problem 2
// var a=parseFloat(window.prompt("enter the a value"));
// var b=parseFloat(window.prompt("enter the b value"));
// var c=parseFloat(window.prompt("enter the c value"));
// var s=(a+b+c)/2
// var v=s*(s-a)*(s-b)*(s-c)
// if(v<0){
//     console.log('i'+Math.sqrt(Math.abs(v)));
// }
// else{
//     console.log(Math.sqrt(v));
// }
//program three
// var eq=window.prompt("enter the second degree equation: ");
// var a=0,b=0,c=0;
// for(var i=0;i<=eq.length();i++){
//     if ("1234567890".includes(eq[i])){
//         console.log()
//     }
// }
function gp(len){
    let s="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890~!@#$%^&*";
    p=""
    for(var i=0;i<=len;i++){
        const index=Math.floor(Math.random()*s.length);
        p+=s[index]
    }
    return p;
}
const password = gp(window.prompt("enter the password length: "));
console.log(password);