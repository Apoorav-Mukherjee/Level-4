# APBROS Portfolio Website

A modern, creative portfolio website built with React and Vite. Showcase your work, skills, and experience with a sleek, minimalist design that puts your projects front and center.

## ✨ Features

- **Modern Design**: Clean, minimalist black-and-white aesthetic with smooth animations
- **Responsive Layout**: Fully responsive design that works beautifully on all devices
- **Interactive Sections**:
  - **Home**: Hero section with animated background, call-to-action buttons, key statistics, philosophy section, and testimonial carousel
  - **Work**: Project showcase with slideshow navigation, image carousel within each project, detailed project information, and tech stack tags
  - **About**: Personal story, skills, background information, and call-to-action
  - **Contact**: Contact form, email, social media links, and location information
- **Smooth Animations**: Fade-in effects, hover transitions, and interactive elements
- **Image Carousel**: Each project features a multi-image carousel with:
  - Navigation arrows (hover to reveal)
  - Pagination dots for direct image selection
  - Touch/swipe support for mobile devices
  - Keyboard navigation (arrow keys)
- **Project Slideshow**: Navigate between projects with previous/next buttons and project indicators
- **Testimonial Carousel**: Auto-rotating client testimonials (6-second intervals) with manual navigation dots
- **Mobile-Friendly Navigation**: Hamburger menu for mobile devices

## 🛠️ Tech Stack

- **React 19.2.0** - UI library
- **Vite 7.2.4** - Build tool and dev server
- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **Lucide React 0.561.0** - Icon library
- **ESLint** - Code linting

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Apoorav-Mukherjee/Level-4.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be created in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── App.jsx          # Main portfolio component (CreativePortfolio)
│   ├── App.css          # Component styles
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles
├── public/
│   └── assets/
│       └── work/        # Project images organized by project
│           ├── gym/
│           │   ├── 1.png
│           │   ├── 2.png
│           │   ├── 3.png
│           │   └── 4.png
│           ├── restaurant/
│           ├── cafe/
│           ├── guesthouse/
│           └── clothing/
├── dist/                # Production build output
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── package.json         # Dependencies and scripts
└── README.md            # Project documentation
```

## 📦 Current Projects

The portfolio currently showcases 5 projects:

1. **Gym Website** (Fitness Brand, 2024)
   - Tech: React, Tailwind, Vite
   - 4 images

2. **Restaurant Website** (Restaurant Brand, 2024)
   - Tech: React, CSS, Netlify
   - 5 images

3. **Cafe Website** (Cafe Brand, 2024)
   - Tech: React, Framer Motion
   - 3 images

4. **Guest House Website** (Hospitality Brand, 2024)
   - Tech: React, Node.js
   - 4 images

5. **Clothing Website** (Fashion Brand, 2024)
   - Tech: React, Tailwind
   - 5 images

## 🎨 Customization

### Updating Content

The portfolio content is defined in the `App.jsx` file. You can customize:

#### Navigation Items
Edit the `navigation` array (line 20-25):
```jsx
const navigation = [
  { name: 'Home', id: 'home' },
  { name: 'Work', id: 'work' },
  { name: 'About', id: 'about' },
  { name: 'Contact', id: 'contact' }
];
```

#### Projects
Update the `projects` array (line 27-109) with your own projects:
```jsx
const projects = [
  {
    title: 'Your Project Title',
    client: 'Client Name',
    year: '2024',
    description: 'Project description',
    challenge: 'The challenge you solved',
    solution: 'Your solution',
    results: ['Result 1', 'Result 2', 'Result 3'],
    tags: ['React', 'Node.js', 'MongoDB'],
    images: [
      '/assets/work/project/1.png',
      '/assets/work/project/2.png',
      '/assets/work/project/3.png'
    ]
  },
  // Add more projects...
];
```

**Note**: Each project uses an `images` array (not a single `image` field) to support the image carousel feature. Place your project images in the `public/assets/work/[project-name]/` directory.

#### Testimonials
Modify the `testimonials` array (line 111-130):
```jsx
const testimonials = [
  {
    quote: "Client testimonial text",
    author: "Client Name",
    role: "Their Role",
    company: "Company Name"
  },
  // Add more testimonials...
];
```

#### Branding
- Update the brand name "APBROS" (line 230)
- Change the hero text (line 300-306)
- Update statistics (line 323-336)
- Modify contact information:
  - Email (line 729): `apooravmukherjee@gmail.com`
  - Location (line 754): `Mathura, India`
  - Social links (line 736-747)

#### Social Links
Update social media links in:
- About section (line 634-642)
- Footer (line 836-844)
- Contact section (line 736-747)

### Styling

The project uses Tailwind CSS. You can customize:
- Colors: Modify Tailwind classes (e.g., `bg-black`, `text-white`)
- Spacing: Adjust padding and margins
- Animations: Customize transition durations and effects
- Typography: Change font sizes and weights

## 🎯 Key Components

### Hero Section
- Animated background with pulsing circles
- Main headline with emphasis ("We craft digital experiences that **matter**")
- Call-to-action buttons ("View Our Work" and "Let's Talk")
- Statistics display (50+ Projects, 8+ Years, 30+ Happy Clients)
- Scroll indicator animation

### Philosophy Section
- White background section contrasting with black theme
- "Our Approach" content explaining development philosophy
- Located on the home page after hero section

### Project Showcase
- **Project Slideshow**: Navigate between projects with previous/next buttons and project indicators
- **Image Carousel**: Each project features:
  - Multiple images per project (stored in `public/assets/work/[project-name]/`)
  - Navigation arrows (visible on hover)
  - Pagination dots for direct image selection
  - Touch/swipe gestures for mobile
  - Keyboard navigation (arrow keys) when work section is active
  - Smooth slide transitions
- **Project Details**: Challenge, solution, results, and tech stack tags
- **Project Counter**: Shows current project number (e.g., "Project 1 of 5")

### Testimonial Carousel
- Auto-rotating testimonials (6-second intervals)
- Manual navigation dots
- Smooth fade transitions
- Displays quote, author name, role, and company

### About Section
- Two-column layout (profile on left, content on right)
- Profile section with emoji avatar and social links
- Background story
- "What We Do" grid (Frontend, Backend, Cloud & DevOps, UI/UX)
- "Beyond Code" personal interests
- Call-to-action card with "Get in Touch" button

### Contact Section
- Contact information (email, social links, location)
- Contact form with:
  - Name field
  - Email field
  - Project type dropdown (Web Application, Mobile App, Consultation, Other)
  - Message textarea
  - Send Message button
- Form validation ready (to be implemented)

## 🎮 Interactive Features

### Keyboard Navigation
- **Arrow Keys** (Left/Right): Navigate between images in the project carousel when the Work section is active
- Works only when viewing projects in the Work section

### Touch/Swipe Support
- **Swipe Left**: Navigate to next image in project carousel
- **Swipe Right**: Navigate to previous image in project carousel
- Minimum swipe distance: 50px
- Available on all touch-enabled devices

### Mouse Interactions
- **Hover**: Reveal navigation arrows on project images
- **Click**: Navigate projects, images, and testimonials
- **Hover Effects**: Scale animations on statistics and interactive elements

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is private and proprietary.

## 👤 Author

**APBROS**
- Portfolio showcasing full-stack development work
- Specializing in React, Node.js, and modern web technologies
- Email: apooravmukherjee@gmail.com
- Location: Mathura, India
- Working remotely worldwide

## 🤝 Contributing

This is a personal portfolio project. Contributions are not expected, but feedback is welcome!

---

Built with ❤️ using React and Vite
