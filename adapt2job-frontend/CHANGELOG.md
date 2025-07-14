# Changelog

## [1.0.32] - 2025-06-13

### Fixed
- Resolved issue where `/api/resumes` was called multiple times on page initialization and when toggling "保存常用简历". The fetch logic is now consolidated into a single `useEffect` that runs once on mount if the user is logged in. Toggling "保存常用简历" now only updates the UI based on fetched data without triggering a new API call.

## [1.0.31] - 2025-06-13

### Changed
- Modified Resume Input component to fetch saved resumes automatically on page load if the user is logged in, ensuring the latest saved resume is displayed by default without requiring user interaction. The loading state for this initial fetch is not shown.

## [1.0.30] - 2025-06-13

### Changed
- Enhanced Resume Input UI and Logic:
  - Implemented asynchronous loading of saved resumes on component mount if the user is logged in and the "Save Common Resumes" toggle is enabled. The latest saved resume is displayed by default, or the upload area if no resumes are found.
  - Modified the saved resume feature to support only one saved resume, which is updated upon new resume uploads (assuming backend handles overwrite).
  - Redesigned the display for saved resumes: removed "选择常用简历" (Select saved resume) dropdown. Instead, it now shows "您的常用简历：[简历名称]" (Your saved resume: [Resume Name]) followed by an "上传新简历" (Upload new resume) link, all on a single line for improved aesthetics.

## [1.0.29] - 2025-06-12

### Fixed
- Resolved resume content clearing issue after file upload: Modified `ResumeInput.tsx` to prevent the `value` (resume content) from being inadvertently cleared after a successful file parse. The `onContentChange('')` call within `handleMethodChange` is now only triggered when explicitly switching to the 'paste' method, ensuring that content remains after an 'upload' and parse operation. This addresses the problem where `isResumeContentAvailable` was incorrectly reset to `false` immediately after becoming `true`, causing the "Optimize My Resume" button to remain unresponsive.

## [1.0.28] - 2025-06-12

### Fixed
- Further refined resume content display and input area logic: Consolidated the `textarea` rendering in `ResumeInput.tsx` to ensure that the parsed content from file uploads is always displayed in the correct and visible `textarea`. The `textarea` is now conditionally rendered to be editable when in 'paste' mode, or read-only when in 'upload' mode (after content is present) or when a saved resume is selected. The upload area is now only shown when `activeMethod` is 'upload' and no content (`value`) is present yet. This resolves the persistent issue of uploaded content not appearing in the input box and the "Optimize My Resume" button remaining unresponsive.

## [1.0.27] - 2025-06-12

### Fixed
- Corrected resume content display after file upload: Refactored `ResumeInput.tsx` to ensure only one `textarea` element is used for displaying resume content. The `textarea` is now always rendered and its `value` prop correctly reflects the parsed content from file uploads or pasted text. This resolves the issue where uploaded content was not visible in the input box, which in turn prevented the "Optimize My Resume" button from becoming active. The `textarea` is read-only when content is from an upload or a saved resume.

## [1.0.26] - 2025-06-12

### Fixed
- Ensured uploaded resume content is always displayed: Modified `ResumeInput.tsx` to always render the `textarea` element, regardless of whether content is initially present or the active input method is 'upload'. This resolves the issue where parsed resume content was not visible after file upload, which in turn prevented the "Optimize My Resume" button from becoming active. The `textarea` is now read-only when content is from an upload or a saved resume.

## [1.0.25] - 2025-06-11

### Changed
- Simplified resume input validation logic: Introduced a new `isResumeContentAvailable` state in `ResumeInput.tsx` to consolidate the conditions for valid resume content (pasted, uploaded, or selected from saved resumes). This state is passed to `OptimizerPage.tsx` via a new `onResumeContentAvailableChange` prop, allowing the "Optimize My Resume" button's `disabled` prop to be controlled by a single, clear variable, regardless of the input method.

## [1.0.24] - 2025-06-11

### Changed
- Updated resume input validation logic: When clicking "Optimize my resume", if a resume file has been successfully uploaded and parsed, the paste input field's content is no longer validated. Instead, the validation now correctly checks for successful file upload and parsing. This was achieved by introducing new props (`onFileParsedChange`, `onActiveMethodChange`) in `ResumeInput.tsx` to communicate the file parsing status and active input method to `OptimizerPage.tsx`, and then adjusting the validation in `OptimizerPage.tsx` accordingly.

## [1.0.23] - 2025-06-11

### Fixed
- Prevented `ResumeInput.tsx` from repeatedly calling the `/api/resumes` endpoint on failure. Now, when fetching or saving resumes fails, a `toast` error message is displayed once, and the component avoids continuous retries. This was achieved by introducing a `hasAttemptedSavedResumesFetch` state and ensuring `toast` was correctly imported.

## [1.0.22] - 2025-06-11

### Fixed
- Ensured "优化我的简历" (Optimize my resume) button is disabled while resume content is being parsed or loaded. This prevents premature clicks and provides better user feedback. The `ResumeInput` component now communicates its loading state to `OptimizerPage`, which then disables the button accordingly.

## [1.0.21] - 2025-06-11

### Fixed
- Resolved issue where clicking the file upload area in `adapt2job-frontend/src/components/ResumeInput.tsx` opened the file dialog twice. This was caused by the hidden `input type="file"` element covering the upload area `div`, leading to both the `input`'s native click and the `div`'s programmatic click (via `handleUploadAreaClick`) being triggered. The fix involved removing the `onClick` handler from the parent `div`, allowing the `input` element to solely handle the file selection dialog.

## [1.0.20] - 2025-06-10

### Fixed
- Resolved "new row violates row-level security policy for table 'user_resumes'" error by modifying `adapt2job-backend/src/services/resumeService.ts` to use the raw Clerk `userId` directly, instead of a derived UUID, for Supabase operations. This ensures compatibility with Supabase's Row-Level Security (RLS) policies, assuming the `user_id` column in `user_resumes` is of type `TEXT`.
- Noted that the Clerk deprecation warning "req.auth is deprecated" persists, but the code already uses `req.auth()` as recommended. This warning is likely due to an older Clerk SDK version or middleware configuration, which is outside the scope of this specific fix.

## [1.0.19] - 2025-06-10

### Fixed
- Ensured file selection dialog opens correctly in `ResumeInput.tsx` by adding an explicit `onClick` handler to the upload area `div` to trigger the hidden file input. Resolved a compilation error (`Unexpected token`) by removing an invalid JSX comment within the `onClick` attribute. Also, reordered the hidden file input to appear after the visible content within the upload area.

## [1.0.18] - 2025-06-10

### Fixed
- Resolved "invalid input syntax for type uuid" error in `resumeService.ts` by generating a consistent UUID from the Clerk `userId` using `uuidv5` before interacting with Supabase, ensuring compatibility with the `user_id` column type.
- Addressed Clerk deprecation warning by updating `req.auth` to `req.auth()` in `resumeService.ts` and augmenting the `express.Request` type definition to reflect `auth` as a function.

## [1.0.17] - 2025-06-09

### Fixed
- Prevented resume input box from clearing automatically on paste by adding a condition to the `useEffect` that fetches saved resumes, ensuring content is not cleared if in paste mode and content is present.
- Simplified file upload interaction in `ResumeInput.tsx` by removing redundant `onClick` and `onKeyDown` handlers from the parent `div`. The hidden `input type="file"` now directly handles clicks, which is the intended and standard behavior for triggering the file selection dialog.

## [1.0.16] - 2025-06-09

### Fixed
- Removed double border from the UserButton component in `adapt2job-frontend/src/OptimizerPage.tsx` by adding `border: none !important;` to `.clerk-buttons-container .cl-userButtonBox` in `adapt2job-frontend/src/App.css`.


## [1.0.15] - 2025-06-09

### Changed
- Integrated frontend `ResumeInput.tsx` with backend API for frequently used resumes. Implemented fetching and saving logic based on toggle state. Fixed issue where 'Upload File' button was unresponsive when toggle was enabled. Corrected usage of resume 'title' instead of 'name' in frontend display.


## [1.0.12] - 2025-06-08

### Added
- Implemented UI for the frequently used resume feature in `ResumeInput.tsx`. Added a toggle switch to enable/disable resume storage and conditional rendering to show either the file upload/paste area or a dropdown to select from saved resumes.

## [1.0.14] - 2025-06-08

### Fixed
- Corrected the behavior of the "上传新简历" (Upload New Resume) button in `ResumeInput.tsx`. When the "保存常用简历" (Save Common Resumes) toggle is enabled, clicking "上传新简历" now correctly displays the file upload/paste area.

## [1.0.13] - 2025-06-08

### Changed
- Refactored backend resume routes: Extracted core logic from `adapt2job-backend/src/routes/resumes.ts` into a new service file (`adapt2job-backend/src/services/resumeService.ts`) for better organization and maintainability. Updated the route file to use the new service functions and corrected Clerk middleware import. Renamed the router exported from `adapt2job-backend/src/routes/resumes.ts` to `userResumesRouter` and updated its import in `adapt2job-backend/src/app.ts` for clarity.

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

## [1.0.7] - 2025-06-07

### Changed
- Updated all `lastmod` dates in `public/sitemap.xml` to the current date to ensure accuracy for search engine crawlers.

## [1.0.9] - 2025-06-07

### Changed
- Translated user testimonials in `adapt2job-frontend/landing_pages/en/components/Testimonials.jsx` from Chinese to English, using colloquial expressions.

## [1.0.8] - 2025-06-07

### Changed
- Updated user testimonials in `adapt2job-frontend/landing_pages/en/components/Testimonials.jsx` to reflect resume optimization benefits and user success stories.

## [1.0.7] - 2025-06-07

### Changed
- Updated all `lastmod` dates in `public/sitemap.xml` to the current date to ensure accuracy for search engine crawlers.

## [1.0.10] - 2025-06-07

### Added
- Created a new blog post "How to Create a Great Resume: Your Definitive Guide to Career Advancement" (`how-to-create-a-great-resume.html`) in `adapt2job-frontend/landing_pages/en/blog/`, based on competitor analysis, exceeding 2000 words, and incorporating internal links to `https://www.resumeoptimizer.click`.
- Linked the new blog post from `adapt2job-frontend/landing_pages/en/blog/blogIndex.html`.

## [1.0.11] - 2025-06-08

### Added
- Implemented user feedback functionality on the Optimizer page. Signed-in users can now submit text-based feedback which is stored in a Supabase database and associated with their user ID. A toggleable feedback form is available at the bottom of the page.

## [1.0.6] - 2025-06-07

### Fixed
- Moved blog image assets from `adapt2job-frontend/landing_pages/en/blog/image/` to `adapt2job-frontend/public/image/` and updated image paths in `adapt2job-frontend/landing_pages/en/blog/blogIndex.html` to `/image/...`.
- Added a specific rewrite rule in `vercel.json` (`"source": "/image/(.*)", "destination": "/adapt2job-frontend/image/$1"`) to ensure images from the `public` directory are correctly served on Vercel deployments, resolving persistent image display issues.
