document.addEventListener('DOMContentLoaded', function () {
    const vagas = [
        {
            id: 1,
            titulo: "Assistente Social",
            local: "Projeto 2",
            tipo: "CLT",
            descricao: "Atendimento a população em situação de vulnerabilidade social.",
            requisitos: "Formação em Serviço Social, CRP ativo, experiência com população de rua."
        },
        {
            id: 2,
            titulo: "Educador Infantil",
            local: "Creche 1",
            tipo: "CLT",
            descricao: "Atuar com crianças de 0 a 5 anos em atividades pedagógicas.",
            requisitos: "Formação em Pedagogia ou Normal Superior, experiência com educação infantil."
        },
        {
            id: 3,
            titulo: "Enfermeiro",
            local: "Projeto 2 ",
            tipo: "Plantão",
            descricao: "Cuidados com idosos, administração de medicamentos, curativos.",
            requisitos: "Formação em Enfermagem, COREN ativo, experiência com geriatria."
        },
        {
            id: 4,
            titulo: "Assistente Social ",
            local: "projeto 3",
            tipo: "CLT",
            descricao: "Atendimento a população em situação de vulnerabilidade social.",
            requisitos: "Formação em Serviço Social, CRP ativo, experiência com população de rua."
        },
        {
            id: 5,
            titulo: "Assistente Social",
            local: "Projeto 1",
            tipo: "CLT",
            descricao: "Atendimento a população em situação de vulnerabilidade social.",
            requisitos: "Formação em Serviço Social, CRP ativo, experiência com população de rua."
        },
    ];

    const vagasContainer = document.getElementById('vagas-container');
    vagasContainer.innerHTML = '';

    vagas.forEach(vaga => {
        const vagaCard = document.createElement('div');
        vagaCard.className = 'card';

        vagaCard.innerHTML = `
            <div class="card-content">
                <h3>${vaga.titulo}</h3>
                <div class="vaga-meta">
                    <span><i class="fas fa-map-marker-alt"></i> ${vaga.local}</span>
                    <span><i class="fas fa-file-contract"></i> ${vaga.tipo}</span>
                </div>
                <p>${vaga.descricao}</p>
                <div class="vaga-details">
                    <h4>Requisitos:</h4>
                    <p>${vaga.requisitos}</p>
                </div>
                <button class="btn btn-secondary btn-small btn-inscrever" data-vaga-id="${vaga.id}">Quero me inscrever</button>
            </div>
        `;

        vagasContainer.appendChild(vagaCard);
    });

    document.querySelectorAll('.btn-inscrever').forEach(btn => {
        btn.addEventListener('click', function () {
            const vagaId = parseInt(this.getAttribute('data-vaga-id'));
            const vaga = vagas.find(v => v.id === vagaId);

            const email = "contato@instituicao.org"; // <-- Altere para o e-mail de destino real
            const assunto = `Inscrição para a vaga: ${vaga.titulo}`;
            const corpo = `Olá,\n\nGostaria de me inscrever para a vaga de ${vaga.titulo} localizada em ${vaga.local}.\n\nAguardo retorno.\n\nAtenciosamente,\n[Seu nome]`;

            const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;

            window.open(gmailLink, '_blank');

        });
    });
});
