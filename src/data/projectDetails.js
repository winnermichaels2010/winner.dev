const projectDetails = {
  'expand-global': {
    title: 'Expand Global',
    description: [
      'Expand Global is a custom-built web platform designed for a professional graphic designer who specializes in brand identity and logo design. The core idea behind the project was to create a seamless digital storefront where the designer\'s clients could easily discover services, place orders, and manage the entire creative process online — removing the friction of back-and-forth emails and manual invoicing that many freelance creatives struggle with.',
      'From a functionality standpoint, the platform allows visitors to browse through the designer\'s available services (such as logo design, full brand identity packages, and related creative offerings), select the service that fits their needs, and place an order directly through the site. Once an order is placed, clients are able to communicate directly with the designer through the platform, making it easy to share references, request revisions, and stay updated on project progress without needing a separate communication tool. The platform also integrates a payment system, allowing clients to pay for services securely online, which streamlines the transaction process for both the designer and their customers.',
      'On the design side, since the client\'s brand identity is built around creativity and visual appeal, I made sure the site itself reflected that — using purple as the dominant brand color throughout the interface, paired with clean layouts, generous whitespace, and a modern aesthetic that positions the designer as a premium, professional service provider. Every part of the site, from the homepage to the ordering flow, was designed to feel intuitive and visually engaging, since first impressions matter a lot for a creative business.',
      'As the sole front-end developer on this project, I was responsible for the complete user experience — from wireframing the ordering flow, to building out the responsive layouts, to implementing the styling and interactive elements that make the platform feel polished and trustworthy. This project pushed me to think not just about code, but about how a real business operates and how software can directly support that business\'s day-to-day workflow with actual paying clients. This is also my Rad5 Tech Hub IT project.',
    ],
    techStack: ['HTML', 'CSS', 'JavaScript'],
    role: 'Sole Front-End Developer — handled UI/UX design, ordering flow, and client-facing interface.',
    demoUrl: 'https://expand-global.vercel.app',
    icon: '🌐',
  },
  'medicare-booking': {
    title: 'Medicare Booking',
    description: [
      'Medicare Booking is a full-featured web application built to simplify and modernize the process of scheduling medical appointments — a system that, in many real-world settings, is still handled manually through phone calls or in-person visits. The goal of this project was to design a digital solution that works the way a real hospital or clinic actually operates, where staff roles and responsibilities vary widely and access control matters.',
      'The core booking flow works like this: a patient visits the platform and navigates to the "Book Appointment" page. From there, they select an available time frame that works for them, and then they\'re prompted to describe the medical issue or concern they\'d like to be seen for. Once submitted, this request doesn\'t get automatically approved — instead, it goes to a hospital admin, who reviews the details and either accepts or rejects the appointment request. This mirrors how real healthcare scheduling actually works, where staff need to review requests before confirming them, rather than allowing an open, unmanaged booking system.',
      'One of the more thoughtful and technically interesting parts of this project is the admin access system. In a real hospital environment, the people managing appointments and administrative tasks aren\'t only doctors — front desk staff, nurses, and other personnel often need administrative access too. To reflect this, I built a system where any authorized staff member can log in to the admin dashboard simply by entering a shared admin code, rather than requiring individual accounts for every staff member. However, to maintain proper security and prevent misuse, I built a separate, more secure login path specifically for a "head admin" — this person logs in using a unique email and password combination rather than the shared code. Critically, the head admin is the only person on the entire platform who has the ability to change the admin code itself. Regular staff who log in using the admin code can access and manage the admin dashboard, but they cannot alter or regenerate the code — that permission is locked exclusively to the head admin account. This creates a practical, real-world-inspired permission hierarchy that balances accessibility for staff with proper oversight and security at the top level.',
      'Building this project required me to think carefully about user roles, access control logic, and how to design a booking system that feels simple for patients while still giving hospital staff the tools and structure they need behind the scenes.',
    ],
    techStack: ['HTML', 'CSS', 'JavaScript'],
    role: 'Designed and built the complete booking flow, admin dashboard, and role-based access control system.',
    demoUrl: 'https://medicare-booking-orcin.vercel.app/',
    icon: '🏥',
  },
  'whotopia': {
    title: 'Whotopia',
    description: [
      'Whotopia is an online, interactive platform built around one of the most popular and beloved card games in Nigeria and West Africa — Whot. The goal of this project was to take a game that\'s traditionally played in person, with a physical deck of cards among friends and family, and translate that same fun, competitive, social experience into a smooth digital format that people can enjoy from anywhere.',
      'The platform offers two distinct ways to play. The first is a multiplayer mode, where a player can create their own private game room and receive a unique room code. That code can then be shared with friends, who can join the same room and play together in real time, just as if they were sitting around a table with a physical deck of cards. This mode was designed to capture the social, competitive energy of the original game while making it accessible online, regardless of where each player is physically located.',
      'The second mode is a "Play with Computer" option, designed for users who want to play solo or practice without needing other players available. In this mode, the user competes against an AI-controlled opponent, which follows the actual rules and logic of Whot to provide a genuinely challenging and engaging single-player experience.',
      'Beyond the gameplay mechanics themselves, a lot of thought went into making the platform feel fun, fast, and easy to use — since games live and die by how enjoyable and frictionless the user experience feels. I focused on building smooth interactions, clear visual feedback for game actions, and an interface that keeps the focus on the game itself rather than getting in the way of the experience.',
      'This project stood out to me as more than just a coding exercise — it became an opportunity to preserve and modernize a piece of local culture through technology, which is part of why I chose to present it at Demo Day. I had the opportunity to showcase Whotopia at Demo Day on August 22, 2026, at Rad5 Tech Hub, presenting both the multiplayer and AI gameplay modes to an audience.',
    ],
    techStack: ['HTML', 'CSS', 'JavaScript'],
    role: 'Sole Developer — designed and built the multiplayer room system, real-time gameplay logic, and AI opponent',
    milestone: 'Presented at Demo Day, August 22, 2026, Rad5 Tech Hub',
    demoUrl: 'https://whotopia.vercel.app',
    icon: '🃏',
  },
  'smartsale': {
    title: 'SmartSale',
    description: [
      'SmartSale is a modern business management platform I pioneered with my fellow students at Rad5 Tech Hub. It was used as our capstone project and its use is to help fashion designers, boutiques, clothing stores, and apparel brands manage their businesses more efficiently.',
      'The platform brings essential business operations into one place, allowing business owners to manage products and inventory, keep customer records, record sales, monitor business performance, and generate useful reports.',
      'I designed SmartSale with simplicity and usability in mind, creating a clean, responsive experience that works across desktop, tablet, and mobile devices.',
      'Key features include: business performance dashboard, product and inventory management, customer management and purchase history, sales recording and payment tracking, automatic inventory updates after sales, low-stock monitoring, sales, inventory, and customer reports, secure authentication and account verification, and a responsive and user-friendly interface.',
      'What this project demonstrates: SmartSale showcases my ability to take a real-world business problem and turn it into a functional digital solution, combining frontend development, responsive design, database integration, authentication, business logic, and user-focused product design.',
    ],
    techStack: ['React', 'Database', 'Authentication', 'Responsive Design'],
    role: 'Co-developer — collaborated with fellow students at Rad5 Tech Hub on this capstone project, contributing to frontend development, responsive design, database integration, authentication, business logic, and product design.',
    milestone: 'Capstone Project — Rad5 Tech Hub',
    demoUrl: 'https://smartsales-com-ng.vercel.app',
    icon: '🛍️',
  },
};

export default projectDetails;
