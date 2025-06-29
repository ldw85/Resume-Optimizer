import React, { useRef, useEffect, useState } from 'react';

const InteractiveReportWrapper = () => {
  const iframeRef = useRef(null);
  const [iframeHeight, setIframeHeight] = useState('800px'); // Initial height, will be adjusted

  const adjustIframeHeight = () => {
    if (iframeRef.current) {
      iframeRef.current.style.height = 'auto'; // Reset height to allow content to expand
      // Add a small delay to ensure all content (including Chart.js) has rendered
      setTimeout(() => {
        const newHeight = iframeRef.current.contentWindow.document.documentElement.scrollHeight;
        console.log('Calculated iframe scrollHeight:', newHeight); // Log the calculated height
        setIframeHeight(`${newHeight}px`);
      }, 500); // Increased delay to 500ms
    }
  };

  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.addEventListener('load', adjustIframeHeight);
      // Also adjust if window resizes, as content might reflow
      window.addEventListener('resize', adjustIframeHeight);
      // Initial adjustment in case content loads before useEffect's load listener
      adjustIframeHeight();
    }

    return () => {
      if (iframe) {
        iframe.removeEventListener('load', adjustIframeHeight);
      }
      window.removeEventListener('resize', adjustIframeHeight);
    };
  }, []);

  return (
    <div style={{ width: '100%', minHeight: '100vh' }}> {/* Ensure parent div is tall enough */}
      <iframe
        ref={iframeRef}
        src="/blog/Interactive-Report-AI-Resume-Optimization-Tools.html"
        title="Interactive Report: AI Resume Optimization Tools"
        width="100%"
        frameBorder="0"
        scrolling="no"
        style={{ display: 'block', height: iframeHeight }}
      ></iframe>
    </div>
  );
};

export default InteractiveReportWrapper;
