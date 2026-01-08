# Modern Portfolio Website

A stunning, modern portfolio website built with React and TailwindCSS. Features responsive design, dark/light mode toggle, smooth animations, and professional sections perfect for developers, designers, and tech professionals.

## 🚀 Features

- **Modern Design**: Clean, professional, and visually impressive interface
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Interactive Components**: Hover effects, scroll animations, and micro-interactions
- **Performance Optimized**: Fast loading and smooth user experience
- **SEO Ready**: Meta tags and structured markup included
- **Professional Sections**:
  - Hero section with animated roles
  - About me with stats
  - Skills with progress indicators
  - Projects portfolio with filtering
  - Experience timeline
  - Contact form
  - Social links

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Styling**: TailwindCSS with custom theme
- **Animations**: Framer Motion
- **Icons**: React Icons (Feather Icons + Simple Icons)
- **Fonts**: Inter + JetBrains Mono (Google Fonts)
- **Build Tool**: Create React App

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/modern-portfolio.git
   cd modern-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🎨 Customization

### Personal Information
Update the following files with your personal information:

1. **src/sections/Hero.js** - Name, title, tagline
2. **src/sections/About.js** - About text, stats, profile photo
3. **src/sections/Skills.js** - Your skills and technologies
4. **src/sections/Projects.js** - Your projects and portfolio
5. **src/sections/Experience.js** - Work experience and education
6. **src/sections/Contact.js** - Contact information
7. **src/components/Navbar.js** - Navigation brand name
8. **src/components/Footer.js** - Footer information
9. **public/index.html** - Meta tags and title

### Colors and Theme
Customize the color scheme in `tailwind.config.js`:

- **Primary Colors**: Update the `primary` color palette
- **Secondary Colors**: Modify the `secondary` color palette
- **Accent Colors**: Change the `accent` color palette

### Content Sections
- **Add/Remove Sections**: Modify `src/App.js`
- **Reorder Sections**: Change the order in the main App component
- **Navigation**: Update `src/components/Navbar.js` to match your sections

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎭 Animations

The website includes various animations:
- **Scroll-triggered animations**: Sections animate as you scroll
- **Hover effects**: Interactive elements respond to mouse hover
- **Loading animations**: Smooth transitions and state changes
- **Micro-interactions**: Button clicks, form interactions

## 📄 Pages Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.js       # Navigation with smooth scrolling
│   ├── Footer.js       # Footer with social links
│   ├── Button.js       # Reusable button component
│   ├── Card.js         # Reusable card component
│   └── BackToTop.js    # Floating back to top button
├── sections/           # Main page sections
│   ├── Hero.js         # Hero section with CTA
│   ├── About.js        # About section with stats
│   ├── Skills.js       # Skills with progress bars
│   ├── Projects.js     # Projects portfolio
│   ├── Experience.js   # Experience timeline
│   └── Contact.js      # Contact form and info
├── hooks/              # Custom React hooks
│   ├── useTheme.js     # Dark/light mode hook
│   └── useScrollDirection.js # Scroll direction hook
└── utils/              # Utility functions
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Drag and drop the `build` folder to Netlify

### Other Hosting
1. Build the project: `npm run build`
2. Upload the `build` folder to your hosting provider

## 🔧 Environment Variables

Create a `.env` file in the root directory for any API keys or configuration:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Optimized for excellent user experience
- **Bundle Size**: Optimized with code splitting and lazy loading

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- Website: [yourwebsite.com](https://yourwebsite.com)
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourusername)

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library
- [Google Fonts](https://fonts.google.com/) - Web fonts

---

⭐ Star this repository if you found it helpful!