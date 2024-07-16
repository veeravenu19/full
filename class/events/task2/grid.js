var user_number = window.prompt("enter the number")
var Table = document.createElement("table")
// console.log(Table)
var Body = document.getElementsByTagName("body")[0]
Body.appendChild(Table)
var index = 1;
for(var i = 0; i < user_number;i++){
    tr_tag = document.createElement("tr")
    for(var j = 0; j < user_number; j++){
        td_tag = document.createElement("td")
        tr_tag.appendChild(td_tag)
        td_tag.setAttribute("id",index)
        td_tag.setAttribute("class","Td");
        // console.log(td_tag)
        index+=1
    }
    Table.appendChild(tr_tag)
   
}
var div_1 = document.createElement("div")
div_1.setAttribute("class","score")
Body.appendChild(div_1)
var div_1_1 = document.createElement("div")
div_1_1.setAttribute("class","score1")
div_1.appendChild(div_1_1)
div_1_1.innerHTML = "Score"
var div_1_2 = document.createElement("div")
div_1_2.setAttribute("class","score2")
div_1.appendChild(div_1_2)
var x = ["left","right","top","down"]
var div1 = document.createElement("div")
Body.appendChild(div1)
for(var i=0;i<x.length;i++){
    button_tag = document.createElement("button");
    button_tag.innerHTML = x[i];
    button_tag.setAttribute("onclick",`move('${x[i]}')`)
    button_tag.setAttribute("class",x[i])
    // console.log(button_tag)
    div1.appendChild(button_tag)
   
}
var row = 0;
var  column = 0;
var score = 0;
var rand = Math.floor(Math.random()*user_number*user_number);
solid(rand);
document.getElementById(1).setAttribute("class","king");
function move(x){

    if (x==='left'){
        if(column > 0){
            column-=1
            position();
        }
        else{
            window.alert("you can't move towards left")
        }
    }
    else if (x=='right'){
        if(column<user_number-1){
            column+=1
            position();
        }
        else{
            window.alert("you can't move towards right")
        }
    }
    else if (x=='top'){
        if(row > 0){
            row-=1
            position();
        }
        else{
            window.alert("you can't move towards top")
        }
    }
    else if (x=='down'){
        if(row < user_number-1){
            row+=1
            position();
        }
        else{
            window.alert("you can't move towards down")
        }
    }
    
}
var coun = 0;
div_1_2.innerHTML =coun; 
function position() {
    var cells = document.querySelectorAll("td");
    
    cells.forEach(cell => 
        cell.setAttribute("class","remove"));
    var index = row*user_number+column+1;
    solid(rand,index);
    document.getElementById(index).setAttribute("class","king");
}
function solid(a,b){
    if(a===b){
        rand =  Math.floor(Math.random()*user_number*user_number);
        console.log(rand)
        console.log(b)
        
        document.getElementById(rand).setAttribute("class","solider")
        coun+=1
        div_1_2.innerHTML =coun; 

    }
    document.getElementById(a).setAttribute("class","solider")

}
// console.log(b);
// function fun1(){
//     console.log(b);
//     document.getElementById(b).setAttribute("class","solider");
// }
// function position(){
//     var cells = document.querySelectorAll("td");
//     for(var c=0; c<cells.length;c++){
//         if(C[i]==rand){
//         document.getElementById(a).setAttribute("class","solider")
//         }
//         else{
//             cell.setAttribute("class","remove"));
//             var index = row*user_number+column+1;
//             document.getElementById(index).setAttribute("class","king");
//         }
//     }
// }
