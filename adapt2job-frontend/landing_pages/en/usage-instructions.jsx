import React from 'react';

const UsageInstructions = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">How to Use the Job Input Section</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Project Introduction</h2>
        <p className="text-lg text-gray-700">
          The ResumeOptimizer tool helps job seekers quickly and effectively adjust their resume content to better match the requirements of specific positions, thereby increasing their job application success rate. Users can input their resume and the description of the target position, and the application will analyze both and provide optimization suggestions and a revised resume version.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Job Input Functionality</h2>
        <p className="text-lg text-gray-700 mb-4">
          The application provides a dedicated section for users to input the target job description. This section offers flexibility by supporting two primary methods for providing job details:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">1. Paste Job Description</h3>
            <p className="text-gray-700 mb-3">
              Users can directly paste the text content of the job description into a dedicated text area.
            </p>
            <p className="text-gray-700 mb-3">
              <strong>Usage:</strong> This method is suitable when the job description is available as plain text, such as from an email, document, or copied directly from a website.
            </p>
            <p className="text-gray-700">
              <strong>Features:</strong>
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4">
              <li>A large text area is provided for easy pasting of potentially lengthy job descriptions.</li>
              <li>Clear instructions and a placeholder guide the user.</li>
            </ul>
          </div>

          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">2. Provide Job Link</h3>
            <p className="text-gray-700 mb-3">
              Users can provide a URL to the online job posting. The application will then attempt to fetch and process the job description from the provided link.
            </p>
            <p className="text-gray-700 mb-3">
              <strong>Usage:</strong> This method is convenient when the job description is hosted on a public webpage.
            </p>
            <p className="text-gray-700">
              <strong>Features:</strong>
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4">
              <li>An input field is available for entering the job URL.</li>
              <li>The application indicates when it is actively fetching the job description from the link (loading state).</li>
              <li>Error messages are displayed if fetching the job description from the link fails.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8 p-6 bg-gray-50 rounded-lg shadow-sm">
        <h3 className="text-xl font-bold mb-3">Switching Input Methods</h3>
        <p className="text-gray-700">
          Users can easily switch between the "Paste Job Description" and "Provide Job Link" methods using intuitive tab buttons. The active method is clearly highlighted.
        </p>
      </section>

      <section className="p-6 bg-gray-50 rounded-lg shadow-sm">
        <h3 className="text-xl font-bold mb-3">Loading and Error Handling</h3>
        <p className="text-gray-700">
          The Job Input section visually indicates when the application is processing a job link (loading state). Relevant error messages are displayed directly within this section if there are issues with fetching or processing the job description, providing immediate feedback to the user.
        </p>
      </section>
    </div>
  );
};

export default UsageInstructions;
