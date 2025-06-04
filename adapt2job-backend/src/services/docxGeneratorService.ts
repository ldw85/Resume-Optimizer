import htmlToDocx from 'html-to-docx';

export const generateDocxFromHtml = async (htmlContent: string): Promise<Buffer> => {
  try {
    const docxBuffer = await htmlToDocx(htmlContent, null, {
      font: 'Arial', // Set global font
      fontSize: 24,  // Set global font size to 12pt (24 HIP)
      // You can add other options here if needed
    });
    return Buffer.from(docxBuffer as ArrayBuffer);
  } catch (error: any) {
    console.error('Error generating DOCX from HTML:', error);
    throw new Error(`Failed to generate DOCX: ${error.message}`);
  }
};
