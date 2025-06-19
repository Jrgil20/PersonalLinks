# Personal Landing Page

A minimalist, professional personal landing page built with Astro.js featuring smooth animations, responsive design, and easy configuration.

## ✨ Features

- **Modern Design**: Clean, minimalist aesthetic with professional appeal
- **Animated Background**: Subtle gradient shifts with floating particles
- **Responsive Layout**: Mobile-first design that works on all devices
- **Performance Optimized**: Built with Astro.js for fast loading times
- **Easy Configuration**: Simple config file for updating personal information
- **Accessibility**: WCAG compliant with proper focus states and reduced motion support
- **SEO Ready**: Meta tags and structured data for better search visibility

## 🚀 Quick Start

1. **Clone and Install**
   ```bash
   git clone <your-repo>
   cd personal-landing-page
   npm install
   ```

2. **Configure Your Information**
   Edit `src/config/personal.ts` to update:
   - Your name and title
   - Profile image URL
   - Social media links
   - Contact information
   - Color theme preferences

3. **Start Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:4321](http://localhost:4321) to view your site.

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── AnimatedBackground.astro
│   ├── ProfileSection.astro
│   ├── SocialLinks.astro
│   └── Footer.astro
├── config/             # Configuration files
│   └── personal.ts     # Personal info and settings
├── layouts/            # Page layouts
│   └── Layout.astro
└── pages/              # Page routes
    └── index.astro
```

## ⚙️ Configuration

### Personal Information
Update `src/config/personal.ts` with your details:

```typescript
export const personalInfo: PersonalInfo = {
  name: "Your Name",
  title: "Your Professional Title",
  profileImage: "your-image-url",
  profileImageAlt: "Your photo description"
};
```

### Social Links
Add or modify your social links:

```typescript
export const socialLinks: SocialLink[] = [
  {
    name: "LINKEDIN",
    description: "Professional profile",
    url: "https://linkedin.com/in/yourprofile",
    icon: "linkedin",
    external: true
  },
  // Add more links...
];
```

### Theme Customization
Modify colors and animations in the config:

```typescript
export const themeConfig = {
  colors: {
    primary: "#6366f1",
    secondary: "#8b5cf6",
    // ... more colors
  },
  animations: {
    duration: "0.3s",
    easing: "cubic-bezier(0.4, 0, 0.2, 1)"
  }
};
```

## 🎨 Customization

### Adding New Social Icons
1. Add your icon SVG to the `getIcon` function in `SocialLinks.astro`
2. Add the corresponding link to your `personal.ts` config
3. The component will automatically render the new link

### Changing Colors
Update the CSS custom properties in `Layout.astro` or modify the `themeConfig` in `personal.ts`.

### Profile Image
- Use a high-quality square image (400x400px recommended)
- Optimize for web (WebP format preferred)
- Update the `profileImage` URL in your config

## 📱 Responsive Breakpoints

- **Mobile**: ≤ 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Build your project: `npm run build`
2. Upload the `dist/` folder to Netlify
3. Or connect your Git repository for automatic deployments

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to GitHub Pages
1. Update `astro.config.mjs` with your site URL
2. Push to GitHub
3. Enable GitHub Pages in repository settings

## 🔧 Development Commands

| Command           | Action                                       |
|:------------------|:---------------------------------------------|
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start local dev server at `localhost:4321`  |
| `npm run build`   | Build your production site to `./dist/`     |
| `npm run preview` | Preview your build locally, before deploying|

## 🌟 Performance Features

- **Astro Islands**: Zero JavaScript by default, hydrate only when needed
- **Image Optimization**: Lazy loading and responsive images
- **CSS Animations**: Hardware-accelerated transforms
- **Minimal Dependencies**: Lightweight bundle size
- **Web Vitals**: Optimized for Core Web Vitals scores

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙋‍♂️ Support

If you have any questions or need help customizing your landing page:

1. Check the documentation above
2. Review the configuration examples
3. Open an issue on GitHub
4. Contact through the social links on your deployed site

---

**Built with ❤️ using [Astro](https://astro.build)**