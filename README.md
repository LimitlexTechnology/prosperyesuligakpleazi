# Prosper Yesuli Gakpleazi - Portfolio Website

A modern, responsive portfolio website showcasing professional experience, skills, projects, and services across Software Engineering, Graphic Design, Executive Assistance, Geography, and Education.

## 🌟 Features

- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **Modern UI/UX** - Beautiful gradient designs with smooth animations and transitions
- **Interactive Navigation** - Fixed navigation bar with smooth scrolling to sections
- **Contact Integration** - Direct WhatsApp and Email contact options (no backend required)
- **Portfolio Showcase** - Display of projects with detailed descriptions
- **Skills Visualization** - Comprehensive skills section organized by category
- **Blog Section** - Share insights and articles
- **Services Overview** - Detailed service offerings

## 🚀 Tech Stack

- **Frontend Framework:** React 18.2
- **Build Tool:** Vite 5.0
- **Language:** TypeScript 5.2
- **Styling:** Tailwind CSS 3.3
- **Icons:** Lucide React
- **Deployment:** Vercel

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/LimitlexTechnology/prosperyesuligakpleazi.git
   cd prosperyesuligakpleazi
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:3000`

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 📂 Project Structure

```
prosperyesuligakpleazi/
├── src/
│   ├── components/
│   │   └── ui/
│   │       ├── Hero.tsx          # Hero section with navigation
│   │       ├── About.tsx         # About section
│   │       ├── Experience.tsx    # Work experience
│   │       ├── Education.tsx     # Educational background
│   │       ├── Skills.tsx        # Skills showcase
│   │       ├── Project.tsx       # Portfolio projects
│   │       ├── Blog.tsx          # Blog posts
│   │       ├── Services.tsx      # Services offered
│   │       └── Contact.tsx       # Contact form with WhatsApp/Email
│   ├── App.tsx                   # Main application component
│   ├── main.tsx                  # Application entry point
│   └── index.css                 # Global styles
├── public/                       # Static assets
├── index.html                    # HTML template
├── vite.config.ts               # Vite configuration
├── tailwind.config.js           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Project dependencies

```

## 📧 Contact Form Features

The contact form offers **two direct contact methods** without requiring a backend:

### WhatsApp Integration
- Click "Send via WhatsApp" to open WhatsApp with a pre-filled message
- Works on both mobile (opens WhatsApp app) and desktop (opens WhatsApp Web)
- Contact: +233 543 131 455

### Email Integration
- Click "Send via Email" to open default email client
- Pre-fills recipient, subject, and message body
- Email: prosperyesulig@gmail.com

Both options automatically format the user's form data (name, email, subject, message) for easy communication.

## 🎨 Customization

### Update Personal Information

1. **Contact Details** - Edit `src/components/ui/Contact.tsx`:
   - WhatsApp number (line 19)
   - Email address (line 36)

2. **Profile Content** - Edit respective component files in `src/components/ui/`

3. **Styling** - Modify `tailwind.config.js` for theme customization

### Add New Sections

Create a new component in `src/components/ui/` and import it in `App.tsx`

## 🌐 Deployment

### Vercel (Recommended)

This project is deployed on Vercel for optimal performance and automatic deployments.

1. **Install Vercel CLI** (optional)
   ```bash
   npm install -g vercel
   ```

2. **Deploy via Vercel Dashboard**
   - Push your code to GitHub
   - Import the repository at [vercel.com](https://vercel.com)
   - Vercel will auto-detect Vite and configure build settings
   - Click "Deploy"

3. **Deploy via CLI**
   ```bash
   vercel
   ```

**Build Settings:**
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

### GitHub Pages

Alternatively, deploy to GitHub Pages:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   - Push the `dist` folder to the `gh-pages` branch
   - Or use GitHub Actions for automated deployment

### Other Platforms

The built files in the `dist` folder can be deployed to:
- Netlify
- AWS S3
- Cloudflare Pages
- Any static hosting service

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

This is a personal portfolio project. However, if you find bugs or have suggestions:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Prosper Yesuli Gakpleazi**

- Email: prosperyesulig@gmail.com
- Phone: +233 543 131 455
- LinkedIn: [prosper-yesuli-gakpleazi](https://linkedin.com/in/prosper-yesuli-gakpleazi)
- Location: Sapeiman, Ga West, Ghana (GW-0063-6235)

## 🙏 Acknowledgments

- Built with [React](https://react.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons by [Lucide](https://lucide.dev/)
- Powered by [Vite](https://vitejs.dev/)

---

**© 2026 Prosper Yesuli Gakpleazi. All rights reserved.**