# Shivang Sharma — Developer Portfolio

A personal developer portfolio website for **Shivang Sharma**, a **MERN Stack Developer & Software Developer Fresher**, built with React 19, Vite, and Tailwind CSS.

---

## 🚀 Live Demo & Preview

- **Local Preview**: `http://localhost:5174/`
- **Resume**: Available at `/Shivang_Sharma_Resume.pdf` (downloadable directly via the header & hero CTAs)

---

## 🛠️ Technology Stack

- **Framework**: React.js 19 with Vite 8
- **Styling**: Tailwind CSS v4 & custom glassmorphism design tokens
- **Icons**: Lucide React & custom SVG components
- **Interactivity**: Dynamic typewriter cycle, lag-free desktop custom cursor, multi-tab developer terminal simulation, filterable skill & project cards, project details modal, and confetti effects on contact submissions
- **Fonts**: Space Grotesk (display), Plus Jakarta Sans (body), JetBrains Mono (code)

---

## 📂 Project Architecture

```
Portfolio/
├── public/
│   ├── projects/
│   │   ├── nielacare.jpg          # Nielacare E-Commerce mockup
│   │   ├── poiya.jpg              # Poiya Health Corporate mockup
│   │   ├── jit.jpg                # JIT Polytechnic portal mockup
│   │   └── tici.jpg               # TiCi NatureLab showcase mockup
│   ├── favicon.svg                # Custom branded SVG favicon
│   └── Shivang_Sharma_Resume.pdf  # Downloadable ATS resume PDF
├── src/
│   ├── components/
│   │   ├── CustomCursor.jsx       # Smooth trailing custom cursor (desktop only)
│   │   ├── Navbar.jsx             # Frosted glass navbar with active section detection
│   │   ├── Hero.jsx               # Hero screen with typewriter role effect & marquee
│   │   ├── TerminalVisual.jsx     # Interactive multi-tab code workstation
│   │   ├── About.jsx              # Resume-based biography & 4 key highlights
│   │   ├── Skills.jsx             # Categorized skill cards with filter pills
│   │   ├── Projects.jsx           # Browser-window mockup cards & live links
│   │   ├── ProjectModal.jsx       # In-depth architectural & feature modal
│   │   ├── Experience.jsx         # Timeline of real internships & AI contributions
│   │   ├── Education.jsx          # Academic background (MCA, BCA, XII, X)
│   │   ├── Contact.jsx            # Direct contact, copy tools, and mailto dispatch
│   │   ├── Footer.jsx             # Footer with back-to-top and social profiles
│   │   └── Icons.jsx              # Crisp SVGs for GitHub and LinkedIn
│   ├── data/
│   │   └── portfolioData.js       # Centralized config for all profile and project data
│   ├── App.jsx                    # Root application component
│   ├── index.css                  # Tailwind styles and theme tokens
│   └── main.jsx                   # React DOM entry point
├── scripts/
│   └── generateResume.js          # Generator script for Shivang's PDF resume
├── package.json
└── vite.config.js
```

---

## ⚙️ Getting Started Locally

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the local development server**:
   ```bash
   npm run dev
   ```

3. **Build production bundle**:
   ```bash
   npm run build
   ```

4. **Regenerate Resume PDF** (optional):
   ```bash
   node scripts/generateResume.js
   ```

---

## 🎨 Easy Customization

All personal information, social URLs, contact details, skills, and projects are centralized in [`src/data/portfolioData.js`](src/data/portfolioData.js). To update:
- Modify `personalInfo.contact` for social handles, email, and phone.
- Update `projectsData` to add new live URLs or client deliverables.
- Adjust `skillsData` or `experienceData` whenever new milestones are achieved.

---

## 🚢 Deployment to Vercel

This repository is frontend-only and ready for instant deployment to Vercel:
1. Push this directory to your GitHub repository.
2. Go to [Vercel](https://vercel.com/) and click **"New Project"**.
3. Import your repository. Vercel will automatically detect `Vite` as the framework preset with:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **"Deploy"**.
