let ctr = 1;

function deleteTodo(index) {
  const element = document.getElementById("todo-" + index);
  element.parentNode.removeChild(element);
}

function addTodo() {
  // Access the value you are typing in the input box
  const val = document.querySelector("input").value;

  if (val.trim() === "") {
    alert("Please enter a to-do item.");
    return;
  }

  // Create a new div to store the value of the input box
  const newdivEl = document.createElement("div");

  newdivEl.setAttribute("id", "todo-" + ctr);
  newdivEl.className = "todo-item";
  newdivEl.innerHTML = "<div>" + val + "</div><button onclick = 'deleteTodo(" + ctr + ")'>Delete</button>";

  // Add new div to the document
  document.getElementById("todo-list").appendChild(newdivEl);
  ctr = ctr + 1;

  // Clear the input box after adding the item
  document.querySelector("input").value = "";
}
