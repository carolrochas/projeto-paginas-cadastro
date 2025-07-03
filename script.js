const switches = document.querySelectorAll(".toggleSwitch");
const loginButtons = document.querySelectorAll('.login-btn');
const cadastroLink = document.getElementById('cadastroLink');
const editarProduto = document.getElementById('editarProduto');

let tipoUsuario = 'cliente';

loginButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    loginButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    tipoUsuario = btn.dataset.user;

    // Atualizar link de cadastro
    cadastroLink.href = tipoUsuario === 'cliente'
      ? 'cadastro-cliente.html'
      : 'cadastro-vendedor.html';
      editarProduto.style.display = tipoUsuario === 'vendedor' ? 'block' : 'none';

  });
});


switches.forEach((botao) => {
  botao.addEventListener("change", function () {
    const container = this.closest(".switch-container");
    const statusTexto = container.querySelector(".statusTexto");

    if (this.checked) {
      statusTexto.textContent = "Produto no catálogo";
    } else {
      statusTexto.textContent = "Produto fora do catálogo";
    }
  });
});

