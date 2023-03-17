const form = document.querySelector('#login-form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // previne que a página recarregue ao enviar o formulário

  const email = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;

  // Aqui você pode fazer a validação das informações do usuário
  // por exemplo, comparando com uma lista de usuários e senhas permitidos

  // Se as informações do usuário estiverem corretas, redireciona para a página principal
  window.location.href = 'pagina-principal.html';
});
