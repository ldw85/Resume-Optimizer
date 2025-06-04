# Functionality Documentation

This document outlines the key functionalities of the `adapt2job-frontend` application.

## Resume Optimization Page (`OptimizerPage.tsx`)

- **Resume Input**: Users can paste their resume text directly or upload a file (PDF, DOCX, TXT).
- **Job Description Input**: Users can paste a job description or provide a link to a job posting. The application will attempt to fetch the content from the provided link using the Tavily API.
- **Language Selection**: Users can select their preferred language for the application interface and the resume analysis output. Supported languages include English, Chinese, Japanese, and Spanish. The language preference is persisted in local storage and can also be set via a URL parameter (`?lang=`).
- **Resume Analysis**: Upon clicking the "Optimize My Resume" button, the application sends the resume and job description to a backend service for analysis. If the initial LLM (e.g., Gemini) returns a 503 error, the application will automatically retry the analysis using an alternative LLM (e.g., DeepSeek). The analysis provides:
    - Modification Ideas: Suggestions on how to improve the resume.
    - Content Explanation: An explanation of the analysis.
    - Modified Resume: A version of the resume optimized for the job description.
- **Loading Indicators and Toasts**: The application provides visual feedback during the optimization process (e.g., "Optimizing..." text on the button) and uses toast notifications for user guidance (e.g., "Please enter your resume content," "Optimization takes a few seconds").
- **Button Styling**: The "Optimize My Resume" button now has a default gray background with a hover effect.
- **Clerk Authentication Buttons**: The `SignInButton`, `SignUpButton`, and `UserButton` from Clerk are integrated for user authentication. These buttons have been styled to be smaller and more compact.
- **How It Works Section**: A lazily loaded component explaining the process of resume optimization.
- **Back to Home Button**: A button to navigate back to the main landing page.

## Landing Pages

- The application supports multiple landing pages based on language (e.g., `landing-en.jsx`, `landing-zh.jsx`).
- Each landing page includes components such as:
    - Navbar
    - Hero section
    - Features section
    - How It Works section
    - Testimonials
    - Pricing
    - Call to Action
    - Trust section
    - Footer
- Dedicated pages for Contact Us, FAQ, Privacy Policy, Terms of Service, and Usage Instructions are available for each language.

## Internationalization (i18n)

- The application uses `react-i18next` for internationalization.
- Translation files are located in `public/locales/`.
- Language detection is handled via URL parameters, local storage, and browser language settings.

## Styling

- The application uses Tailwind CSS for utility-first styling.
- Custom CSS is defined in `src/App.css` for general styles and specific component overrides.
