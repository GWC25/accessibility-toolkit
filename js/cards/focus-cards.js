// ==================================
// FOCUS & ORGANIZATION CARDS
// 8 cards for focus and task management
// ==================================

const FOCUS_CARDS = [
    {
        id: 'focus-notifications-off',
        category: 'Focus & Organization',
        icon: '🔕',
        need: 'Too many distractions on my screen',
        needDescription: 'Notifications, pop-ups, and menus constantly break your concentration when studying or working.',
        difficulty: 'Beginner',
        solution: {
            toolName: 'Focus Assist (Windows)',
            platforms: ['Windows'],
            steps: [
                'Press Windows key + I for Settings',
                'Click System, then Focus Assist',
                'Choose Priority Only or Alarms Only',
                'Set automatic rules (e.g., during class hours)',
                'Notifications will be silenced automatically'
            ],
            videoSearch: 'windows focus assist do not disturb',
            helpSearch: 'microsoft focus assist notifications',
            videoId: null,
            helpLink: null,
            tips: 'Focus Assist blocks notifications during set times - perfect for classes or study'
        },
        relatedCards: ['focus-virtual-desktops', 'focus-close-tabs'],
        keywords: ['notifications', 'distractions', 'focus assist', 'do not disturb', 'interruptions']
    },
    {
        id: 'focus-close-tabs',
        category: 'Focus & Organization',
        icon: '🗂️',
        need: 'I have too many tabs open',
        needDescription: 'You open dozens of tabs and lose track of what you need, or your computer slows down.',
        difficulty: 'Beginner',
        solution: {
            toolName: 'Tab Groups in Edge',
            platforms: ['Windows', 'Mac', 'Web'],
            steps: [
                'Right-click on a tab in Edge',
                'Click "Add tab to new group"',
                'Name your group (e.g., "Research", "Assignment")',
                'Drag related tabs into the group',
                'Collapse groups you\'re not using'
            ],
            videoSearch: 'microsoft edge tab groups organize',
            helpSearch: 'edge browser tab groups how to use',
            videoId: null,
            helpLink: null,
            tips: 'Tab groups help you organize and find tabs without closing them'
        },
        relatedCards: ['focus-virtual-desktops', 'focus-task-view'],
        keywords: ['tabs', 'browser', 'organization', 'tab management', 'too many tabs']
    },
    {
        id: 'focus-virtual-desktops',
        category: 'Focus & Organization',
        icon: '🖥️',
        need: 'Too many windows open at once',
        needDescription: 'Your screen is cluttered with multiple apps, and you keep losing track of what\'s where.',
        difficulty: 'Intermediate',
        solution: {
            toolName: 'Virtual Desktops (Windows)',
            platforms: ['Windows'],
            steps: [
                'Press Windows key + Tab to open Task View',
                'Click "New Desktop" at the top',
                'Create desktops for different tasks (Study, Break, Project)',
                'Switch between desktops with Ctrl + Windows + Left/Right arrows',
                'Each desktop keeps its own set of open windows'
            ],
            videoSearch: 'windows virtual desktops multiple desktops',
            helpSearch: 'microsoft virtual desktops organize workspaces',
            videoId: null,
            helpLink: null,
            tips: 'Use one desktop for studying, another for breaks - keeps work and distractions separate'
        },
        relatedCards: ['focus-notifications-off', 'focus-snap-windows'],
        keywords: ['virtual desktops', 'multiple desktops', 'workspace', 'organization', 'window management']
    },
    {
        id: 'focus-snap-windows',
        category: 'Focus & Organization',
        icon: '⬜',
        need: 'Hard to see multiple things at once',
        needDescription: 'You need to reference one document while writing another, or compare information across windows.',
        difficulty: 'Beginner',
        solution: {
            toolName: 'Snap Windows (Windows)',
            platforms: ['Windows'],
            steps: [
                'Open the windows you want to view',
                'Drag a window to the left edge until you see a snap zone',
                'Release - it snaps to half the screen',
                'Choose another window for the right side',
                'Or press Windows + Left/Right arrows to snap'
            ],
            videoSearch: 'windows snap split screen side by side',
            helpSearch: 'microsoft snap windows feature',
            videoId: null,
            helpLink: null,
            tips: 'Snap makes it easy to read instructions while working in another app'
        },
        relatedCards: ['focus-virtual-desktops', 'focus-task-view'],
        keywords: ['snap', 'split screen', 'side by side', 'multiple windows', 'window arrangement']
    },
    {
        id: 'focus-task-view',
        category: 'Focus & Organization',
        icon: '🔍',
        need: 'I lose track of what I have open',
        needDescription: 'You can\'t remember which apps are running or where specific windows are.',
        difficulty: 'Beginner',
        solution: {
            toolName: 'Task View (Windows)',
            platforms: ['Windows'],
            steps: [
                'Press Windows key + Tab',
                'See all open windows and virtual desktops',
                'Click a window to switch to it',
                'Hover over app icons in taskbar for previews',
                'Right-click to close or minimize from Task View'
            ],
            videoSearch: 'windows task view overview',
            helpSearch: 'microsoft task view multitasking',
            videoId: null,
            helpLink: null,
            tips: 'Task View gives you a bird\'s eye view of everything you have open'
        },
        relatedCards: ['focus-virtual-desktops', 'focus-snap-windows'],
        keywords: ['task view', 'multitasking', 'window management', 'overview', 'app switching']
    },
    {
        id: 'focus-to-do',
        category: 'Focus & Organization',
        icon: '✓',
        need: 'I lose track of tasks and assignments',
        needDescription: 'You forget what you need to do, miss deadlines, or feel overwhelmed by everything you have to remember.',
        difficulty: 'Beginner',
        solution: {
            toolName: 'Microsoft To Do',
            platforms: ['Windows', 'Mac', 'Web', 'iOS', 'Android'],
            steps: [
                'Open Microsoft To Do app or website',
                'Click "Add a task" and type what you need to do',
                'Set due dates by clicking the calendar icon',
                'Add reminders so you don\'t forget',
                'Check off tasks when complete for satisfaction!'
            ],
            videoSearch: 'microsoft to do app tutorial students',
            helpSearch: 'microsoft to do task management',
            videoId: null,
            helpLink: null,
            tips: 'To Do syncs across all your devices so your list is always with you'
        },
        relatedCards: ['focus-planner', 'focus-calendar'],
        keywords: ['to do', 'tasks', 'assignments', 'reminders', 'deadlines', 'checklist']
    },
    {
        id: 'focus-planner',
        category: 'Focus & Organization',
        icon: '📋',
        need: 'Group projects are confusing and chaotic',
        needDescription: 'You struggle to keep track of who is doing what, what\'s been done, and what needs doing in group work.',
        difficulty: 'Intermediate',
        solution: {
            toolName: 'Microsoft Planner',
            platforms: ['Web', 'Windows', 'Mac', 'iOS', 'Android'],
            steps: [
                'Open Planner (part of Microsoft 365)',
                'Create a plan for your group project',
                'Add tasks in columns: To Do, In Progress, Done',
                'Assign tasks to group members',
                'Everyone sees real-time updates'
            ],
            videoSearch: 'microsoft planner tutorial students group projects',
            helpSearch: 'microsoft planner collaboration tasks',
            videoId: null,
            helpLink: null,
            tips: 'Planner is like a digital kanban board - perfect for group assignments'
        },
        relatedCards: ['focus-to-do', 'focus-teams-collaboration'],
        keywords: ['planner', 'group work', 'collaboration', 'project management', 'kanban', 'team tasks']
    },
    {
        id: 'focus-calendar',
        category: 'Focus & Organization',
        icon: '📅',
        need: 'I forget about classes and deadlines',
        needDescription: 'You miss classes, forget assignment due dates, or struggle to manage your schedule.',
        difficulty: 'Beginner',
        solution: {
            toolName: 'Outlook Calendar',
            platforms: ['Windows', 'Mac', 'Web', 'iOS', 'Android'],
            steps: [
                'Open Outlook Calendar',
                'Click New Event to add classes or deadlines',
                'Set date, time, and add location',
                'Add reminders (e.g., 1 day before, 1 hour before)',
                'Calendar syncs to all your devices'
            ],
            videoSearch: 'outlook calendar tutorial students schedule',
            helpSearch: 'microsoft outlook calendar how to use',
            videoId: null,
            helpLink: null,
            tips: 'Set up recurring events for classes so they auto-appear every week'
        },
        relatedCards: ['focus-to-do', 'focus-notifications-off'],
        keywords: ['calendar', 'schedule', 'deadlines', 'appointments', 'reminders', 'time management']
    }
];