let todoContainer = document.querySelector("#todoContainer");
let TodoBox1 = document.querySelector(".Todobox1");
let TodoBox2 = document.querySelector(".Todobox2");
let Todobox3 = document.querySelector(".Todobox3");


class Todo {
  elemlist = "";
  text = "";
  container = "";
  date=""
  constructor(text, container,date) {
    this.text = text;
    this.container = container;
    this.date =date
    this.addtoview();
  }
  addtoview() {
    let TodoText = document.querySelector("#inputText").value;
  
    this.elemlist = document.createElement("li");
    this.elemlist.innerHTML = this.text+" "+this.date+" ";
    this.elemlist.className="note"

    let checkMark = document.createElement("input");
    checkMark.type = "checkbox";
    checkMark.style.backgroundColor="green"
    checkMark.onclick = () => {
      this.check();
    };

 
    let removeBtn=document.createElement('button');
    removeBtn.className="removeBtn"
    removeBtn.innerHTML="X";
    removeBtn.onclick=() =>{
        this.deleteFromView();
    };

    if (TodoText === "") {
      alert("enter a task");
    } else {

      this.elemlist.appendChild(checkMark);
      this.elemlist.appendChild(removeBtn);
      this.container.appendChild(this.elemlist);
      
    }
  }
  check() {
    this.elemlist.style.color = "#e4e4e4";
    this.elemlist.style.textDecoration = "line-through";
    
    
  }
  deleteFromView() {
    this.container.removeChild(this.elemlist);
    
  }
}


function saveText() {
  let TodoText = document.querySelector("#inputText").value;
  let date=""
  let d = new Date();
  let hour = d.getHours()
  
  //console.log(d)
  let month =d.getMonth()+1
  console.log(month)
  date=d.getDate()+"/"+month+" "+d.getHours()+":"+hour
  console.log(date);
  let newTodo = new Todo(TodoText, todoContainer,date);
  
  document.querySelector("#inputText").value=""
}


