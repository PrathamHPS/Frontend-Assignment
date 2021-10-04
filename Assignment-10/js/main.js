
let addtaskinput = document.getElementById('addtaskinput');
let addtaskbtn = document.getElementById('addtaskbtn');

showtask();

// js for adding task
addtaskbtn.addEventListener("click", function(){
    
    addtaskinputval = addtaskinput.value;
    let webtask = localStorage.getItem("localtask");
    if(addtaskinputval.trim() != 0){
        if(webtask == null){
            taskObj = [];
        }
        else{
            taskObj = JSON.parse(webtask);
        }
        taskObj.push(addtaskinputval);
        localStorage.setItem("localtask", JSON.stringify(taskObj));
    }
    // console.log(addtaskinput.value, taskObj, webtask);
    addtaskinput.value = "";
    showtask();
    
})

// function showtask()
function showtask(){
    
    let webtask = localStorage.getItem("localtask");
    if(webtask == null){
        taskObj = [];
    }
    else{
        taskObj = JSON.parse(webtask);
    }
    let html = '';
    let addedtasklist = document.getElementById('addedtasklist');

    taskObj.forEach((element, index) => {
        // console.log(element, index)
        html += `<tr>
                    <td class="row-no">${index+1+'.'}</td>
                    
                    <td id="complete${index}">${element}</td>
                    <td><button type="button" onclick="edittask(${index})" class="text-primary"><i class="fa fa-edit"></i> Edit</button></td>
                    <td><button type="button" onclick="deleteitem(${index})" class="text-danger"><i class="fa fa-trash"></i> Delete</button></td>
                    
                    <td><button type="button" id="done${index}" onclick="completetask(${index})" class="text-success"><i class="fa fa-check-square"></i> Complete</button></td>
                </tr>`;
                // <td><input type="checkbox" onclick="check(${index})" id="myCheck${index}"></td>
    });
    addedtasklist.innerHTML = html;
}

//js for edittask 
function edittask(index){
    let addtaskbtn = document.getElementById("addtaskbtn");
    let savetaskbtn = document.getElementById("savetaskbtn");

    let saveindex = document.getElementById("saveindex");
    saveindex.value = index;

    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);
    addtaskinput.value = taskObj[index];

    addtaskbtn.style.display = "none";
    savetaskbtn.style.display = "block";

}

// js for savetask
let savetaskbtn = document.getElementById("savetaskbtn");
savetaskbtn.addEventListener('click', function(){
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);

    let saveindex = document.getElementById("saveindex").value;
    taskObj[saveindex] = addtaskinput.value;

    // console.log(saveindex,taskObj[saveindex],addtaskinput.value);
    localStorage.setItem("localtask", JSON.stringify(taskObj));

    addtaskbtn.style.display = "block";
    savetaskbtn.style.display = "none";

    addtaskinput.value = "";
    showtask();
})

//  remove or delete 1 task from todo
function deleteitem(index){
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);

    taskObj.splice(index, 1);
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    showtask();
}

// delete all task from list

let deleteallbtn = document.getElementById("deleteallbtn");
deleteallbtn.addEventListener("click", function(){

    addtaskinput.value = "";
    localStorage.clear();

    let addtaskbtn = document.getElementById("addtaskbtn");
    let savetaskbtn = document.getElementById("savetaskbtn");
    addtaskbtn.style.display = "block";
    savetaskbtn.style.display = "none";

    showtask();
})


// js for task complete
var count = 0;

function completetask(index) {
    
    let comp = "complete"+index;
    let complete = document.getElementById(comp);
    
    count += 1;
    if(count%2 != 0){
        complete.style.textDecoration = "line-through";
        count = 0;
    }
    else {
        complete.style.textDecoration = "none";
    }
    
}

// function check(index){
//     let mycheck = "myCheck"+index;
//     var checkBox = document.getElementById(mycheck);
//     // Get the output text
//      val = "done"+index;
//     var done = document.getElementById(val);
//     console.log(val, done, checkBox)
//     // If the checkbox is checked, display the output text
//     if (checkBox.checked == true){
//         done.style.display = "block";
//     } 
//     else {
//         done.style.display = "none";
//     }
// }

// function completetask(index){
//     let webtask = localStorage.getItem("localtask");
//     let taskObj = JSON.parse(webtask);
//     taskObj[index] = '<span style="text-decoration:line-through">' + taskObj[index] + '</span>';
//     let addedtasklist = document.getElementById("addedtasklist");
//     addedtasklist.addEventListener("click", function(e){
//         console.log(addedtasklist)
//     })
//     localStorage.setItem("localtask", JSON.stringify(taskObj));
//     showtask();
// } 