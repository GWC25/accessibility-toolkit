# DigiWest Access Toolkit

**Self-service accessibility resource for FE/HE learners to discover Microsoft tools that solve their learning barriers**

## 🎯 Project Overview

The DigiWest Access Toolkit helps learners aged 16-19 and adult ESOL students discover and learn Microsoft accessibility tools that address their specific learning needs. Users browse by challenge (e.g., "Text is too small"), flip cards to see solutions, and track their progress through a Kanban-style system.

---

## ✨ Key Features

- **📇 Need-Based Discovery**: Browse 28+ accessibility cards organized by learning challenge
- **🔄 Flippable Cards**: Front shows the need, back shows 2-3 Microsoft tool solutions
- **📺 Video Tutorials**: Each solution includes embedded YouTube tutorial
- **📊 Kanban Progress Tracking**: Mark cards as "To Explore", "Developing", or "Mastered"
- **💾 Personal Toolkit**: Save useful cards and track your learning journey
- **♿ Fully Accessible**: WCAG 2.1 AA compliant with adjustable font size, contrast modes
- **🎨 DigiWest Branding**: Dark theme with vibrant color palette

---

## 📋 Content Categories (MVP - 28 Cards)

### 1. Reading & Text Comfort (10 cards)
- Dark mode for eye strain
- Text size and magnification
- Losing place while reading
- Text-to-speech / Read Aloud
- Understanding complex text
- Translation for ESOL learners
- Dyslexia support tools
- Color blindness adaptations
- Reading comprehension aids
- Simplified language tools

### 2. Writing & Expression (10 cards)
- Voice typing and dictation
- Spelling and grammar checking
- Organizing thoughts and outlines
- Physical typing difficulties
- Word choice and vocabulary
- English as second language support
- Citations and references
- Math notation writing
- Typing speed improvements
- Proofreading assistance

### 3. Focus & Organization (8 cards)
- Reducing screen distractions
- Task and assignment management
- Calendar and deadline tracking
- Managing notifications
- Memory and reminders
- Prioritization strategies
- Breaking down large tasks
- Time management techniques

### Future Categories (22 cards planned)
- Vision & Screen Comfort (8 cards)
- Hearing & Communication (8 cards)
- Motor & Physical Access (6 cards)

---

## 🚀 Getting Started

### For Users
1. Visit: `https://YOUR-ORG.github.io/digiwest-access-toolkit/`
2. Browse cards in the Tool Finder
3. Flip cards to see solutions with step-by-step instructions
4. Save useful cards to My Toolkit
5. Track your progress with status badges

### For Local Testing
```bash
# Simply open index.html in your browser
# Or use a local server:
python3 -m http.server 8000
# Then visit http://localhost:8000
```

---

## 🏗️ Technical Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Storage**: Browser localStorage (no backend required)
- **Design**: Mobile-first responsive design
- **Accessibility**: WCAG 2.1 AA compliant

---

## 📁 Project Structure

```
digiwest-access-toolkit/
├── index.html              # Dashboard
├── finder.html             # Tool Finder (card browser)
├── toolkit.html            # My Toolkit (Kanban board)
├── settings.html           # Settings
├── css/
│   └── styles.css         # All styling
├── js/
│   ├── data.js            # 28 accessibility cards
│   ├── storage.js         # localStorage management
│   ├── main.js            # Dashboard logic
│   ├── finder.js          # Card browser logic
│   ├── toolkit.js         # Kanban board logic
│   └── settings.js        # Settings logic
├── assets/
│   └── logo.svg          # DigiWest logo
└── docs/
    └── [documentation files]
```

---

## 🎨 Design System

### DigiWest Color Palette
- **Magenta**: `#fb51fd`
- **Cyan**: `#40f5fd`
- **Orange**: `#fb8230`
- **Yellow**: `#fcdb3e`

### Status Colors
- **🔵 To Explore**: Cyan/Magenta gradient (default)
- **🟡 Developing**: Yellow (actively learning)
- **🟢 Mastered**: Green (confident with tool)

---

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Adjustable font sizes (4 levels)
- High contrast mode
- Animation controls
- Full keyboard navigation
- Screen reader compatible

---

## 🎓 Target Audience

- **Primary**: 16-19 year old FE/HE learners
- **Secondary**: Adult learners (especially ESOL)
- **Support**: Educators and learning support staff

---

## 📊 Roadmap

### Version 1.0 (Current - MVP)
- ✅ 28 cards across 3 categories
- ✅ Card flip functionality
- ✅ Kanban progress tracking
- ✅ YouTube video embeds
- ✅ Accessibility controls

### Version 1.1 (Next)
- ⏳ Add 22 remaining cards
- ⏳ Search functionality
- ⏳ Platform filter
- ⏳ Print summaries

---

## 🤝 Contributing

We welcome contributions! See `docs/CONTRIBUTING.md` for guidelines.

---

## 📄 License

[To be determined - MIT recommended]

---

## 📞 Contact

- **Project**: DigiWest Access Toolkit
- **Organization**: DigiWest
- **Issues**: [GitHub Issues]

---

## 🙏 Acknowledgments

- Microsoft for accessibility tools
- FE & HE learners
- DigiWest team
- Open source community

---

**Built with care for learners who deserve tools that work for them** 💙

*Version: 1.0.0-MVP | Last Updated: December 2024*