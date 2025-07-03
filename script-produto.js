document.addEventListener("DOMContentLoaded", function () {
  const nomeInput = document.getElementById("campo-nome-produto");
  const precoInput = document.getElementById("campo-valor");
  const entregaInput = document.getElementById("campo-entrega");
  const descricaoInput = document.getElementById("campo-descricao");

  const form = document.getElementById("form-produto");

  let produtoSendoEditado = null; // Guarda o produto que está sendo editado

  // Botões "Alterar"
  const botoesAlterar = document.querySelectorAll(".alterar");

  botoesAlterar.forEach((botao) => {
    botao.addEventListener("click", function (e) {
      e.preventDefault();

      const produtoDiv = this.closest("div");

      const nome = produtoDiv.querySelector("h3").innerText;
      const descricao = produtoDiv.querySelectorAll("p")[0].innerText;
      const precoTexto = produtoDiv.querySelectorAll("p")[1].innerText;
      const entregaTexto = produtoDiv.querySelectorAll("p")[2].innerText;

      const preco = precoTexto.replace("Preço: R$", "").trim().replace(",", ".");
      const entrega = entregaTexto.replace("Prazo de entrega:", "").replace("dias úteis", "").trim();

      nomeInput.value = nome;
      precoInput.value = parseFloat(preco);
      entregaInput.value = entrega;
      descricaoInput.value = descricao;

      produtoSendoEditado = produtoDiv; // guarda referência do produto

      form.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Enviar o formulário
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (produtoSendoEditado) {
      // Atualiza os dados no HTML do produto editado
      produtoSendoEditado.querySelector("h3").innerText = nomeInput.value;
      produtoSendoEditado.querySelectorAll("p")[0].innerText = descricaoInput.value;
      produtoSendoEditado.querySelectorAll("p")[1].innerText = `Preço: R$${parseFloat(precoInput.value).toFixed(2).replace(".", ",")}`;
      produtoSendoEditado.querySelectorAll("p")[2].innerText = `Prazo de entrega: ${entregaInput.value} dias úteis`;

      alert("Produto atualizado com sucesso!");

      produtoSendoEditado = null; // limpa o estado

      // Limpa o formulário
      form.reset();
    } else {
      alert("Funcionalidade de adicionar novo produto ainda não implementada.");
      // Aqui você pode implementar o cadastro de novo produto se quiser
    }
  });
});
