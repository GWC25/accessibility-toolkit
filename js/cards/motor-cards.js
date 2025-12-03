// ==================================
// MOTOR & PHYSICAL ACCESS CARDS
// 6 cards for motor and physical challenges
// ==================================

const MOTOR_CARDS = [
    {
        id: 'motor-onscreen-keyboard',
        category: 'Motor & Physical Access',
        icon: '⌨️',
        need: 'Hard or painful to use physical keyboard',
        needDescription: 'You have limited hand mobility, pain when typing, or cannot reach a physical keyboard.',
        difficulty: 'Beginner',
        solution: {
            toolName: 'On-Screen Keyboard (Windows)',
            platforms: ['Windows'],
            steps: [
                'Press Windows key + Ctrl + O to open On-Screen Keyboard',
                'Keyboard appears on screen',
                'Click letters with mouse or touch',
                'Use with mouse clicking or eye tracking',
                'Press Windows + Ctrl + O again to close'
            ],
            videoSearch: 'windows on-screen keyboard how to use',
            helpSearch: 'microsoft on-screen keyboard accessibility',
            videoId: null,
            helpLink: null,
            tips: 'On-Screen Keyboard works with mouse, touch screen, or assistive devices'
        },
        relatedCards: ['writing-voice-typing', 'motor-eye-control'],
        keywords: ['on-screen keyboard', 'virtual keyboard', 'typing pain', 'mobility', 'hands-free']
    },
    {
        id: 'motor-mouse-keys',
        category: 'Motor & Physical Access',
        icon: '🖱️',
        need: 'Hard to use a mouse or trackpad',
        needDescription: 'You have difficulty clicking, moving a mouse precisely, or cannot use a mouse at all.',
        difficulty: 'Intermediate',
        solution: {
            toolName: 'Mouse Keys (Windows)',
            platforms: ['Windows'],
            steps: [
                'Press Left Alt + Left Shift + Num Lock',
                'Click Yes to turn on Mouse Keys',
                'Use number pad to move mouse pointer',
                '8=up, 2=down, 4=left, 6=right',
                '5=click, +=double click, 0=hold click'
            ],
            videoSearch: 'windows mouse keys keyboard control cursor',
            helpSearch: 'microsoft mouse keys accessibility',
            videoId: null,
            helpLink: null,
            tips: 'Mouse Keys let you control the mouse pointer using your keyboard number pad'
        },
        relatedCards: ['motor-sticky-keys', 'motor-speech-recognition'],
        keywords: ['mouse keys', 'keyboard mouse control', 'mouse alternative', 'mobility', 'clicking difficulty']
    },
    {
        id: 'motor-speech-recognition',
        category: 'Motor & Physical Access',
        icon: '🎙️',
        need: 'I need to control my computer with my voice',
        needDescription: 'You cannot use keyboard or mouse effectively and need voice control for everything.',
        difficulty: 'Advanced',
        solution: {
            toolName: 'Voice Access (Windows)',
            platforms: ['Windows'],
            steps: [
                'Press Windows key + Ctrl + S to start Voice Access',
                'Say "Open [app name]" to launch programs',
                'Say "Click [item]" to activate buttons',
                'Say "Show numbers" to see clickable numbers',
                'Say "Show grid" for precise clicking'
            ],
            videoSearch: 'windows voice access tutorial complete guide',
            helpSearch: 'microsoft voice access hands-free control',
            videoId: null,
            helpLink: null,
            tips: 'Voice Access is powerful but has a learning curve - take time to learn commands'
        },
        relatedCards: ['writing-voice-typing', 'motor-onscreen-keyboard'],
        keywords: ['voice control', 'voice access', 'hands-free', 'speech recognition', 'mobility', 'dictation']
    },
    {
        id: 'motor-eye-control',
        category: 'Motor & Physical Access',
        icon: '👁️',
        need: 'I can only control computer with my eyes',
        needDescription: 'You have very limited or no mobility and need to control your computer using eye tracking.',
        difficulty: 'Advanced',
        solution: {
            toolName: 'Eye Control (Windows)',
            platforms: ['Windows'],
            steps: [
                'Connect compatible eye tracking device',
                'Press Windows key + I for Settings',
                'Click Accessibility, then Eye control',
                'Turn on Eye control',
                'Complete calibration by following dot with eyes',
                'Use eye gaze to move cursor and click'
            ],
            videoSearch: 'windows eye control eye tracking accessibility',
            helpSearch: 'microsoft eye control setup guide',
            videoId: null,
            helpLink: null,
            tips: 'Eye Control requires specialized hardware - check Microsoft\'s compatible device list'
        },
        relatedCards: ['motor-speech-recognition', 'motor-onscreen-keyboard'],
        keywords: ['eye tracking', 'eye control', 'eye gaze', 'mobility', 'quadriplegia', 'assistive technology']
    },
    {
        id: 'motor-click-lock',
        category: 'Motor & Physical Access',
        icon: '🔒',
        need: 'Holding down mouse button is difficult',
        needDescription: 'You have trouble holding the mouse button down for dragging or selecting.',
        difficulty: 'Beginner',
        solution: {
            toolName: 'ClickLock (Windows)',
            platforms: ['Windows'],
            steps: [
                'Press Windows key + I for Settings',
                'Click Bluetooth & devices, then Mouse',
                'Scroll down and click Additional mouse settings',
                'Click the Buttons tab',
                'Check Turn on ClickLock',
                'Now briefly hold click to lock, click again to release'
            ],
            videoSearch: 'windows clicklock mouse accessibility',
            helpSearch: 'microsoft clicklock drag without holding',
            videoId: null,
            helpLink: null,
            tips: 'ClickLock eliminates need to hold mouse button for dragging or selecting'
        },
        relatedCards: ['motor-mouse-keys', 'writing-sticky-keys'],
        keywords: ['clicklock', 'mouse dragging', 'drag and drop', 'holding difficult', 'clicking pain']
    },
    {
        id: 'motor-typing-speed',
        category: 'Motor & Physical Access',
        icon: '⏱️',
        need: 'I type slowly and make many errors',
        needDescription: 'Limited dexterity makes typing slow and frustrating, with frequent mistakes.',
        difficulty: 'Beginner',
        solution: {
            toolName: 'Filter Keys (Windows)',
            platforms: ['Windows'],
            steps: [
                'Press Windows key + I for Settings',
                'Click Accessibility, then Keyboard',
                'Turn on Filter Keys',
                'Adjust repeat delay and repeat rate',
                'Keys ignore brief presses and slow down repeat',
                'Reduces accidental keystrokes'
            ],
            videoSearch: 'windows filter keys slow typing accessibility',
            helpSearch: 'microsoft filter keys reduce typing errors',
            videoId: null,
            helpLink: null,
            tips: 'Filter Keys helps if you accidentally press keys or have shaky hands'
        },
        relatedCards: ['writing-sticky-keys', 'writing-voice-typing'],
        keywords: ['filter keys', 'slow typing', 'typing errors', 'accidental keypress', 'tremor', 'dexterity']
    }
];