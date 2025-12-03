// ==================================
// ACCESSIBILITY TOOLKIT - MY TOOLKIT
// Kanban board logic (To Explore / Developing / Mastered)
// ==================================

document.addEventListener('DOMContentLoaded', init);

let savedTools = [];
let toolStatus = {};

function init() {
    loadData();
    renderKanbanBoard();
    setupEventListeners();
}

// Load data from localStorage
function loadData() {
    savedTools = JSON.parse(localStorage.getItem('at_savedTools') || '[]');
    toolStatus = JSON.parse(localStorage.getItem('at_toolStatus') || '{}');
}

// Render the Kanban board
function renderKanbanBoard() {
    renderColumn('exploring');
    renderColumn('developing');
    renderColumn('mastered');
}

// Render a specific column
function renderColumn(status) {
    const column = document.getElementById(`${status}-column`);
    if (!column) return;

    // Get tools for this status
    const tools = savedTools.filter(id => {
        const toolStat = toolStatus[id] || 'exploring';
        return toolStat === status;
    });

    if (tools.length === 0) {
        column.innerHTML = `<p class="empty-column">No tools here yet</p>`;
        return;
    }

    // Render tools
    let html = '';
    tools.forEach(toolId => {
        const card = ACCESSIBILITY_CARDS.find(c => c.id === toolId);
        if (card) {
            html += createToolCardHTML(card, status);
        }
    });

    column.innerHTML = html;
}

// Create HTML for a tool card
function createToolCardHTML(card, currentStatus) {
    return `
        <div class="toolkit-card" data-card-id="${card.id}">
            <div class="toolkit-card-icon">${card.icon}</div>
            <h4 class="toolkit-card-title">${card.need}</h4>
            <p class="toolkit-card-category">${card.category}</p>
            <div class="toolkit-card-actions">
                <select class="status-select" data-card-id="${card.id}">
                    <option value="exploring" ${currentStatus === 'exploring' ? 'selected' : ''}>
                        To Explore
                    </option>
                    <option value="developing" ${currentStatus === 'developing' ? 'selected' : ''}>
                        Developing
                    </option>
                    <option value="mastered" ${currentStatus === 'mastered' ? 'selected' : ''}>
                        Mastered
                    </option>
                </select>
                <button class="btn-remove" data-card-id="${card.id}" title="Remove from toolkit">
                    🗑️
                </button>
            </div>
        </div>
    `;
}

// Setup event listeners
function setupEventListeners() {
    document.addEventListener('change', (e) => {
        if (e.target.classList.contains('status-select')) {
            handleStatusChange(e.target);
        }
    });

    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-remove')) {
            handleRemoveTool(e.target);
        }
    });
}

// Handle status change
function handleStatusChange(select) {
    const cardId = select.dataset.cardId;
    const newStatus = select.value;

    // Update status
    toolStatus[cardId] = newStatus;
    localStorage.setItem('at_toolStatus', JSON.stringify(toolStatus));

    // Re-render board with animation
    setTimeout(() => renderKanbanBoard(), 300);
}

// Handle remove tool
function handleRemoveTool(button) {
    const cardId = button.dataset.cardId;

    // Confirm removal
    if (!confirm('Remove this tool from your toolkit?')) {
        return;
    }

    // Remove from saved tools
    savedTools = savedTools.filter(id => id !== cardId);
    delete toolStatus[cardId];

    // Save to localStorage
    localStorage.setItem('at_savedTools', JSON.stringify(savedTools));
    localStorage.setItem('at_toolStatus', JSON.stringify(toolStatus));

    // Re-render board
    renderKanbanBoard();
}
