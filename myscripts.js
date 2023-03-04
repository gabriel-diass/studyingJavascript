var toDoList = [];
while(option != "quit"){
    var option = prompt("please type one of the four options:")
    if (option == "new") {
        console.log("selected new");
        var todoNew = prompt("please enter your todo:")
        toDoList.push(todoNew)
        console.log(`you just added ${todoNew} to your todoList`);
        console.log(toDoList[0])
    } else if (option =="list" ) {
        console.log("selected list");
        console.log(toDoList);
        for (let index = 0; index < toDoList.length; index++) {
            // var item = console.log(toDoList[index])
            console.log(`id: ${index} - ${toDoList[index]}`);
            // console.log(`id: ${index} - ${toDoList[index]}`);

        }
    }else if (option == "delete") {
        console.log("selected delete");
        var optionDelete = prompt("please select the ID you want to delete")
        toDoList.splice(optionDelete, 1);
        console.log(`element with id ${optionDelete} removed successfuly`)
    }
}
console.log("see you later, aligator");