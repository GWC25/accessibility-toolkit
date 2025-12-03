// ==================================
// WRITING & EXPRESSION CARDS
// 10 cards for writing challenges
// ==================================

const WRITING_CARDS = [
    {
        id: 'writing-voice-typing',
        category: 'Writing & Expression',
        icon: '🎤',
        need: 'Hard to type what I am thinking',
        needDescription: 'Typing is slow, ideas flow faster than you can type, or you struggle to express thoughts in writing.',
        difficulty: 'Beginner',
        solution: {
            toolName: 'Voice Typing (Windows)',
            platforms: ['Windows'],
            steps: [
                'Click in any text field (Word, email, etc.)',
                'Press Windows key + H to start voice typing',
                'Speak clearly into your microphone',
                'Say punctuation: "comma", "period", "question mark"',
                'Press Windows key + H again to stop'
            ],
            videoSearch: 'windows voice typing dictation tutorial',
            helpSearch: 'microsoft voice typing windows 11',
            videoId: null,
            helpLink: null,
            tips: 'Works in any app - Word, email, OneNote, even web browsers'
        },
        relatedCards: ['writing-dictate-word', 'writing-autocorrect'],
        keywords: ['voice typing', 'dictation', 'speech to text', 'typing slow', 'voice input']
    },
    {
        id: 'writing-dictate-word',
        category: 'Writing & Expression',
        icon: '🗣️',
        need: 'I need voice typing with better formatting',
        needDescription: 'Basic voice typing works, but you need better punctuation control and formatting commands.',
        difficulty: 'Beginner',
        solution: {
            toolName: 'Dictate in Word',
            platforms: ['Windows', 'Mac', 'Web'],
            steps: [
                'Open Microsoft Word',
                'Click the Home tab',
                'Click the Dictate button (microphone icon)',
                'Speak naturally - Word adds punctuation automatically',
                'Say commands like "new line" or "delete that"'
            ],
            videoSearch: 'microsoft word dictate feature tutorial',
            helpSearch: 'dictate in microsoft word voice commands',
            videoId: null,
            helpLink: null,
            tips: 'Word\'s Dictate is smarter than basic voice typing and understands more commands'
        },
        relatedCards: ['writing-voice-typing', 'writing-editor'],
        keywords: ['dictate', 'voice typing', 'word dictation', 'voice commands', 'hands-free writing']
    },
    {
        id: 'writing-autocorrect',
        category: 'Writing & Expression',
        icon: '✅',
        need: 'I make lots of spelling and grammar errors',
        needDescription: 'You struggle with spelling, miss grammar mistakes, or want help catching errors before submitting work.',
        difficulty: 'Beginner',
        solution: {
            toolName: 'Editor (Word & Outlook)',
            platforms: ['Windows', 'Mac', 'Web'],
            steps: [
                'Open Word or Outlook',
                'Type your text normally',
                'Click the Editor icon in the top right (checkmark)',
                'Review spelling and grammar suggestions',
                'Click suggestions to apply corrections'
            ],
            videoSearch: 'microsoft editor spelling grammar checker',
            helpSearch: 'microsoft editor word outlook',
            videoId: null,
            helpLink: null,
            tips: 'Editor catches more than basic spellcheck - it suggests better word choices too'
        },
        relatedCards: ['writing-copilot', 'writing-dictate-word'],
        keywords: ['spelling', 'grammar', 'autocorrect', 'editor', 'mistakes', 'proofreading']
    },
    {
        id: 'writing-copilot',
        category: 'Writing & Expression',
        icon: '🤖',
        need: 'I struggle to start writing or find the right words',
        needDescription: 'Blank pages are intimidating, you have ideas but can\'t express them, or you need help improving your writing.',
        difficulty: 'Intermediate',
        solution: {
            toolName: 'Copilot in Word',
            platforms: ['Windows', 'Mac', 'Web'],
            steps: [
                'Open Word with Copilot access',
                'Click the Copilot icon in the toolbar',
                'Type a prompt: "Help me write about..." or "Improve this paragraph"',
                'Review Copilot\'s suggestions',
                'Accept, edit, or ask Copilot to try again'
            ],
            videoSearch: 'microsoft copilot word writing assistant',
            helpSearch: 'copilot in word how to use',
            videoId: null,
            helpLink: null,
            tips: 'Copilot can draft, rewrite, summarize, and improve your writing'
        },
        relatedCards: ['writing-autocorrect', 'writing-templates'],
        keywords: ['copilot', 'ai writing', 'writing help', 'blank page', 'writing assistant']
    },
    {
        id: 'writing-templates',
        category: 'Writing & Expression',
        icon: '📄',
        need: 'I don\'t know how to structure documents',
        needDescription: 'You struggle with formatting, organizing content, or knowing where to start with different document types.',
        difficulty: 'Beginner',
        solution: {
            toolName: 'Templates in Word',
            platforms: ['Windows', 'Mac', 'Web'],
            steps: [
                'Open Word',
                'Click File, then New',
                'Browse templates or search (e.g., "essay", "resume", "report")',
                'Click a template to preview',
                'Click Create to start with that structure'
            ],
            videoSearch: 'microsoft word templates how to use',
            helpSearch: 'word templates for students assignments',
            videoId: null,
            helpLink: null,
            tips: 'Templates give you pre-made structures so you just fill in your content'
        },
        relatedCards: ['writing-copilot', 'writing-headings'],
        keywords: ['templates', 'document structure', 'formatting', 'organization', 'layout']
    },
    {
        id: 'writing-headings',
        category: 'Writing & Expression',
        icon: '📑',
        need: 'My long documents feel disorganized',
        needDescription: 'You have trouble organizing essays or reports, or readers can\'t follow your document structure.',
        difficulty: 'Beginner',
        solution: {
            toolName: 'Heading Styles in Word',
            platforms: ['Windows', 'Mac', 'Web'],
            steps: [
                'Select a heading or section title',
                'Go to Home tab',
                'Click Heading 1 for main sections',
                'Use Heading 2 for subsections',
                'Click Navigation Pane to see document outline'
            ],
            videoSearch: 'word heading styles document organization',
            helpSearch: 'microsoft word headings table of contents',
            videoId: null,
            helpLink: null,
            tips: 'Headings create automatic table of contents and make documents easier to navigate'
        },
        relatedCards: ['writing-templates', 'writing-focus-mode'],
        keywords: ['headings', 'organization', 'structure', 'outline', 'navigation']
    },
    {
        id: 'writing-focus-mode',
        category: 'Writing & Expression',
        icon: '🎯',
        need: 'Too many distractions when writing',
        eedDescription: 'Toolbars, menus, and formatting options overwhelm you and break your concentration.',
        difficulty: 'Beginner',
        solution: {
            toolName: 'Focus Mode in Word',
            platforms: ['Windows', 'Mac'],
            steps: [
                'Open your document in Word',
                'Click View tab',
                'Click Focus (or press Ctrl + Shift + F)',
                'All toolbars and menus disappear',
                'Press Esc when you need menus back'
            ],
            videoSearch: 'microsoft word focus mode distraction free',
            helpSearch: 'word focus mode how to use',
            videoId: null,
            helpLink: null,
            tips: 'Focus Mode hides everything except your text - perfect for drafting'
        },
        relatedCards: ['writing-copilot', 'writing-dictate-word'],
        keywords: ['focus', 'distraction free', 'concentration', 'minimal interface', 'writing flow']
    },
    {
        id: 'writing-sticky-keys',
        category: 'Writing & Expression',
        icon: '⌨️',
        need: 'Hard to press multiple keys at once',
        needDescription: 'Keyboard shortcuts like Ctrl+C require pressing multiple keys, which is difficult or painful.',
        difficulty: 'Beginner',
        solution: {
            toolName: 'Sticky Keys (Windows)',
            platforms: ['Windows'],
            steps: [
                'Press Windows key + I for Settings',
                'Click Accessibility',
                'Click Keyboard',
                'Turn on Sticky Keys',
                'Now press one key at a time: Ctrl, then C (instead of together)'
            ],
            videoSearch: 'windows sticky keys how to use accessibility',
            helpSearch: 'microsoft sticky keys keyboard shortcuts',
            videoId: null,
            helpLink: null,
            tips: 'Sticky Keys lets you press one key at a time instead of key combinations'
        },
        relatedCards: ['writing-voice-typing', 'motor-onscreen-keyboard'],
        keywords: ['sticky keys', 'keyboard shortcuts', 'multiple keys', 'accessibility', 'key combinations']
    },
    {
        id: 'writing-autocomplete',
        category: 'Writing & Expression',
        icon: '💡',
        need: 'Typing takes too long',
        needDescription: 'You type slowly, have limited mobility, or want to speed up repetitive typing tasks.',
        difficulty: 'Beginner',
        solution: {
            toolName: 'Text Predictions (Outlook & Word)',
            platforms: ['Windows', 'Mac', 'Web'],
            steps: [
                'Open Outlook or Word',
                'Click File, then Options',
                'Click Editor (Word) or Mail (Outlook)',
                'Turn on "Show text predictions while typing"',
                'Press Tab to accept suggestions as you type'
            ],
            videoSearch: 'microsoft text predictions autocomplete',
            helpSearch: 'text predictions outlook word',
            videoId: null,
            helpLink: null,
            tips: 'Text predictions learn your writing style and suggest words as you type'
        },
        relatedCards: ['writing-voice-typing', 'writing-autocorrect'],
        keywords: ['autocomplete', 'text predictions', 'typing speed', 'predictive text', 'suggestions']
    },
    {
        id: 'writing-translate',
        category: 'Writing & Expression',
        icon: '🌍',
        need: 'English is not my first language',
        needDescription: 'You think in another language, struggle with English phrasing, or need translation help.',
        difficulty: 'Beginner',
        solution: {
            toolName: 'Translator in Word & Edge',
            platforms: ['Windows', 'Mac', 'Web'],
            steps: [
                'Select the text you want to translate',
                'Click Review tab in Word (or right-click in Edge)',
                'Click Translate',
                'Choose your language',
                'See translation alongside original text'
            ],
            videoSearch: 'microsoft translator word edge',
            helpSearch: 'translate text microsoft word',
            videoId: null,
            helpLink: null,
            tips: 'You can translate entire documents or just selected portions'
        },
        relatedCards: ['writing-dictate-word', 'writing-copilot'],
        keywords: ['translate', 'translation', 'language', 'ESL', 'ESOL', 'bilingual']
    }
];