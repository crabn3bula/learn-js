function truncate(str, maxLength) {
  if (str.length <= maxLength) {
    return str;
  }

  return `${str.slice(0, maxLength - 1)}…`;
}

alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) === "Вот, что мне хотело…");
alert(truncate("Всем привет!", 20) === "Всем привет!");