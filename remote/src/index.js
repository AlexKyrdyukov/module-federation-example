// remote/src/index.js
import('./remoteApp').then((module) => {
  console.log(module.remoteApp());  // Вызываем экспортированный модуль
});