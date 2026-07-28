import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CvModal from "./components/CvModal";

const App: React.FC = () => {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  const handleOpenCvModal = () => setIsCvModalOpen(true);
  const handleCloseCvModal = () => setIsCvModalOpen(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-yellow-400/30 selection:text-yellow-200 relative font-sans">
      {/* Navigation */}
      <Navbar onOpenCvModal={handleOpenCvModal} />

      {/* Main Sections */}
      <main>
        <Hero onOpenCvModal={handleOpenCvModal} />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive CV Modal Viewer */}
      <CvModal isOpen={isCvModalOpen} onClose={handleCloseCvModal} />
    </div>
  );
};

export default App;
