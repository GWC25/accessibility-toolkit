// ==================================
// ACCESSIBILITY TOOLKIT - DATA
// 6 Sample Cards for Proof of Concept
// ==================================

// MOTIVATIONAL MESSAGES
const MOTIVATIONAL_MESSAGES = [
    "Every tool you learn is a step toward independence.",
    "Technology should work for you, not against you.",
    "There's no single right way to learn - find what works for you.",
    "Accessibility tools aren't cheating - they're leveling the playing field.",
    "Small adjustments can make a huge difference to your learning.",
    "You have the power to customize technology to fit your needs.",
    "Learning takes time - be patient with yourself.",
    "Your learning style is unique and valid.",
    "Exploring new tools is part of discovering what works for you.",
    "Every expert was once a beginner learning new tools.",
    "Technology can remove barriers and unlock your potential.",
    "You deserve tools that make learning easier and more enjoyable.",
    "Confidence with technology grows with practice and exploration.",
    "There's a tool for almost every challenge - you just need to find it.",
    "Your success is enabled by your tools, not limited by your challenges.",
    "Learning how to learn is one of the most valuable skills.",
    "Celebrate every small victory in mastering new tools.",
    "The right tool at the right time can transform your experience.",
    "You're building skills that will serve you throughout your education.",
    "Don't be afraid to experiment - that's how you discover what works.",
    "Your unique way of learning is your strength.",
    "Technology can be your partner in learning and growth.",
    "Every tool you master expands your capabilities.",
    "Learning tools today makes tomorrow easier.",
    "You're not alone - many people benefit from these same tools.",
    "The best tool is the one that works for you right now.",
    "Your learning journey is yours - take it at your own pace.",
    "Progress, not perfection, is the goal.",
    "Asking for help and learning tools are signs of strength.",
    "Trust yourself to know what tools you need right now."
];

// CATEGORIES
const CATEGORIES = [
    'Reading & Text Comfort',
    'Writing & Expression',
    'Focus & Organization',
    'Vision & Screen Comfort',
    'Hearing & Communication',
    'Motor & Physical Access'
];

// ACCESSIBILITY CARDS
const ACCESSIBILITY_CARDS = [
    {
        id: 'reading-dark-mode',
        category: 'Reading & Text Comfort',
        icon: '🌙',
        need: 'Black on white text hurts my eyes',
        needDescription: 'Reading on bright white backgrounds causes eye strain, headaches, or visual discomfort after short periods.',
        difficulty: 'Beginner',
        solutions: [
            {
                toolName: 'Dark Mode (Windows)',
                platforms: ['Windows'],
                steps: [
                    'Press Windows key + I to open Settings',
                    'Click Personalization in the left sidebar',
                    'Click Colors',
                    'Under "Choose your mode", select Dark',
                    'Apps and system will immediately switch to dark backgrounds'
                ],
                videoId: 'l04F6KfqG6E',
                videoTitle: 'How to Enable Dark Mode in Windows 11',
                helpLink: 'https://support.microsoft.com/en-us/windows/change-colors-in-windows',
                tips: 'Most Microsoft apps respect your system dark mode setting automatically'
            },
            {
                toolName: 'Immersive Reader',
                platforms: ['Windows', 'Mac', 'Web', 'iOS', 'Android'],
                steps: [
                    'Open a webpage in Edge or document in Word',
                    'Press F9 or click the book icon',
                    'Click Text Preferences (AA icon)',
                    'Click Page Color',
                    'Choose Sepia, Gray, or Black background'
                ],
                videoId: '1Y3w-AMMjjE',
                videoTitle: 'Using Immersive Reader',
                helpLink: 'https://support.microsoft.com/en-us/topic/use-immersive-reader',
                tips: 'Immersive Reader also reduces visual clutter and distractions'
            }
        ],
        relatedCards: ['reading-text-size'],
        keywords: ['dark mode', 'background color', 'eye strain', 'brightness']
    },
    {
        id: 'reading-text-size',
        category: 'Reading & Text Comfort',
        icon: '🔍',
        need: 'Text is too small to read comfortably',
        needDescription: 'You squint at the screen, get headaches from straining, or hold your face very close to the monitor.',
        difficulty: 'Beginner',
        solutions: [
            {
                toolName: 'Text Scaling (Windows)',
                platforms: ['Windows'],
                steps: [
                    'Press Windows key + I to open Settings',
                    'Click Accessibility in the left sidebar',
                    'Click Text size',
                    'Drag the slider to increase text size (100% to 225%)',
                    'Click Apply to see changes across Windows'
                ],
                videoId: 'oTRFrYSKWVw',
                videoTitle: 'How to Change Text Size in Windows 11',
                helpLink: 'https://support.microsoft.com/en-us/windows/make-windows-easier-to-see',
                tips: 'This changes text size system-wide without making everything bigger'
            },
            {
                toolName: 'Magnifier',
                platforms: ['Windows', 'Mac'],
                steps: [
                    'Press Windows key and Plus (+) to open Magnifier',
                    'Use Windows + Plus to zoom in further',
                    'Use Windows + Minus (-) to zoom out',
                    'Press Windows + Esc to close Magnifier'
                ],
                videoId: 'TrGJ0h8Y8IM',
                videoTitle: 'Using Windows Magnifier',
                helpLink: 'https://support.microsoft.com/en-us/windows/use-magnifier',
                tips: 'Magnifier has Full Screen, Lens, and Docked views'
            }
        ],
        relatedCards: ['reading-dark-mode'],
        keywords: ['text size', 'zoom', 'magnifier', 'font size']
    },
    {
        id: 'writing-dictation',
        category: 'Writing & Expression',
        icon: '🎤',
        need: 'Hard to type what I am thinking',
        needDescription: 'Typing is slow, ideas flow faster than you can type, or you struggle to express thoughts in writing.',
        difficulty: 'Beginner',
        solutions: [
            {
                toolName: 'Voice Typing (Word, Outlook)',
                platforms: ['Windows', 'Mac', 'Web'],
                steps: [
                    'Click where you want to type',
                    'Press Alt + ` (the key above Tab)',
                    'Or click Dictate button in Home tab',
                    'Speak clearly - your words appear as text',
                    'Say punctuation: period, comma, question mark'
                ],
                videoId: 'A6iE40aBe58',
                videoTitle: 'Using Voice Typing in Microsoft 365',
                helpLink: 'https://support.microsoft.com/en-us/office/dictate-your-documents',
                tips: 'Works in 60+ languages - change language in Dictate menu'
            },
            {
                toolName: 'Windows Voice Typing',
                platforms: ['Windows'],
                steps: [
                    'Press Windows key + H anywhere in Windows',
                    'Voice typing panel appears',
                    'Speak naturally - text appears in any app',
                    'Press Windows + H again to stop'
                ],
                videoId: 'oTRFrYSKWVw',
                videoTitle: 'Windows Voice Typing',
                helpLink: 'https://support.microsoft.com/en-us/windows/use-voice-typing',
                tips: 'Works in any text field - email, web forms, chat, etc.'
            }
        ],
        relatedCards: ['writing-spelling'],
        keywords: ['dictation', 'voice typing', 'speech to text']
    },
    {
        id: 'writing-spelling',
        category: 'Writing & Expression',
        icon: '✅',
        need: 'I make lots of spelling and grammar errors',
        needDescription: 'You struggle with spelling, miss grammar mistakes, or want help catching errors before submitting work.',
        difficulty: 'Beginner',
        solutions: [
            {
                toolName: 'Microsoft Editor',
                platforms: ['Windows', 'Mac', 'Web'],
                steps: [
                    'Editor automatically underlines errors while you type',
                    'Red underline = spelling error',
                    'Blue underline = grammar error',
                    'Right-click underlined words to see suggestions',
                    'Or click Home → Editor (F7) for full review'
                ],
                videoId: 'vb956SpECDE',
                videoTitle: 'Using Microsoft Editor',
                helpLink: 'https://support.microsoft.com/en-us/office/microsoft-editor',
                tips: 'Editor learns your writing style and improves suggestions over time'
            }
        ],
        relatedCards: ['writing-dictation'],
        keywords: ['spelling', 'grammar', 'errors', 'proofreading']
    },
    {
        id: 'focus-distractions',
        category: 'Focus & Organization',
        icon: '🎯',
        need: 'Too many distractions on my screen',
        needDescription: 'You see notifications, menus, toolbars, and other windows that break your concentration.',
        difficulty: 'Beginner',
        solutions: [
            {
                toolName: 'Focus Mode (Word)',
                platforms: ['Windows', 'Mac'],
                steps: [
                    'Open Word document',
                    'Click View → Focus',
                    'Or press Ctrl + Shift + F1',
                    'Document fills screen, hiding menus',
                    'Press Esc to exit Focus mode'
                ],
                videoId: 'Pg4nRnJYKSM',
                videoTitle: 'Using Focus Mode in Word',
                helpLink: 'https://support.microsoft.com/en-us/office/focus-mode',
                tips: 'Focus mode leaves only your text visible'
            },
            {
                toolName: 'Focus Assist (Windows)',
                platforms: ['Windows'],
                steps: [
                    'Press Windows + N to open Notification Center',
                    'Click Focus button at top',
                    'Choose Priority only or Alarms only',
                    'Notifications are silenced until you turn Focus off'
                ],
                videoId: 'oTRFrYSKWVw',
                videoTitle: 'Using Focus Assist in Windows',
                helpLink: 'https://support.microsoft.com/en-us/windows/turn-focus-assist-on-or-off',
                tips: 'Schedule Focus assist to turn on automatically'
            }
        ],
        relatedCards: ['focus-task-management'],
        keywords: ['distractions', 'focus', 'notifications']
    },
    {
        id: 'focus-task-management',
        category: 'Focus & Organization',
        icon: '✓',
        need: 'I lose track of tasks and assignments',
        needDescription: 'You forget what you need to do, miss deadlines, or feel overwhelmed by everything you have to remember.',
        difficulty: 'Beginner',
        solutions: [
            {
                toolName: 'Microsoft To Do',
                platforms: ['Windows', 'Mac', 'Web', 'iOS', 'Android'],
                steps: [
                    'Open Microsoft To Do (free app)',
                    'Sign in with your Microsoft account',
                    'Click "Add a task" to create to-dos',
                    'Set due dates and reminders',
                    'Use My Day to focus on today\'s priorities',
                    'Check off tasks when complete'
                ],
                videoId: 'WMde9qrJN5I',
                videoTitle: 'Getting Started with Microsoft To Do',
                helpLink: 'https://support.microsoft.com/en-us/office/microsoft-to-do-help',
                tips: 'To Do syncs across all devices so you always see your tasks'
            }
        ],
        relatedCards: ['focus-distractions'],
        keywords: ['task management', 'to-do list', 'assignments']
    }
];