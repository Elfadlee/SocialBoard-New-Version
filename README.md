# SocialBoard

SocialBoard is a web application designed to enable user interaction through posts, comments, and profile pages, all delivered within a clean, responsive, and user-friendly interface.

This version represents a complete redevelopment of an earlier implementation that was originally built using JavaScript, HTML, and CSS. The application has been rebuilt from the ground up using **React**, **Vite**, and **Material UI (MUI)**.

## Features

- **Home Feed**: View all posts from users in a chronological feed
- **Create Posts**: Share your thoughts with text and optional images
- **Like Posts**: Show appreciation for posts you enjoy
- **Comments**: Engage in conversations by commenting on posts
- **User Profiles**: View detailed user profiles with their posts and statistics
- **Users Directory**: Browse all users on the platform
- **Responsive Design**: Fully responsive interface that works on all device sizes

## Tech Stack

- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Material UI (MUI)** - React component library for beautiful, consistent UI
- **React Router** - Client-side routing

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Elfadlee/SocialBoard-New-Version.git
cd SocialBoard-New-Version
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

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Layout.jsx      # Main layout with navigation
│   ├── Post.jsx        # Post display component
│   └── CreatePost.jsx  # Post creation component
├── pages/              # Page components
│   ├── Home.jsx        # Home feed page
│   ├── Profile.jsx     # User profile page
│   └── Users.jsx       # Users directory page
├── context/            # React context providers
│   └── AppContext.jsx  # Global application state
├── data/               # Mock data
│   └── mockData.js     # Sample users, posts, and comments
├── App.jsx             # Main application component
└── main.jsx            # Application entry point
```

## License

This project is open source and available under the MIT License.
