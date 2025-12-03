// ==================================
// READING & TEXT COMFORT CARDS
// 10 cards for reading challenges
// ==================================

const READING_CARDS = [
    {
        id: 'reading-dark-mode',
        category: 'Reading & Text Comfort',
        icon: '🌙',
        need: 'Black on white text hurts my eyes',
        needDescription: 'Reading on bright white backgrounds causes eye strain, headaches, or visual discomfort after short periods.',
        difficulty: 'Beginner',
        solution: {
            toolName: 'Dark Mode (Windows)',
            platforms: ['Windows'],
            steps: [
                'Press Windows key + I to open Settings',
                'Click Personalization in the left sidebar',
                'Click Colors',
                'Under "Choose your mode", select Dark',
                'Apps and system will switch to dark backgrounds'
            ],
            videoSearch: 'how to enable dark mode windows 11',
            helpSearch: 'microsoft windows dark mode settings',
            videoId: null,
            helpLink: null,
            tips: 'Most Microsoft apps respect your system dark mode setting automatically'
        },
        relatedCards: ['reading-text-size', 'reading-immersive-reader'],
        keywords: ['dark mode', 'background color', 'eye strain', 'brightness', 'light sensitivity']
    },
    {
        id: 'reading-text-size',
        category: 'Reading & Text Comfort',
        icon: '🔍',
        need: 'Text is too small to read comfortably',
        needDescription: 'You squint at the screen, get headaches from straining, or need to hold your face very close to the monitor.',
        difficulty: 'Beginner',
        solution: {
            toolName: 'Text Scaling (Windows)',
            platforms: ['Windows'],
            steps: [
                'Press Windows key + I to open Settings',
                'Click Accessibility in the left sidebar',
                'Click Text size',
                'Drag the slider to increase text size (100% to 225%)',
                'Click Apply to see changes across Windows'
            ],
            videoSearch: 'windows 11 change text size accessibility',
            helpSearch: 'microsoft windows make text bigger',
            videoId: null,
            helpLink: null,
            tips: 'This changes text size system-wide without making everything bigger'
        },
        relatedCards: ['reading-magnifier', 'reading-dark-mode'],
        keywords: ['text size', 'zoom', 'font size', 'small text', 'vision']
    },
    {
        id: 'reading-magnifier',
        category: 'Reading & Text Comfort',
        icon: '🔎',
        need: 'I need to zoom in on parts of my screen',
        needDescription: 'You need to see specific areas of your screen more clearly, but changing text size affects too much.',
        difficulty: 'Beginner',
        solution: {
            toolName: 'Magnifier (Windows)',
            platforms: ['Windows'],
            steps: [
                'Press Windows key + Plus (+) to open Magnifier',
                'Use Windows + Plus to zoom in further',
                'Use Windows + Minus (-) to zoom out',
                'Press Windows + Esc to close Magnifier',
                'Click the gear icon in Magnifier to change views'
            ],
            videoSearch: 'how to use windows magnifier tool',
            helpSearch: 'microsoft magnifier accessibility',
            videoId: null,
            helpLink: null,
            tips: 'Magnifier has Full Screen, Lens, and Docked views for different needs'
        },
        relatedCards: ['reading-text-size'],
        keywords: ['magnifier', 'zoom', 'enlarge', 'magnify', 'screen zoom']
    },
    {
        id: 'reading-immersive-reader',
        category: 'Reading & Text Comfort',
        icon: '📖',
        need: 'Websites and documents are cluttered and distracting',
        needDescription: 'You find it hard to focus on text because of ads, images, sidebars, and other visual noise.',
        difficulty: 'Beginner',
        solution: {
            toolName: 'Immersive Reader (Edge, Word, OneNote)',
            platforms: ['Windows', 'Mac', 'Web', 'iOS', 'Android'],
            steps: [
                'Open a webpage in Edge or document in Word',
                'Press F9 or click the book icon in the toolbar',
                'Use Text Preferences to adjust spacing and fonts',
                'Use Reading Preferences to change background color',
                'Click Play to have text read aloud to you'
            ],
            videoSearch: 'microsoft immersive reader tutorial',
            helpSearch: 'how to use immersive reader microsoft',
            videoId: null,
            helpLink: null,
            tips: 'Immersive Reader removes ads, menus, and distractions automatically'
        },
        relatedCards: ['reading-dark-mode', 'reading-text-spacing'],
        keywords: ['immersive reader', 'reading mode', 'focus', 'distraction-free', 'clutter']
    },
    {
        id: 'reading-text-spacing',
        category: 'Reading & Text Comfort',
        icon: '↔️',
        need: 'Text feels cramped and hard to follow',
        needDescription: 'Words and lines are too close together, making it difficult to track what you are reading.',
        difficulty: 'Beginner',
        solution: {
            toolName: 'Line Spacing in Word',
            platforms: ['Windows', 'Mac', 'Web'],
            steps: [
                'Open your document in Word',
                'Select all text (Ctrl + A)',
                'Click Home tab',
                'Click Line Spacing button',
                'Choose 1.5 or 2.0 for more space between lines'
            ],
            videoSearch: 'how to change line spacing microsoft word',
            helpSearch: 'microsoft word line spacing paragraph spacing',
            videoId: null,
            helpLink: null,
            tips: 'Increased spacing helps with dyslexia and visual tracking'
        },
        relatedCards: ['reading-immersive-reader', 'reading-font-dyslexia'],
        keywords: ['spacing', 'line spacing', 'cramped', 'tracking', 'dyslexia']
    },
    {
        id: 'reading-font-dyslexia',
        category: 'Reading & Text Comfort',
        icon: '🔤',
        need: 'Standard fonts are hard for me to read',
        needDescription: 'You find certain fonts difficult to read, especially if you have dyslexia or visual processing challenges.',
        difficulty: 'Beginner',
        solution: {
            toolName: 'Change Font in Word/OneNote',
            platforms: ['Windows', 'Mac', 'Web'],
            steps: [
                'Open Word or OneNote',
                'Select your text (or Ctrl + A for all)',
                'Click Home tab',
                'Choose a dyslexia-friendly font: Arial, Verdana, or Comic Sans',
                'Increase font size to 14pt or larger'
            ],
            videoSearch: 'dyslexia friendly fonts microsoft word',
            helpSearch: 'accessible fonts for dyslexia microsoft',
            videoId: null,
            helpLink: null,
            tips: 'Sans-serif fonts like Arial are easier to read than serif fonts like Times New Roman'
        },
        relatedCards: ['reading-text-spacing', 'reading-immersive-reader'],
        keywords: ['font', 'dyslexia', 'typeface', 'readable font', 'sans serif']
    },
    {
        id: 'reading-read-aloud',
        category: 'Reading & Text Comfort',
        icon: '🔊',
        need: 'Reading for long periods is exhausting',
        needDescription: 'You get tired quickly when reading, or you process information better when listening.',
        difficulty: 'Beginner',
        solution: {
            toolName: 'Read Aloud (Word, Edge, Outlook)',
            platforms: ['Windows', 'Mac', 'Web'],
            steps: [
                'Open your document in Word or webpage in Edge',
                'Click Review tab (Word) or click the book icon (Edge)',
                'Click Read Aloud',
                'Text will be highlighted as it is read to you',
                'Use play/pause controls to manage playback'
            ],
            videoSearch: 'microsoft read aloud feature tutorial',
            helpSearch: 'read aloud word edge outlook',
            videoId: null,
            helpLink: null,
            tips: 'You can adjust reading speed and choose different voices in settings'
        },
        relatedCards: ['reading-immersive-reader'],
        keywords: ['read aloud', 'text to speech', 'listening', 'audio', 'tired reading']
    },
    {
        id: 'reading-screen-brightness',
        category: 'Reading & Text Comfort',
        icon: '☀️',
        need: 'My screen is too bright or too dim',
        needDescription: 'Screen brightness causes discomfort, eye strain, or makes it hard to see text clearly.',
        difficulty: 'Beginner',
        solution: {
            toolName: 'Night Light (Windows)',
            platforms: ['Windows'],
            steps: [
                'Press Windows key + I to open Settings',
                'Click System, then Display',
                'Turn on Night Light',
                'Click Night Light settings to adjust strength',
                'Set schedule for automatic activation in evening'
            ],
            videoSearch: 'windows night light blue light filter',
            helpSearch: 'microsoft night light reduce blue light',
            videoId: null,
            helpLink: null,
            tips: 'Night Light reduces blue light in the evening to help with eye strain and sleep'
        },
        relatedCards: ['reading-dark-mode'],
        keywords: ['brightness', 'night light', 'blue light', 'eye strain', 'screen comfort']
    },
    {
        id: 'reading-cursor-color',
        category: 'Reading & Text Comfort',
        icon: '|',
        need: 'I lose track of where I am typing',
        needDescription: 'The text cursor (blinking line) is too small or hard to see when typing.',
        difficulty: 'Beginner',
        solution: {
            toolName: 'Text Cursor Indicator (Windows)',
            platforms: ['Windows'],
            steps: [
                'Press Windows key + I to open Settings',
                'Click Accessibility',
                'Click Text cursor',
                'Turn on Text cursor indicator',
                'Adjust size and color to make it more visible'
            ],
            videoSearch: 'windows text cursor indicator accessibility',
            helpSearch: 'microsoft make text cursor bigger visible',
            videoId: null,
            helpLink: null,
            tips: 'A colored indicator around the cursor helps you track it while typing'
        },
        relatedCards: ['reading-text-size'],
        keywords: ['cursor', 'caret', 'typing indicator', 'lose track', 'visibility']
    },
    {
        id: 'reading-color-filters',
        category: 'Reading & Text Comfort',
        icon: '🎨',
        need: 'I have difficulty distinguishing colors',
        needDescription: 'Color blindness or color sensitivity makes it hard to read certain text or see information clearly.',
        difficulty: 'Beginner',
        solution: {
            toolName: 'Color Filters (Windows)',
            platforms: ['Windows'],
            steps: [
                'Press Windows key + I to open Settings',
                'Click Accessibility',
                'Click Color filters',
                'Turn on Color filters',
                'Choose a filter: Deuteranopia, Protanopia, Tritanopia, Grayscale, or Inverted'
            ],
            videoSearch: 'windows color filters colorblind accessibility',
            helpSearch: 'microsoft color filters for color blindness',
            videoId: null,
            helpLink: null,
            tips: 'Try different filters to see which makes text and images clearest for you'
        },
        relatedCards: ['reading-dark-mode'],
        keywords: ['color blind', 'color filters', 'color sensitivity', 'grayscale', 'contrast']
    }
];