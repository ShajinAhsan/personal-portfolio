import type { Metadata } from "next";
import AnimationPauser from "@/components/AnimationPauser";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Now from "@/components/Now";
import Work from "@/components/Work";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <div id="top" className="min-h-dvh w-full overflow-x-clip">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-full focus:bg-(--text) focus:px-4 focus:py-2 focus:text-(--bg)"
      >
        Skip to main content
      </a>
      <AnimationPauser />
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Education />
        <Work />
        <Now />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
