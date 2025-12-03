// ==================================
// VISION & SCREEN COMFORT CARDS
// 8 cards for visual challenges
// ==================================

const VISION_CARDS = [
    {
        id: 'vision-high-contrast',
        category: 'Vision & Screen Comfort',
        icon: '⚫⚪',
        need: 'Hard to see text and buttons clearly',
        needDescription: 'Low contrast between text and background makes reading difficult, or you struggle to see interface elements.',
        difficulty: 'Beginner',
        solution: {
            toolName: 'High Contrast Mode (Windows)',
            platforms: ['Windows'],
            steps: [
                'Press Left Alt + Left Shift + Print Screen',
                'Click Yes to enable High Contrast',
                'Choose a high contrast theme in Settings',
                'Press the same keys again to turn off',
                'Customize colors in Accessibility settings'
            ],
            videoSearch: 'windows high contrast mode accessibility',
            helpSearch: 'microsoft high contrast themes windows',
            videoId: null,
            helpLink: null,
            tips: 'High contrast mode works across all apps and increases visibility dramatically'
        },
        relatedCards: ['reading-color-filters', 'reading-text-size'],
        keywords: ['high contrast', 'visibility', 'low vision', 'contrast mode', 'theme']
    },
    {
        id: 'vision-pointer-size',
        category: 'Vision & Screen Comfort',
        icon: '➡️',
        need: 'I lose track of my mouse pointer',
        needDescription: 'The mouse cursor is too small or disappears on certain backgrounds, making it hard to find.',
        difficulty: 'Beginner',
        solution: {
            toolName: 'Mouse Pointer Settings (Windows)',
            platforms: ['Windows'],
            steps: [
                'Press Windows key + I for Settings',
                'Click Accessibility',
                'Click Mouse pointer and touch',
                'Increase pointer size using the slider',
                'Change pointer color for better visibility'
            ],
            videoSearch: 'windows mouse pointer size color accessibility',
            helpSearch: 'microsoft change mouse pointer size visibility',
            videoId: null,
            helpLink: null,
            tips: 'You can also enable pointer trails to track movement more easily'
        },
        relatedCards: ['reading-cursor-color', 'vision-high-contrast'],
        keywords: ['mouse pointer', 'cursor', 'visibility', 'tracking', 'lost cursor']
    },
    {
        id: 'vision-screen-reader',
        category: 'Vision & Screen Comfort',
        icon: '🔊',
        need: 'I am blind or have very low vision',
        needDescription: 'You cannot see the screen or need everything read aloud to navigate your computer.',
        difficulty: 'Advanced',
        solution: {
            toolName: 'Narrator (Windows)',
            platforms: ['Windows'],
            steps: [
                'Press Windows key + Ctrl + Enter to start Narrator',
                'Narrator reads everything on screen aloud',
                'Use Tab to move between elements',
                'Press Caps Lock + E to read full screen',
                'Press Windows + Ctrl + Enter again to stop'
            ],
            videoSearch: 'windows narrator screen reader tutorial',
            helpSearch: 'microsoft narrator guide complete',
            videoId: null,
            helpLink: null,
            tips: 'Narrator has many keyboard shortcuts - consider taking a tutorial to learn them'
        },
        relatedCards: ['reading-read-aloud', 'hearing-live-captions'],
        keywords: ['narrator', 'screen reader', 'blind', 'low vision', 'text to speech', 'accessibility']
    },
    {
        id: 'vision-zoom-edge',
        category: 'Vision & Screen Comfort',
        icon: '🔎',
        need: 'Websites and online content are too small',
        needDescription: 'Web pages have tiny text and images, and you need to zoom in frequently.',
        difficulty: 'Beginner',
        solution: {
            toolName: 'Browser Zoom (Edge)',
            platforms: ['Windows', 'Mac', 'Web'],
            steps: [
                'Open Edge browser',
                'Press Ctrl and + (plus) to zoom in',
                'Press Ctrl and - (minus) to zoom out',
                'Press Ctrl and 0 (zero) to reset zoom',
                'Edge remembers your zoom level for each website'
            ],
            videoSearch: 'microsoft edge zoom text size',
            helpSearch: 'edge browser zoom accessibility',
            videoId: null,
            helpLink: null,
            tips: 'You can also set a default zoom level for all websites in Edge settings'
        },
        relatedCards: ['reading-magnifier', 'reading-text-size'],
        keywords: ['browser zoom', 'web zoom', 'website too small', 'zoom in', 'edge']
    },
    {
        id: 'vision-reading-progress',
        category: 'Vision & Screen Comfort',
        icon: '📏',
        need: 'I lose my place when reading long text',
        needDescription: 'You skip lines, re-read the same line, or have trouble tracking across the page.',
        difficulty: 'Beginner',
        solution: {
            toolName: 'Reading Guide in Immersive Reader',
            platforms: ['Windows', 'Mac', 'Web', 'iOS', 'Android'],
            steps: [
                'Open a document in Word or webpage in Edge',
                'Press F9 to open Immersive Reader',
                'Click Reading Preferences',
                'Turn on Line Focus',
                'Choose 1, 3, or 5 lines to highlight at once'
            ],
            videoSearch: 'immersive reader line focus reading guide',
            helpSearch: 'microsoft immersive reader reading tools',
            videoId: null,
            helpLink: null,
            tips: 'Line focus dims everything except the lines you are reading'
        },
        relatedCards: ['reading-immersive-reader', 'reading-text-spacing'],
        keywords: ['line focus', 'reading guide', 'lose place', 'line tracking', 'dyslexia']
    },
    {
        id: 'vision-reduce-animations',
        category: 'Vision & Screen Comfort',
        icon: '🎬',
        need: 'Moving content makes me dizzy or distracted',
        needDescription: 'Animations, transitions, and moving elements cause discomfort, dizziness, or make it hard to focus.',
        difficulty: 'Beginner',
        solution: {
            toolName: 'Reduce Motion (Windows)',
            platforms: ['Windows'],
            steps: [
                'Press Windows key + I for Settings',
                'Click Accessibility',
                'Click Visual effects',
                'Turn off Animation effects',
                'Turn off Transparency effects if needed'
            ],
            videoSearch: 'windows reduce motion animation effects',
            helpSearch: 'microsoft disable animations accessibility',
            videoId: null,
            helpLink: null,
            tips: 'This removes animations throughout Windows and most apps'
        },
        relatedCards: ['vision-high-contrast', 'focus-notifications-off'],
        keywords: ['motion sensitivity', 'animations', 'dizziness', 'vestibular', 'motion sickness']
    },
    {
        id: 'vision-visual-notifications',
        category: 'Vision & Screen Comfort',
        icon: '💡',
        need: 'I miss notifications because I don\'t see them',
        needDescription: 'Notification pop-ups disappear before you notice them, or they appear in hard-to-see areas.',
        difficulty: 'Beginner',
        solution: {
            toolName: 'Audio Alerts (Windows)',
            platforms: ['Windows'],
            steps: [
                'Press Windows key + I for Settings',
                'Click Accessibility',
                'Click Audio',
                'Turn on Flash my screen during audio notifications',
                'Choose flash title bar, active window, or entire screen'
            ],
            videoSearch: 'windows flash screen notifications accessibility',
            helpSearch: 'microsoft visual audio alerts',
            videoId: null,
            helpLink: null,
            tips: 'Screen flashes help you notice alerts even if you miss the visual notification'
        },
        relatedCards: ['hearing-live-captions', 'focus-notifications-off'],
        keywords: ['visual alerts', 'notifications', 'flash screen', 'missed notifications', 'alerts']
    },
    {
        id: 'vision-reduce-clutter',
        category: 'Vision & Screen Comfort',
        icon: '🧹',
        need: 'Screen feels overwhelming with too much information',
        needDescription: 'Multiple windows, taskbar items, and desktop icons make the screen feel cluttered and hard to navigate.',
        difficulty: 'Beginner',
        solution: {
            toolName: 'Simplify Desktop (Windows)',
            platforms: ['Windows'],
            steps: [
                'Right-click desktop and uncheck Show desktop icons',
                'Right-click taskbar, click Taskbar settings',
                'Under Taskbar items, hide widgets and search',
                'Pin only your most-used apps to taskbar',
                'Use Windows + D to show/hide desktop when needed'
            ],
            videoSearch: 'windows simplify desktop taskbar clean',
            helpSearch: 'microsoft customize taskbar desktop icons',
            videoId: null,
            helpLink: null,
            tips: 'A cleaner desktop reduces visual overwhelm and helps you focus'
        },
        relatedCards: ['focus-virtual-desktops', 'vision-high-contrast'],
        keywords: ['clutter', 'desktop cleanup', 'overwhelm', 'simplify', 'minimize distractions']
    }
];