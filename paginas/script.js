const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const inputs = form.querySelectorAll('.inputUser');
  let isFormValid = true;

  inputs.forEach(function(input) {
    if (!input.checkValidity()) {
      isFormValid = false;
    }
  });

  if (isFormValid) {
    alert('Todos os campos foram preenchidos corretamente.');
    form.reset(); // Opcional: redefinir o formulário após a submissão
  } else {
    alert('Por favor, preencha todos os campos corretamente.');
  }
});
