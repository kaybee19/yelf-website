import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function extractMainContent(): string | null {
  try {
    // Get the main content element
    const mainElement = document.querySelector('main');
    if (!mainElement) {
      console.error("Main element not found");
      return null;
    }

    // Clone the main element to avoid modifying the original
    const clonedMain = mainElement.cloneNode(true) as HTMLElement;

    // Remove navbar, footer, and CTA sections
    const elementsToRemove = [
      'header',
      'nav',
      'footer',
      '[class*="cta"]',
      '[class*="call-to-action"]',
      '.scroll-to-top',
      'button[onclick*="download"]',
      'button:has([data-lucide="download"])'
    ];

    elementsToRemove.forEach(selector => {
      const elements = clonedMain.querySelectorAll(selector);
      elements.forEach(el => el.remove());
    });

    // Remove any remaining download buttons
    const downloadButtons = clonedMain.querySelectorAll('button');
    downloadButtons.forEach(button => {
      if (button.textContent?.toLowerCase().includes('download')) {
        button.remove();
      }
    });

    // Clean up any empty sections
    const sections = clonedMain.querySelectorAll('section');
    sections.forEach(section => {
      if (section.children.length === 0) {
        section.remove();
      }
    });

    return clonedMain.innerHTML;
  } catch (error) {
    console.error("Error extracting main content:", error);
    return null;
  }
}

export function generateDownloadableHTML(pageTitle: string, content: string): string {
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${pageTitle} - YELF Climate Trust Foundation</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body { 
            font-family: 'Inter', sans-serif; 
            line-height: 1.6;
            color: #333;
            background: white;
            padding: 20px;
        }
        
        .font-serif { font-family: 'Playfair Display', serif; }
        
        h1 { 
            font-size: 2.5rem; 
            margin-bottom: 1rem; 
            font-weight: 700;
            color: #1e3a8a;
        }
        
        h2 { 
            font-size: 2rem; 
            margin-bottom: 1rem; 
            font-weight: 600;
            color: #1e3a8a;
        }
        
        h3 { 
            font-size: 1.5rem; 
            margin-bottom: 0.5rem; 
            font-weight: 600;
            color: #374151;
        }
        
        p { 
            margin-bottom: 1rem; 
            line-height: 1.6; 
        }
        
        img { 
            max-width: 100%; 
            height: auto; 
            border-radius: 8px;
            margin: 1rem 0;
        }
        
        .grid { 
            display: grid; 
            gap: 1rem; 
        }
        
        .grid-cols-2 { 
            grid-template-columns: 1fr 1fr; 
        }
        
        .grid-cols-3 { 
            grid-template-columns: 1fr 1fr 1fr; 
        }
        
        .text-center { 
            text-align: center; 
        }
        
        .bg-gray-50 { 
            background-color: #f9fafb; 
            padding: 1rem;
            border-radius: 8px;
            margin: 1rem 0;
        }
        
        .bg-yellow-600 { 
            background-color: #d97706; 
            color: white;
            padding: 1rem;
            border-radius: 8px;
            margin: 1rem 0;
        }
        
        .bg-primary-900 { 
            background-color: #1e3a8a; 
            color: white;
            padding: 1rem;
            border-radius: 8px;
            margin: 1rem 0;
        }
        
        .text-white { color: white; }
        .text-gray-900 { color: #111827; }
        .text-gray-600 { color: #4b5563; }
        .text-yellow-100 { color: #fef3c7; }
        .text-primary-100 { color: #dbeafe; }
        
        .rounded-2xl { border-radius: 1rem; }
        .shadow-lg { 
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); 
            padding: 1rem;
            border-radius: 8px;
        }
        
        .mb-6 { margin-bottom: 1.5rem; }
        .mb-8 { margin-bottom: 2rem; }
        .p-8 { padding: 2rem; }
        
        .space-y-4 > * + * { margin-top: 1rem; }
        .space-y-6 > * + * { margin-top: 1.5rem; }
        .space-y-8 > * + * { margin-top: 2rem; }
        
        ul { 
            padding-left: 1.5rem; 
            margin: 1rem 0;
        }
        
        li { 
            margin-bottom: 0.5rem; 
        }
        
        .section-padding { 
            padding: 2rem 0; 
        }
        
        .container-max { 
            max-width: 100%; 
            margin: 0 auto; 
        }
        
        .hero-section {
            background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
            color: white;
            padding: 3rem 2rem;
            border-radius: 12px;
            margin-bottom: 2rem;
        }
        
        .card {
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            padding: 1.5rem;
            margin: 1rem 0;
            background: white;
        }
        
        .icon {
            width: 48px;
            height: 48px;
            background: #fef3c7;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1rem;
            color: #d97706;
            font-weight: bold;
        }
        
        @media print {
            body { padding: 0; }
            .section-padding { padding: 1rem 0; }
            .hero-section { break-inside: avoid; }
            .card { break-inside: avoid; }
        }
    </style>
</head>
<body>
    <div class="min-h-screen">
        ${content}
    </div>
</body>
</html>`
  
  return html
}

export async function downloadPDF(html: string, filename: string) {
  try {
    // For now, let's use the browser's print functionality as a fallback
    // This is more reliable than html2pdf.js
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(html);
      printWindow.document.close();
      
      // Wait for content to load
      printWindow.onload = () => {
        printWindow.print();
        printWindow.close();
      };
    } else {
      // Fallback to HTML download
      downloadHTML(html, filename);
    }
  } catch (error) {
    console.error('Error generating PDF:', error);
    downloadHTML(html, filename);
  }
}

export function downloadHTML(html: string, filename: string) {
  const blob = new Blob([html], { type: 'text/html' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}
