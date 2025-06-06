# Changelog

## [1.0.0] - 2024-01-01

### Added
- Initial release of Adapt2Job frontend.
- Resume optimization functionality.
- Multi-language support (English, Chinese).
- PDF and DOCX download options for modified resumes.
- Clerk integration for user authentication.
- Job description fetching from links via Tavily API.

## [1.0.1] - 2025-06-05

### Changed
- Standardized button styling across the application. The "Sign In", "Sign Up", "User Button", "Download PDF", and "Download DOCX" buttons now have a consistent size and appearance, matching the "Home" button for improved UI/UX.
- Updated the content of the blog post 'how-to-tailor-resumes-for-jobs.html' with enriched, refined, and fully translated English content, and replaced inline CSS with external styling.
- Added a new blog listing page (`index.html`) in `adapt2job-frontend/landing_pages/en/blog/` to serve as the main blog index, initially featuring a link to the 'how-to-tailor-resumes-for-jobs.html' article.
- Integrated a "Blog" menu item into the English Navbar, linking to the new blog index page.
- Added new routes for `/en/blog` and `/en/how-to-tailor-resumes-for-jobs` in `main.jsx` to serve the blog content.
- Updated `public/sitemap.xml` to include the new blog URLs.

## [1.0.3] - 2025-06-06

### Changed
- Refined the file upload area in `ResumeInput.tsx` to ensure the file selection dialog only appears when clicking directly on the designated upload area, improving user experience.

## [1.0.2] - 2025-06-06

### Changed
- Improved DOCX file generation: Preprocessed HTML to convert `div` based horizontal rules to `<hr>` tags for better rendering in DOCX, and set the default font to 'Calibri' for enhanced visual consistency.

## [1.0.5] - 2025-06-06

### Changed
- Improved user feedback during resume optimization: The "optimizing" toast message now persists until the backend API response is received, providing a clearer indication of the process status.

## [1.0.4] - 2025-06-06

### Reverted
- Reverted client-side DOCX file generation (introduced in a previous attempt) due to incompatibility issues with `html-docx-js` and modern module bundlers (Vite). DOCX generation now continues to be handled by the backend API.

## [1.0.6] - 2025-06-07

### Fixed
- Moved blog image assets from `adapt2job-frontend/landing_pages/en/blog/image/` to `adapt2job-frontend/public/image/` and updated image paths in `adapt2job-frontend/landing_pages/en/blog/blogIndex.html` to `/image/...`.
- Added a specific rewrite rule in `vercel.json` (`"source": "/image/(.*)", "destination": "/adapt2job-frontend/image/$1"`) to ensure images from the `public` directory are correctly served on Vercel deployments, resolving persistent image display issues.
