import('remoteApp/user').then(({ getUser }) => {
  const user = getUser();
  document.body.innerHTML = `<h1>Hello, ${user.name} (${user.role})</h1>`;
});