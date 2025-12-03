// ==================================
// ACCESSIBILITY TOOLKIT - DASHBOARD
// Main dashboard logic
// ==================================

document.addEventListener('DOMContentLoaded', init);

function init() {
    displayDate();
    displayMotivationalMessage();
    displayToolkitSummary();
}

// Display current date
function displayDate() {
    const dateElement = document.getElementById('current-date');
    if (!dateElement) return;

    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    
    dateElement.textContent = now.toLocaleDateString('en-GB', options);
}

// Display daily motivational message
function displayMotivationalMessage() {
    const messageElement = document.getElementById('motivational-message');
    if (!messageElement) return;

    // Get message based on day of year (consistent per day)
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    
    const messageIndex = dayOfYear % MOTIVATIONAL_MESSAGES.length;
    messageElement.textContent = MOTIVATIONAL_MESSAGES[messageIndex];
}

// Display toolkit summary
function displayToolkitSummary() {
    const summaryElement = document.getElementById('toolkit-summary');
    if (!summaryElement) return;

    // Get saved tools from localStorage
    const savedTools = JSON.parse(localStorage.getItem('at_savedTools') || '[]');
    const toolStatus = JSON.parse(localStorage.getItem('at_toolStatus') || '{}');

    // Count tools by status
    const exploring = savedTools.filter(id => !toolStatus[id] || toolStatus[id] === 'exploring').length;
    const developing = savedTools.filter(id => toolStatus[id] === 'developing').length;
    const mastered = savedTools.filter(id => toolStatus[id] === 'mastered').length;

    if (savedTools.length === 0) {
        summaryElement.innerHTML = `
            <div class="empty-toolkit">
                <div class="empty-icon">🎯</div>
                <p>You haven't saved any tools yet.</p>
                <p>Browse the Tool Finder to discover tools that can help with your needs.</p>
                <a href="AT-finder.html" class="btn-primary">Browse Tool Finder</a>
            </div>
        `;
        return;
    }

    // Display summary
    summaryElement.innerHTML = `
        <div class="toolkit-stats">
            <div class="stat-card exploring">
                <div class="stat-number">${exploring}</div>
                <div class="stat-label">To Explore</div>
            </div>
            <div class="stat-card developing">
                <div class="stat-number">${developing}</div>
                <div class="stat-label">Developing</div>
            </div>
            <div class="stat-card mastered">
                <div class="stat-number">${mastered}</div>
                <div class="stat-label">Mastered</div>
            </div>
        </div>
        <div class="toolkit-actions">
            <a href="AT-toolkit.html" class="btn-primary">View My Toolkit →</a>
        </div>
    `;
}