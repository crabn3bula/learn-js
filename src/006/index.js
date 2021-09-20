const officialName = prompt(
  'Какое «официальное» название JavaScript?',
  ''
);

if (officialName === 'ECMAScript') {
  alert('Правильно!');
} else {
  alert('Не знаете? “ECMAScript”!');
}