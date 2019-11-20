/*ToDo List */

let toDoList = [];
/*Without using prompt
function addItems(arr, items) {
  arr.push(items);
}

addItems(toDoList, "Walk the dog");
console.log(toDoList);
*/

/*
function addItems() {
  let ans = prompt("What would you like to do today?");
  let correct = ans.toLowerCase().trim();
  let index = toDoList.indexOf(correct);
  if (index === -1) {
    toDoList.push(correct);
  } else {
    alert("Item already exists");
  }
}
addItems();
addItems();
addItems();
console.log(toDoList);
*/

function addItems() {
  let ans = prompt("What would you like ToDo Today ? ");
  let correct = ans.toLowerCase().trim();

  function isUnique() {
    let unique = false;
    let index = toDoList.indexOf(correct);

    if (index == -1) {
      unique = true;
    } else {
      unique = false;
    }
    return unique;
  }

  if (isUnique()) {
    toDoList.push(correct);
  } else {
    alert("Item Already Exists");
  }
}

addItems();
addItems();

console.log(toDoList);

/*remove items using pop() 
function removeItems() {
  let ln = toDoList.length;
  if (ln > 0) {
    console.log(`You have removed :${toDoList[toDoList.length - 1]}`);
  } else {
    console.log("No more items to delete");
  }
}
removeItems();
*/

/*To remove specific item */
function removeItems() {
  let rmv = prompt("What do you want to remove!??");
  let crct = rmv.toLowerCase().trim();

  let indx = toDoList.indexOf(crct);

  function checkExists() {
    let exist = false;
    if (indx == -1) {
      exist = false;
    } else {
      exist = true;
    }
    return exist;
  }
  if (checkExists()) {
    let rmItem = toDoList.splice(indx, 1);
    alert(`You removed ${rmItem}`);
  } else {
    alert(`It's not in your List`);
  }
  console.log("After Removing :", toDoList);
}

removeItems();

/*Display Items */
let list = `You're ToDo List`;
function dispItems() {
  for (let i = 0; i < toDoList.length; i++) {
    list += ` ${toDoList[i]}`;
  }
  alert(`${list}`);
}
dispItems();
