document.addEventListener('DOMContentLoaded', function() {
    // Dados dos projetos para transparência
    const projetos = [
        {
            id: 1,
            titulo: "Sede ",
            descricao: "Documentos financeiros da sede administrativa",
            imagem: "img/projetos/sede.jpg",
            link: "transparencia-sede.html"
        },
        {
            id: 2,
            titulo: "Projeto 1",
            descricao: "Descrição 1",
            imagem: "img/projetos/projeto1.jpg",
            link: "projeto1.html"
        },
        {
            id: 3,
           titulo: "Projeto 2",
            descricao: "Descrição 2",
            imagem: "img/projetos/projeto2.jpg",
            link: "projeto2.html"
        },
        {
            id: 4,
            titulo: "Projeto 3",
            descricao: "Descrição 3",
            imagem: "img/projetos/projeto3.jpg",
            link: "projeto3.html"
        }
    ];

    const container = document.getElementById('projetos-transparencia');
    
    // Limpa qualquer conteúdo de placeholder
    container.innerHTML = '';
    
    // Cria os cards de projetos
    projetos.forEach(projeto => {
        const projetoCard = document.createElement('a');
        projetoCard.href = projeto.link;
        projetoCard.className = 'card projeto-card';
        projetoCard.innerHTML = `
            <div class="card-img">
                <img src="${projeto.imagem}" alt="${projeto.titulo}" loading="lazy">
            </div>
            <div class="card-content">
                <h3>${projeto.titulo}</h3>
                <p>${projeto.descricao}</p>
                <span class="btn btn-secondary btn-small">Acessar documentos</span>
            </div>
        `;
        container.appendChild(projetoCard);
    });
});
