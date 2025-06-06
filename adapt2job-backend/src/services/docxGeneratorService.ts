import htmlToDocx from 'html-to-docx';

export const generateDocxFromHtml = async (htmlContent: string): Promise<Buffer> => {
  try {
    // Preprocess HTML to replace custom div-based horizontal rules with <hr> tags
    // This is more likely to be correctly interpreted by html-to-docx for horizontal lines.
    const preprocessedHtmlContent = htmlContent.replace(/<div style="border-bottom: 1px solid #ddd; margin-bottom: 20px;"><\/div>/g, '<hr style="border: none; border-bottom: 1px solid #ddd; margin-bottom: 20px;">');

    const docxBuffer = await htmlToDocx(preprocessedHtmlContent, null, {
      font: 'Calibri', // Set a good-looking and Word-recognizable English font
      fontSize: 24,  // Set global font size to 12pt (24 HIP)
      // html-to-docx might not fully support complex CSS properties like box-shadow or div borders for the entire document.
      // For the main div border and box-shadow, these are typically not directly transferable to DOCX via simple HTML conversion.
      // Advanced DOCX templating or custom styles might be required for full fidelity.
    });
    return Buffer.from(docxBuffer as ArrayBuffer);
  } catch (error: any) {
    console.error('Error generating DOCX from HTML:', error);
    throw new Error(`Failed to generate DOCX: ${error.message}`);
  }
};
