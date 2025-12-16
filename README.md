# APBROS Portfolio Website

A modern, creative portfolio website built with React and Vite. Showcase your work, skills, and experience with a sleek, minimalist design that puts your projects front and center.

## ✨ Features

- **Modern Design**: Clean, minimalist black-and-white aesthetic with smooth animations
- **Responsive Layout**: Fully responsive design that works beautifully on all devices
- **Interactive Sections**:
  - **Home**: Hero section with animated background, call-to-action buttons, and key statistics
  - **Work**: Project showcase with slideshow navigation, detailed project information, and tech stack tags
  - **About**: Personal story, skills, and background information
  - **Contact**: Contact form and social media links
- **Smooth Animations**: Fade-in effects, hover transitions, and interactive elements
- **Testimonial Carousel**: Rotating client testimonials with automatic transitions
- **Project Showcase**: Detailed project cards with challenges, solutions, and results
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
│   ├── App.jsx          # Main portfolio component
│   ├── App.css          # Component styles
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── dist/                # Production build output
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── package.json         # Dependencies and scripts
└── README.md            # Project documentation
```

## 🎨 Customization

### Updating Content

The portfolio content is defined in the `App.jsx` file. You can customize:

#### Navigation Items
Edit the `navigation` array (line 15-20):
```jsx
const navigation = [
  { name: 'Home', id: 'home' },
  { name: 'Work', id: 'work' },
  // Add more sections as needed
];
```

#### Projects
Update the `projects` array (line 22-67) with your own projects:
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
    image: '🛍️' // Emoji or image URL
  },
  // Add more projects...
];
```

#### Testimonials
Modify the `testimonials` array (line 69-88):
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
- Update the brand name "APBROS" (line 113)
- Change the hero text (line 184-189)
- Update statistics (line 208-217)
- Modify contact information (line 527-552)

#### Social Links
Update social media links in:
- About section (line 433-441)
- Footer (line 632-640)
- Contact section (line 535-543)

### Styling

The project uses Tailwind CSS. You can customize:
- Colors: Modify Tailwind classes (e.g., `bg-black`, `text-white`)
- Spacing: Adjust padding and margins
- Animations: Customize transition durations and effects
- Typography: Change font sizes and weights

## 🎯 Key Components

### Hero Section
- Animated background with pulsing circles
- Main headline with emphasis
- Call-to-action buttons
- Statistics display

### Project Showcase
- Slideshow navigation with previous/next buttons
- Project indicators
- Detailed project information
- Tech stack tags

### Testimonial Carousel
- Auto-rotating testimonials (6-second intervals)
- Manual navigation dots
- Smooth fade transitions

### Contact Form
- Name, email, project type, and message fields
- Form validation ready (to be implemented)
- Social media links

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

## 🤝 Contributing

This is a personal portfolio project. Contributions are not expected, but feedback is welcome!

---

Built with ❤️ using React and Vite
