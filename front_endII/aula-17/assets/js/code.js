// Aqui realizamos a consulta da promisse, esperando sua resposta assíncrona
fetch('https://randomuser.me/api/')
    .then(response => {
        return response.json()
    })
    
    .then(data => {
        //manipulamos a resposta
        console.log(data)
        renderizarDadosUsuario(data);

    });

function renderizarDadosUsuario(dados) {
    /* -------------------------------- Tarefa 1 -------------------------------- */
    // Aqui devem desenvolver uma função que seja exibida na tela:
    // a foto, o nome completo do usuário e o e-mail.
    // Isto deve ser baseado nas informações que obtemos da API e inseridas no HTML.

    //Chama o card
    let card = document.querySelector('.card');

    //Foto
    let foto = dados.results[0].picture.large;

    //Nome
    let tratamento = dados.results[0].name.title;
    let nome = dados.results[0].name.first;
    let sobrenome = dados.results[0].name.last;

    let nomeCompleto = `${tratamento} ${nome} ${sobrenome}`;

    //Email
    let email = dados.results[0].email;

    //Adição dos dados ao card pai
    card.innerHTML = `
    <div id="cardApi">
    <img src="${foto}">
    <h2 class="nome">${nomeCompleto}</h2>
    <p class="email">${email}</p>
    </div>
    `;

    //Botão atualizando os dados
    let botão = document.getElementById('random');

    //Nova requisição ao clicar no botão
    botão.addEventListener('click', () => {fetch('https://randomuser.me/api/')
    .then(response => {
        return response.json()
    })
    .then(data => {
        //manipulamos a resposta
        renderizarDadosUsuario(data);

    });
        
    })
}

/* --------------------------- Tarefa 2 (extra) --------------------------- */
// Aqui você pode ir para o ponto extra de usar o botão que está comentado no HTML.
// Você pode descomentar o código no index.html e usar esse botão para executar uma nova solicitação API, sem recarregar a página.
// Cabe aos desenvolvedores decidirem qual bloco de código deve ser contido dentro de uma função para que ele possa ser executado toda vez que um clique de botão for realizado.