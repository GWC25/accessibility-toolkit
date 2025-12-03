// ==================================
// ACCESSIBILITY TOOLKIT - DATA
// Phase 1: 28 cards across 3 categories
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

// COMBINE ALL CARDS
// Phase 1: Reading (10), Writing (10), Focus (8) = 28 cards
// Phase 2: Vision (8), Hearing (8), Motor (6) = 22 cards
// TOTAL: 50 cards
const ACCESSIBILITY_CARDS = [
    ...READING_CARDS,
    ...WRITING_CARDS,
    ...FOCUS_CARDS,
    ...VISION_CARDS,
    ...HEARING_CARDS,
    ...MOTOR_CARDS
];