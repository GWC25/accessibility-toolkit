// ==================================
// ACCESSIBILITY TOOLKIT - SETTINGS
// Settings page logic
// ==================================

document.addEventListener('DOMContentLoaded', init);

function init() {
    loadSettings();
    setupEventListeners();
}

// Load saved settings from localStorage
function loadSettings() {
    const settings = JSON.parse(localStorage.getItem('at_settings') || '{}');
    
    // Apply saved settings or defaults
    document.getElementById('font-size').value = settings.fontSize || 'medium';
    document.getElementById('contrast-mode').value = settings.contrastMode || 'normal';
    document.getElementById('animations').value = settings.animations || 'full';
    
    // Apply settings to page
    applySettings(settings);
}

// Apply settings to the document
function applySettings(settings) {
    const root = document.documentElement;
    
    // Font size
    const fontSizes = {
        'small': '14px',
        'medium': '16px',
        'large': '18px',
        'x-large': '20px'
    };
    root.style.setProperty('--font-size-base', fontSizes[settings.fontSize || 'medium']);
    
    // Contrast mode
    if (settings.contrastMode === 'high') {
        root.classList.add('high-contrast');
    } else {
        root.classList.remove('high-contrast');
    }
    
    // Animations
    if (settings.animations === 'none') {
        root.classList.add('no-animations');
    } else if (settings.animations === 'reduced') {
        root.classList.add('reduced-motion');
    } else {
        root.classList.remove('no-animations', 'reduced-motion');
    }
}

// Setup event listeners
function setupEventListeners() {
    // Setting changes
    document.getElementById('font-size').addEventListener('change', handleSettingChange);
    document.getElementById('contrast-mode').addEventListener('change', handleSettingChange);
    document.getElementById('animations').addEventListener('change', handleSettingChange);
    
    // Data management buttons
    document.getElementById('clear-toolkit-btn').addEventListener('click', clearToolkit);
    document.getElementById('export-data-btn').addEventListener('click', exportData);
    document.getElementById('clear-all-btn').addEventListener('click', clearAllData);
}

// Handle setting changes
function handleSettingChange() {
    const settings = {
        fontSize: document.getElementById('font-size').value,
        contrastMode: document.getElementById('contrast-mode').value,
        animations: document.getElementById('animations').value
    };
    
    // Save to localStorage
    localStorage.setItem('at_settings', JSON.stringify(settings));
    
    // Apply immediately
    applySettings(settings);
}

// Clear toolkit data
function clearToolkit() {
    if (!confirm('Clear all saved tools and progress? This cannot be undone.')) {
        return;
    }
    
    localStorage.removeItem('at_savedTools');
    localStorage.removeItem('at_toolStatus');
    
    alert('Your toolkit has been cleared.');
}

// Export data
function exportData() {
    const data = {
        savedTools: JSON.parse(localStorage.getItem('at_savedTools') || '[]'),
        toolStatus: JSON.parse(localStorage.getItem('at_toolStatus') || '{}'),
        settings: JSON.parse(localStorage.getItem('at_settings') || '{}'),
        exportDate: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `accessibility-toolkit-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    
    alert('Your data has been exported!');
}

// Clear all data
function clearAllData() {
    if (!confirm('Delete ALL your data? This includes:\n- Saved tools\n- Progress tracking\n- Settings\n\nThis cannot be undone.')) {
        return;
    }
    
    if (!confirm('Are you absolutely sure? This is permanent.')) {
        return;
    }
    
    // Clear all accessibility toolkit data
    localStorage.removeItem('at_savedTools');
    localStorage.removeItem('at_toolStatus');
    localStorage.removeItem('at_settings');
    
    alert('All data cleared. The page will reload.');
    window.location.reload();
}