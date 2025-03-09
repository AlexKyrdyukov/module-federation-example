export function renderWidget(containerId, data) {
  const container = document.getElementById(containerId);
  container.innerHTML = `
    <div style="padding:1rem;border:1px solid #ccc;">
      <h3>Hello from Remote Widget!</h3>
      <p>${data}</p>
    </div>
  `;
}