document.addEventListener('DOMContentLoaded', function() {
    // Dados dos projetos para transparência
    const projetos = [
        {
            id: 1,
            titulo: "Sede VAPI",
            descricao: "Documentos financeiros da sede administrativa",
            imagem: "img/projetos/sede.jpg",
            link: "transparencia-sede.html"
        },
        {
            id: 2,
            titulo: "Abrigo LGBTQIA+",
            descricao: "Transparência do abrigo feminino",
            imagem: "img/projetos/abrigo-lgbtqia.jpg",
            link: "transparencia-abrigo.html"
        },
        {
            id: 3,
            titulo: "Casa do Idoso",
            descricao: "Prestação de contas do projeto",
            imagem: "img/projetos/casa-idoso.jpg",
            link: "transparencia-idoso.html"
        },
        {
            id: 4,
            titulo: "Creches CEDINS",
            descricao: "Recursos aplicados nas unidades educacionais",
            imagem: "img/projetos/creches.jpg",
            link: "transparencia-creches.html"
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