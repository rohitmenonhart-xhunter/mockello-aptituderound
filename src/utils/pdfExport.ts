import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { TestResult } from '../types';

export const exportResultsToPDF = async (results: TestResult) => {
  const element = document.getElementById('results-container');
  if (!element) return;

  try {
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL('image/png');
    
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'px',
      format: [canvas.width, canvas.height]
    });

    pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
    pdf.save('test-results.pdf');
  } catch (error) {
    console.error('PDF generation failed:', error);
  }
};