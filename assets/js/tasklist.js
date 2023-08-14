let colorCounter = 0;
let i = 0;

function addDiv() {
    i++

    class TaskClass {
        constructor(Task){
            this.Task = Task;
        }
        introduce(){
            document.getElementById("geral").innerHTML += '<div class="card" id="div' + i + '"><p id="P' + i + '">' + this.Task + 
            '</p><div><buttonn class="butns" id="btn' + i +'" onclick="ChangeColor('+ i + ')>< i class="fa-solid fa-check" style="color: #ffffff;"></i></button><button class="btns" id="pencil" onclik="edit(' + ')" ><i class="fa-solid fa-pencil" style="color: #ffffff;"></i></button><button class="btns" id="trash" onclick="remove(' + ')" id="trash' + i + '"><i class="fa-solid fa-trash" style="color: #ffffff;"></i></button></div></div>';
        }
    }

    const Task1 = new TaskClass(document.getElementById("Task").value);

    if (document.getElementById("Task").value != ""){
        Task1.introduce();
    } else{
        document.getElementById("error").innerHTML = "Por favor insira uma tarefa";
    }
}

function ChangeColor(id) {
    colorCounter++
    document.getElementById("btn" + id).style.background = "Green";
    document.getElementById("p" + "id").style.textDecoration = 'line-through';
    if(colorCounter > 1){
        colorCounter = 0;
        document.getElementById("" + id).style.textDecoration = "Green";
    }
}


class Task{
 this.
}

clas TaksList{

}