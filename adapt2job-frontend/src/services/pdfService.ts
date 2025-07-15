import * as pdfjsLib from 'pdfjs-dist';

// 设置 workerSrc，需要根据实际情况调整路径
// 在 create-react-app 或 Vite 项目中，可能需要不同的配置方式
// 例如: pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;
// 或者将 pdf.worker.min.js 复制到 public 目录并在 Vite 配置中处理
// 这里暂时使用一个占位符，实际部署时需要确保 worker 可访问
pdfjsLib.GlobalWorkerOptions.workerSrc = '/libs/pdf.worker.min.js';


interface PDFProcessResult {
  isScanned: boolean;
  images?: string[]; // Data URLs of the rendered pages
  text?: string; // Text content if not scanned
}

/**
 * 检查PDF是否为扫描版，并根据需要转换为图片
 * @param file PDF文件
 * @returns 包含是否为扫描版和（如果扫描版）图片数据的对象
 */
export const checkAndProcessPDF = async (file: File): Promise<PDFProcessResult> => {
  const fileReader = new FileReader();

  return new Promise((resolve, reject) => {
    fileReader.onload = async () => {
      const typedarray = new Uint8Array(fileReader.result as ArrayBuffer);

      try {
        const loadingTask = pdfjsLib.getDocument(typedarray);
        const pdf = await loadingTask.promise;

        let hasText = false;
        const images: string[] = [];
        const textContent: string[] = [];

        // 遍历每一页
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const textLayer = await page.getTextContent();

          if (textLayer.items.length > 0) {
            hasText = true;
            // 提取文本内容
            const pageText = textLayer.items.map((item: any) => item.str).join(' ');
            textContent.push(pageText);
          } else {
            // 如果页面没有文本层，可能是扫描页，将其渲染为图片
            const viewport = page.getViewport({ scale: 2 }); // 可以调整 scale
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            if (!context) {
              throw new Error('Could not get canvas context');
            }
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            const renderContext = {
              canvasContext: context,
              viewport: viewport,
            };
            await page.render(renderContext).promise;
            images.push(canvas.toDataURL('image/png')); // 将页面转换为 PNG Data URL
          }
        }

        if (!hasText && images.length > 0) {
          // 如果所有页面都没有文本层，且成功渲染了图片，认为是扫描版
          resolve({ isScanned: true, images });
        } else {
          // 否则，认为是普通PDF，返回提取的文本内容
          resolve({ isScanned: false, text: textContent.join('\n') });
        }

      } catch (error) {
        console.error('Error processing PDF:', error);
        reject(error);
      }
    };

    fileReader.onerror = (error) => {
      reject(error);
    };

    fileReader.readAsArrayBuffer(file);
  });
};
