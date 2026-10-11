/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FourSPillarsSection } from './components/FourSPillarsSection';
import { VeiCycleSection } from './components/VeiCycleSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { CanvasBuilder } from './components/CanvasBuilder';
import { GlossarySection } from './components/GlossarySection';
import { ConclusionManifesto } from './components/ConclusionManifesto';
import { Footer } from './components/Footer';
import { CulturalBusinessProposal } from './types';
import { INITIAL_PROPOSAL_TEMPLATE } from './data/initialData';

export default function App() {
  const [proposal, setProposal] = useState<CulturalBusinessProposal>(INITIAL_PROPOSAL_TEMPLATE);

  const scrollTo = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenCanvas = () => {
    scrollTo('lienzo');
  };

  const handleResetProposal = () => {
    setProposal({
      businessName: '',
      culturalIdentity: '',
      sector: '',
      territory: '',
      saludableAnswer: '',
      sustentableAnswer: '',
      simbolicoAnswer: '',
      sentidoAnswer: '',
      identidadAnswer: '',
      empoderamientoAnswer: '',
      valoracionAnswer: ''
    });
  };

  const handleLoadCase = (caseProposal: CulturalBusinessProposal) => {
    setProposal(caseProposal);
    scrollTo('lienzo');
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#222222] flex flex-col font-sans selection:bg-[#69826a] selection:text-white">
      <Header 
        onNavigate={scrollTo} 
        onOpenCanvas={handleOpenCanvas} 
      />

      <main className="flex-1">
        <HeroSection 
          onExplore4S={() => scrollTo('fundamento-4s')} 
          onOpenCanvas={handleOpenCanvas} 
        />

        <FourSPillarsSection />

        <VeiCycleSection />

        <CaseStudiesSection 
          onLoadCaseIntoCanvas={handleLoadCase} 
        />

        <CanvasBuilder 
          proposal={proposal} 
          onChange={setProposal} 
          onReset={handleResetProposal} 
        />

        <GlossarySection />

        <ConclusionManifesto 
          onOpenCanvas={handleOpenCanvas} 
        />
      </main>

      <Footer onNavigate={scrollTo} />
    </div>
  );
}
