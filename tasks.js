// Importuj Firebase
import firebase from 'firebase/app';
import 'firebase/firestore';

// Funkcja do pobierania i wyświetlania zadań
function getAndDisplayTasks() {
  const tasksCollection = firebase.firestore().collection('tasks');
  tasksCollection.get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        const taskData = doc.data();
        console.log('Task:', taskData.title);
      });
    })
    .catch(error => {
      console.error('Error getting tasks:', error.message);
    });
}
// ...

// Obsługa błędów przy pobieraniu i wyświetlaniu zadań
function handleTasksError(error) {
  console.error('Error getting tasks:', error.message);
  // Przykład: Wyświetlenie komunikatu błędu w elemencie <div> o id="tasksError"
  const tasksError = document.getElementById('tasksError');
  tasksError.textContent = 'An error occurred while fetching tasks.';
}

// Funkcja do pobierania i wyświetlania zadań
async function getAndDisplayTasks() {
  try {
    const tasksCollection = firebase.firestore().collection('tasks');
    const querySnapshot = await tasksCollection.get();

    // Wyczyszczenie listy zadań przed aktualizacją
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    querySnapshot.forEach(doc => {
      const taskData = doc.data();
      const li = document.createElement('li');
      li.textContent = taskData.title;
      taskList.appendChild(li);
    });

    // Wyczyszczenie komunikatu błędu po udanym pobraniu i wyświetleniu zadań
    const tasksError = document.getElementById('tasksError');
    tasksError.textContent = '';
  } catch (error) {
    handleTasksError(error);
  }
}
// Zidentyfikowanie elementów związanych z listą zadań
const taskList = document.getElementById('taskList');
const tasksError = document.getElementById('tasksError');

// Obsługa zdarzenia, np. kliknięcia przycisku, do pobierania i wyświetlania zadań
document.getElementById('fetchTasksButton').addEventListener('click', async function() {
  try {
    await getAndDisplayTasks();
    // Wyczyszczenie komunikatu błędu po udanym pobraniu i wyświetleniu zadań
    tasksError.textContent = '';
  } catch (error) {
    handleTasksError(error);
  }
});
