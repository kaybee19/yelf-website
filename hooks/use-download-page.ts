import { extractMainContent } from "@/lib/utils"

export const useDownloadPage = () => {
  const downloadPageContent = async (title: string, filename: string) => {
    try {
      // Extract main content excluding navbar, footer, and CTA sections
      const mainContent = extractMainContent()
      
      if (!mainContent) {
        console.error("Could not extract main content")
        return
      }

      // Create clean HTML document
      const htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${title}</title>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 800px;
              margin: 0 auto;
              padding: 20px;
            }
            h1, h2, h3, h4, h5, h6 {
              color: #1f2937;
              margin-top: 1.5em;
              margin-bottom: 0.5em;
            }
            h1 { font-size: 2.5em; }
            h2 { font-size: 2em; }
            h3 { font-size: 1.5em; }
            p { margin-bottom: 1em; }
            ul, ol { margin-bottom: 1em; padding-left: 2em; }
            li { margin-bottom: 0.5em; }
            .section-padding { padding: 2em 0; }
            .container-max { max-width: 1200px; margin: 0 auto; padding: 0 1rem; }
            .bg-gray-50 { background-color: #f9fafb; }
            .text-center { text-align: center; }
            .grid { display: block; }
            .card { border: 1px solid #e5e7eb; border-radius: 8px; padding: 1.5rem; margin-bottom: 1.5rem; }
            .bg-yellow-600 { background-color: #d97706; color: white; padding: 1rem; border-radius: 8px; }
            .bg-primary-900 { background-color: #1e40af; color: white; padding: 1rem; border-radius: 8px; }
            .bg-emerald-600 { background-color: #059669; color: white; padding: 1rem; border-radius: 8px; }
            .rounded-2xl { border-radius: 16px; }
            .shadow-lg { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); }
            img { max-width: 100%; height: auto; border-radius: 8px; margin: 1rem 0; }
            .flex { display: block; }
            .items-center { vertical-align: middle; }
            .space-y-4 > * + * { margin-top: 1rem; }
            .space-y-6 > * + * { margin-top: 1.5rem; }
            .space-y-8 > * + * { margin-top: 2rem; }
            .mb-6 { margin-bottom: 1.5rem; }
            .mb-8 { margin-bottom: 2rem; }
            .mb-16 { margin-bottom: 4rem; }
            .p-6 { padding: 1.5rem; }
            .p-8 { padding: 2rem; }
            .text-lg { font-size: 1.125rem; }
            .text-xl { font-size: 1.25rem; }
            .text-2xl { font-size: 1.5rem; }
            .text-3xl { font-size: 1.875rem; }
            .text-4xl { font-size: 2.25rem; }
            .font-bold { font-weight: 700; }
            .font-semibold { font-weight: 600; }
            .text-gray-600 { color: #4b5563; }
            .text-gray-700 { color: #374151; }
            .text-gray-900 { color: #111827; }
            .text-yellow-100 { color: #fef3c7; }
            .text-primary-100 { color: #dbeafe; }
            .text-emerald-100 { color: #d1fae5; }
            .bg-yellow-50 { background-color: #fffbeb; padding: 1rem; border-radius: 8px; }
            .bg-primary-50 { background-color: #eff6ff; padding: 1rem; border-radius: 8px; }
            .bg-emerald-50 { background-color: #ecfdf5; padding: 1rem; border-radius: 8px; }
            .text-yellow-900 { color: #78350f; }
            .text-primary-900 { color: #1e3a8a; }
            .text-emerald-900 { color: #064e3b; }
            .text-yellow-800 { color: #92400e; }
            .text-primary-800 { color: #1e40af; }
            .text-emerald-800 { color: #065f46; }
            .w-1.5 { width: 0.375rem; }
            .h-1.5 { height: 0.375rem; }
            .bg-yellow-500 { background-color: #eab308; }
            .bg-primary-500 { background-color: #3b82f6; }
            .bg-emerald-500 { background-color: #10b981; }
            .bg-green-500 { background-color: #22c55e; }
            .bg-red-500 { background-color: #ef4444; }
            .rounded-full { border-radius: 9999px; }
            .mt-2 { margin-top: 0.5rem; }
            .mr-3 { margin-right: 0.75rem; }
            .flex-shrink-0 { flex-shrink: 0; }
            .inline-block { display: inline-block; }
            .w-6 { width: 1.5rem; }
            .h-6 { height: 1.5rem; }
            .bg-yellow-100 { background-color: #fef3c7; }
            .bg-primary-100 { background-color: #dbeafe; }
            .bg-emerald-100 { background-color: #d1fae5; }
            .rounded-full { border-radius: 9999px; }
            .flex { display: flex; }
            .items-center { align-items: center; }
            .justify-center { justify-content: center; }
            .mt-1 { margin-top: 0.25rem; }
            .mr-4 { margin-right: 1rem; }
            .w-2 { width: 0.5rem; }
            .h-2 { height: 0.5rem; }
            .bg-yellow-600 { background-color: #d97706; }
            .bg-primary-600 { background-color: #2563eb; }
            .bg-emerald-600 { background-color: #059669; }
            .rounded-full { border-radius: 9999px; }
            @media print {
              body { margin: 0; padding: 20px; }
              .section-padding { padding: 1em 0; }
              .mb-16 { margin-bottom: 2rem; }
              .p-8 { padding: 1rem; }
              .p-6 { padding: 0.75rem; }
            }
          </style>
        </head>
        <body>
          ${mainContent}
        </body>
        </html>
      `;

      // Open in new tab and trigger print
      const newWindow = window.open('', '_blank');
      if (newWindow) {
        newWindow.document.write(htmlContent);
        newWindow.document.close();
        
        // Wait for content to load, then trigger print
        newWindow.onload = () => {
          setTimeout(() => {
            newWindow.print();
          }, 500);
        };
      } else {
        console.error("Popup blocked. Please allow popups for this site.");
        alert("Please allow popups for this site to download the content.");
      }
    } catch (error) {
      console.error("Error downloading content:", error);
    }
  };

  return { downloadPageContent };
}; 