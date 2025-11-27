# Zenan Guo - Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. Features a clean, professional design showcasing education, experience, projects, skills, and contact information.

## 🌟 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Elements**: Smooth scrolling, hover effects, and form validation
- **Performance Optimized**: Fast loading with optimized assets
- **Accessible**: Screen reader friendly with proper ARIA labels

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # Stylesheet with modern design
├── js/
│   └── script.js      # JavaScript for interactivity
├── images/            # Directory for portfolio images
└── README.md          # This file
```

## 🚀 Getting Started

1. **Open the portfolio**: Simply open `index.html` in your web browser
2. **Customize content**: Edit the HTML file to update your information
3. **Add images**: Place your photos and project images in the `images/` folder
4. **Deploy**: Upload the entire folder to a web hosting service

## 🎨 Customization Guide

### Personal Information
Update the following sections in `index.html`:

- **Contact Information**: Lines 55, 81, 85, 89, 283, 291, 299
- **Hero Section**: Lines 38-43 (name and description)
- **About Me**: Lines 68-77 (personal description)

### GitHub and LinkedIn Links
Update the social media links in two places:
- **Hero Section**: Lines 49, 52 (replace "your-github" and "your-linkedin")
- **Contact Section**: Lines 305, 308 (same placeholders)

### Adding Your Photo
1. Add your profile photo to the `images/` folder
2. Update the hero section or about section to include your image
3. Consider adding project screenshots to showcase your work

### Updating Projects
In the Projects section (starting at line 167), customize:
- Project titles and dates
- Project descriptions
- Add links to live demos or GitHub repositories

### Modifying Colors
The color scheme uses CSS custom properties. Main colors:
- **Primary Blue**: `#2563eb`
- **Purple Accent**: `#7c3aed`
- **Background**: `#f9fafb`
- **Text**: `#1f2937`

To change colors, update the CSS values in `style.css`.

### Adding New Sections
To add new sections:
1. Add navigation link in the navbar (line 18-26)
2. Create the section HTML after existing sections
3. Add corresponding CSS styling in `style.css`

## 🛠️ Technical Details

### Technologies Used
- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript ES6**: Interactive features and animations
- **Font Awesome**: Icons for social media and contact
- **Google Fonts**: Inter font family for typography

### Browser Support
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

### Performance Features
- Optimized CSS with smooth animations
- Lazy loading for scroll animations
- Compressed and minified assets ready for production

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px

## 🔧 Advanced Customization

### Form Integration
The contact form currently shows success/error messages. To make it functional:

1. **Using Formspree** (recommended for static sites):
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

2. **Using Netlify Forms**:
   ```html
   <form netlify>
   ```

3. **Custom Backend**: Replace the form handling in `script.js` with your API endpoint

### SEO Optimization
1. Add meta descriptions and keywords
2. Include Open Graph tags for social media sharing
3. Add structured data markup
4. Optimize images with proper alt attributes

### Analytics Integration
Add Google Analytics or other tracking:
```html
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

## 🚀 Deployment Options

### GitHub Pages (Free)
1. Create a GitHub repository
2. Upload your files
3. Enable GitHub Pages in repository settings
4. Your site will be available at `username.github.io/repository-name`

### Netlify (Free)
1. Drag and drop your portfolio folder to netlify.com
2. Get instant deployment with custom domain support

### Vercel (Free)
1. Connect your GitHub repository
2. Automatic deployments with every commit

### Traditional Web Hosting
Upload all files to your web hosting provider's public_html folder

## 📝 Content Suggestions

### About Section
- Keep it concise but personal
- Highlight your passion and key strengths
- Mention your current goals and interests

### Experience Section
- Use action verbs and quantify achievements
- Focus on impact and results
- Keep descriptions scannable with bullet points

### Projects Section
- Include diverse projects showing different skills
- Add live demo links and GitHub repositories
- Explain the technologies used and challenges overcome

### Skills Section
- Group skills logically (Languages, Frameworks, Tools)
- Only include skills you're comfortable discussing in interviews
- Consider adding skill levels or years of experience

## 🤝 Contributing

Feel free to:
- Report bugs or issues
- Suggest improvements
- Submit pull requests
- Share your customized version

## 📄 License

This portfolio template is open source. Feel free to use it for your own portfolio!

## 📞 Support

If you need help customizing your portfolio:
- Check the HTML comments for guidance
- Review the CSS for styling options
- Test thoroughly on different devices

---

**Good luck with your portfolio! 🎉**

Remember to:
- Keep content updated regularly
- Add new projects as you complete them
- Test on multiple devices and browsers
- Share your portfolio with potential employers and on social media