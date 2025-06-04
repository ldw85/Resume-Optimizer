# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Initial project setup.
- Basic resume and job description input fields.
- Integration with backend for resume analysis.
- Language switching functionality (English, Chinese).
- Lazy loading for `AnalysisOutput` and `HowItWorks` components.
- Job link fetching functionality using Tavily API.
- Added Japanese and Spanish language options.

### Changed

- Refactored `App.tsx` into `OptimizerPage.tsx` for better modularity.
- Improved error handling and user feedback with `react-hot-toast`.
- Updated language detection logic to prioritize URL parameters, then local storage, then browser language.
- **Clerk Authentication Buttons**: Styled `SignInButton`, `SignUpButton`, and `UserButton` to be smaller and more compact on the Optimizer Page.
- **Button Styling**: Added a default gray background and hover effect to the "Optimize My Resume" button on the Optimizer Page.
- **LLM Fallback**: Implemented a fallback mechanism in `llmService.ts` to retry with DeepSeek API if Gemini API returns a 503 error.

### Fixed

- Resolved issues with resume input focusing and scrolling on error.
- Fixed `ENOENT` error during website access by clearing npm cache and reinstalling dependencies.

### Removed

- Removed `h-48` class from header div in `OptimizerPage.tsx`.
