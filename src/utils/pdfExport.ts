import { jsPDF } from 'jspdf';
import { CulturalBusinessProposal } from '../types';

export const exportProposalToPdf = (proposal: CulturalBusinessProposal) => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 18;
  const contentWidth = pageWidth - margin * 2;
  let y = 18;

  const checkPageBreak = (neededHeight: number) => {
    if (y + neededHeight > pageHeight - margin - 15) {
      doc.addPage();
      y = 18;
    }
  };

  // Header Bar — Verde Territorial
  doc.setFillColor(105, 130, 106); // #69826a
  doc.rect(margin, y, contentWidth, 1.5, 'F');
  y += 6;

  // Eyebrow
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(105, 130, 106); // Verde Territorial
  doc.text('PLIEGO DE TALLER · METODOLOGÍA DE ECONOMÍA TERRITORIAL', margin, y);

  doc.setFont('helvetica', 'normal');
  doc.setTextColor(120, 110, 100);
  doc.text('DOC: VEI-4S', pageWidth - margin, y, { align: 'right' });
  y += 7;

  // Title
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(34, 34, 34); // #222222
  const title = proposal.businessName.trim() || 'Emprendimiento con Identidad Cultural';
  const titleLines = doc.splitTextToSize(title, contentWidth);
  doc.text(titleLines, margin, y);
  y += titleLines.length * 8 + 2;

  // Metadata strip
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(85, 85, 85); // #555555

  const metaParts = [
    `Identidad: ${proposal.culturalIdentity || 'Sin definir'}`,
    `Rubro: ${proposal.sector || 'Sin definir'}`,
    `Territorio: ${proposal.territory || 'Sin definir'}`
  ].join('   |   ');

  doc.text(metaParts, margin, y);
  y += 5;

  doc.setDrawColor(217, 198, 165); // #d9c6a5
  doc.setLineWidth(0.4);
  doc.line(margin, y, pageWidth - margin, y);
  y += 8;

  // Propuesta de Valor Box
  checkPageBreak(30);
  doc.setFillColor(251, 249, 245); // #FBF9F5
  doc.roundedRect(margin, y, contentWidth, 24, 3, 3, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(105, 130, 106); // Verde Territorial
  doc.text('DECLARACIÓN DE PROPUESTA DE VALOR CULTURAL', margin + 4, y + 6);

  doc.setFont('helvetica', 'italic');
  doc.setFontSize(10.5);
  doc.setTextColor(34, 34, 34);
  const manifestoQuote = `"Creamos ${(proposal.sector || 'propuestas con propósito').toLowerCase()} que honran la raíz de nuestra ${proposal.culturalIdentity || 'identidad ancestral'}, al servicio de personas conscientes que buscan autenticidad, calidad y respeto territorial."`;
  const quoteLines = doc.splitTextToSize(manifestoQuote, contentWidth - 8);
  doc.text(quoteLines, margin + 4, y + 13);
  y += 30;

  // Section 01: Las 4S Innegociables
  checkPageBreak(20);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(34, 34, 34);
  doc.text('01 / LOS PILARES INNEGOCIABLES (LAS 4S)', margin, y);
  y += 2;
  doc.setDrawColor(105, 130, 106); // Verde Territorial
  doc.setLineWidth(0.8);
  doc.line(margin, y, margin + 40, y);
  y += 6;

  const pillars = [
    {
      label: 'Saludable (Küme Felen)',
      content: proposal.saludableAnswer || 'Pendiente de definir.',
      badgeColor: [105, 130, 106] as [number, number, number], // Verde Territorial
      bgColor: [241, 245, 241] as [number, number, number]
    },
    {
      label: 'Sustentable (Yamawun Itrofil Mongen)',
      content: proposal.sustentableAnswer || 'Pendiente de definir.',
      badgeColor: [79, 102, 80] as [number, number, number], // Verde Bosque
      bgColor: [237, 243, 238] as [number, number, number]
    },
    {
      label: 'Simbólico (Tüwün Küpalme, Kimün)',
      content: proposal.simbolicoAnswer || 'Pendiente de definir.',
      badgeColor: [138, 115, 82] as [number, number, number], // Beige oscuro
      bgColor: [249, 244, 237] as [number, number, number]
    },
    {
      label: 'Con Sentido (Fellentun, Wiñokintungetual)',
      content: proposal.sentidoAnswer || 'Pendiente de definir.',
      badgeColor: [34, 34, 34] as [number, number, number], // Negro Carbón
      bgColor: [245, 245, 245] as [number, number, number]
    }
  ];

  pillars.forEach((p) => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9.5);
    const textLines = doc.splitTextToSize(p.content, contentWidth - 10);
    const boxHeight = Math.max(14, textLines.length * 4.5 + 8);

    checkPageBreak(boxHeight + 4);

    // Left colored accent border
    doc.setFillColor(...p.bgColor);
    doc.roundedRect(margin, y, contentWidth, boxHeight, 2, 2, 'F');
    doc.setFillColor(...p.badgeColor);
    doc.rect(margin, y, 2.5, boxHeight, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(...p.badgeColor);
    doc.text(p.label, margin + 6, y + 5);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(85, 85, 85);
    doc.text(textLines, margin + 6, y + 10);

    y += boxHeight + 3.5;
  });

  y += 4;

  // Section 02: Ciclo V.E.I.
  checkPageBreak(25);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(34, 34, 34);
  doc.text('02 / ACTIVACIÓN ESTRATÉGICA (CICLO V.E.I.)', margin, y);
  y += 2;
  doc.setDrawColor(217, 198, 165); // Beige Arcilla
  doc.setLineWidth(0.8);
  doc.line(margin, y, margin + 40, y);
  y += 6;

  const veiSteps = [
    {
      title: '(I) Identidad — ¿Quiénes somos?',
      content: proposal.identidadAnswer || 'Pendiente de formulación.',
      accent: [105, 130, 106] as [number, number, number] // Verde Territorial
    },
    {
      title: '(E) Empoderamiento — ¿Cómo nos fortalecemos?',
      content: proposal.empoderamientoAnswer || 'Pendiente de formulación.',
      accent: [217, 198, 165] as [number, number, number] // Beige Arcilla
    },
    {
      title: '(V) Valoración — ¿Cómo nos mostramos al mundo?',
      content: proposal.valoracionAnswer || 'Pendiente de formulación.',
      accent: [34, 34, 34] as [number, number, number] // Negro Carbón
    }
  ];

  veiSteps.forEach((step) => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    const textLines = doc.splitTextToSize(step.content, contentWidth - 10);
    const stepHeight = textLines.length * 4.5 + 7;

    checkPageBreak(stepHeight + 4);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(...step.accent);
    doc.text(step.title, margin + 4, y + 4);

    doc.setDrawColor(...step.accent);
    doc.setLineWidth(0.6);
    doc.line(margin, y, margin, y + stepHeight);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(85, 85, 85);
    doc.text(textLines, margin + 4, y + 9);

    y += stepHeight + 3;
  });

  // Footer / Attribution on all pages
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    const footerY = pageHeight - 10;
    
    doc.setDrawColor(217, 198, 165); // Beige Arcilla
    doc.setLineWidth(0.3);
    doc.line(margin, footerY - 3, pageWidth - margin, footerY - 3);

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(7.5);
    doc.setTextColor(110, 98, 88);
    doc.text(
      'Las metodologías mostradas en esta web fueron creadas y diseñadas por Juan Huincabal y Mijail Painecura.',
      margin,
      footerY
    );

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.text(`Página ${i} de ${totalPages}`, pageWidth - margin, footerY, { align: 'right' });
  }

  // Generate file name and trigger clean download
  const cleanName = (proposal.businessName || 'Emprendimiento')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');

  doc.save(`Pliego_VEI_4S_${cleanName || 'Propuesta'}.pdf`);
};
