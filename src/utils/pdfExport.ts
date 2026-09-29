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

  // Header Bar
  doc.setFillColor(36, 30, 26); // Dark Earth #241E1A
  doc.rect(margin, y, contentWidth, 1.5, 'F');
  y += 6;

  // Eyebrow
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(150, 61, 36); // Terracotta
  doc.text('PLIEGO DE TALLER · METODOLOGÍA DE ECONOMÍA TERRITORIAL', margin, y);

  doc.setFont('helvetica', 'normal');
  doc.setTextColor(120, 110, 100);
  doc.text('DOC: VEI-4S', pageWidth - margin, y, { align: 'right' });
  y += 7;

  // Title
  doc.setFont('times', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(36, 30, 26);
  const title = proposal.businessName.trim() || 'Emprendimiento con Identidad Cultural';
  const titleLines = doc.splitTextToSize(title, contentWidth);
  doc.text(titleLines, margin, y);
  y += titleLines.length * 8 + 2;

  // Metadata strip
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(80, 70, 60);

  const metaParts = [
    `Identidad: ${proposal.culturalIdentity || 'Sin definir'}`,
    `Rubro: ${proposal.sector || 'Sin definir'}`,
    `Territorio: ${proposal.territory || 'Sin definir'}`
  ].join('   |   ');

  doc.text(metaParts, margin, y);
  y += 5;

  doc.setDrawColor(210, 200, 185);
  doc.setLineWidth(0.4);
  doc.line(margin, y, pageWidth - margin, y);
  y += 8;

  // Propuesta de Valor Box
  checkPageBreak(30);
  doc.setFillColor(246, 243, 236); // Light paper tint
  doc.roundedRect(margin, y, contentWidth, 24, 1.5, 1.5, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(150, 61, 36);
  doc.text('DECLARACIÓN DE PROPUESTA DE VALOR CULTURAL', margin + 4, y + 6);

  doc.setFont('times', 'italic');
  doc.setFontSize(10.5);
  doc.setTextColor(36, 30, 26);
  const manifestoQuote = `"Creamos ${(proposal.sector || 'propuestas con propósito').toLowerCase()} que honran la raíz de nuestra ${proposal.culturalIdentity || 'identidad ancestral'}, al servicio de personas conscientes que buscan autenticidad, calidad y respeto territorial."`;
  const quoteLines = doc.splitTextToSize(manifestoQuote, contentWidth - 8);
  doc.text(quoteLines, margin + 4, y + 13);
  y += 30;

  // Section 01: Las 4S Innegociables
  checkPageBreak(20);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(36, 30, 26);
  doc.text('01 / LOS PILARES INNEGOCIABLES (LAS 4S)', margin, y);
  y += 2;
  doc.setDrawColor(150, 61, 36);
  doc.setLineWidth(0.8);
  doc.line(margin, y, margin + 40, y);
  y += 6;

  const pillars = [
    {
      label: 'Saludable (Küme Felen)',
      content: proposal.saludableAnswer || 'Pendiente de definir.',
      badgeColor: [35, 88, 62] as [number, number, number],
      bgColor: [235, 243, 238] as [number, number, number]
    },
    {
      label: 'Sustentable (Yamawun Itrofil Mongen)',
      content: proposal.sustentableAnswer || 'Pendiente de definir.',
      badgeColor: [27, 67, 44] as [number, number, number],
      bgColor: [227, 238, 231] as [number, number, number]
    },
    {
      label: 'Simbólico (Tüwün Küpalme, Kimün)',
      content: proposal.simbolicoAnswer || 'Pendiente de definir.',
      badgeColor: [150, 61, 36] as [number, number, number],
      bgColor: [249, 236, 231] as [number, number, number]
    },
    {
      label: 'Con Sentido (Fellentun, Wiñokintungetual)',
      content: proposal.sentidoAnswer || 'Pendiente de definir.',
      badgeColor: [184, 107, 24] as [number, number, number],
      bgColor: [250, 243, 231] as [number, number, number]
    }
  ];

  pillars.forEach((p) => {
    doc.setFont('times', 'normal');
    doc.setFontSize(9.5);
    const textLines = doc.splitTextToSize(p.content, contentWidth - 10);
    const boxHeight = Math.max(14, textLines.length * 4.5 + 8);

    checkPageBreak(boxHeight + 4);

    // Left colored accent border
    doc.setFillColor(...p.bgColor);
    doc.roundedRect(margin, y, contentWidth, boxHeight, 1, 1, 'F');
    doc.setFillColor(...p.badgeColor);
    doc.rect(margin, y, 2.5, boxHeight, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(...p.badgeColor);
    doc.text(p.label, margin + 6, y + 5);

    doc.setFont('times', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(45, 38, 32);
    doc.text(textLines, margin + 6, y + 10);

    y += boxHeight + 3.5;
  });

  y += 4;

  // Section 02: Ciclo V.E.I.
  checkPageBreak(25);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(36, 30, 26);
  doc.text('02 / ACTIVACIÓN ESTRATÉGICA (CICLO V.E.I.)', margin, y);
  y += 2;
  doc.setDrawColor(184, 107, 24);
  doc.setLineWidth(0.8);
  doc.line(margin, y, margin + 40, y);
  y += 6;

  const veiSteps = [
    {
      title: '(I) Identidad — ¿Quiénes somos?',
      content: proposal.identidadAnswer || 'Pendiente de formulación.',
      accent: [36, 30, 26] as [number, number, number]
    },
    {
      title: '(E) Empoderamiento — ¿Cómo nos fortalecemos?',
      content: proposal.empoderamientoAnswer || 'Pendiente de formulación.',
      accent: [184, 107, 24] as [number, number, number]
    },
    {
      title: '(V) Valoración — ¿Cómo nos mostramos al mundo?',
      content: proposal.valoracionAnswer || 'Pendiente de formulación.',
      accent: [150, 61, 36] as [number, number, number]
    }
  ];

  veiSteps.forEach((step) => {
    doc.setFont('times', 'normal');
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

    doc.setFont('times', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(55, 48, 42);
    doc.text(textLines, margin + 4, y + 9);

    y += stepHeight + 3;
  });

  // Footer / Attribution on all pages
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    const footerY = pageHeight - 10;
    
    doc.setDrawColor(210, 200, 185);
    doc.setLineWidth(0.3);
    doc.line(margin, footerY - 3, pageWidth - margin, footerY - 3);

    doc.setFont('times', 'italic');
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
