let noteList = [];
let addBtn = document.querySelector(".addBtn")
let container = document.querySelector(".container")

addBtn.addEventListener("click", (e) => {
    let note = document.querySelector(".noteText").value;
    if (note.length == 0){
        alert("Please first enter note and then add.")
    }

    else{

        noteList.push(note)
        let card = document.createElement("li")
        card.className="card"
        let noteText = document.createElement("textarea")
        noteText.className = "noteText"
        noteText.value = note
        let editBtn = document.createElement("button")
        editBtn.className = "editBtn"
        editBtn.id = "editBtn"
        let editIcon = document.createElement("i")
        editIcon.className = "fa fa-edit"
        editBtn.appendChild(editIcon)
        editBtn.addEventListener("click", (e) =>{
            document.querySelector(".noteText").value = note
            container.removeChild(card)
        })
        let deleteBtn = document.createElement("button")
        deleteBtn.className = "deleteBtn"
        deleteBtn.id= "deleteBtn"
        deleteBtn.addEventListener("click", (e) => {
            container.removeChild(card)
        })
        let deleteIcon = document.createElement("i")
        deleteIcon.className = "fa fa-trash"
        deleteBtn.appendChild(deleteIcon)

        card.appendChild(noteText)
        card.appendChild(editBtn)
        card.appendChild(deleteBtn)
        container.appendChild(card)
// let todoItem = <li>
        //                 <div class=\"card\">
        //                     <textarea class=\"noteText\"> ${note} </textarea>
        //                     <button class=\"editBtn\"><i class=\"fa fa-edit\"></i></button>
        //                     <button class=\"deleteBtn\"><i class=\"fa fa-trash\"></i></button>
        //                 </div>
        //             </li>
        // container.innerHTML = todoItem + container.innerHTML;

        document.querySelector(".noteText").value = ""



    }
});




