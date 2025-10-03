alert('javascript is workingggg girlll');
const addButton = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const taskInput = document.getElementById('taskInput');
addButton.addEventListener('click', function() {
   const taskText = taskInput.value;
   if (taskText.trim() !== '') {
     const newTask = document.createElement('li');
     newTask.textContent = taskText;
     taskList.appendChild(newTask);
     taskInput.value = '';
   }
});
taskInput.addEventListener('keypress', function(event) {
   if (event.key === 'Enter') {
       addButton.click();
   }
});
const deleteButton = document.createElement('button');
deleteButton.textContent = 'Delete';
deleteButton.style.marginLeft = '10px';
deleteButton.onclick = function() {
       taskList.removeChild(newTask);
};
// Create Edit Button
const editBtn = document.createElement('button');
 editBtn.textContent = 'Edit';
     editBtn.onclick = function() {
       // Replace text with input for editing
       const editInput = document.createElement('input');
       editInput.type = 'text';
       editInput.value = newTask.firstChild.textContent;
       newTask.insertBefore(editInput, newTask.firstChild);
       newTask.removeChild(newTask.childNodes[1]); // Remove the text node

       // Save on Enter or blur
       editInput.addEventListener('keydown', function(event) {
         if (event.key === 'Enter') {
           newTask.firstChild.textContent = editInput.value;
           newTask.removeChild(editInput);
           newTask.insertBefore(document.createTextNode(editInput.value), newTask.firstChild);
         }
       });
       editInput.addEventListener('blur', function() {
         newTask.firstChild.textContent = editInput.value;
         newTask.removeChild(editInput);
         newTask.insertBefore(document.createTextNode(editInput.value), newTask.firstChild);
       });
       editInput.focus();
     };
     newTask.appendChild(editBtn);
     newTask.appendChild(deleteBtn);
     taskList.appendChild(newTask);
     taskInput.value = '';

taskInput.addEventListener('keypress', function(event) {
   if (event.key === 'Enter') {
       addButton.click();
   }
});

 















































const editButton = document.createElement('button');
editButton.textContent = 'Edit';
editButton.style.marginLeft = '10px';
editButton.onclick = function() {
   const newTaskText = prompt('Edit task:', newTask.textContent);
   if (newTaskText !== null) {
       newTask.textContent = newTaskText;
   }
};