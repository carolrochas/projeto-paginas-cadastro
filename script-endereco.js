const cepInput = document.getElementById('cep');
const logradouroInput = document.getElementById('rua');
const bairroInput = document.getElementById('bairro');
const cidadeInput = document.getElementById('cidade');
const estadoInput = document.getElementById('estado');

cepInput.addEventListener('blur', () => {
  const cep = cepInput.value.replace(/\D/g, '');

  if (cep.length === 8) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => response.json())
      .then(data => {
        if (!data.erro) {
          logradouroInput.value = data.logradouro;
          bairroInput.value = data.bairro;
          cidadeInput.value = data.localidade;
          estadoInput.value = data.uf;
        } else {
          alert('CEP não encontrado.');
        }
      })
      .catch(() => {
        alert('Erro ao consultar o CEP.');
      });
  } else {
    alert('CEP inválido. Digite 8 números.');
  }
});
