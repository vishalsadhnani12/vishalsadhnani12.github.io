var totalTodos = () => document.querySelectorAll('input[type="checkbox"]')

const incompleteTodos = () => {
  var incompCount = 0;
  var todos = totalTodos()
  for (var i=0; i < todos.length; i++)
  {
    if (!todos[i].checked)
        incompCount++;
  }

  return incompCount;
}

const generateSummary = () => {
    const incomplete = incompleteTodos()
    const summary = document.createElement('h2')
    const plural = incomplete === 1 ? '' : 's'
    summary.classList.add('list-title')
    summary.textContent = `You have ${incomplete} todo${plural} left out of ${totalTodos().length}`
    const summaryEl = document.querySelector("#summary")

    summaryEl.innerHTML = ''
    summaryEl.appendChild(summary)
}

generateSummary()

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);

  const todoEl = document.createElement('label')
  const containerEl = document.createElement('div')
  const checkbox = document.createElement('input')
  const removeButton = document.createElement('button')
  checkbox.setAttribute('type', 'checkbox');
  checkbox.checked = false;
  containerEl.appendChild(checkbox)

  containerEl.appendChild(t);

  todoEl.classList.add('list-item')
  containerEl.classList.add('list-item__container')
  todoEl.appendChild(containerEl)

  removeButton.textContent = 'x'
  removeButton.classList.add('button', 'button--text')
  todoEl.appendChild(removeButton)

  li.appendChild(todoEl)

  if (inputValue === '') {
  alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
    generateSummary()
  }
  document.getElementById("myInput").value = "";

  checkbox.addEventListener('change', () => {
      generateSummary();
  })

  var close = document.getElementsByClassName("button--text");
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement.parentElement;
        div.remove()
        generateSummary()
    }
  }
}

//Clearing the list
function removeAll(){
  var lst = document.getElementsByTagName("ul");
    lst[0].innerHTML = "";
    generateSummary()
}