// ==================================
// DIGIWEST ACCESS TOOLKIT - DATA
// Sample: 6 Cards for Proof of Concept
// ==================================

// MOTIVATIONAL MESSAGES (30 total)
const MOTIVATIONAL_MESSAGES = [
    "Every tool you learn is a step toward independence.",
    "Technology should work for you, not against you.",
    "There's no single right way to learn - find what works for you.",
    "Asking for help and learning tools are signs of strength, not weakness.",
    "Small adjustments can make a huge difference to your learning.",
    "You have the power to customize technology to fit your needs.",
    "Learning takes time - be patient with yourself.",
    "Accessibility tools aren't cheating - they're leveling the playing field.",
    "Your learning style is unique and valid.",
    "Exploring new tools is part of discovering what works for you.",
    "Every expert was once a beginner learning new tools.",
    "Technology can remove barriers and unlock your potential.",
    "You deserve tools that make learning easier and more enjoyable.",
    "Confidence with technology grows with practice and exploration.",
    "There's a tool for almost every challenge - you just need to find it.",
    "Your success is not limited by your challenges, but enabled by your tools.",
    "Learning how to learn is one of the most valuable skills.",
    "Celebrate every small victory in mastering new tools.",
    "The right tool at the right time can transform your experience.",
    "You are building skills that will serve you throughout your education and career.",
    "Don't be afraid to experiment - that's how you discover what works.",
    "Accessibility is about removing barriers, not lowering standards.",
    "Your unique way of learning is your strength.",
    "Technology can be your partner in learning and growth.",
    "Every tool you master expands your capabilities.",
    "Learning tools today makes tomorrow easier.",
    "You're not alone - many people benefit from these same tools.",
    "The best tool is the one that works for you right now.",
    "Your learning journey is yours - take it at your own pace.",
    "Progress, not perfection, is the goal."
];

// SECTION/CATEGORY LIST
const CATEGORIES = [
    'Reading & Text Comfort',
    'Writing & Expression',
    'Focus & Organization',
    'Vision & Screen Comfort',
    'Hearing & Communication',
    'Motor & Physical Access'
];

// ACCESSIBILITY CARDS (6 sample cards - 2 per category)
const ACCESSIBILITY_CARDS = [
    // READING & TEXT COMFORT
    {
        id: 'reading-dark-mode',
        category: 'Reading & Text Comfort',
        icon: '🌙',
        need: 'Black on white text hurts my eyes',
        needDescription: 'Reading on bright white backgrounds causes eye strain, headaches, or visual discomfort.',
        difficulty: 'Beginner',
        solutions: [
            {
                toolName: 'Dark Mode (Windows)',
                platforms: ['Windows'],
                steps: [
                    'Press Windows key + I to open Settings',
                    'Click Personalization',
                    'Click Colors',
                    'Select Dark mode',
                    'Apps switch to dark backgrounds'
                ],
                videoId: 'l04F6KfqG6E',
                videoTitle: 'Enable Dark Mode in Windows 11',
                helpLink: 'https://support.microsoft.com/windows/change-colors',
                tips: 'Most Microsoft apps respect your dark mode setting'
            }
        ],
        relatedCards: ['reading-text-size'],
        keywords: ['dark mode', 'eye strain', 'brightness']
    },
    {
        id: 'reading-text-size',
        category: 'Reading & Text Comfort',
        icon: '🔍',
        need: 'Text is too small to read',
        needDescription: 'You squint at the screen or get headaches from straining.',
        difficulty: 'Beginner',
        solutions: [
            {
                toolName: 'Text Scaling',
                platforms: ['Windows'],
                steps: [
                    'Open Settings',
                    'Click Accessibility',
                    'Click Text size',
                    'Drag slider to increase',
                    'Click Apply'
                ],
                videoId: 'oTRFrYSKWVw',
                videoTitle: 'Change Text Size',
                helpLink: 'https://support.microsoft.com/windows',
                tips: 'Changes text without resizing everything'
            }
        ],
        relatedCards: ['reading-dark-mode'],
        keywords: ['text size', 'zoom', 'magnifier']
    },
    // WRITING & EXPRESSION
    {
        id: 'writing-dictation',
        category: 'Writing & Expression',
        icon: '🎤',
        need: 'Hard to type what I am thinking',
        needDescription: 'Typing is slow or ideas flow faster than you can type.',
        difficulty: 'Beginner',
        solutions: [
            {
                toolName: 'Voice Typing',
                platforms: ['Windows', 'Mac', 'Web'],
                steps: [
                    'Press Windows + H',
                    'Speak clearly',
                    'Say punctuation',
                    'Press Windows + H to stop'
                ],
                videoId: 'A6iE40aBe58',
                videoTitle: 'Voice Typing Tutorial',
                helpLink: 'https://support.microsoft.com/office',
                tips: 'Works in 60+ languages'
            }
        ],
        relatedCards: ['writing-spelling'],
        keywords: ['dictation', 'voice typing', 'speech to text']
    },
    {
        id: 'writing-spelling',
        category: 'Writing & Expression',
        icon: '✅',
        need: 'I make spelling and grammar errors',
        needDescription: 'You struggle with spelling or miss grammar mistakes.',
        difficulty: 'Beginner',
        solutions: [
            {
                toolName: 'Microsoft Editor',
                platforms: ['Windows', 'Mac', 'Web'],
                steps: [
                    'Editor underlines errors',
                    'Red = spelling',
                    'Blue = grammar',
                    'Right-click for suggestions',
                    'Click Editor for full review'
                ],
                videoId: 'vb956SpECDE',
                videoTitle: 'Using Microsoft Editor',
                helpLink: 'https://support.microsoft.com/office',
                tips: 'Learns your writing style'
            }
        ],
        relatedCards: ['writing-dictation'],
        keywords: ['spelling', 'grammar', 'errors']
    },
    // FOCUS & ORGANIZATION
    {
        id: 'focus-distractions',
        category: 'Focus & Organization',
        icon: '🎯',
        need: 'Too many distractions on screen',
        needDescription: 'Notifications and menus break your concentration.',
        difficulty: 'Beginner',
        solutions: [
            {
                toolName: 'Focus Mode',
                platforms: ['Windows', 'Mac'],
                steps: [
                    'Open Word',
                    'Click View → Focus',
                    'Press Esc to exit'
                ],
                videoId: 'Pg4nRnJYKSM',
                videoTitle: 'Using Focus Mode',
                helpLink: 'https://support.microsoft.com/office',
                tips: 'Hides menus for distraction-free writing'
            }
        ],
        relatedCards: ['focus-task-management'],
        keywords: ['distractions', 'focus', 'notifications']
    },
    {
        id: 'focus-task-management',
        category: 'Focus & Organization',
        icon: '✓',
        need: 'I lose track of tasks',
        needDescription: 'You forget what to do or miss deadlines.',
        difficulty: 'Beginner',
        solutions: [
            {
                toolName: 'Microsoft To Do',
                platforms: ['Windows', 'Mac', 'Web', 'iOS', 'Android'],
                steps: [
                    'Open To Do app',
                    'Click "Add a task"',
                    'Set due dates',
                    'Check off when done'
                ],
                videoId: 'WMde9qrJN5I',
                videoTitle: 'Getting Started with To Do',
                helpLink: 'https://support.microsoft.com/office',
                tips: 'Syncs across all devices'
            }
        ],
        relatedCards: ['focus-distractions'],
        keywords: ['tasks', 'to-do', 'assignments']
    }
];