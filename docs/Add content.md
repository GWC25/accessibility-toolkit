# Adding Content Guide

How to expand the Digital Wellness Plan with more cards and messages.

## Current Content

- **30 cards** (about 4 per section)
- **40 motivational messages**

The original design planned for 64+ cards and 150+ messages, so there's plenty of room to grow!

---

## Adding New Cards

Cards are stored in `js/data.js` in the `WELLBEING_CARDS` array.

### Step-by-Step

1. **Open `js/data.js`** (on GitHub, click the file then the pencil icon to edit)

2. **Find the `WELLBEING_CARDS` array** (around line 50)

3. **Scroll to the end of the array** (before the `];`)

4. **Copy this template**:

```javascript
    {
        id: 'unique-id-here',
        section: 'Section Name',
        icon: '📱',
        symptom: 'Symptom Title Here',
        description: 'One to two sentence description of the symptom that users will relate to.',
        treatment: 'Treatment Title Here',
        strategies: [
            'Strategy 1 - specific, actionable advice',
            'Strategy 2 - something users can do today',
            'Strategy 3 - practical step with clear benefit',
            'Strategy 4 - another concrete action (optional - 3-5 strategies recommended)'
        ]
    },
```

5. **Customize all fields** (see Field Guide below)

6. **Add a comma** after the closing `},` if there are more cards after it

7. **Save and commit** (on GitHub) or save locally and re-upload

8. **Wait 1-2 minutes** for GitHub Pages to update

9. **Test** by visiting your live site and checking the new card appears

### Field Guide

#### `id`
- **Must be unique** across all cards
- Use lowercase with hyphens
- Format: `section-shortname-number`
- Examples: `screen-time-5`, `comm-6`, `focus-new-1`

#### `section`
- **Must match exactly** one of these 8 sections:
  - `'Screen Time & Boundaries'`
  - `'Communication Stress'`
  - `'Information Overload'`
  - `'Work-Life Balance'`
  - `'Sleep & Evening Use'`
  - `'Focus & Productivity'`
  - `'Social Media'`
  - `'Physical Health'`
- Case and spacing matter!

#### `icon`
- Any emoji that represents the symptom
- Find emojis: [emojipedia.org](https://emojipedia.org)
- Examples: 📱 💻 😰 🌙 ⚡ 📧 👁️

#### `symptom`
- Short, relatable title (3-6 words)
- What the user experiences
- Examples: "Always-On Exhaustion", "Late-Night Scrolling", "Inbox Avalanche"

#### `description`
- 1-2 sentences maximum
- Describe the symptom so users recognize it
- Use "you" language
- Be specific and relatable

#### `treatment`
- Action-oriented title (3-6 words)
- What the user should do about it
- Examples: "Create Sacred Offline Time", "Build Evening Routines"

#### `strategies`
- Array of 3-5 specific, actionable strategies
- Each strategy should be:
  - **Concrete**: User knows exactly what to do
  - **Actionable**: They can start today
  - **Specific**: No vague advice
- Start with the easiest/most impactful
- Use imperative language ("Set a...", "Create a...", "Try...")

### Complete Example

```javascript
    {
        id: 'focus-decision-fatigue',
        section: 'Focus & Productivity',
        icon: '🤔',
        symptom: 'Choice Paralysis',
        description: 'You spend more time deciding what to work on than actually working. Every task feels equally urgent. You cycle through possibilities, accomplishing little.',
        treatment: 'Reduce Decisions with Systems',
        strategies: [
            'Plan tomorrow's top 3 priorities before finishing work today',
            'Use the same work structure each day (e.g., focus work 9-11, meetings 1-3)',
            'Create templates and routines for repeated tasks',
            'When stuck, choose the task that's been nagging at you longest'
        ]
    },
```

---

## Adding New Messages

Messages are stored in `js/data.js` in the `MOTIVATIONAL_MESSAGES` array.

### Step-by-Step

1. **Open `js/data.js`**

2. **Find the `MOTIVATIONAL_MESSAGES` array** (near the top, after line 10)

3. **Scroll to find a good insertion point** (grouped by category if you want)

4. **Add a new line**:

```javascript
    "Your message here.",
```

5. **Don't forget the comma** at the end

6. **Save and commit**

### Message Guidelines

- **Length**: 15-40 words ideal
- **Tone**: Supportive, optimistic, non-judgmental
- **Language**: Direct "you" address
- **Positive framing**: What to do, not what to avoid
- **No "should"**: Avoid prescriptive language
- **One idea**: Keep it focused

### Message Categories

**Motivation** (encourage continued effort):
```javascript
"Small steps create lasting change. Every moment you invest in your wellbeing matters.",
```

**Inspiration** (quotes or uplifting thoughts):
```javascript
"\"Almost everything will work again if you unplug it for a few minutes, including you.\" - Anne Lamott",
```

**Practical Tips** (specific actions):
```javascript
"Try the 20-20-20 rule: Every 20 minutes, look at something 20 feet away for 20 seconds.",
```

**Reflection Prompts** (questions to consider):
```javascript
"What would change if you gave yourself permission to be unreachable for an hour today?",
```

---

## Content Planning

### Expanding to 64 Cards (Original Goal)

Current: 30 cards (about 4 per section)
Goal: 64 cards (about 8 per section)
**Need to add: 34 more cards**

### Strategy

1. **Start with high-priority sections**:
   - Screen Time & Boundaries (needs 4 more)
   - Communication Stress (needs 4 more)
   - Work-Life Balance (needs 4 more)
   - Focus & Productivity (needs 4 more)

2. **Then expand others**:
   - Information Overload (needs 4 more)
   - Sleep & Evening Use (needs 5 more)
   - Social Media (needs 5 more)
   - Physical Health (needs 4 more)

3. **Add gradually**: 5-10 cards per session

### Finding Ideas

- Review `CONTENT.md` in the project files (contains pre-written cards)
- Ask colleagues what challenges they face
- Review digital wellbeing research
- Conduct informal surveys with students/staff
- Browse digital minimalism blogs and books

---

## Quality Checklist

Before adding a card, check:

- [ ] ID is unique and follows naming convention
- [ ] Section name is spelled exactly right
- [ ] Symptom is relatable and specific
- [ ] Description is 1-2 sentences
- [ ] Treatment is action-oriented
- [ ] Strategies are concrete and actionable (3-5 total)
- [ ] All text is properly quoted
- [ ] Commas are in the right places
- [ ] No syntax errors (check browser console after saving)

---

## Troubleshooting

### Syntax Errors

**Problem**: Site stops working after adding content

**Solutions**:
1. Open browser console (F12) to see specific error
2. Common issues:
   - Missing comma after closing brace `},`
   - Unclosed quote `"text`
   - Wrong section name (doesn't match exactly)
   - Missing closing bracket `]`

**Fix**: Compare your new code to existing cards. Use a JSON validator if needed.

### Card Shows But Looks Wrong

**Problem**: Card displays but formatting is off

**Check**:
- All required fields present? (id, section, icon, symptom, description, treatment, strategies)
- Is `strategies` an array with items in quotes?
- Special characters escaped properly? (use `\'` for apostrophes inside single quotes)

### Site Stopped Working Completely

**Solution**:
1. If on GitHub, view the previous commit
2. Copy the old working code
3. Paste it back
4. Start over more carefully
5. Add ONE card at a time and test after each

---

## Templates

### Card Template (Copy/Paste)

```javascript
    {
        id: 'section-name-number',
        section: 'Exact Section Name',
        icon: '📱',
        symptom: 'Symptom Title',
        description: 'Description goes here.',
        treatment: 'Treatment Title',
        strategies: [
            'Strategy 1',
            'Strategy 2',
            'Strategy 3'
        ]
    },
```

### Message Template (Copy/Paste)

```javascript
    "Your motivational message here.",
```

---

## After Adding Content

1. **Test the live site**
   - New cards appear in Wellbeing Surgery?
   - Cards flip correctly?
   - Can add to goals?
   - Can favourite?

2. **Test on mobile**
   - Everything displays correctly?
   - Cards are readable?
   - Buttons work?

3. **Check for typos**
   - Read through all new content
   - Fix any spelling/grammar errors

4. **Share updates**
   - Let users know new content is available
   - Consider announcing via Moodle

5. **Gather feedback**
   - Do users find the new cards helpful?
   - Are any strategies unclear?
   - What other symptoms should you cover?

---

## Tips for Success

- **Add gradually**: 5-10 cards at a time, not all at once
- **Test after each addition**: Catch errors early
- **Keep backups**: Download a copy before making major changes
- **Document your additions**: Keep notes on what you've added
- **Involve colleagues**: Get input on symptoms and treatments
- **Be consistent**: Match the tone and style of existing cards

---

## Advanced: Batch Adding

If you're adding many cards at once:

1. Create them in a text editor first
2. Validate the JSON syntax
3. Copy the entire array to `data.js`
4. Test thoroughly
5. If something breaks, you have your backup

---

**Questions?**

- Review existing cards in `data.js` for examples
- Check browser console (F12) for error messages
- Test changes on a local copy before pushing to GitHub

---

*This guide will help you expand the Digital Wellness Plan to meet your institution's specific needs.*