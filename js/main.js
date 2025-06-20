// Configurações globais
const config = {
    featuredProjects: [
        {
            title: "projeto 1",
            description: "Descrição do projeto.",
            link: "projetos/projeto1.html",
            image: "img/projetos/projeto1.jpg"
        },
        {
            title: "projeto 1",
            description: "Descrição do projeto.",
            link: "projetos/projeto2.html",
            image: "img/projetos/projeto2.jpg"
        },
        {
            title: "projeto 1",
            description: "Descrição do projeto.",
            link: "projetos/projeto3.html",
            image: "img/projetos/projeto3.jpg"
        }
    ],
    latestNews: [
        {
            title: "notícia 1",
            excerpt: "Descrição noticia 1.",
            date: "xx/xx/xxxx",
            link: "projeto1",
            image: "img/noticias/noticia1.jpg"
        },
        {
            title: "notícia 2",
            excerpt: "Descrição noticia 2.",
            date: "xx/xx/xxxx",
            link: "projeto2",
            image: "img/noticias/noticia2.jpg"
        },
        {
            title: "notícia 3",
            excerpt: "Descrição noticia 3.",
            date: "xx/xx/xxxx",
            link: "projeto3",
            image: "img/noticias/noticia3.jpg"
        }
    ]
};

// Funções utilitárias
const utils = {
    setCurrentYear: () => {
        document.getElementById('current-year').textContent = new Date().getFullYear();
    },
    
    animateNumbers: () => {
        const numberElements = document.querySelectorAll('[data-count]');
        
        numberElements.forEach(element => {
            const target = parseInt(element.getAttribute('data-count'));
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;
            
            const updateNumber = () => {
                current += increment;
                if (current < target) {
                    element.textContent = Math.floor(current);
                    requestAnimationFrame(updateNumber);
                } else {
                    element.textContent = target;
                }
            };
            
            updateNumber();
        });
    }
};

// Funções de carregamento de conteúdo
const contentLoader = {
    loadFeaturedProjects: () => {
        const projectsContainer = document.getElementById('projetos-destaque');
        if (!projectsContainer) return;

        projectsContainer.innerHTML = '';

        config.featuredProjects.forEach(project => {
            const projectElement = document.createElement('article');
            projectElement.className = 'card';
            projectElement.innerHTML = `
                <div class="card-img">
                    <img src="${project.image}" alt="${project.title}" loading="lazy">
                </div>
                <div class="card-content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <a href="${project.link}" class="btn btn-small">Saiba Mais</a>
                </div>
            `;
            projectsContainer.appendChild(projectElement);
        });
    },
    
    loadLatestNews: () => {
        const newsContainer = document.getElementById('ultimas-noticias');
        if (!newsContainer) return;

        newsContainer.innerHTML = '';

        config.latestNews.forEach(news => {
            const newsElement = document.createElement('article');
            newsElement.className = 'card news-card';
            newsElement.innerHTML = `
                <div class="card-img">
                    <img src="${news.image}" alt="${news.title}" loading="lazy">
                </div>
                <div class="card-content">
                    <span class="news-date">${news.date}</span>
                    <h3>${news.title}</h3>
                    <p>${news.excerpt}</p>
                    <a href="${news.link}" class="btn btn-small">Ler Mais</a>
                </div>
            `;
            newsContainer.appendChild(newsElement);
        });
    }
};

// Funções de UI
const ui = {
    setupMobileMenu: () => {
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mainNav = document.getElementById('main-nav');
        const dropdowns = document.querySelectorAll('.dropdown');
        
        if (!mobileMenuBtn || !mainNav) return;

        mobileMenuBtn.addEventListener('click', function() {
            const expanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !expanded);
            mainNav.classList.toggle('active');
        });

        dropdowns.forEach(dropdown => {
            const link = dropdown.querySelector('.nav-link');
            link.addEventListener('click', (e) => {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    dropdown.classList.toggle('active');
                }
            });
        });
    },

    setupIntersectionObserver: () => {
        const stats = document.querySelector('.stats');
        if (!stats) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    utils.animateNumbers();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(stats);
    },

    highlightCurrentPage: () => {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-link, .dropdown-link');

        navLinks.forEach(link => {
            const linkPage = link.getAttribute('href').split('/').pop();

            if (currentPage === linkPage) {
                link.classList.add('active');

                const parent = link.closest('.dropdown-content');
                if (parent) {
                    const dropdownToggle = parent.previousElementSibling;
                    if (dropdownToggle && dropdownToggle.classList.contains('nav-link')) {
                        dropdownToggle.classList.add('active');
                    }
                }
            }

            if (linkPage === 'creches.html' && currentPage.includes('creches/')) {
                link.classList.add('active');
                link.closest('.dropdown-content').previousElementSibling.classList.add('active');
            }

            if (linkPage === 'transparencia.html' && currentPage.includes('transparencia/')) {
                link.classList.add('active');
                link.closest('.dropdown-content').previousElementSibling.classList.add('active');
            }
        });
    }
};

// Inicialização da aplicação
document.addEventListener('DOMContentLoaded', function () {
    utils.setCurrentYear();
    contentLoader.loadFeaturedProjects();
    contentLoader.loadLatestNews();
    ui.setupMobileMenu();
    ui.setupIntersectionObserver();
    ui.highlightCurrentPage();
});
