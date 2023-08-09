// Importuj Firebase
import firebase from 'firebase/app';
import 'firebase/firestore';

// Funkcja do edycji zadania
function editTask(taskId, updatedTask) {
  const taskRef = firebase.firestore().collection('tasks').doc(taskId);
  taskRef.update(updatedTask)
    .then(() => {
      console.log('Task updated successfully.');
    })
    .catch(error => {
      console.error('Error updating task:', error.message);
    });
}
