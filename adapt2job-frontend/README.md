# Adapt2Job Frontend

This is the frontend application for Adapt2Job, a resume optimization tool.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Styling](#styling)
- [Internationalization](#internationalization)
- [Authentication](#authentication)
- [API Integration](#api-integration)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Resume Optimization:** Input your resume and a job description to get an optimized resume with modification ideas and explanations.
- **Multi-language Support:** Supports English, Chinese, Japanese, Spanish, and German.
- **Document Download:** Download your optimized resume as a PDF or DOCX.
- **Job Link Fetching:** Automatically fetch job descriptions from provided links.
- **User Authentication:** Secure sign-in and sign-up powered by Clerk.
- **Consistent Button Styling:** All primary action buttons (Sign In, Sign Up, User Button, Download PDF, Download DOCX) now have a consistent size and appearance, matching the Home button for improved UI/UX.
- **Blog Integration:** Added a "Blog" menu item to the English Navbar, new routes for blog content in `main.jsx`, and updated the sitemap.

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://your-repository-link.git
    cd adapt2job-frontend
    ```
2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```
3.  Create a `.env` file in the root of the `adapt2job-frontend` directory based on `.env.example` and fill in the necessary environment variables (e.g., Clerk keys, backend API URL).

### Running the Application

```bash
npm run dev
# or
yarn dev
```

This will start the development server, usually at `http://localhost:5173`.

## Project Structure

```
adapt2job-frontend/
├── public/                 # Static assets (images, locales, sitemap)
├── src/
│   ├── assets/             # Images and icons
│   ├── components/         # Reusable React components (e.g., AnalysisOutput, JobInput, ResumeInput)
│   ├── hooks/              # Custom React hooks (e.g., useResumeAnalyzer)
│   ├── lib/                # Utility functions
│   ├── services/           # API service integrations (e.g., llmService, tavily)
│   ├── styles/             # Global styles (index.css)
│   ├── App.css             # Main application-specific CSS
│   ├── i18n.ts             # i18n configuration
│   ├── main.jsx            # Main entry point
│   ├── OptimizerPage.tsx   # Main application page for resume optimization
│   └── types.ts            # TypeScript type definitions
├── landing_pages/          # Multi-language landing pages
│   ├── en/
│   │   ├── blog/           # Blog related HTML files
│   ├── zh/
│   └── ... (other languages)
├── .env.example            # Example environment variables
├── package.json            # Project dependencies and scripts
├── README.md               # Project README
├── FUNCTIONALITY.md        # Detailed functionality documentation
├── CHANGELOG.md            # Project change log
└── ... (other configuration files like tsconfig.json, vite.config.js)
```

## Styling

The project uses Tailwind CSS for utility-first styling, complemented by custom CSS in `src/App.css` for specific component styles and overrides.

## Internationalization

`react-i18next` is used for managing translations. Language files are located in `public/locales/`.

## Authentication

User authentication is handled by Clerk, providing secure and easy-to-integrate sign-in, sign-up, and user management features.

## API Integration

The frontend interacts with a separate backend API for LLM processing, DOCX generation, and other services. The API endpoints are configured via environment variables.

## Contributing

Contributions are welcome! Please see the `CONTRIBUTING.md` for guidelines.

## License

This project is licensed under the MIT License.
