// Configuração de categorias com emojis e cores
const categories = [
    { id: 'desafio', label: 'Desafio', emoji: '🎯' },
    { id: 'cooperacao', label: 'Cooperação', emoji: '🤝' },
    { id: 'estrategia', label: 'Estratégia', emoji: '🧩' },
    { id: 'criativo', label: 'Criativo', emoji: '🎨' },
    { id: 'motor', label: 'Motor', emoji: '🏃' },
    { id: 'social', label: 'Social', emoji: '👥' },
    { id: 'investigacao', label: 'Investigação', emoji: '🔍' },
    { id: 'imaginativo', label: 'Imaginativo', emoji: '🌍' },
    { id: 'rapido', label: 'Rápido', emoji: '⚡' },
    { id: 'circuito', label: 'Circuito', emoji: '🔄' }
];

// Estado da aplicação
let selectedCategory = null;
let searchQuery = '';

// Inicializar a aplicação
document.addEventListener('DOMContentLoaded', () => {
    renderCategoryFilter();
    renderGames();
    setupEventListeners();
});

// Setup de event listeners
function setupEventListeners() {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase();
        renderGames();
    });

    // Fechar modal ao clicar fora
    const modal = document.getElementById('gameModal');
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Fechar modal com ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

// Renderizar filtro de categorias
function renderCategoryFilter() {
    const filterContainer = document.getElementById('categoryFilter');
    filterContainer.innerHTML = '';

    // Botão "Todos"
    const allBtn = document.createElement('button');
    allBtn.className = 'category-btn active';
    allBtn.textContent = 'Todos';
    allBtn.onclick = () => {
        selectedCategory = null;
        updateCategoryButtons();
        renderGames();
    };
    filterContainer.appendChild(allBtn);

    // Botões de categorias
    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'category-btn';
        btn.textContent = `${cat.emoji} ${cat.label}`;
        btn.onclick = () => {
            selectedCategory = cat.id;
            updateCategoryButtons();
            renderGames();
        };
        filterContainer.appendChild(btn);
    });
}

// Atualizar estado dos botões de categoria
function updateCategoryButtons() {
    const buttons = document.querySelectorAll('.category-btn');
    buttons.forEach((btn, index) => {
        if (index === 0) {
            btn.classList.toggle('active', selectedCategory === null);
        } else {
            const categoryId = categories[index - 1].id;
            btn.classList.toggle('active', selectedCategory === categoryId);
        }
    });
}

// Filtrar jogos
function getFilteredGames() {
    return gamesData.filter(game => {
        const matchesCategory = selectedCategory === null || game.category === selectedCategory;
        const matchesSearch = 
            game.name.toLowerCase().includes(searchQuery) ||
            game.description.toLowerCase().includes(searchQuery);
        return matchesCategory && matchesSearch;
    });
}

// Obter emoji da categoria
function getCategoryEmoji(categoryId) {
    const cat = categories.find(c => c.id === categoryId);
    return cat ? cat.emoji : '🎮';
}

// Renderizar grid de jogos
function renderGames() {
    const gamesGrid = document.getElementById('gamesGrid');
    const noResults = document.getElementById('noResults');
    const filteredGames = getFilteredGames();

    if (filteredGames.length === 0) {
        gamesGrid.innerHTML = '';
        noResults.style.display = 'block';
        return;
    }

    noResults.style.display = 'none';
    gamesGrid.innerHTML = filteredGames.map(game => `
        <div class="game-card" onclick="openGameModal('${game.id}')">
            <div class="game-emoji">${getCategoryEmoji(game.category)}</div>
            <div class="game-category">${game.category}</div>
            <div class="game-name">${game.name}</div>
            <div class="game-description">${game.description.substring(0, 100)}...</div>
        </div>
    `).join('');
}

// Abrir modal com detalhes do jogo
function openGameModal(gameId) {
    const game = gamesData.find(g => g.id === gameId);
    if (!game) return;

    const modal = document.getElementById('gameModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');

    modalTitle.textContent = game.name;

    let html = `
        <div class="modal-section">
            <h3>Descrição</h3>
            <p>${game.description}</p>
        </div>

        <div class="modal-section">
            <h3>Como Jogar</h3>
            <ol class="instructions-list">
                ${game.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
            </ol>
        </div>
    `;

    // Adicionar informações adicionais se disponíveis
    if (game.minPlayers || game.maxPlayers || game.duration || (game.materials && game.materials.length > 0)) {
        html += '<div class="modal-section"><h3>Informações</h3><div class="info-grid">';

        if (game.minPlayers || game.maxPlayers) {
            html += `<div class="info-item">
                <div class="info-label">👥 Jogadores</div>
                <div>${game.minPlayers || '?'} - ${game.maxPlayers || '?'}</div>
            </div>`;
        }

        if (game.duration) {
            html += `<div class="info-item">
                <div class="info-label">⏱️ Duração</div>
                <div>${game.duration}</div>
            </div>`;
        }

        html += '</div>';

        if (game.materials && game.materials.length > 0) {
            html += `<div style="margin-top: 15px;">
                <div class="info-label" style="margin-bottom: 8px;">📦 Materiais Necessários</div>
                <ul style="margin-left: 20px; color: #666;">
                    ${game.materials.map(material => `<li>${material}</li>`).join('')}
                </ul>
            </div>`;
        }

        html += '</div>';
    }

    modalBody.innerHTML = html;
    modal.classList.add('active');
}

// Fechar modal
function closeModal() {
    const modal = document.getElementById('gameModal');
    modal.classList.remove('active');
}
