export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  slug: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with Korean",
    excerpt: "Learn the basics of Korean language and writing system.",
    content: `
# Getting Started with Korean

Learning Korean can be an exciting journey. The Korean alphabet, known as Hangul, 
is actually quite logical and can be learned in a matter of hours. However, mastering 
the language takes dedication and practice.

## Getting Started Tips

1. **Learn Hangul First**
   - Start with consonants
   - Then learn vowels
   - Practice writing combinations

2. **Practice Pronunciation**
   - Use YouTube tutorials
   - Record yourself speaking
   - Compare with native speakers

3. **Basic Phrases**
   - Focus on everyday expressions
   - Learn proper pronunciation
   - Practice with native speakers

4. **Immerse Yourself**
   - Watch Korean dramas
   - Listen to K-pop
   - Try Korean podcasts

5. **Regular Practice**
   - Set daily study goals
   - Use language learning apps
   - Join language exchange groups

> Remember: Consistency is key when learning any new language!
    `,
    date: "2024-12-01",
    readTime: "5 min read",
    slug: "getting-started-with-korean",
    author: "Konglish Team"
  },
  {
    id: 2,
    title: "Common Korean Phrases for Beginners",
    excerpt: "Essential phrases you need to know when starting your Korean language journey.",
    content: `
# Common Korean Phrases for Beginners

When starting to learn Korean, it's essential to know some basic phrases. 
These will help you navigate daily conversations and show respect for the language and culture.

## Essential Phrases

| Korean | Pronunciation | Meaning |
|--------|--------------|----------|
| 안녕하세요 | Annyeonghaseyo | Hello |
| 감사합니다 | Gamsahamnida | Thank you |
| 네 | Ne | Yes |
| 아니요 | Aniyo | No |
| 실례합니다 | Sillyehamnida | Excuse me |

### When to Use These Phrases

- **안녕하세요** - Use this as a formal greeting in most situations
- **감사합니다** - A polite way to say thank you
- **네/아니요** - Basic yes/no responses
- **실례합니다** - When you need to excuse yourself or get someone's attention

> Pro tip: Always err on the side of being more formal when unsure!
    `,
    date: "2024-12-05",
    readTime: "8 min read",
    slug: "common-korean-phrases",
    author: "Konglish Team"
  },
  {
    id: 3,
    title: "Korean Culture and Language",
    excerpt: "Understanding the deep connection between Korean culture and its language.",
    content: `
# Korean Culture and Language

The Korean language is deeply intertwined with Korean culture. Understanding cultural 
context is crucial for proper language usage, especially regarding honorifics and 
formal vs informal speech.

## Key Cultural Aspects

### Age Hierarchy
- Determines speech levels
- Influences social interactions
- Shapes relationship dynamics

### Speech Levels
1. **Formal Polite** (합쇼체)
   - Used with strangers
   - Business settings
   - Public speaking

2. **Informal Polite** (해요체)
   - Everyday conversations
   - With acquaintances
   - Casual settings

### Cultural Customs
- Bowing when greeting
- Using two hands to give/receive
- Removing shoes indoors

> Understanding these cultural aspects will greatly improve your language learning journey!

\`\`\`korean
// Example of formal vs informal
안녕하세요 (formal) → 안녕 (informal)
감사합니다 (formal) → 고마워 (informal)
\`\`\`
    `,
    date: "2024-12-10",
    readTime: "6 min read",
    slug: "korean-culture-and-language",
    author: "Konglish Team"
  },
  {
   id: 4,  // increment from the last post's ID
   title: "Bit off more than I can chew",
   excerpt: "A brief summary of your post",
   content: `
# Your Title Here

Your content here. You can use Markdown features like:

## Subheadings

- Bullet points
- Another point

1. Numbered lists
2. Second item

**Bold text** and *italic text*

> Blockquotes for important points

\`\`\`javascript
// Code blocks with syntax highlighting
const example = "Hello World";
\`\`\`

| Tables | Are | Cool |
|--------|-----|------|
| Data   | Goes| Here |
   `,
   date: "2024-12-13",  // Today's date
   readTime: "X min read",
   slug: "your-title-here",  // URL-friendly version of your title
   author: "Your Name"
}
];
