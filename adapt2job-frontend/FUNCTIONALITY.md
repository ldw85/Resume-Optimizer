# Website Functionality Description

This document describes the core functionality of the ResumeOptimizer frontend application.

## Project Introduction

This tool aims to help job seekers quickly and effectively adjust their resume content to better match the requirements of specific positions, thereby increasing their job application success rate. Users can input their resume and the description of the target position, and the application will analyze both and provide optimization suggestions and a revised resume version. The application also includes multi-language landing pages.


## Job Input Functionality

The application provides a dedicated section for users to input the target job description. This section offers flexibility by supporting two primary methods for providing job details:

### 1. Paste Job Description

- **Description:** Users can directly paste the text content of the job description into a dedicated text area.
- **Usage:** This method is suitable when the job description is available as plain text, such as from an email, document, or copied directly from a website.
- **Features:**
    - A large text area is provided for easy pasting of potentially lengthy job descriptions.
    - Clear instructions and a placeholder guide the user.

### 2. Provide Job Link

- **Description:** Users can provide a URL to the online job posting. The application will then attempt to fetch and process the job description from the provided link by calling the backend API.
- **Usage:** This method is convenient when the job description is hosted on a public webpage.
- **Features:**
    - An input field is available for entering the job URL.
    - The application indicates when it is actively fetching the job description from the link (loading state).
    - Error messages are displayed if fetching the job description from the link fails.

### Switching Input Methods

- Users can easily switch between the "Paste Job Description" and "Provide Job Link" methods using intuitive tab buttons. The active method is clearly highlighted.

### Loading and Error Handling

- The Job Input section visually indicates when the application is processing a job link (loading state).
- Relevant error messages are displayed directly within this section if there are issues with fetching or processing the job description, providing immediate feedback to the user.

## Backend Interaction

The frontend application interacts with a dedicated backend service for certain functionalities, including:

- **Resume Parsing:** When a user uploads a resume file (PDF, DOCX), the frontend sends it to the backend's `/api/parse-resume` endpoint for text extraction.
- **LLM Analysis:** For resume optimization and analysis, the frontend sends the resume text and job description to the backend's `/api/analyze-resume` endpoint, which then interacts with large language models (LLMs).
- **URL Content Fetching:** When a user provides a job link, the frontend sends the URL to the backend's `/api/fetch-url-content` endpoint, which securely fetches and processes the content from the external URL.

This separation allows the frontend to focus on user interface and experience, while the backend handles complex processing, external API integrations, and data security.

## Multi-language Landing Pages and Additional Content

- Added "返回首页" button translation to Optimizer Page.
- Translated the content of `adapt2job-frontend/public/llms-full.txt` to English.

The application provides landing pages in multiple languages to cater to a global audience. These pages introduce the ResumeOptimizer tool and guide users to the main optimization page.

### Supported Languages

- English (`/en`)
- Spanish (`/es`)
- Japanese (`/ja`)
- Chinese (`/zh`)
- German (`/de`)

### Additional Pages per Language

For each supported language, the following informational pages are available:

- Usage Instructions (`/:lang/usage-instructions`)
- Frequently Asked Questions (FAQ) (`/:lang/faq`)
- Contact Us (`/:lang/contact-us`)
- Privacy Policy (`/:lang/privacy-policy`)
- Terms of Service (`/:lang/terms-of-service`)

These pages provide detailed information and support for users in their preferred language.

### Multi-Language Landing Page Links in Footer

The English landing page now includes links in the footer to the landing pages of other supported languages. This allows users to easily navigate to the content in their preferred language.
