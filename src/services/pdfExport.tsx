import { jsPDF } from 'jspdf';

export const exportItineraryToPDF = (itinerary: any, filename: string = 'travel-itinerary.pdf') => {
  const doc = new jsPDF();
  
  doc.setFontSize(20);
  doc.text('Your Travel Itinerary', 20, 20);
  
  doc.setFontSize(12);
  if (itinerary?.destination) {
    doc.text(`Destination: ${itinerary.destination}`, 20, 30);
  }
  
  let yPos = 45;
  
  if (itinerary?.days && Array.isArray(itinerary.days)) {
    itinerary.days.forEach((day: any) => {
      doc.setFontSize(14);
      doc.text(day.date || 'Day', 20, yPos);
      yPos += 10;
      
      doc.setFontSize(10);
      if (day.activities && Array.isArray(day.activities)) {
        day.activities.forEach((activity: any) => {
          doc.text(`• ${activity.time}: ${activity.title}`, 25, yPos);
          yPos += 8;
          
          if (yPos > 280) {
            doc.addPage();
            yPos = 20;
          }
        });
      }
      yPos += 6;
    });
  }
  doc.save(filename);
};