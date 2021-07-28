
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("my-ul").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  let deleteButton = document.createElement("button");
  deleteButton.className = "delete";
  deleteButton.appendChild(document.createTextNode("\u00D7"));
  li.appendChild(deleteButton);
  deleteButton.addEventListener('click', function() {
    document.getElementById("my-ul").removeChild(li);
  });
}
