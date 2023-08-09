// Importuj Firebase
import firebase from 'firebase/app';
import 'firebase/firestore';

// Funkcja do dodawania nowego zadania
function addTask(title, description, status) {
  const tasksCollection = firebase.firestore().collection('tasks');
  tasksCollection.add({
    title: title,
    description: description,
    status: status
  })
  .then(docRef => {
    console.log('New task added with ID:', docRef.id);
  })
  .catch(error => {
    console.error('Error adding task:', error.message);
  });
}
// ...

// Obsługa błędów przy dodawaniu zadania
function handleAddTaskError(error) {
  const taskError = document.getElementById('taskError');
  taskError.textContent = error.message;
}

// Obsługa zdarzenia submit formularza dodawania zadania
document.getElementById('taskForm').addEventListener('submit', async function(event) {
  event.preventDefault();

  const taskTitle = document.getElementById('taskTitle').value;
  const taskDescription = document.getElementById('taskDescription').value;
  const taskStatus = document.getElementById('taskStatus').value;

  try {
    await addTask(taskTitle, taskDescription, taskStatus);
    // Wyczyszczenie pól formularza po udanym dodaniu zadania
    document.getElementById('taskTitle').value = '';
    document.getElementById('taskDescription').value = '';
    document.getElementById('taskStatus').value = 'todo';
    // Wyczyszczenie komunikatu błędu po udanym dodaniu zadania
    const taskError = document.getElementById('taskError');
    taskError.textContent = '';
  } catch (error) {
    handleAddTaskError(error);
  }
});
// Zidentyfikowanie elementów związanych z formularzem dodawania zadania
const taskForm = document.getElementById('taskForm');
const taskTitleInput = document.getElementById('taskTitle');
const taskDescriptionInput = document.getElementById('taskDescription');
const taskStatusInput = document.getElementById('taskStatus');
const taskError = document.getElementById('taskError');

// Obsługa zdarzenia submit formularza dodawania zadania
taskForm.addEventListener('submit', async function(event) {
  event.preventDefault();

  const taskTitle = taskTitleInput.value;
  const taskDescription = taskDescriptionInput.value;
  const taskStatus = taskStatusInput.value;

  try {
    await addTask(taskTitle, taskDescription, taskStatus);
    // Wyczyszczenie pól formularza po udanym dodaniu zadania
    taskTitleInput.value = '';
    taskDescriptionInput.value = '';
    taskStatusInput.value = 'todo';
    // Wyczyszczenie komunikatu błędu po udanym dodaniu zadania
    taskError.textContent = '';
  } catch (error) {
    handleAddTaskError(error);
  }
});



