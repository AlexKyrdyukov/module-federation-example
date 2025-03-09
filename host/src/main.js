import('remoteApp/renderWidget').then(({ renderWidget }) => {
  renderWidget('host-container', 'Loaded from remote!');
});