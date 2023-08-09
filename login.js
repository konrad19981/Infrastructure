// Importuj Firebase
import firebase from 'firebase/app';
import 'firebase/auth';

// Funkcja do logowania użytkownika
function loginUser(email, password) {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      const user = userCredential.user;
      console.log('User logged in:', user.email);
    })
    .catch(error => {
      console.error('Login error:', error.message);
    });
}
// ...

// Obsługa błędów logowania
function handleLoginError(error) {
  const loginError = document.getElementById('loginError');
  loginError.textContent = error.message;
}

// Obsługa zdarzenia submit formularza logowania
document.getElementById('loginForm').addEventListener('submit', async function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    await loginUser(email, password);
    // Wyczyszczenie komunikatu błędu po udanym logowaniu
    const loginError = document.getElementById('loginError');
    loginError.textContent = '';
  } catch (error) {
    handleLoginError(error);
  }
});
// Zidentyfikowanie formularza logowania
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginError = document.getElementById('loginError');

// Obsługa zdarzenia submit formularza logowania
loginForm.addEventListener('submit', async function(event) {
  event.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  try {
    await loginUser(email, password);
    // Wyczyszczenie komunikatu błędu po udanym logowaniu
    loginError.textContent = '';
  } catch (error) {
    handleLoginError(error);
  }
});
