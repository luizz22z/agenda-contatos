const listaContatos = document.getElementByld("lista-contatos");

fetch("/contatos")
.then(response => response.json())
.then( => { 

listaContatos.innerHTML = "",
constatos.forEach(contato => {
  const artigo = document.createElement("article");
  artigo.classList.add("contato");

  artigo.innerHTML = <h3>${contato.nome}</h3>
<p>
<strong> Telefone: </strong>
${contato.telefone}
</p>

<p>
<strong> Email: </strong>
${contato.email}
</p>

;

listaContatos.appendChild(artigo);

});
});
 