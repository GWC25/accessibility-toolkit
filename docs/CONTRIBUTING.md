# Contributing to DigiWest Access Toolkit

## Adding New Cards

### Card Template
```javascript
{
  id: 'category-brief-description',
  category: 'Reading & Text Comfort',
  icon: '🌙',
  need: 'Brief statement of learner need',
  needDescription: 'Detailed explanation...',
  difficulty: 'Beginner',
  solutions: [
    {
      toolName: 'Tool Name',
      platforms: ['Windows', 'Mac', 'Web'],
      steps: ['Step 1', 'Step 2', 'Step 3'],
      videoId: 'YouTube-video-ID',
      videoTitle: 'Video title',
      helpLink: 'https://support.microsoft.com/...',
      tips: 'Helpful tip or context'
    }
  ],
  relatedCards: ['other-card-ids'],
  keywords: ['search', 'keywords']
}
```

### Verification Checklist
- [ ] YouTube video tested and current
- [ ] Help link points to official Microsoft documentation
- [ ] Steps tested personally
- [ ] Language is clear and simple
- [ ] Appropriate for 16-19 + ESOL learners
