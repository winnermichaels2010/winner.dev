# winner.dev

Personal portfolio website for **Michael Winner Sopuruchi** — a front-end web developer based in Aba, Nigeria.

Built with React, Vite, and Tailwind CSS.

## Tech Stack

- **Framework:** React 18 + Vite 5
- **Styling:** Tailwind CSS 4
- **Routing:** React Router DOM 7
- **Fonts:** Inter + JetBrains Mono (Google Fonts)
- **Forms:** Formspree
- **Linting:** ESLint 9

## Features

- Dark/Light theme toggle with localStorage persistence
- Responsive design with mobile hamburger menu
- Scroll animations via IntersectionObserver
- Client-side routing (Home, About, Projects, Contact)
- Live project previews with iframe embeds
- Contact form powered by Formspree
- SEO meta tags (Open Graph, Twitter Cards)

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint
npm run lint
```

## Project Structure

```
src/
├── components/      # Navbar, Footer, ThemeToggle, ThemeContext, ScrollToTop
├── pages/           # Home, About, Projects, ProjectDetail, Contact, NotFound
├── data/            # projects.js, projectDetails.js
├── styles/          # global.css (Tailwind + theme variables)
├── App.jsx          # Root component with routes
└── main.jsx         # Entry point
```

## Featured Projects

| Project | Description | Demo |
|---------|-------------|------|
| **Expand Global** | Graphic design studio website | [Live](https://expand-global.vercel.app) |
| **Medicare Booking** | Medical appointment booking platform | [Live](https://medicare-booking-orcin.vercel.app) |
| **Whotopia** | Online multiplayer Whot card game | [Live](https://whotopia.vercel.app) |

## Author

**Michael Winner Sopuruchi**
Front-end Web Developer | Rad5 Tech Hub Trained

- Website: [winner.dev](https://winner.dev)
- GitHub: [github.com/winnerdev](https://github.com/winnerdev)

## License

Private
