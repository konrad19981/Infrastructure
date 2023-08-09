// Importuj Firebase
import firebase from 'firebase/app';
import 'firebase/firestore';

// Funkcja do usuwania zadania
function deleteTask(taskId) {
  const taskRef = firebase.firestore().collection('tasks').doc(taskId);
  taskRef.delete()
    .then(() => {
      console.log('Task deleted successfully.');
    })
    .catch(error => {
      console.error('Error deleting task:', error.message);
    });
}
