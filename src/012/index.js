const login = prompt('Кто там?', '');
if (!login) {
  alert('Отменено');
} else if (login === 'Admin') {
  const password = prompt('Пароль?', '');
  if (!password) {
    alert('Отменено');
  } else if (password === 'Я главный') {
    alert('Здравствуйте');
  } else {
    alert('Неверный пароль');
  }
} else {
  alert('Я вас не знаю');
}