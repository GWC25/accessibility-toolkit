// ==================================
// ACCESSIBILITY TOOLKIT - FINDER
// Tool Finder page logic
// ==================================

// Initialize when page loads
document.addEventListener('DOMContentLoaded', init);

let currentFilter = 'all';
let savedTools = [];

function init() {
    loadSavedTools();
    renderCategoryFilter();
    renderCards(currentFilter);
    setupEventListeners();
}

// Load saved tools from storage
function loadSavedTools() {
    const stored = localStorage.getItem('at_savedTools');
    savedTools = stored ? JSON.parse(stored) : [];
}

// Render category filter buttons
function renderCategoryFilter() {
    const filterContainer = document.getElementById('category-filter');
    if (!filterContainer) return;

    let html = `<button class="filter-btn active" data-category="all">View All</button>`;
    
    CATEGORIES.forEach(category => {
        html += `<button class="filter-btn" data-category="${category}">${category}</button>`;
    });
    
    filterContainer.innerHTML = html;
}

// Render tool cards
function renderCards(filter) {
    const container = document.getElementById('cards-container');
    if (!container) return;

    // Filter cards
    let cards = filter === 'all' 
        ? ACCESSIBILITY_CARDS 
        : ACCESSIBILITY_CARDS.filter(card => card.category === filter);

    if (cards.length === 0) {
        container.innerHTML = '<p class="empty-state">No tools found for this category.</p>';
        return;
    }

    // Render cards
    let html = '';
    cards.forEach(card => {
        const isSaved = savedTools.includes(card.id);
        html += createCardHTML(card, isSaved);
    });

    container.innerHTML = html;
}

// Create HTML for a single card
function createCardHTML(card, isSaved) {
    const savedClass = isSaved ? 'saved' : '';
    
    return `
        <div class="card-wrapper" data-card-id="${card.id}">
            <div class="card ${savedClass}">
                <div class="card-face card-front">
                    <div class="card-icon">${card.icon}</div>
                    <h3 class="card-title">${card.need}</h3>
                    <p class="card-description">${card.needDescription}</p>
                    <span class="difficulty-badge ${card.difficulty.toLowerCase()}">${card.difficulty}</span>
                    <p class="flip-hint">Click to see solutions →</p>
                </div>
                <div class="card-face card-back">
                    <h3 class="card-title">Solutions</h3>
                    <div class="solutions-container">
                        ${card.solutions.map(solution => createSolutionHTML(solution)).join('')}
                    </div>
                    <div class="card-actions">
                        <button class="btn-primary save-tool-btn" data-card-id="${card.id}">
                            ${isSaved ? '✓ Saved' : 'Save to My Toolkit'}
                        </button>
                        <button class="btn-secondary flip-back-btn">← Back</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Create HTML for a solution
function createSolutionHTML(solution) {
    const platformBadges = solution.platforms.map(p => 
        `<span class="platform-badge">${p}</span>`
    ).join('');

    return `
        <div class="solution">
            <h4 class="solution-title">${solution.toolName}</h4>
            <div class="platform-badges">${platformBadges}</div>
            <ol class="solution-steps">
                ${solution.steps.map(step => `<li>${step}</li>`).join('')}
            </ol>
            ${solution.tips ? `<p class="solution-tips"><strong>Tip:</strong> ${solution.tips}</p>` : ''}
            <div class="solution-links">
                <a href="https://www.youtube.com/watch?v=${solution.videoId}" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   class="btn-link">
                    📺 Watch Video
                </a>
                <a href="${solution.helpLink}" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   class="btn-link">
                    📖 Help Article
                </a>
            </div>
        </div>
    `;
}

// Setup event listeners
function setupEventListeners() {
    // Category filter buttons
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-btn')) {
            handleFilterClick(e.target);
        }
        if (e.target.classList.contains('card') || e.target.closest('.card-front')) {
            handleCardFlip(e.target);
        }
        if (e.target.classList.contains('flip-back-btn')) {
            handleCardFlip(e.target);
        }
        if (e.target.classList.contains('save-tool-btn')) {
            handleSaveTool(e.target);
        }
    });
}

// Handle filter button click
function handleFilterClick(button) {
    // Update active state
    document.querySelectorAll('.filter-btn').forEach(btn => 
        btn.classList.remove('active')
    );
    button.classList.add('active');

    // Get category and render
    currentFilter = button.dataset.category;
    renderCards(currentFilter);
}

// Handle card flip
function handleCardFlip(element) {
    const card = element.closest('.card');
    if (card) {
        card.classList.toggle('flipped');
    }
}

// Handle save tool
function handleSaveTool(button) {
    const cardId = button.dataset.cardId;
    
    if (savedTools.includes(cardId)) {
        // Remove from saved
        savedTools = savedTools.filter(id => id !== cardId);
        button.textContent = 'Save to My Toolkit';
        button.closest('.card').classList.remove('saved');
    } else {
        // Add to saved
        savedTools.push(cardId);
        button.textContent = '✓ Saved';
        button.closest('.card').classList.add('saved');
    }

    // Save to localStorage
    localStorage.setItem('at_savedTools', JSON.stringify(savedTools));
}