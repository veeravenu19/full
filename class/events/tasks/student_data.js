
student_data_list = [
    {
        "Name" : "ch Veera Venu",
        "Roll NUMBER": "22P31A0464",
        "College" : "ACET",
        "Branch" : "ECE"
    },
    {
        "Name" : "B Manikanta",
        "Roll NUMBER": "22P31A0407",
        "College" : "ACET",
        "Branch" : "ECE"
    },
    {
        "Name" : "K Sudheer",
        "Roll NUMBER": "22P31A0464",
        "College" : "ACET",
        "Branch" : "ECE"
    },
    {
        "Name" : "B Ramarao",
        "Roll NUMBER": "22P31A0458",
        "College" : "ACET",
        "Branch" : "ECE"
    },
    {
        "Name" : "K Teja paul",
        "Roll NUMBER": "22P31A0464",
        "College" : "ACET",
        "Branch" : "ECE"
    }   
]
var x=1;
// var index_1 = 1;
function fun(){
    
    if(x===1){
        x=2;
    // console.log("hello")
    var table_addr = document.getElementsByTagName("table")[0];
    table_addr.setAttribute("class","table_1")
    var tr_tag = document.createElement("tr");
    tr_tag.setAttribute("style","tr_tag")
    table_addr.appendChild(tr_tag);
    // var th0_tag = document.createElement("th")
    var th1_tag = document.createElement("th")
    var th2_tag = document.createElement("th")
    var th3_tag = document.createElement("th")
    var th4_tag = document.createElement("th");
    var th5_tag = document.createElement("th")
    var th6_tag = document.createElement("th")

    // th0_tag.setAttribute("style","border:1px solid black")
    th1_tag.setAttribute("style"," padding:8px; font-size:24px;font-weight: 900; text-align:left;")
    th2_tag.setAttribute("style","padding:8px; font-size:24px;font-weight: 900;text-align:left;")
    th3_tag.setAttribute("style"," padding:8px; font-size:24px;font-weight: 900;text-align:left;")
    th4_tag.setAttribute("style","padding:8px; font-size:24px;font-weight: 900;text-align:left;")
    th5_tag.setAttribute("style"," padding:8px; font-size:24px;font-weight: 900;text-align:left;")
    th6_tag.setAttribute("style"," padding:8px; font-size:24px;font-weight: 900;text-align:left;")

    // tr_tag.appendChild(th0_tag);
    // th0_tag.innerHTML = "S.No";
    tr_tag.appendChild(th1_tag);
    th1_tag.innerHTML = "Name"
    tr_tag.appendChild(th2_tag);
    th2_tag.innerHTML = "roll no"
    tr_tag.appendChild(th3_tag);
    th3_tag.innerHTML = "College"
    tr_tag.appendChild(th4_tag);
    th4_tag.innerHTML = "Branch"
    tr_tag.appendChild(th5_tag)
    th5_tag.innerHTML = "Update"
    tr_tag.appendChild(th6_tag)
    th6_tag.innerHTML = "Delete"
    
    student_data_list.forEach((student, i) =>{
        add_row(table_addr,student)
    });
    } else {
        let newStudent = {
            "Name": window.prompt("Enter the Name:"),
            "Roll NUMBER": window.prompt("Enter the roll number:"),
            "College": window.prompt("Enter your college name:"),
            "Branch": window.prompt("Enter your branch:")
        };
        student_data_list.push(newStudent);
        console.log(student_data_list)
        let table_addr = document.getElementsByTagName("table")[0];
        add_row(table_addr, newStudent);
    }
    
}
function add_row(table,student){
    let tr = document.createElement("tr");
    tr.setAttribute("class", "tr_tag");
    table.appendChild(tr);
    let values = [ student.Name, student["Roll NUMBER"], student.College, student.Branch];
    values.forEach(value => {
        let td = document.createElement("td");
        td.setAttribute("class", "td_tag");
        td.innerHTML = value;
        tr.appendChild(td);
    });

    let update_td = document.createElement("td");
    update_td.setAttribute("class", "td_tag");
    let updateButton = document.createElement("button");
    updateButton.innerHTML = "Update";
    updateButton.setAttribute("class", " button update_button");
    updateButton.onclick = function () {
        updateRow(tr, student);
    };
    update_td.appendChild(updateButton);
    tr.appendChild(update_td);

    let deleteTd = document.createElement("td");
    deleteTd.setAttribute("class", "td_tag");
    let deleteButton = document.createElement("button");
    // deleteButton.appendChild(<i class="fa-solid fa-trash" style="color: #ebedef;"></i>)
    deleteButton.innerHTML = "Delete";
    deleteButton.setAttribute("class", " button delete_button");
    deleteButton.onclick = function () {
        table.removeChild(tr);
    };
    deleteTd.appendChild(deleteButton);
    tr.appendChild(deleteTd);
}
function updateRow(row, student) {
    let newName = window.prompt("Enter the new Name:", student.Name);
    let newRollNumber = window.prompt("Enter the new Roll Number:", student["Roll NUMBER"]);
    let newCollege = window.prompt("Enter the new College:", student.College);
    let newBranch = window.prompt("Enter the new Branch:", student.Branch);

    if (newName) student.Name = newName;
    if (newRollNumber) student["Roll NUMBER"] = newRollNumber;
    if (newCollege) student.College = newCollege;
    if (newBranch) student.Branch = newBranch;

    let cells = row.getElementsByTagName("td");
    cells[0].innerHTML = student.Name;
    cells[1].innerHTML = student["Roll NUMBER"];
    cells[2].innerHTML = student.College;
    cells[3].innerHTML = student.Branch;
}