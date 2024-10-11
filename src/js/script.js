// URL API RandomUser
const apiUrl = 'https://randomuser.me/api/?results=50';

// Функція для отримання випадкового користувача
async function getRandomUser() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  const user = data.results[0];
  console.log(user);
}

// Викликаємо функцію для отримання випадкового користувача
getRandomUser();
