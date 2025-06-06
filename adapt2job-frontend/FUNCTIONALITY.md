# Adapt2Job Frontend Functionality

This document outlines the key functionalities and features of the Adapt2Job frontend application.

## Core Features

### 1. Resume Optimization
- **Input:** Users can input their resume content (via paste or file upload) and a job description (via paste or job link).
- **Analysis:** The application analyzes the resume against the job description using a large language model (LLM).
- **Output:** Provides modification ideas, content explanations, and a modified resume tailored to the job description.

### 2. Multi-language Support
- The application supports multiple languages (English, Chinese, Japanese, Spanish, German) for the user interface and analysis.
- Language can be selected via a dropdown in the header or by a `lang` URL parameter.

### 3. User Authentication (Clerk)
- Users can sign in and sign up using Clerk.
- Signed-in users have access to a user button for managing their account.

### 4. Document Download
- Users can download the modified resume as a PDF or DOCX file.
- PDF generation is done client-side using `jspdf` and `html2canvas`.
- DOCX generation is handled by the backend API, converting HTML content to a DOCX file. This now includes preprocessing of HTML to better retain horizontal rules and uses 'Calibri' as the default font for improved visual consistency.

### 5. Job Description Fetching
- Users can provide a job link, and the application will attempt to fetch the job description content using the Tavily API.

## UI/UX Enhancements

### Consistent Button Styling
- All primary action buttons, including "Sign In", "Sign Up", "User Button", "Download PDF", and "Download DOCX", now share a consistent size and styling with the "Home" button for improved visual coherence and user experience.

### Landing Page Content Updates
- The blog post 'how-to-tailor-resumes-for-jobs.html' has been updated with enriched, refined, and fully translated English content, replacing previous Chinese sections and inline CSS with external styling.
- A new blog listing page (`index.html`) has been created in `adapt2job-frontend/landing_pages/en/blog/` to display a list of blog posts, starting with a link to 'how-to-tailor-resumes-for-jobs.html'.
- **Blog Integration:** A "Blog" menu item has been added to the English Navbar, linking to the new blog index page. New routes for `/en/blog` and `/en/how-to-tailor-resumes-for-jobs` have been added to `main.jsx` to serve the blog content. The sitemap (`public/sitemap.xml`) has been updated to include these new blog URLs.
