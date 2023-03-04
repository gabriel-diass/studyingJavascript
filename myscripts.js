var toDoList = [];
while(option != "quit"){
    var option = prompt("please type one of the four options:")
    if (option == "new") {
        var todoNew = prompt("please enter your todo:")
        toDoList.push(todoNew)
        console.log(`you just added ${todoNew} to your todoList`);
    } else if (option =="list" ) {
        for (let index = 0; index < toDoList.length; index++) {
            console.log(`id: ${index} - ${toDoList[index]}`);
        }
    }else if (option == "delete") {
        var optionDelete = prompt("please select the ID you want to delete")
        toDoList.splice(optionDelete, 1);
        console.log(`element with id ${optionDelete} removed successfuly`)
    }
}
console.log("see you later, aligator");