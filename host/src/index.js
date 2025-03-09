// Импортируем удаленный модуль с помощью Module Federation
import('remote/remoteLogic').then(({ remoteLogic }) => {
  // Пример динамической загрузки логики из remote
  console.log(4, remoteLogic)
  document.getElementById('remoteBtn').onclick = remoteLogic;
});

const button = document.createElement('button');
button.innerText = 'Host Button';
button.onclick = () => alert('Host Button Clicked new logic 123!');
document.body.appendChild(button);