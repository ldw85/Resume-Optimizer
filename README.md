# ResumeOptimizer

ResumeOptimizer is a full-stack application designed to help users optimize their resumes for job applications. It leverages AI (Gemini, DeepSeek) for resume analysis and content generation, and integrates with Tavily for web content fetching. The application supports multiple languages and provides a seamless user experience for improving job application success.

## Features

*   **AI-Powered Resume Analysis:** Analyze your resume against job descriptions to receive tailored optimization suggestions and explanations.
*   **Resume Parsing:** Upload resumes in PDF or DOCX format for text extraction.
*   **Document Generation:** Generate optimized resumes in DOCX format with support for styling.
*   **Web Content Fetching:** Automatically fetch job descriptions or relevant content from provided URLs.
*   **Multi-language Support:** The frontend supports English, Chinese, Japanese, Spanish, and German.
*   **User Authentication:** Secure sign-in and sign-up powered by Clerk.
*   **Consistent UI/UX:** Streamlined interface with consistent button styling across the application.

## Getting Started

### Prerequisites

*   Node.js (v18 or higher recommended)
*   npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/ldw85/Adapt2Job.git
    cd Adapt2Job
    ```

2.  **Backend Setup:**
    *   Navigate to the backend directory: `cd adapt2job-backend`
    *   Install dependencies:
        ```bash
        npm install
        # or
        yarn install
        ```
    *   Create a `.env` file in the `adapt2job-backend` directory. Copy the contents of `.env.template` and fill in your API keys and Supabase credentials.
        ```bash
        cp .env.template .env
        # Then edit .env with your credentials
        ```

3.  **Frontend Setup:**
    *   Navigate to the frontend directory: `cd ../adapt2job-frontend`
    *   Install dependencies:
        ```bash
        npm install
        # or
        yarn install
        ```
    *   Create a `.env` file in the `adapt2job-frontend` directory. You will need to configure your Clerk keys and the backend API URL. Refer to `.env.example` in the frontend directory for guidance.

### Running the Application

1.  **Start the Backend:**
    *   Navigate to the backend directory: `cd ../adapt2job-backend`
    *   Run the start script:
        ```bash
        npm run start
        # or
        npm run dev
        ```

2.  **Start the Frontend:**
    *   Navigate to the frontend directory: `cd ../adapt2job-frontend`
    *   Run the development server:
        ```bash
        npm run dev
        # or
        yarn dev
        ```
    The frontend will typically start at `http://localhost:5173`.

## Project Structure

```
Adapt2Job/
├── adapt2job-backend/      # Backend services (Node.js, Express)
│   ├── src/                # Backend source code
│   ├── package.json        # Backend dependencies
│   ├── .env                # Backend environment variables (API keys, etc.)
│   └── ...
├── adapt2job-frontend/     # Frontend application (React, Vite)
│   ├── public/             # Static assets
│   ├── src/                # Frontend source code
│   ├── landing_pages/      # Multi-language landing pages
│   ├── package.json        # Frontend dependencies
│   ├── .env                # Frontend environment variables (Clerk keys, API URL)
│   └── ...
├── README.md               # Project overview (this file)
├── README_zh.md            # Project overview (Chinese version)
├── .env.template           # Template for environment variables
└── ...
```

## Technologies Used

*   **Backend:** Node.js, Express, TypeScript, Multer, PDF-parse, Mammoth, Gemini API, Tavily API, Supabase, Clerk API.
*   **Frontend:** React, Vite, Tailwind CSS, i18next, Clerk, Supabase SDK.

## Contributing

Contributions are welcome! Please refer to `adapt2job-frontend/CONTRIBUTING.md` for guidelines.

## License

This project is licensed under the MIT License.

## Deployed Application

You can access the live application here:
[https://www.resumeoptimizer.click](https://www.resumeoptimizer.click)
