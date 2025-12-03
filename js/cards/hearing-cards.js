// ==================================
// HEARING & COMMUNICATION CARDS
// 8 cards for hearing challenges
// ==================================

const HEARING_CARDS = [
    {
        id: 'hearing-live-captions',
        category: 'Hearing & Communication',
        icon: '📝',
        need: 'I can\'t hear what people are saying in videos',
        needDescription: 'You are deaf, hard of hearing, or struggle to understand speech in videos and online meetings.',
        difficulty: 'Beginner',
        solution: {
            toolName: 'Live Captions (Windows)',
            platforms: ['Windows'],
            steps: [
                'Press Windows key + Ctrl + L to start Live Captions',
                'Captions appear at top of screen for all audio',
                'Works in videos, meetings, and any audio on your PC',
                'Press Windows + Ctrl + L again to turn off',
                'Adjust caption size and position in settings'
            ],
            videoSearch: 'windows live captions tutorial',
            helpSearch: 'microsoft live captions accessibility',
            videoId: null,
            helpLink: null,
            tips: 'Live Captions work system-wide - even for audio from apps without built-in captions'
        },
        relatedCards: ['hearing-teams-captions', 'hearing-transcribe'],
        keywords: ['captions', 'subtitles', 'deaf', 'hard of hearing', 'live captions', 'accessibility']
    },
    {
        id: 'hearing-teams-captions',
        category: 'Hearing & Communication',
        icon: '💬',
        need: 'Hard to follow conversations in online meetings',
        needDescription: 'You miss what people say in Teams meetings, or background noise makes it hard to understand.',
        difficulty: 'Beginner',
        solution: {
            toolName: 'Live Captions in Teams',
            platforms: ['Windows', 'Mac', 'Web', 'iOS', 'Android'],
            steps: [
                'Join a Teams meeting',
                'Click the three dots (More actions)',
                'Click Turn on live captions',
                'Captions appear at bottom showing who is speaking',
                'Captions work for all participants automatically'
            ],
            videoSearch: 'microsoft teams live captions how to enable',
            helpSearch: 'teams meeting captions accessibility',
            videoId: null,
            helpLink: null,
            tips: 'Captions also help in noisy environments or when accents are hard to understand'
        },
        relatedCards: ['hearing-live-captions', 'hearing-transcribe'],
        keywords: ['teams', 'meetings', 'captions', 'online class', 'video call', 'hard of hearing']
    },
    {
        id: 'hearing-transcribe',
        category: 'Hearing & Communication',
        icon: '📄',
        need: 'I need a written record of meetings or lectures',
        needDescription: 'You want to read what was said after a meeting or lecture, or you process information better by reading.',
        difficulty: 'Intermediate',
        solution: {
            toolName: 'Transcribe in Word',
            platforms: ['Windows', 'Mac', 'Web'],
            steps: [
                'Open Word (requires Microsoft 365)',
                'Click Home tab, then Dictate dropdown',
                'Click Transcribe',
                'Upload an audio or video file (or record live)',
                'Word creates a full transcript with timestamps'
            ],
            videoSearch: 'microsoft word transcribe audio to text',
            helpSearch: 'transcribe in word tutorial',
            videoId: null,
            helpLink: null,
            tips: 'Transcribe can handle recordings of meetings, lectures, or interviews'
        },
        relatedCards: ['hearing-live-captions', 'hearing-teams-captions'],
        keywords: ['transcribe', 'transcript', 'audio to text', 'meeting notes', 'lecture recording']
    },
    {
        id: 'hearing-mono-audio',
        category: 'Hearing & Communication',
        icon: '🔊',
        need: 'I can only hear from one ear',
        needDescription: 'You have hearing in only one ear, or your headphones only work on one side.',
        difficulty: 'Beginner',
        solution: {
            toolName: 'Mono Audio (Windows)',
            platforms: ['Windows'],
            steps: [
                'Press Windows key + I for Settings',
                'Click Accessibility',
                'Click Audio',
                'Turn on Mono audio',
                'All sound plays through both left and right channels'
            ],
            videoSearch: 'windows mono audio accessibility',
            helpSearch: 'microsoft mono audio one ear hearing',
            videoId: null,
            helpLink: null,
            tips: 'Mono audio prevents you from missing sounds that only play in one channel'
        },
        relatedCards: ['hearing-visual-alerts', 'hearing-sound-balance'],
        keywords: ['mono audio', 'one ear', 'hearing loss', 'single sided deafness', 'headphones']
    },
    {
        id: 'hearing-visual-alerts',
        category: 'Hearing & Communication',
        icon: '⚡',
        need: 'I miss notifications because I can\'t hear them',
        needDescription: 'You don\'t hear notification sounds, alarms, or audio alerts.',
        difficulty: 'Beginner',
        solution: {
            toolName: 'Visual Notifications (Windows)',
            platforms: ['Windows'],
            steps: [
                'Press Windows key + I for Settings',
                'Click Accessibility',
                'Click Audio',
                'Turn on Flash my screen during audio notifications',
                'Choose what flashes: title bar, window, or full screen'
            ],
            videoSearch: 'windows flash screen notifications deaf',
            helpSearch: 'microsoft visual audio alerts accessibility',
            videoId: null,
            helpLink: null,
            tips: 'Screen flashes when sounds play so you notice alerts visually'
        },
        relatedCards: ['hearing-live-captions', 'vision-visual-notifications'],
        keywords: ['visual alerts', 'flash notifications', 'deaf', 'missed alerts', 'notification sounds']
    },
    {
        id: 'hearing-sound-balance',
        category: 'Hearing & Communication',
        icon: '⚖️',
        need: 'One ear hears better than the other',
        needDescription: 'Your hearing is weaker in one ear and you need to balance audio between left and right.',
        difficulty: 'Beginner',
        solution: {
            toolName: 'Audio Balance (Windows)',
            platforms: ['Windows'],
            steps: [
                'Right-click the speaker icon in taskbar',
                'Click Open Sound settings',
                'Scroll down and click More sound settings',
                'Double-click your playback device',
                'Click Levels tab, then Balance',
                'Adjust sliders so louder ear gets less volume'
            ],
            videoSearch: 'windows audio balance left right ear',
            helpSearch: 'microsoft sound balance uneven hearing',
            videoId: null,
            helpLink: null,
            tips: 'Balance adjustments let you compensate for hearing differences between ears'
        },
        relatedCards: ['hearing-mono-audio', 'hearing-sound-louder'],
        keywords: ['audio balance', 'uneven hearing', 'left right balance', 'hearing loss', 'volume balance']
    },
    {
        id: 'hearing-sound-louder',
        category: 'Hearing & Communication',
        icon: '🔈',
        need: 'Audio isn\'t loud enough even at maximum',
        needDescription: 'You have the volume at 100% but still struggle to hear clearly.',
        difficulty: 'Beginner',
        solution: {
            toolName: 'Sound Enhancements (Windows)',
            platforms: ['Windows'],
            steps: [
                'Right-click speaker icon in taskbar',
                'Click Open Sound settings',
                'Click More sound settings',
                'Double-click your playback device',
                'Click Enhancements tab',
                'Enable Loudness Equalization',
                'Click Apply to boost quiet sounds'
            ],
            videoSearch: 'windows loudness equalization boost volume',
            helpSearch: 'microsoft sound enhancements audio boost',
            videoId: null,
            helpLink: null,
            tips: 'Loudness Equalization makes quiet sounds louder without distorting loud sounds'
        },
        relatedCards: ['hearing-mono-audio', 'hearing-sound-balance'],
        keywords: ['volume boost', 'loudness', 'audio too quiet', 'sound enhancement', 'hearing loss']
    },
    {
        id: 'hearing-sign-language',
        category: 'Hearing & Communication',
        icon: '🤟',
        need: 'I use sign language and need interpretation',
        needDescription: 'You are a sign language user and need visual communication support in meetings.',
        difficulty: 'Intermediate',
        solution: {
            toolName: 'Sign Language View in Teams',
            platforms: ['Windows', 'Mac', 'Web'],
            steps: [
                'Join a Teams meeting with sign language interpreter',
                'Click the three dots (More actions)',
                'Click Pin for me',
                'Pin the interpreter\'s video',
                'Their video stays prominent while others speak',
                'You can also enable Spotlight to highlight interpreter'
            ],
            videoSearch: 'microsoft teams sign language interpreter pin',
            helpSearch: 'teams meeting sign language accessibility',
            videoId: null,
            helpLink: null,
            tips: 'Pinning keeps the interpreter visible even when screen sharing happens'
        },
        relatedCards: ['hearing-teams-captions', 'hearing-live-captions'],
        keywords: ['sign language', 'ASL', 'BSL', 'interpreter', 'deaf', 'visual communication']
    }
];