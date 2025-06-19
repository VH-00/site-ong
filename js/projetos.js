// Dados dos projetos
const projetos = [
    {
        id: 1,
        titulo: "Projeto 1",
        descricao: "Descrição do projeto xxx.",
        imagem: "img/projeto1.jpg",
        link: "projeto1.html",
        categoria: "assistencia",
        cidade: "taubate",
        endereco: "Rua Principal, 123 - Centro"
    },
    {
        id: 2,
        titulo: "Projeto 2",
        descricao: "Descrição do projeto xxx.",
        imagem: "../img/projeto2.jpg",
        link: "projeto2.html",
        categoria: "lgbtqia",
        cidade: "pindamonhangaba",
        endereco: "Rua do Acolhimento, 456"
    },
    {
        id: 3,
        titulo: "Projeto 3",
        descricao: "Descrição do projeto xxx.",
        imagem: "../img/projeto3.jpg",
        link: "projeto3.html",
        categoria: "idosos",
        cidade: "sao_jose_dos_campos",
        endereco: "Av. da Longevidade, 789"
    },
    {
        id: 4,
        titulo: "Projeto 4",
        descricao: "Descrição do projeto xxx.",
        imagem: "../img/projeto4.jpg",
        link: "projeto4.html",
        categoria: "criancas",
        cidade: "sao_jose_dos_campos",
        endereco: "Rua da Alegria, 654"
    },
    {
        id: 6,
        titulo: "creche 1",
        descricao: "Descrição da creche xxx.",
        imagem: "../img/creche1.jpg",
        link: "creches/creche1.html",
        categoria: "educacao",
        cidade: "taubate",
        endereco: "Rua educação I, 987"
    },
    {
        id: 7,
        titulo: "creche 2",
        descricao: "Descrição da creche xxx.",
        imagem: "../img/creche2.jpg",
        link: "creches/creche2.html",
        categoria: "educacao",
        cidade: "pindamonhangaba",
        endereco: "Rua educação II, 147"
    },
    {
        id: 8,
        titulo: "creche 3",
        descricao: "Descrição da creche xxx.",
        imagem: "../img/creche3.jpg",
        link: "creches/creche3.html",
        categoria: "educacao",
        cidade: "sao_jose_dos_campos",
        endereco: "Rua educação III, 258"
    },

];

// Mapeamento de categorias para nomes amigáveis
const categorias = {
    educacao: "Educação",
    idosos: "Idosos",
    lgbtqia: "LGBTQIA+",
    criancas: "Crianças",
    assistencia: "Assistência Social"
};

// Mapeamento de cidades para nomes amigáveis
const cidades = {
    pindamonhangaba: "Pindamonhangaba",
    sao_jose_dos_campos: "São José dos Campos",
    taubate: "Taubaté"

};

// Função para carregar os projetos
function carregarProjetos(filtroCategoria = 'todos', filtroCidade = 'todos') {
    const container = document.getElementById('todos-projetos');
    container.innerHTML = '';

    // Filtra os projetos
    const projetosFiltrados = projetos.filter(projeto => {
        const categoriaMatch = filtroCategoria === 'todos' || projeto.categoria === filtroCategoria;
        const cidadeMatch = filtroCidade === 'todos' || projeto.cidade === filtroCidade;
        return categoriaMatch && cidadeMatch;
    });

    // Exibe mensagem se não houver projetos
    if (projetosFiltrados.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <p>Nenhum projeto encontrado com os filtros selecionados.</p>
            </div>
        `;
        return;
    }

    // Cria os cards dos projetos
    projetosFiltrados.forEach(projeto => {
        const card = document.createElement('article');
        card.className = 'card projeto-card';
        card.innerHTML = `
            <div class="card-img">
                <img src="${projeto.imagem}" alt="${projeto.titulo}" loading="lazy">
            </div>
            <div class="card-content">
                <span class="projeto-categoria categoria-${projeto.categoria}">
                    ${categorias[projeto.categoria]}
                </span>
                <h3>${projeto.titulo}</h3>
                <p>${projeto.descricao}</p>
                <div class="projeto-local">
                    <i class="fas fa-map-marker-alt"></i>
                    ${cidades[projeto.cidade]}
                </div>
                <a href="${projeto.link}" class="btn btn-small">Conhecer Projeto</a>
            </div>
        `;
        container.appendChild(card);
    });
}

// Função para configurar os filtros
function configurarFiltros() {
    const filtroCategoria = document.getElementById('categoria-filter');
    const filtroCidade = document.getElementById('cidade-filter');

    filtroCategoria.addEventListener('change', () => {
        carregarProjetos(filtroCategoria.value, filtroCidade.value);
    });

    filtroCidade.addEventListener('change', () => {
        carregarProjetos(filtroCategoria.value, filtroCidade.value);
    });
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    // Atualiza o ano no footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Configura os filtros
    configurarFiltros();
    
    // Carrega todos os projetos inicialmente
    carregarProjetos();
    
    // Configura o menu mobile (reutilizando a função da página principal)
    if (typeof setupMobileMenu === 'function') {
        setupMobileMenu();
    }
});
