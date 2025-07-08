# Shersheial Borisute - Personal Website & Blog

A personal website and blog built with Jekyll, featuring a clean, responsive design and dynamic blog functionality.

## 🌐 Live Site
- **Production**: [sharshi.com](https://sharshi.com)
- **Development**: `http://127.0.0.1:4000` (when running locally)

## 🚀 Quick Start

### Prerequisites
- Ruby (2.7 or higher)
- Bundler gem

### Development Setup
1. Clone the repository
2. Install dependencies:
   ```bash
   bundle install
   ```
3. Start the development server:
   ```bash
   bundle exec jekyll serve --livereload
   ```
4. Open `http://127.0.0.1:4000` in your browser

## 📝 Adding Blog Posts

### File Structure
Blog posts should be placed in the `/_posts/` directory with the following naming convention:
```
YYYY-MM-DD-title-of-post.md
```

### Post Format
Each blog post must include front matter at the top:

```yaml
---
layout: post
title: "Your Post Title"
date: 2025-07-08
excerpt: "A brief description of your post (used for previews and SEO)"
---

# Your content starts here

Write your blog post content in Markdown format below the front matter.
```

### Example Post
```yaml
---
layout: post
title: "Building Scalable iOS Apps"
date: 2025-07-08
excerpt: "Lessons learned from scaling an iOS app to 35,000+ monthly active users"
---

# Building Scalable iOS Apps

In this post, I'll share what I learned while scaling my prayer app...

## Key Takeaways

1. **Performance matters** - Users notice slow load times
2. **Offline functionality** - Essential for prayer apps
3. **Localization** - Supporting multiple languages increases adoption

[Continue with your content...]
```

## 📁 Project Structure

```
├── _config.yml          # Jekyll configuration
├── _layouts/            # Page templates
│   └── post.html       # Blog post template
├── _posts/             # Blog posts (YYYY-MM-DD-title.md)
├── assets/             # CSS, JS, images
├── images/             # Site images
├── index.html          # Homepage
├── blog.html           # All posts page
└── README.md           # This file
```

## 🎨 Design Features

- **Typography**: Crimson Text (serif) for body, Inter (sans-serif) for headings
- **Color Scheme**: Warm browns and beiges for a professional, readable design
- **Responsive**: Mobile-first design that works on all devices
- **Performance**: Optimized fonts and minimal CSS for fast loading

## 🔧 Customization

### Adding New Sections
To add new sections to the homepage, edit `index.html` and add your content between the existing sections.

### Styling Changes
The main styles are embedded in `index.html` and `_layouts/post.html`. For major styling changes, consider extracting CSS to separate files in `/assets/css/`.

### Navigation
Currently uses a simple back-link system. To add a full navigation menu, update the header sections in both `index.html` and `_layouts/post.html`.

## 📱 Blog Features

- **Dynamic Loading**: Recent posts automatically appear on homepage
- **SEO Optimized**: Proper meta tags, structured data
- **Excerpt Support**: Post previews with custom excerpts
- **Date Formatting**: Human-readable dates
- **Responsive Design**: Optimized for mobile and desktop
- **Clean URLs**: `/blog/YYYY/MM/DD/title/` format

## 🚢 Deployment

### GitHub Pages
This site is configured for GitHub Pages deployment:

1. Push changes to your repository
2. GitHub Pages will automatically build and deploy
3. Site will be available at your custom domain or `username.github.io`

### Manual Deployment
To build for production:
```bash
bundle exec jekyll build
```
The built site will be in the `_site/` directory.

## 📊 Analytics & SEO

### Current Setup
- Meta descriptions for better SEO
- Open Graph tags for social sharing
- Responsive viewport meta tag
- Favicon support

### Adding Analytics
To add Google Analytics, insert the tracking code in both `index.html` and `_layouts/post.html` before the closing `</head>` tag.

## 🔗 Key Pages

- **Homepage** (`/`): Overview with recent blog posts
- **All Posts** (`/blog/`): Complete list of blog posts
- **Individual Posts** (`/blog/YYYY/MM/DD/title/`): Full blog post pages

## 🛠️ Built With

- **Jekyll** - Static site generator
- **Liquid** - Templating language
- **Markdown** - Content format
- **CSS3** - Styling (embedded)
- **Google Fonts** - Typography (Crimson Text, Inter)

## 📧 Contact

- **Email**: [contact@sharshi.com](mailto:contact@sharshi.com)
- **LinkedIn**: [linkedin.com/in/sharshi](https://www.linkedin.com/in/sharshi/)
- **GitHub**: [github.com/sharshi](https://github.com/sharshi/)
- **X**: [x.com/shersheial](https://x.com/shersheial/)

---

## 📈 Site Stats

Current projects featured:
- **Siddur Torah Ohr**: 35,000+ monthly active users
- **Web Hunt**: Product Hunt-inspired web application
- **Morning Dash**: Daily dashboard application
- **Tidy Albatross**: Environmental endless runner game
